const http = require("node:http");
const { readFile } = require("node:fs/promises");
const { extname, join } = require("node:path");

const root = __dirname;
const port = Number(process.env.PORT || 4173);
const host =
  process.env.HOST ||
  (process.env.RENDER || process.env.RAILWAY_ENVIRONMENT || process.env.FLY_APP_NAME
    ? "0.0.0.0"
    : "127.0.0.1");

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
};
const cache = new Map();
const cacheTtlMs = 10 * 60 * 1000;

const monthNames = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

function sendJson(res, status, body) {
  res.writeHead(status, {
    "access-control-allow-origin": "*",
    "content-type": mime[".json"],
  });
  res.end(JSON.stringify(body));
}

function isAuthorized(req) {
  const user = process.env.DASHBOARD_USER;
  const pass = process.env.DASHBOARD_PASSWORD;

  if (!user || !pass) return true;

  const header = req.headers.authorization || "";
  if (!header.startsWith("Basic ")) return false;

  const [givenUser, givenPass] = Buffer.from(header.slice(6), "base64")
    .toString("utf8")
    .split(":");

  return givenUser === user && givenPass === pass;
}

function requestAuth(res) {
  res.writeHead(401, {
    "www-authenticate": 'Basic realm="Avito Dashboard"',
    "content-type": "text/plain; charset=utf-8",
  });
  res.end("Authentication required");
}

async function cached(key, loader) {
  const current = cache.get(key);
  const now = Date.now();

  if (current && now - current.createdAt < cacheTtlMs) {
    return current.value;
  }

  const value = await loader();
  cache.set(key, { createdAt: now, value });
  return value;
}

async function loadEnv() {
  try {
    const content = await readFile(join(root, ".env"), "utf8");
    content.split(/\r?\n/).forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) return;
      const [key, ...valueParts] = trimmed.split("=");
      if (!process.env[key]) {
        process.env[key] = valueParts.join("=").trim();
      }
    });
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
}

async function getAvitoToken() {
  const clientId = process.env.AVITO_CLIENT_ID;
  const clientSecret = process.env.AVITO_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return null;
  }

  const response = await fetch("https://api.avito.ru/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: clientId,
      client_secret: clientSecret,
    }),
  });

  if (!response.ok) {
    throw new Error(`Avito token request failed: ${response.status}`);
  }

  const data = await response.json();
  return data.access_token;
}

async function avitoFetch(path, token, options = {}) {
  const response = await fetch(`https://api.avito.ru${path}`, {
    ...options,
    headers: {
      accept: "application/json",
      authorization: `Bearer ${token}`,
      ...(options.body ? { "content-type": "application/json" } : {}),
      ...options.headers,
    },
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : {};

  if (!response.ok) {
    throw new Error(`Avito request failed: ${response.status} ${path}`);
  }

  return data;
}

async function getUserId(token) {
  if (process.env.AVITO_USER_ID) {
    return process.env.AVITO_USER_ID;
  }

  const self = await avitoFetch("/core/v1/accounts/self", token);
  return self.id || self.user_id;
}

async function getAvitoItems(token) {
  const itemsById = new Map();
  const perPage = 99;
  const statuses = ["active", "old"];

  for (const status of statuses) {
    for (let page = 1; page <= 20; page += 1) {
      const data = await avitoFetch(
        `/core/v1/items?per_page=${perPage}&page=${page}&status=${status}`,
        token,
      );
      const pageItems = data.resources || data.items || [];
      pageItems.forEach((item) => itemsById.set(Number(item.id), { ...item, status }));

      if (pageItems.length < perPage) break;
    }
  }

  return [...itemsById.values()];
}

function getStatsRange() {
  const now = new Date();
  const start = process.env.AVITO_STATS_FROM
    ? new Date(process.env.AVITO_STATS_FROM)
    : new Date(2025, 0, 1);
  return {
    from: start.toISOString().slice(0, 10),
    to: now.toISOString().slice(0, 10),
  };
}

function getStatsWindows(range) {
  const windows = [];
  const start = new Date(`${range.from}T00:00:00`);
  const end = new Date(`${range.to}T00:00:00`);
  let cursor = new Date(start.getFullYear(), start.getMonth(), 1);

  while (cursor <= end) {
    const windowStart = new Date(cursor);
    const windowEnd = new Date(cursor.getFullYear(), cursor.getMonth() + 3, 0);
    if (windowEnd > end) windowEnd.setTime(end.getTime());

    windows.push({
      from: windowStart.toISOString().slice(0, 10),
      to: windowEnd.toISOString().slice(0, 10),
    });

    cursor = new Date(cursor.getFullYear(), cursor.getMonth() + 3, 1);
  }

  return windows;
}

async function getMonthlyStats(token, userId, itemIds) {
  const range = getStatsRange();
  const statsByItem = await getItemStats(token, userId, itemIds, range);
  return aggregateMonthlyStats(statsByItem);
}

async function getItemStats(token, userId, itemIds, range = getStatsRange()) {
  const chunks = [];

  for (let index = 0; index < itemIds.length; index += 200) {
    chunks.push(itemIds.slice(index, index + 200));
  }

  const statsByItem = new Map();

  for (const window of getStatsWindows(range)) {
    for (const chunk of chunks) {
      if (!chunk.length) continue;

      const data = await fetchStatsChunk(token, userId, chunk, window);

      for (const item of data.result?.items || []) {
        const itemId = Number(item.itemId);
        statsByItem.set(itemId, [
          ...(statsByItem.get(itemId) || []),
          ...(item.stats || []),
        ]);
      }
    }
  }

  return statsByItem;
}

async function fetchStatsChunk(token, userId, itemIds, range) {
  try {
    return await avitoFetch(`/stats/v1/accounts/${userId}/items`, token, {
      method: "POST",
      body: JSON.stringify({
        dateFrom: range.from,
        dateTo: range.to,
        itemIds,
        periodGrouping: "month",
        fields: ["uniqViews", "uniqContacts", "uniqFavorites"],
      }),
    });
  } catch {
    if (itemIds.length <= 1) {
      return { result: { items: [] } };
    }

    const middle = Math.ceil(itemIds.length / 2);
    const left = await fetchStatsChunk(token, userId, itemIds.slice(0, middle), range);
    const right = await fetchStatsChunk(token, userId, itemIds.slice(middle), range);
    return {
      result: {
        items: [...(left.result?.items || []), ...(right.result?.items || [])],
      },
    };
  }
}

function aggregateMonthlyStats(statsByItem) {
  const months = new Map();

  for (const stats of statsByItem.values()) {
    for (const stat of stats) {
      const key = stat.date.slice(0, 7);
      const current = months.get(key) || {
        views: 0,
        contacts: 0,
        favorites: 0,
      };
      current.views += stat.uniqViews || 0;
      current.contacts += stat.uniqContacts || 0;
      current.favorites += stat.uniqFavorites || 0;
      months.set(key, current);
    }
  }

  return [...months.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => {
      const [year, month] = key.split("-").map(Number);
      const contacts = value.contacts;
      const views = value.views;
      const favorites = value.favorites;
      const cvViewResponse = views ? Math.round((contacts / views) * 100) : 0;
      const cvResponseQualified = contacts ? 100 : 0;

      return {
        year,
        month: monthNames[month - 1],
        qualified: contacts,
        unqualified: favorites,
        views,
        responses: contacts,
        firstShift: 0,
        priceQualified: 0,
        priceView: 0,
        priceResponse: 0,
        firstShiftCost: 0,
        responseSpend: 0,
        promoSpend: 0,
        totalSpend: 0,
        cvResponseQualified,
        cvViewResponse,
        cvQualifiedFirstShift: 0,
        ads: 0,
        newAds: 0,
        oldAds: 0,
        callsPerDay: 0,
        serviceLevel: 100,
        reviews: "-",
        rating: 5,
      };
    });
}

function summarizeStats(stats) {
  return stats.reduce(
    (total, stat) => {
      total.views += stat.uniqViews || 0;
      total.contacts += stat.uniqContacts || 0;
      total.favorites += stat.uniqFavorites || 0;
      return total;
    },
    { views: 0, contacts: 0, favorites: 0 },
  );
}

function toMonthlyStats(stats) {
  return stats.map((stat) => ({
    date: stat.date,
    month: monthNames[Number(stat.date.slice(5, 7)) - 1],
    views: stat.uniqViews || 0,
    contacts: stat.uniqContacts || 0,
    favorites: stat.uniqFavorites || 0,
  }));
}

function amountToRubles(value) {
  const amount = Number(value) || 0;
  return amount > 10000 ? Math.round(amount / 100) : Math.round(amount);
}

function readAmount(record) {
  return amountToRubles(
    record.amount ??
      record.sum ??
      record.total ??
      record.spend ??
      record.spending ??
      record.value ??
      record.price ??
      0,
  );
}

function collectSpendingRecords(payload) {
  if (!payload || typeof payload !== "object") return [];
  if (Array.isArray(payload)) return payload;

  return (
    payload.result?.items ||
    payload.result?.spendings ||
    payload.result?.data ||
    payload.items ||
    payload.spendings ||
    payload.data ||
    []
  );
}

async function getSpendings(token, userId, itemIds, range = getStatsRange()) {
  try {
    const data = await avitoFetch(`/stats/v2/accounts/${userId}/spendings`, token, {
      method: "POST",
      body: JSON.stringify({
        date_from: range.from,
        date_to: range.to,
        item_ids: itemIds,
        period_grouping: "month",
      }),
    });

    const byItem = new Map();

    for (const record of collectSpendingRecords(data)) {
      const itemId = Number(record.itemId ?? record.item_id ?? record.id);
      if (!itemId) continue;

      const current = byItem.get(itemId) || {
        promotionSpend: 0,
        responseSpend: 0,
        totalSpend: 0,
      };
      const amount = readAmount(record);
      const type = String(record.type || record.serviceType || record.service_type || "").toLowerCase();

      if (type.includes("contact") || type.includes("chat") || type.includes("call")) {
        current.responseSpend += amount;
      } else {
        current.promotionSpend += amount;
      }

      current.totalSpend += amount;
      byItem.set(itemId, current);
    }

    return byItem;
  } catch {
    return new Map();
  }
}

async function loadItemRows() {
  const token = await getAvitoToken();
  const userId = await getUserId(token);

  if (!token || !userId) {
    return null;
  }

  const items = await getAvitoItems(token);
  const range = getStatsRange();
  const statsByItem = await getItemStats(
    token,
    userId,
    items.map((item) => item.id),
    range,
  );
  const spendingsByItem = await getSpendings(
    token,
    userId,
    items.map((item) => item.id),
    range,
  );

  const itemRows = items.map((item) => {
    const stats = statsByItem.get(Number(item.id)) || [];
    const spendings = spendingsByItem.get(Number(item.id)) || {
      promotionSpend: 0,
      responseSpend: 0,
      totalSpend: 0,
    };
    const totals = summarizeStats(stats);
    const conversion = totals.views ? Math.round((totals.contacts / totals.views) * 100) : 0;
    const costPerContact = totals.contacts
      ? Math.round(spendings.totalSpend / totals.contacts)
      : 0;

    return {
      id: item.id,
      title: item.title,
      url: item.url,
      status: item.status,
      category: item.category?.name || item.category || "-",
      address: item.address || "-",
      price: item.price || 0,
      views: totals.views,
      contacts: totals.contacts,
      favorites: totals.favorites,
      conversion,
      promotionSpend: spendings.promotionSpend,
      responseSpend: spendings.responseSpend,
      totalSpend: spendings.totalSpend,
      costPerContact,
      monthly: toMonthlyStats(stats),
    };
  });

  itemRows.sort((a, b) => b.contacts - a.contacts || b.views - a.views);

  return {
    items: itemRows,
    source: "avito-api",
  };
}

async function loadDashboardRows() {
  const token = await getAvitoToken();
  const userId = await getUserId(token);

  if (!token || !userId) {
    return null;
  }

  const items = await getAvitoItems(token);
  const rows = await getMonthlyStats(
    token,
    userId,
    items.map((item) => item.id),
  );
  const activeAds = items.length;

  if (rows.length) {
    rows[rows.length - 1].ads = activeAds;
    rows[rows.length - 1].oldAds = activeAds;
  }

  return {
    rows,
    source: "avito-api",
    activeAds,
  };
}

const server = http.createServer(async (req, res) => {
  try {
    if (!isAuthorized(req)) {
      return requestAuth(res);
    }

    const url = new URL(req.url, `http://${req.headers.host}`);

    if (url.pathname === "/api/dashboard") {
      const data = await cached("dashboard", loadDashboardRows);
      if (!data?.rows?.length) {
        return sendJson(res, 200, { rows: [], source: "local-fallback" });
      }
      return sendJson(res, 200, data);
    }

    if (url.pathname === "/api/items") {
      const data = await cached("items", loadItemRows);
      if (!data?.items?.length) {
        return sendJson(res, 200, { items: [], source: "local-fallback" });
      }
      return sendJson(res, 200, data);
    }

    const path = url.pathname === "/" ? "/index.html" : url.pathname;
    const filePath = join(root, path);
    const file = await readFile(filePath);
    res.writeHead(200, {
      "access-control-allow-origin": "*",
      "content-type": mime[extname(filePath)] || "text/plain",
    });
    res.end(file);
  } catch (error) {
    if (error.code === "ENOENT") {
      sendJson(res, 404, { error: "Not found" });
    } else {
      sendJson(res, 500, { error: error.message });
    }
  }
});

loadEnv().then(() => {
  server.listen(port, host, () => {
    console.log(`Dashboard is running at http://${host}:${port}`);
  });
});

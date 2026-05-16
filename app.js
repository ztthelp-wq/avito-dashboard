const fallbackRows = [
  {
    year: 2025,
    month: "Август",
    qualified: 804,
    unqualified: 396,
    views: 16417,
    responses: 1196,
    firstShift: 9,
    priceQualified: 113,
    priceView: 6,
    priceResponse: 76,
    firstShiftCost: 10100,
    responseSpend: 68247,
    promoSpend: 22654,
    totalSpend: 90901,
    cvResponseQualified: 67,
    cvViewResponse: 7,
    cvQualifiedFirstShift: 1,
    ads: 53,
    newAds: 8,
    oldAds: 45,
    callsPerDay: 0,
    serviceLevel: 100,
    reviews: "6",
    rating: 5,
  },
  {
    year: 2025,
    month: "Сентябрь",
    qualified: 674,
    unqualified: 263,
    views: 10140,
    responses: 937,
    firstShift: 15,
    priceQualified: 115,
    priceView: 8,
    priceResponse: 83,
    firstShiftCost: 5181,
    responseSpend: 54270,
    promoSpend: 23452,
    totalSpend: 77722,
    cvResponseQualified: 70,
    cvViewResponse: 6,
    cvQualifiedFirstShift: 4951,
    ads: 71,
    newAds: 8,
    oldAds: 63,
    callsPerDay: 9,
    serviceLevel: 79,
    reviews: "7",
    rating: 5,
  },
  {
    year: 2025,
    month: "Октябрь",
    qualified: 1371,
    unqualified: 469,
    views: 26086,
    responses: 1844,
    firstShift: 22,
    priceQualified: 114,
    priceView: 6,
    priceResponse: 84,
    firstShiftCost: 7081,
    responseSpend: 109583,
    promoSpend: 46202,
    totalSpend: 155785,
    cvResponseQualified: 75,
    cvViewResponse: 7,
    cvQualifiedFirstShift: 3458,
    ads: 99,
    newAds: 7,
    oldAds: 92,
    callsPerDay: 0,
    serviceLevel: 100,
    reviews: "10",
    rating: 5,
  },
  {
    year: 2025,
    month: "Ноябрь",
    qualified: 1757,
    unqualified: 533,
    views: 33323,
    responses: 2290,
    firstShift: 24,
    priceQualified: 113,
    priceView: 6,
    priceResponse: 86,
    firstShiftCost: 8248,
    responseSpend: 144858,
    promoSpend: 53101,
    totalSpend: 197959,
    cvResponseQualified: 76,
    cvViewResponse: 6,
    cvQualifiedFirstShift: 4127,
    ads: 78,
    newAds: 6,
    oldAds: 72,
    callsPerDay: 0,
    serviceLevel: 100,
    reviews: "10",
    rating: 5,
  },
  {
    year: 2025,
    month: "Декабрь",
    qualified: 674,
    unqualified: 207,
    views: 14138,
    responses: 881,
    firstShift: 10,
    priceQualified: 100,
    priceView: 5,
    priceResponse: 76,
    firstShiftCost: 6713,
    responseSpend: 54646,
    promoSpend: 12480,
    totalSpend: 67126,
    cvResponseQualified: 61,
    cvViewResponse: 4,
    cvQualifiedFirstShift: 2636,
    ads: 47,
    newAds: 1,
    oldAds: 45,
    callsPerDay: null,
    serviceLevel: 100,
    reviews: "10/2",
    rating: 5,
  },
  {
    year: 2026,
    month: "Январь",
    qualified: 458,
    unqualified: 166,
    views: 9678,
    responses: 624,
    firstShift: 4,
    priceQualified: 109,
    priceView: 5,
    priceResponse: 80,
    firstShiftCost: 12499,
    responseSpend: 47392,
    promoSpend: 2603,
    totalSpend: 49995,
    cvResponseQualified: 54,
    cvViewResponse: 4,
    cvQualifiedFirstShift: 782,
    ads: 11,
    newAds: 1,
    oldAds: 10,
    callsPerDay: 0,
    serviceLevel: 100,
    reviews: "11/2",
    rating: 5,
  },
  {
    year: 2026,
    month: "Февраль",
    qualified: 728,
    unqualified: 226,
    views: 13568,
    responses: 954,
    firstShift: 0,
    priceQualified: 114,
    priceView: 6,
    priceResponse: 87,
    firstShiftCost: 0,
    responseSpend: 70239,
    promoSpend: 12834,
    totalSpend: 83073,
    cvResponseQualified: 76,
    cvViewResponse: 7,
    cvQualifiedFirstShift: 0,
    ads: 23,
    newAds: 2,
    oldAds: 21,
    callsPerDay: 0,
    serviceLevel: 100,
    reviews: "11/2",
    rating: 5,
  },
  {
    year: 2026,
    month: "Март",
    qualified: 121,
    unqualified: 56,
    views: 2090,
    responses: 177,
    firstShift: 0,
    priceQualified: 106,
    priceView: 6,
    priceResponse: 72,
    firstShiftCost: 0,
    responseSpend: 11973,
    promoSpend: 798,
    totalSpend: 12771,
    cvResponseQualified: 51,
    cvViewResponse: 5,
    cvQualifiedFirstShift: 0,
    ads: 5,
    newAds: 1,
    oldAds: 4,
    callsPerDay: 0,
    serviceLevel: 100,
    reviews: "11/2",
    rating: 5,
  },
  {
    year: 2026,
    month: "Апрель",
    qualified: 307,
    unqualified: 90,
    views: 7059,
    responses: 435,
    firstShift: 0,
    priceQualified: 94,
    priceView: 4,
    priceResponse: 67,
    firstShiftCost: 0,
    responseSpend: 26647,
    promoSpend: 2331,
    totalSpend: 28978,
    cvResponseQualified: 71,
    cvViewResponse: 6,
    cvQualifiedFirstShift: 0,
    ads: 12,
    newAds: 1,
    oldAds: 11,
    callsPerDay: 0,
    serviceLevel: 100,
    reviews: "12/2",
    rating: 5,
  },
];

const metricLabels = {
  qualified: "Контакты",
  responses: "Отклики",
  views: "Просмотры",
  totalSpend: "Расходы",
};
const monthOrder = [
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

const money = (value) => `${Math.round(value).toLocaleString("ru-RU")} ₽`;
const number = (value) => value.toLocaleString("ru-RU");
const percent = (value) => `${Math.round(value).toLocaleString("ru-RU")}%`;
const fallbackItems = [];
const apiBase = window.location.protocol === "file:" ? "http://127.0.0.1:4173" : "";

const els = {
  period: document.querySelector("#periodFilter"),
  month: document.querySelector("#monthFilter"),
  chartMetric: document.querySelector("#chartMetric"),
  status: document.querySelector("#connectionStatus"),
  qualifiedTotal: document.querySelector("#qualifiedTotal"),
  qualifiedDelta: document.querySelector("#qualifiedDelta"),
  viewsTotal: document.querySelector("#viewsTotal"),
  viewsDelta: document.querySelector("#viewsDelta"),
  responsesTotal: document.querySelector("#responsesTotal"),
  responsesDelta: document.querySelector("#responsesDelta"),
  spendTotal: document.querySelector("#spendTotal"),
  spendPerQual: document.querySelector("#spendPerQual"),
  chartTitle: document.querySelector("#chartTitle"),
  chart: document.querySelector("#mainChart"),
  conversionList: document.querySelector("#conversionList"),
  adsTotal: document.querySelector("#adsTotal"),
  newAdsTotal: document.querySelector("#newAdsTotal"),
  oldAdsTotal: document.querySelector("#oldAdsTotal"),
  adsBars: document.querySelector("#adsBars"),
  serviceLevel: document.querySelector("#serviceLevel"),
  ratingScore: document.querySelector("#ratingScore"),
  reviewsTotal: document.querySelector("#reviewsTotal"),
  ratingRows: document.querySelector("#ratingRows"),
  dataRows: document.querySelector("#dataRows"),
  itemSearch: document.querySelector("#itemSearch"),
  selectAllItems: document.querySelector("#selectAllItems"),
  clearSelection: document.querySelector("#clearSelection"),
  selectedCount: document.querySelector("#selectedCount"),
  selectedViews: document.querySelector("#selectedViews"),
  selectedContacts: document.querySelector("#selectedContacts"),
  selectedFavorites: document.querySelector("#selectedFavorites"),
  selectedConversion: document.querySelector("#selectedConversion"),
  selectedSpend: document.querySelector("#selectedSpend"),
  itemsList: document.querySelector("#itemsList"),
  itemDetail: document.querySelector("#itemDetail"),
};

let rows = fallbackRows;
let items = fallbackItems;
let selectedItemId = null;
const selectedItemIds = new Set();
const costOverrides = JSON.parse(localStorage.getItem("avitoCostOverrides") || "{}");

function sum(list, key) {
  return list.reduce((total, row) => total + (Number(row[key]) || 0), 0);
}

function avg(list, key) {
  const values = list.map((row) => Number(row[key])).filter(Number.isFinite);
  return values.length ? values.reduce((a, b) => a + b, 0) / values.length : 0;
}

function filteredRows() {
  return rows.filter((row) => {
    const yearMatches = els.period.value === "all" || String(row.year) === els.period.value;
    const monthMatches = els.month.value === "all" || row.month === els.month.value;
    return yearMatches && monthMatches;
  });
}

function syncMonthFilter() {
  const current = els.month.value;
  const months =
    els.period.value === "all"
      ? monthOrder
      : monthOrder.map((month) => month);

  els.month.innerHTML = [
    '<option value="all">Все месяцы</option>',
    ...months.map((month) => `<option value="${month}">${month}</option>`),
  ].join("");

  els.month.value = months.includes(current) ? current : "all";
}

function normalizeRows(list) {
  if (els.month.value === "all") return list;

  if (list.length) return list;

  const year =
    els.period.value === "all"
      ? new Date().getFullYear()
      : Number(els.period.value);

  return [
    {
      year,
      month: els.month.value,
      qualified: 0,
      unqualified: 0,
      views: 0,
      responses: 0,
      firstShift: 0,
      priceQualified: 0,
      priceView: 0,
      priceResponse: 0,
      firstShiftCost: 0,
      responseSpend: 0,
      promoSpend: 0,
      totalSpend: 0,
      cvResponseQualified: 0,
      cvViewResponse: 0,
      cvQualifiedFirstShift: 0,
      ads: 0,
      newAds: 0,
      oldAds: 0,
      callsPerDay: 0,
      serviceLevel: 0,
      reviews: "-",
      rating: 0,
    },
  ];
}

function delta(list, key) {
  if (list.length < 2) return 0;
  const first = Number(list[0][key]) || 0;
  const last = Number(list[list.length - 1][key]) || 0;
  return first ? ((last - first) / first) * 100 : 0;
}

function setDelta(element, value) {
  element.textContent = `${value >= 0 ? "+" : ""}${Math.round(value)}% к первому месяцу`;
  element.classList.toggle("down", value < 0);
}

function drawChart(list) {
  const key = els.chartMetric.value;
  const canvas = els.chart;
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const pad = { top: 24, right: 26, bottom: 58, left: 74 };
  const chartWidth = width - pad.left - pad.right;
  const chartHeight = height - pad.top - pad.bottom;
  const values = list.map((row) => Number(row[key]) || 0);
  const max = Math.max(...values, 1);
  const chartMax = Math.ceil(max * 1.15);
  const average = values.reduce((a, b) => a + b, 0) / values.length;
  const barGap = 16;
  const barWidth = Math.max(24, chartWidth / values.length - barGap);

  els.chartTitle.textContent = `${metricLabels[key]} по месяцам`;
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "#d8e2dc";
  ctx.lineWidth = 1;
  ctx.fillStyle = "#64736a";
  ctx.font = "22px Inter, sans-serif";

  for (let i = 0; i <= 4; i += 1) {
    const y = pad.top + (chartHeight / 4) * i;
    const label = Math.round(chartMax - (chartMax / 4) * i);
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(width - pad.right, y);
    ctx.stroke();
    ctx.fillText(label.toLocaleString("ru-RU"), 10, y + 8);
  }

  const avgY = pad.top + chartHeight - (average / chartMax) * chartHeight;
  ctx.setLineDash([12, 10]);
  ctx.strokeStyle = "#b9792e";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(pad.left, avgY);
  ctx.lineTo(width - pad.right, avgY);
  ctx.stroke();
  ctx.setLineDash([]);

  values.forEach((value, index) => {
    const x = pad.left + index * (chartWidth / values.length) + barGap / 2;
    const barHeight = (value / chartMax) * chartHeight;
    const y = pad.top + chartHeight - barHeight;
    ctx.fillStyle = "#2e8f5f";
    ctx.fillRect(x, y, barWidth, barHeight);
    ctx.fillStyle = "#17201b";
    ctx.font = "20px Inter, sans-serif";
    ctx.fillText(value.toLocaleString("ru-RU"), x, y - 10);
    ctx.fillStyle = "#64736a";
    ctx.font = "20px Inter, sans-serif";
    ctx.fillText(list[index].month.slice(0, 3), x, height - 24);
  });
}

function renderBars(container, list, valueKey, maxValue) {
  container.innerHTML = list
    .map((row) => {
      const value = Number(row[valueKey]) || 0;
      const width = maxValue ? (value / maxValue) * 100 : 0;
      return `
        <div class="bar-item">
          <div class="row-head">
            <span>${row.month}</span>
            <span>${number(value)}</span>
          </div>
          <div class="track"><div class="fill" style="width:${width}%"></div></div>
        </div>
      `;
    })
    .join("");
}

function renderConversion(list) {
  const values = [
    ["CV отклик/квалл", avg(list, "cvResponseQualified")],
    ["CV просмотр/отклик", avg(list, "cvViewResponse")],
    ["CV квалл/1 смена", avg(list, "cvQualifiedFirstShift")],
    ["Цена отклика", avg(list, "priceResponse")],
  ];

  els.conversionList.innerHTML = values
    .map(([label, value], index) => {
      const display = index === 3 ? money(value) : percent(value);
      const width = index === 3 ? Math.min(100, (value / 120) * 100) : Math.min(100, value);
      return `
        <div class="conversion-item">
          <div class="row-head">
            <span>${label}</span>
            <span>${display}</span>
          </div>
          <div class="track"><div class="fill" style="width:${width}%"></div></div>
        </div>
      `;
    })
    .join("");
}

function renderRatings(list) {
  const enriched = list.map((row, index) => {
    const reviews = resolveReviewValue(row);
    const previousReviews = index > 0 ? resolveReviewValue(list[index - 1]) : null;
    const current = parseReviewValue(reviews);
    const previous = previousReviews ? parseReviewValue(previousReviews).total : 0;
    const added = current.added ?? Math.max(0, current.total - previous);
    return { ...row, reviewTotal: current.total, reviewAdded: added };
  });

  const lastReviewTotal = getLatestKnownReviewTotal();
  els.reviewsTotal.textContent = number(lastReviewTotal);
  els.ratingRows.innerHTML = list
    .map((row, index) => enriched[index])
    .slice(-6)
    .map(
      (row) => `
        <div class="activity-row">
          <span>${row.month}: всего отзывов ${number(row.reviewTotal)}, за месяц +${number(row.reviewAdded)}</span>
          <strong>${row.serviceLevel}/100</strong>
        </div>
      `,
    )
    .join("");
}

function getLatestKnownReviewTotal() {
  const candidates = [...rows, ...fallbackRows]
    .map((row) => ({
      date: getRowDate(row),
      total: parseReviewValue(resolveReviewValue(row)).total,
    }))
    .filter((row) => row.total > 0)
    .sort((a, b) => a.date - b.date);

  return candidates.length ? candidates[candidates.length - 1].total : 0;
}

function getRowDate(row) {
  const monthIndex = [
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
  ].indexOf(row.month);

  return new Date(row.year, Math.max(monthIndex, 0), 1);
}

function resolveReviewValue(row) {
  if (row.reviews !== null && row.reviews !== undefined && row.reviews !== "-") {
    return row.reviews;
  }

  const fallback = fallbackRows.find(
    (candidate) => candidate.year === row.year && candidate.month === row.month,
  );
  return fallback?.reviews ?? "-";
}

function parseReviewValue(value) {
  if (value === null || value === undefined || value === "-") {
    return { total: 0, added: 0 };
  }

  const parts = String(value)
    .split("/")
    .map((part) => Number(part.trim()))
    .filter(Number.isFinite);

  return {
    total: parts[0] || 0,
    added: parts.length > 1 ? parts[1] : null,
  };
}

function renderTable(list) {
  els.dataRows.innerHTML = list
    .map(
      (row) => `
        <tr>
          <td>${row.month} ${row.year}</td>
          <td>${number(row.qualified)}</td>
          <td>${number(row.unqualified)}</td>
          <td>${number(row.views)}</td>
          <td>${number(row.responses)}</td>
          <td>${number(row.firstShift)}</td>
          <td>${money(row.priceQualified)}</td>
          <td>${money(row.responseSpend)}</td>
          <td>${money(row.promoSpend)}</td>
          <td>${money(row.totalSpend)}</td>
          <td>${percent(row.cvResponseQualified)}</td>
          <td>${number(row.ads)}</td>
          <td>${row.serviceLevel}</td>
        </tr>
      `,
    )
    .join("");
}

function itemMatchesSearch(item, query) {
  const haystack = [item.id, item.title, item.address, item.category, item.status]
    .join(" ")
    .toLowerCase();
  return haystack.includes(query.toLowerCase().trim());
}

function visibleItems() {
  const query = els.itemSearch.value || "";
  return items.filter((item) => itemMatchesSearch(item, query));
}

function getSelectedItems() {
  return items.filter((item) => selectedItemIds.has(String(item.id)));
}

function sumItems(list, key) {
  return list.reduce((total, item) => total + (Number(item[key]) || 0), 0);
}

function saveCostOverrides() {
  localStorage.setItem("avitoCostOverrides", JSON.stringify(costOverrides));
}

function getItemCost(item) {
  const override = costOverrides[item.id] || {};
  const apiPromotion = Number(item.promotionSpend) || 0;
  const apiResponse = Number(item.responseSpend) || 0;
  const responsePrice =
    override.responsePrice ??
    (item.contacts && apiResponse ? Math.round(apiResponse / item.contacts) : 0);
  const promotionSpend = override.promotionSpend ?? apiPromotion;
  const responseSpend = (Number(item.contacts) || 0) * (Number(responsePrice) || 0);
  const manualTotal = responseSpend + (Number(promotionSpend) || 0);
  const total = manualTotal || apiResponse + apiPromotion;
  const costPerContact = item.contacts ? Math.round(total / item.contacts) : 0;

  return {
    apiTotal: Number(item.totalSpend) || 0,
    responsePrice: Number(responsePrice) || 0,
    responseSpend,
    promotionSpend: Number(promotionSpend) || 0,
    total,
    costPerContact,
  };
}

function renderSelectedSummary() {
  const list = getSelectedItems();
  const views = sumItems(list, "views");
  const contacts = sumItems(list, "contacts");
  const favorites = sumItems(list, "favorites");
  const spend = list.reduce((total, item) => total + getItemCost(item).total, 0);

  els.selectedCount.textContent = number(list.length);
  els.selectedViews.textContent = number(views);
  els.selectedContacts.textContent = number(contacts);
  els.selectedFavorites.textContent = number(favorites);
  els.selectedConversion.textContent = percent(views ? (contacts / views) * 100 : 0);
  els.selectedSpend.textContent = money(spend);
}

function renderItemDetail(item) {
  if (!item) {
    els.itemDetail.innerHTML = '<span class="empty-state">Выберите объявление в списке</span>';
    return;
  }

  const cost = getItemCost(item);
  const monthly = item.monthly?.length
    ? item.monthly
        .map(
          (row) => `
            <div class="detail-month">
              <span>${row.month}</span>
              <strong>${number(row.contacts)}</strong>
              <small>${number(row.views)} просмотров</small>
            </div>
          `,
        )
        .join("")
    : '<span class="empty-state">Помесячной статистики пока нет</span>';

  els.itemDetail.innerHTML = `
    <div class="detail-title">
      <span>ID ${item.id}</span>
      <h3>${item.title}</h3>
      <a href="${item.url}" target="_blank" rel="noreferrer">Открыть на Avito</a>
    </div>
    <div class="detail-stats">
      <div><span>Просмотры</span><strong>${number(item.views)}</strong></div>
      <div><span>Контакты</span><strong>${number(item.contacts)}</strong></div>
      <div><span>Избранное</span><strong>${number(item.favorites)}</strong></div>
      <div><span>CV</span><strong>${percent(item.conversion)}</strong></div>
    </div>
    <div class="detail-meta">
      <span>${item.category}</span>
      <span>${item.address}</span>
      <span>${money(item.price)}</span>
    </div>
    <div class="cost-panel">
      <div class="cost-head">
        <div>
          <span>Расчет расходов</span>
          <strong>${money(cost.total)}</strong>
        </div>
        <small>${
          cost.apiTotal
            ? `Факт Avito: ${money(cost.apiTotal)}`
            : "Факт расходов из API не получен"
        }</small>
      </div>
      <div class="cost-inputs">
        <label>
          <span>Цена отклика</span>
          <input data-cost-field="responsePrice" data-item-id="${item.id}" type="number" min="0" value="${cost.responsePrice}" />
        </label>
        <label>
          <span>Продвижение</span>
          <input data-cost-field="promotionSpend" data-item-id="${item.id}" type="number" min="0" value="${cost.promotionSpend}" />
        </label>
      </div>
      <div class="cost-breakdown">
        <div><span>Отклики</span><strong>${money(cost.responseSpend)}</strong></div>
        <div><span>Продвижение</span><strong>${money(cost.promotionSpend)}</strong></div>
        <div><span>Цена контакта</span><strong>${money(cost.costPerContact)}</strong></div>
      </div>
    </div>
    <div class="detail-months">${monthly}</div>
  `;
}

function renderItems() {
  const list = visibleItems();

  if (!items.length) {
    els.itemsList.innerHTML = '<div class="empty-state">Объявления еще загружаются или недоступны</div>';
    renderSelectedSummary();
    renderItemDetail(null);
    return;
  }

  if (!list.length) {
    els.itemsList.innerHTML = '<div class="empty-state">Ничего не найдено</div>';
    renderSelectedSummary();
    renderItemDetail(items.find((item) => String(item.id) === String(selectedItemId)));
    return;
  }

  els.itemsList.innerHTML = list
    .map(
      (item) => `
        <article class="item-row ${String(item.id) === String(selectedItemId) ? "active" : ""}" data-id="${item.id}">
          <label class="item-check">
            <input type="checkbox" data-select-id="${item.id}" ${
              selectedItemIds.has(String(item.id)) ? "checked" : ""
            } />
          </label>
          <button type="button" class="item-main" data-open-id="${item.id}">
            <span class="item-title">${item.title}</span>
            <span class="item-subline">ID ${item.id} · ${item.category} · ${item.address}</span>
          </button>
          <div class="item-numbers">
            <span><strong>${number(item.contacts)}</strong> контактов</span>
            <span>${number(item.views)} просмотров</span>
            <span>${percent(item.conversion)} CV</span>
          </div>
        </article>
      `,
    )
    .join("");

  renderSelectedSummary();
  renderItemDetail(items.find((item) => String(item.id) === String(selectedItemId)) || list[0]);
}

function render() {
  syncMonthFilter();
  const list = normalizeRows(filteredRows());
  const qualified = sum(list, "qualified");
  const views = sum(list, "views");
  const responses = sum(list, "responses");
  const spend = sum(list, "totalSpend");

  els.qualifiedTotal.textContent = number(qualified);
  els.viewsTotal.textContent = number(views);
  els.responsesTotal.textContent = number(responses);
  els.spendTotal.textContent = money(spend);
  els.spendPerQual.textContent = `${money(spend / Math.max(qualified, 1))} / квалл`;
  setDelta(els.qualifiedDelta, delta(list, "qualified"));
  setDelta(els.viewsDelta, delta(list, "views"));
  setDelta(els.responsesDelta, delta(list, "responses"));

  const spendDelta = delta(list, "totalSpend");
  els.spendPerQual.classList.toggle("down", spendDelta > 0);

  els.adsTotal.textContent = number(sum(list, "ads"));
  els.newAdsTotal.textContent = number(sum(list, "newAds"));
  els.oldAdsTotal.textContent = number(sum(list, "oldAds"));
  els.serviceLevel.textContent = Math.round(avg(list, "serviceLevel"));
  els.ratingScore.textContent = avg(list, "rating").toFixed(1).replace(".", ",");

  drawChart(list);
  renderConversion(list);
  renderBars(els.adsBars, list, "ads", Math.max(...list.map((row) => row.ads)));
  renderRatings(list);
  renderTable(list);
  renderItems();
}

async function loadApiData() {
  try {
    const response = await fetch(`${apiBase}/api/dashboard`);
    if (!response.ok) throw new Error("API unavailable");
    const payload = await response.json();
    if (Array.isArray(payload.rows) && payload.rows.length) {
      rows = payload.rows;
      els.status.lastChild.textContent = " Avito API подключен";
    }
  } catch {
    els.status.lastChild.textContent = " Локальные данные";
  }
}

async function loadItems() {
  try {
    const response = await fetch(`${apiBase}/api/items`);
    if (!response.ok) throw new Error("Items unavailable");
    const payload = await response.json();
    if (Array.isArray(payload.items) && payload.items.length) {
      items = payload.items;
      selectedItemId = items[0].id;
    }
  } catch {
    items = fallbackItems;
  }
}

els.period.addEventListener("change", render);
els.month.addEventListener("change", render);
els.chartMetric.addEventListener("change", render);
els.itemSearch.addEventListener("input", renderItems);
els.selectAllItems.addEventListener("click", () => {
  visibleItems().forEach((item) => selectedItemIds.add(String(item.id)));
  renderItems();
});
els.clearSelection.addEventListener("click", () => {
  selectedItemIds.clear();
  renderItems();
});
els.itemsList.addEventListener("change", (event) => {
  const checkbox = event.target.closest("[data-select-id]");
  if (!checkbox) return;

  if (checkbox.checked) {
    selectedItemIds.add(String(checkbox.dataset.selectId));
  } else {
    selectedItemIds.delete(String(checkbox.dataset.selectId));
  }

  renderItems();
});
els.itemsList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-open-id]");
  if (!button) return;

  selectedItemId = button.dataset.openId;
  renderItems();
});
els.itemDetail.addEventListener("change", (event) => {
  const input = event.target.closest("[data-cost-field]");
  if (!input) return;

  const itemId = input.dataset.itemId;
  costOverrides[itemId] = {
    ...(costOverrides[itemId] || {}),
    [input.dataset.costField]: Number(input.value) || 0,
  };
  saveCostOverrides();
  renderItems();
});
window.addEventListener("resize", render);

Promise.all([loadApiData(), loadItems()]).finally(render);

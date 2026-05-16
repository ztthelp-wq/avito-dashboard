FROM node:22-alpine

WORKDIR /app
COPY package.json ./
COPY index.html styles.css app.js server.js ./

ENV NODE_ENV=production
EXPOSE 4173

CMD ["node", "server.js"]

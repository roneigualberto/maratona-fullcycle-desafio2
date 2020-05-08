# stage 1
FROM node:10-slim as build-deps

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./ .

RUN npm run typeorm migration:run
RUN npm run build


#stage 2
FROM node:10-alpine

USER node

WORKDIR /app

COPY --from=build-deps  /app .

EXPOSE 3000

CMD ["npm","run","start:prod"]


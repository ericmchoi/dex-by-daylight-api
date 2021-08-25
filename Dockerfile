FROM node:16.1-alpine as builder
WORKDIR /usr/src/app
COPY . .
RUN apk update && apk add python3 make g++
RUN npm ci
RUN npm run build
RUN npm run init
RUN npm prune --production

FROM node:16.1-alpine
WORKDIR /usr/src/app
COPY package*.json ./
COPY --from=builder /usr/src/app/data ./data/
COPY --from=builder /usr/src/app/dist ./dist/
COPY --from=builder /usr/src/app/node_modules ./node_modules/
COPY --from=builder /usr/src/app/.db ./.db/

EXPOSE 3000
CMD npm run start

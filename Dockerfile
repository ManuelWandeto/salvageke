FROM node:14.19-alpine AS deps
WORKDIR /frontend
COPY package*.json ./
RUN npm ci
COPY . .

FROM deps AS build
WORKDIR /build
COPY --from=deps /frontend ./
RUN npm run build

FROM node:14.19-alpine AS production
RUN npm install --global pm2
USER node
WORKDIR /home/node/app
COPY --from=build --chown=node:node /build/package*.json ./
COPY --from=build --chown=node:node /build/.next ./.next
COPY --from=build --chown=node:node /build/node_modules ./node_modules
COPY --from=build --chown=node:node /build/.env.production ./
RUN npm install sharp
EXPOSE 3000

CMD [ "pm2-runtime", "npm", "--", "start" ]
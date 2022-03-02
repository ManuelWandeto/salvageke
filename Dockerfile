FROM node:14.19-alpine AS deps
WORKDIR /frontend
COPY package*.json .
RUN npm ci
COPY . .

FROM deps AS build
WORKDIR /build
COPY --from=deps /frontend .
RUN npm run build

FROM node:14.19-alpine AS production
RUN npm install --global pm2
WORKDIR /app
COPY --from=build /build/package*.json .
COPY --from=build /build/.next ./.next
COPY --from=build /build/node_modules ./node_modules
COPY --from=build /build/.env.production .
EXPOSE 3000
USER node

CMD [ "pm2-runtime", "npm", "--", "start" ]
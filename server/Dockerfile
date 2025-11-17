# server/Dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json yarn.lock ./
RUN npm ci --only=production --silent

# build stage (if you have TypeScript build step)
FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci --silent
RUN npm run build    # doit générer /dist

# final
FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
# si tu n'as pas de build step TS, adapte: copy src and use node/ts-node
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s \
  CMD wget -qO- http://localhost:3000/ || exit 1
CMD ["node", "dist/index.js"]

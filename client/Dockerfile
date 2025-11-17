# client/Dockerfile
# Build stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json yarn.lock ./
RUN npm ci --silent
COPY . .
RUN npm run build

# Production stage
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
# Optional: copy custom nginx config:
# COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s \
  CMD wget -qO- http://localhost || exit 1
CMD ["nginx", "-g", "daemon off;"]      

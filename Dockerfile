# --- Stage 1: Development ---
FROM node:20-alpine AS dev
WORKDIR /app

# Install dependencies first (leverages Docker layer caching)
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

EXPOSE 5173
CMD ["npm", "run", "dev"]

# --- Stage 2: Production Build ---
FROM dev AS builder
RUN npm run build

# --- Stage 3: Nginx Web Server ---
FROM nginx:1.27-alpine AS production
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
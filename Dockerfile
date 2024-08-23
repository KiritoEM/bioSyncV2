# Étape de base
FROM node:20-alpine as base
RUN apk add --no-cache g++ make py3-pip libc6-compat
WORKDIR /app
COPY package*.json ./

# Étape de build
FROM base as builder
WORKDIR /app
RUN npm install
COPY . .
RUN npm run build

# Étape de production
FROM base as production
WORKDIR /app
ENV NODE_ENV=production
RUN npm install --production
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
CMD ["npm", "start"]

# Étape de développement
FROM base as dev
ENV NODE_ENV=development
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]

EXPOSE 3000

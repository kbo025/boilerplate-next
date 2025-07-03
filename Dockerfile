# Usa una imagen oficial de Node.js como base
FROM node:20-alpine AS builder

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./

# Instala las dependencias
RUN \
  if [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then npm install -g pnpm && pnpm install; \
  elif [ -f yarn.lock ]; then yarn install; \
  else npm install; \
  fi

# Copia el resto del código fuente
COPY . .

# Construye la aplicación Next.js
RUN npm run build

# --- Producción ---
FROM node:20-alpine AS runner

WORKDIR /app

# Copia las dependencias de producción y el build
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expone el puerto por defecto de Next.js
EXPOSE 3000

# Comando para iniciar la app
CMD ["npm", "start"]
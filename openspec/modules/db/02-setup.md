# Local Setup

Setup local para desarrollo.

## Requirements

- Node.js 20+
- pnpm 9+
- .NET 9 SDK
- Docker + Docker Compose
- PostgreSQL client (optional)

## Quick Start

```bash
# 1. Clonar e instalar dependencias
git clone https://github.com/org/nexora.git
cd nexora
pnpm install

# 2. Configurar variables de entorno
cp .env.example .env
# Editar .env con tus valores

# 3. Levantar infraestructura (DB + Redis)
docker compose up postgres redis -d

# 4. Aplicar migraciones
cd apps/api
dotnet ef database update

# 5. Seed data (opcional)
dotnet run --project tools/Nexora.Seeder

# 6. Iniciar todo en desarrollo
pnpm dev
# web: http://localhost:3000
# api: http://localhost:5000
# swagger: http://localhost:5000/swagger

# O con Docker completo:
docker compose up --build
```

## .env.example

```env
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB=nexora_dev
POSTGRES_USER=nexora
POSTGRES_PASSWORD=

JWT_SECRET=
JWT_ISSUER=nexora-api
JWT_AUDIENCE=nexora-web

STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

REDIS_CONNECTION_STRING=localhost:6379
NEXT_PUBLIC_API_URL=http://localhost/api/v1
NEXT_PUBLIC_APP_URL=http://localhost:3000
```
# Frontend Stack

Stack tecnológico del frontend para NEXORA.

## Core Technologies

- **Next.js 15** (App Router, Server Components first)
- **TypeScript** strict mode (strict: true, no any)
- **Tailwind CSS v4**
- **shadcn/ui** (components base)
- **pnpm** (package manager, workspaces monorepo)

## State Management

- **React Query v5** (TanStack Query) — all server state
- **Zustand v5** — client-only global state (modals, sidebar, player state)
- **React Hook Form v7 + Zod v3** — all forms and validation

## Animation & UX

- **Framer Motion** — transitions and micro-animations

## Monorepo Structure

```
nexora/
├── apps/web/          # Next.js frontend
├── packages/shared/   # Shared types, utils
└── apps/api/          # ASP.NET Core backend
```

## Dependencies

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "@tanstack/react-query": "^5.0.0",
    "zustand": "^5.0.0",
    "react-hook-form": "^7.0.0",
    "@hookform/resolvers": "^3.0.0",
    "zod": "^3.0.0",
    "framer-motion": "^11.0.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/node": "^20.0.0",
    "tailwindcss": "^4.0.0",
    "eslint": "^8.0.0",
    "prettier": "^3.0.0"
  }
}
```
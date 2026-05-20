# Frontend Architecture

Estructura del frontend Next.js.

## Folder Structure

```
apps/web/
├── app/
│   ├── (public)/           # public routes, minimal layout
│   │   ├── page.tsx        # landing page
│   │   ├── cursos/
│   │   │   ├── page.tsx    # course catalog
│   │   │   └── [slug]/
│   │   │       └── page.tsx # course detail (SSR + ISR)
│   │   ├── categorias/[slug]/page.tsx
│   │   ├── instructores/[username]/page.tsx
│   │   ├── verificar/[certificateNumber]/page.tsx
│   │   └── buscar/page.tsx
│   ├── (auth)/             # auth routes, centered layout
│   │   ├── iniciar-sesion/page.tsx
│   │   ├── registrarse/page.tsx
│   │   ├── verificar-email/page.tsx
│   │   ├── olvi-contrasena/page.tsx
│   │   └── restablecer/page.tsx
│   ├── (dashboard)/        # protected, sidebar layout
│   │   ├── layout.tsx      # DashboardLayout with sidebar
│   │   ├── dashboard/page.tsx
│   │   ├── mis-cursos/page.tsx
│   │   ├── certificados/page.tsx
│   │   ├── favoritos/page.tsx
│   │   ├── notificaciones/page.tsx
│   │   ├── configuracion/page.tsx
│   │   └── aprender/[courseId]/
│   │       ├── layout.tsx  # VideoPlayerLayout
│   │       └── [lessonId]/page.tsx
│   ├── (instructor)/       # instructor routes
│   │   ├── layout.tsx
│   │   ├── instructor/dashboard/page.tsx
│   │   ├── instructor/cursos/page.tsx
│   │   ├── instructor/cursos/nuevo/page.tsx
│   │   └── instructor/cursos/[id]/editar/page.tsx
│   └── (admin)/            # admin routes
│       ├── layout.tsx
│       ├── admin/dashboard/page.tsx
│       ├── admin/usuarios/page.tsx
│       ├── admin/cursos/page.tsx
│       └── admin/analiticas/page.tsx
├── components/
│   ├── ui/                 # shadcn/ui base components
│   ├── layout/             # Navbar, Sidebar, Footer
│   ├── courses/            # CourseCard, CourseHero, etc.
│   ├── player/             # VideoPlayer, LessonSidebar
│   ├── quiz/               # QuizPlayer, QuizQuestion
│   ├── instructor/         # CourseBuilder, CurriculumEditor
│   └── common/             # SkeletonCard, EmptyState
├── hooks/                  # useAuth, useCourse, useProgress
├── lib/
│   ├── api.ts              # axios with interceptors
│   ├── queryClient.ts      # React Query config
│   └── utils.ts
├── stores/                 # Zustand stores
│   ├── authStore.ts        # JWT in memory
│   ├── playerStore.ts      # video player state
│   └── uiStore.ts          # sidebar, modals, toasts
└── types/
    └── index.ts
```

## Route Groups

| Group | Layout | Purpose |
|-------|--------|---------|
| `(public)` | Minimal | Landing, catalog, course detail |
| `(auth)` | Centered | Login, register, password recovery |
| `(dashboard)` | Sidebar | Student dashboard, learning |
| `(instructor)` | Sidebar | Course creation, analytics |
| `(admin)` | Sidebar | User management, platform admin |

## Server vs Client Components

- **Course catalog**: Server Component (SSR) — SEO critical
- **Course detail**: Server Component + ISR (revalidate: 3600)
- **Video player**: Client Component — complex state
- **Quiz**: Client Component — real-time interaction
- **Dashboard widgets**: Client Component with React Query
- **Instructor editor**: Client Component — drag and drop

## React Query Configuration

```typescript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10,
      retry: (failureCount, error) => {
        if (error.status === 401 || error.status === 404) return false;
        return failureCount < 2;
      },
      refetchOnWindowFocus: false,
    },
  },
});
```

## API Client with Auto-Refresh

```typescript
const api = axios.create({ baseURL: '/api/v1', withCredentials: true });

api.interceptors.request.use(config => {
  const token = useAuthStore.getState().accessToken;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  response => response,
  async error => {
    if (error.response?.status === 401 && !error.config._retry) {
      error.config._retry = true;
      const newToken = await refreshAccessToken();
      useAuthStore.getState().setAccessToken(newToken);
      error.config.headers.Authorization = `Bearer ${newToken}`;
      return api(error.config);
    }
    return Promise.reject(error);
  }
);
```
# Testing

Estrategia de testing.

## Backend (xUnit)

```
tests/
├── Nexora.UnitTests/
│   ├── Domain/            # entity business logic
│   ├── Application/       # handlers (mocked deps)
│   └── Services/          # service unit tests
├── Nexora.IntegrationTests/
│   ├── Api/               # full API with test DB
│   │   ├── AuthTests.cs
│   │   ├── CoursesTests.cs
│   │   └── PaymentsTests.cs
│   └── TestFixtures/      # WebApplicationFactory
```

## Frontend (Vitest + React Testing Library)

```
tests/
├── components/
│   ├── CourseCard.test.tsx
│   ├── VideoPlayer.test.tsx
│   └── QuizPlayer.test.tsx
├── hooks/
│   ├── useAuth.test.ts
│   └── useProgress.test.ts
└── api/
    └── auth.test.ts
```

## Goals

- Unit tests: 80%+ on Domain/Application
- Integration: critical flows (auth, enroll, checkout)
- Frontend: critical components and hooks
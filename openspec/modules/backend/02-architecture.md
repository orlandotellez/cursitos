# Backend Architecture

Arquitectura del backend ASP.NET Core.

## Project Structure

```
Nexora.Api/
├── src/
│   ├── Nexora.Domain/
│   │   ├── Entities/        # User, Course, Lesson, Enrollment, etc.
│   │   ├── Enums/          # Role, Level, CourseStatus
│   │   ├── Events/
│   │   ├── Exceptions/
│   │   └── ValueObjects/
│   ├── Nexora.Application/
│   │   ├── Common/
│   │   │   ├── Behaviors/  # MediatR pipeline
│   │   │   ├── Interfaces/
│   │   │   ├── Mappings/
│   │   │   └── Exceptions/
│   │   └── Features/
│   │       ├── Auth/       # Commands/Queries
│   │       ├── Courses/
│   │       ├── Lessons/
│   │       ├── Progress/
│   │       ├── Payments/
│   │       ├── Certificates/
│   │       ├── Comments/
│   │       └── Admin/
│   ├── Nexora.Infrastructure/
│   │   ├── Persistence/
│   │   │   ├── ApplicationDbContext.cs
│   │   │   ├── Configurations/  # EF Fluent API
│   │   │   └── Migrations/
│   │   ├── Services/
│   │   ├── Caching/
│   │   └── BackgroundJobs/
│   └── Nexora.Api/
│       ├── Controllers/
│       ├── Middleware/
│       ├── Filters/
│       └── Extensions/
└── tests/
    ├── Nexora.UnitTests/
    ├── Nexora.IntegrationTests/
    └── Nexora.ApiTests/
```

## MediatR Pipeline (order matters)

1. **LoggingBehavior** — structured logging per request
2. **ValidationBehavior** — FluentValidation, throws ValidationException
3. **CachingBehavior** — for queries with ICacheable interface
4. **TransactionBehavior** — wraps commands in DB transaction

## Error Handling

### Custom Exceptions
```csharp
public class NotFoundException : Exception { }    // 404
public class ForbiddenException : Exception { }  // 403
public class ConflictException : Exception { }    // 409
public class ValidationException : Exception { }  // 400
public class DomainException : Exception { }      // 400
```

### Global Exception Middleware
Returns **ProblemDetails** (RFC 7807):

```json
{
  "type": "https://tools.ietf.org/html/rfc7807",
  "title": "Not Found",
  "status": 404,
  "detail": "Course with id 'abc-123' not found",
  "errors": null
}
```

## Clean Architecture Layers

| Layer | Responsibility |
|-------|---------------|
| **Domain** | Entities, Enums, Events, ValueObjects |
| **Application** | CQRS, Behaviors, Interfaces, DTOs |
| **Infrastructure** | EF Core, Services, Caching, Jobs |
| **API** | Controllers, Middleware, Filters |
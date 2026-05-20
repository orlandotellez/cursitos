# Backend Stack

Stack tecnológico del backend para NEXORA.

## Core Technologies

- **ASP.NET Core 9** Web API
- **C# 13**
- **.NET 9 SDK**

## Architecture

- **Clean Architecture** (Domain / Application / Infrastructure / API layers)
- **Vertical Slice Architecture** within Application layer
- **CQRS pattern** with MediatR v12

## Dependencies

```xml
<PackageReference Include="MediatR" Version="12.0.0" />
<PackageReference Include="FluentValidation" Version="11.0.0" />
<PackageReference Include="Microsoft.AspNetCore.Authentication.JwtBearer" Version="9.0.0" />
<PackageReference Include="Microsoft.EntityFrameworkCore" Version="9.0.0" />
<PackageReference Include="Npgsql.EntityFrameworkCore.PostgreSQL" Version="9.0.0" />
<PackageReference Include="FluentValidation.AspNetCore" Version="11.0.0" />
<PackageReference Include="StackExchange.Redis" Version="2.0.0" />
<PackageReference Include="Hangfire.Core" Version="1.8.0" />
<PackageReference Include="Hangfire.AspNetCore" Version="1.8.0" />
<PackageReference Include="Serilog.AspNetCore" Version="8.0.0" />
<PackageReference Include="QuestPDF" Version="2024.0.0" />
<PackageReference Include="Microsoft.AspNetCore.SignalR" Version="1.1.0" />
```

## Key Patterns

- **MediatR** for CQRS (Commands/Queries)
- **FluentValidation** for all input validation
- **Repository Pattern** via EF Core
- **Unit of Work** for transactions
- **AutoMapper** for DTOs

## Infrastructure Services

- **Redis** — caching, refresh token store, rate limiting
- **Stripe** — payments
- **Email** — SMTP or Resend
- **Storage** — S3-compatible (AWS S3, Cloudflare R2, local)
- **Hangfire** — background jobs
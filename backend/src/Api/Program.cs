using Cursinet.Api.Helpers;
using Cursinet.Application.Common.Interfaces;
using Cursinet.Application.Features.Auth;
using Cursinet.Infrastructure.Persistence; 
using Cursinet.Infrastructure.Persistence.Repositories; 
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// REGISTRO DE SERVICIOS (Antes de builder.Build)
builder.Services.AddControllers();
builder.Services.AddOpenApi();
builder.Services.AddHttpContextAccessor();

// Helpers de Autenticación y Cookies
builder.Services.AddScoped<AuthHelper>();
builder.Services.AddScoped<CookieHelper>();

// CONFIGURACIÓN DE ENTITY FRAMEWORK CORE
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection") 
    ?? "Host=localhost;Database=cursinet_db;Username=dev-espada;Password=espadaPOSTGRES";

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseNpgsql(connectionString, b => b.MigrationsAssembly("Infrastructure")));

// Servicio de Aplicación (Lógica de Negocio)
builder.Services.AddScoped<IAuthService, AuthService>();

// REPOSITORIOS REALES (Separados e independientes)
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IAccountRepository, AccountRepository>();
builder.Services.AddScoped<ISessionRepository, SessionRepository>();

// TODO: hacer que no sea mock
// Mocks temporales para que la migración y el DI container funcionen mientras no estén las implementaciones reales
builder.Services.AddScoped<IPasswordService, TemporaryPasswordMock>();
builder.Services.AddScoped<ITokenService, TemporaryTokenMock>();

// CONSTRUCCIÓN DE LA APLICACIÓN
var app = builder.Build();

// CONFIGURACIÓN DEL PIPELINE (Middlewares)
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

// Enrutamiento de controladores (api/v1/auth/register, etc.)
app.MapControllers();

// Endpoint rápido de prueba
app.MapGet("/health", () => "ok");

app.Run();

// TODO: hacer que no sea mock
// CLASES TEMPORALES (MOCKS) SOLO PARA QUE LA MIGRACIÓN COMPILE Y DETECTE EF
public class TemporaryPasswordMock : IPasswordService
{
    public string HashPassword(string password) => password; // No hace nada, solo devuelve el texto
    public bool VerifyPassword(string password, string hashedPassword) => password == hashedPassword;
}

public class TemporaryTokenMock : ITokenService
{
    public (string accessToken, string refreshToken) GenerateTokens(Guid userId, string email, Cursinet.Domain.Enums.UserRole role)
    {
        return ("fake-access-token", "fake-refresh-token");
    }
}
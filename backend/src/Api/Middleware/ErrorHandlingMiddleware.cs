using System.Net; // Esta importación permite usar el HttpStatusCode
using System.Text.Json; // Esta importación es el serializador nativo
using Cursinet.Domain.Exceptions;

namespace Cursinet.Api.Middleware;

public class ErrorHandlingMiddleware
{
    // Declaración de variables privadas que vivirán durante la ejecución del middleware
    private readonly RequestDelegate _next;
    private readonly ILogger<ErrorHandlingMiddleware> _logger;

    // Creación del constructor: Aquí se inyectarán las dependencias
    public ErrorHandlingMiddleware(RequestDelegate next, ILogger<ErrorHandlingMiddleware> logger)
    {
        _next = next;
        _logger = logger;
    }

    // Método que se ejecutará por cada petición Http
    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (Exception ex)
        {
            // Si algo sale mal, el logger se encargará de capturarlo
            _logger.LogError(ex, "Ocurrió un error no controlado en la ruta {Path}", context.Request.Path);
            await HandleExceptionAsync(context, ex);
        }
    }
    // Método estático que evalúa que tipo de error fué (404, 500, etc)
    private static Task HandleExceptionAsync(HttpContext context, Exception exception)
    {
        context.Response.ContentType = "application/json";

        // Aquí asignamos el código Http (404, 500, etc)
        context.Response.StatusCode = exception switch
        {
            AppException => (int)HttpStatusCode.BadRequest,
            _ => (int)HttpStatusCode.InternalServerError

        };

        // Creamos un objeto con la propiedad error
        var response = new { error = exception.Message };

        // Convertimos la respuesta en un JSON
        return context.Response.WriteAsync(JsonSerializer.Serialize(response));
    }
}

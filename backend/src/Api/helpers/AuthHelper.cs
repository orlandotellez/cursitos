using System.Security.Claims;

namespace Cursinet.Api.Helpers;

public class AuthHelper
{
    private readonly IHttpContextAccessor _httpContextAccessor;

    public AuthHelper(IHttpContextAccessor httpContextAccessor)
    {
        _httpContextAccessor = httpContextAccessor;
    }

    public async Task<Guid?> ResolveCurrentUserId()
    {
        // Obtenemos el ClaimsPrincipal (User) desde el HttpContext actual
        var user = _httpContextAccessor.HttpContext?.User;
        if (user == null) return null;

        // Buscamos el claim usando ClaimTypes.NameIdentifier o clave personalizada "userId"
        var userIdClaim = user.FindFirst(ClaimTypes.NameIdentifier)?.Value 
                          ?? user.FindFirst("userId")?.Value;

        if (Guid.TryParse(userIdClaim, out var parsedGuid))
        {
            return parsedGuid;
        }

        return null;
    }
}
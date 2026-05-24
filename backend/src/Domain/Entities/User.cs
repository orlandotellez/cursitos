using Cursinet.Domain.Enums; // Importamos los enums a necesitar
 
namespace Cursinet.Domain.Entities;

public class User
{
	public Guid Id {get; set;} // Identificador único

	public string Name {get; set;} = string.Empty; // Nombre Completo

	public string Email {get; set;} = string.Empty; // Email de acceso

	public bool EmailVerified {get; set;} // Verificación de email

	public string? Phone {get; set;} // Teléfono (opcional)

	public string? Image {get; set;} // URL de avatar/foto 

	public UserRole Role {get; set;} // Rol de usuario

	public string? UserName {get; set;} // Nombre de usuario público

	public string? Bio {get; set;} // Biografía corta

	public string? WebsiteUrl {get; set;} // Sitio web personal

	public string? GithubUrl {get; set;} // Perfil de Github

	public string? LinkedinUrl {get; set;} // Perfil de LinkedIn

	public string? StripeCustomerId {get; set;} // ID de cliente en Stripe

	public bool IsActive {get; set;} // Cuenta activa/inactiva

	public DateTime? LastSeenAt {get; set;} // Última vez online

	public DateTime CreatedAt {get; set;} // Fecha de registro

	public DateTime UpdatedAt {get; set;} // Última actualización

	public DateTime? DeletedAt {get; set;} // Soft-delete
}

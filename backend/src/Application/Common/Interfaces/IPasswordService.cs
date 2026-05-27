namespace Cursinet.Application.Common.Interfaces;

public interface IPasswordService
{
    string HashPassword(string password);
    //bool VerifyPassword(bool password, string hash);
}
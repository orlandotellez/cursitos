# Security

Medidas de seguridad.

## Backend

- **JWT rotation**: new access token every 15 min via refresh token
- **Refresh token revocation**: stored in Redis blacklist on logout
- **Rate limiting**: 100 req/min general, 5 req/15min on auth endpoints
- **CORS**: only allow configured origin (NEXT_PUBLIC_APP_URL)
- **Input validation**: FluentValidation before DB
- **No raw SQL**: EF Core parameterized queries
- **File uploads**: validate MIME type + max size + virus scan (ClamAV)
- **Audit logs**: all admin actions logged
- **Security headers**: X-Content-Type-Options, X-Frame-Options, HSTS

## Frontend

- **JWT in memory only** (Zustand, NOT localStorage)
- **httpOnly cookie** for refresh token (inaccessible to JS)
- **CSRF token** on non-GET mutations
- **Content Security Policy** headers
- **Input sanitization** (DOMPurify for user-generated HTML)
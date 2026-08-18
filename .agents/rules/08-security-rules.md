# Security Rules

- **Secrets:** NEVER place API keys, DB URIs, or secrets directly in the source code.
- **Environment:** Use `.env` or `.env.local` for local secrets. Never commit these files.
- **Validation:** Always sanitize and validate user input to prevent XSS and injection attacks.
- **Client Side:** Be extremely careful about what data is passed from Server Components to Client Components.

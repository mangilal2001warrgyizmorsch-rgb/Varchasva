# Backend Rules

*(Note: Currently, the project has no custom backend besides Next.js features)*

- **Next.js API Routes:** If creating API routes, use Next.js Route Handlers (`app/api/.../route.ts`).
- **Validation:** Always validate incoming API requests (e.g., using Zod).
- **Error Handling:** Return standardized JSON error responses with appropriate HTTP status codes.
- **Security:** Do not expose internal server errors directly to the client. Log them securely.

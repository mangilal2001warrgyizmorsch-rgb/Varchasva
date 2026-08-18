# API Rules

- **HTTP Methods:** Respect standard REST semantics (GET for read, POST for create, PUT/PATCH for update, DELETE for removal).
- **Response Structure:** 
  - Success: `{ "data": ... }`
  - Error: `{ "error": "message" }`
- **Versioning:** Consider API versioning if building public-facing APIs (e.g., `/api/v1/...`).
- **Modifications:** When modifying an API, find all consumers to ensure backward compatibility.

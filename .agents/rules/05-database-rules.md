# Database Rules

*(Note: No database is currently integrated)*

- **Structure:** When integrating a database, use an ORM (e.g., Prisma, Drizzle).
- **Migrations:** Never change database structures without running proper migrations and checking dependencies.
- **Integrity:** Rely on database constraints (foreign keys, unique indexes) to ensure data integrity.
- **Transactions:** Use atomic operations for multi-step data modifications.

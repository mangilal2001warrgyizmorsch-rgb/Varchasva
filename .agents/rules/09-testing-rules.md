# Testing Rules

- **Verification:** The agent must verify every meaningful change.
- **Pre-commit Checks:** Ensure `npm run lint` and TypeScript (`tsc --noEmit`) pass before calling a task complete.
- **Build:** Always check if the project can build (`npm run build`) after significant changes.
- **No False Claims:** Do not claim a task is "Done" without running these verifications.

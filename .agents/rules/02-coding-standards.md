# Coding Standards

- **TypeScript:** Use strong typing. Avoid `any` whenever possible.
- **Naming:** 
  - Components: PascalCase (e.g., `HeroSection.tsx`).
  - Functions/Variables: camelCase.
  - Constants: UPPER_SNAKE_CASE.
- **Imports:** 
  - Absolute imports preferred (`@/components/...`).
  - Group third-party imports first, then internal imports.
- **Components:** Favor small, composable, and reusable functional components.
- **File Organization:** Keep related files co-located if they form a feature module, otherwise adhere to the global `/components` structure.

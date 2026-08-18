# Project Architecture

## Tech Stack
- **Framework:** Next.js 16.3.1 (App Router)
- **Frontend:** React 19.2.8, TailwindCSS v4
- **Animations:** Framer Motion
- **Icons:** lucide-react

## Structure
- `/app`: Next.js App Router pages and layouts.
- `/components`:
  - `layout/`: Shared layout components (header, footer).
  - `sections/`: Distinct page sections (e.g., HeroSection).
  - `ui/`: Reusable, generic UI components (buttons, inputs).
- `/constants`: Static configurations and content.

## State Management
- Currently relies on React built-in state (useState, useMemo) and Next.js server components.

## Database & API
- No database or backend framework currently integrated.
- API layer not yet implemented.

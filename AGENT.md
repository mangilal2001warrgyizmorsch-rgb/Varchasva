# Antigravity Agent Configuration (AGENT.md)

This directory serves as the Source of Truth for the Antigravity Agent when working on the `aurum-oil` project.

## Purpose
To ensure the AI Agent develops, debugs, and tests the project consistently, respecting security, architectural, and UI/UX constraints.

## Origins
These rules were structured based on the project's explicit instructions to integrate premium AI website workflows (Claude + Framer Motion + 21st.dev) and have been expanded into a comprehensive Agent rulebook.

## Structure
- `.agents/rules/`: Core behavioral, architectural, and coding rules.
- `.agents/skills/`: Reusable skills (analysis, feature development, debugging) that guide agent workflows.
- `.agents/workflows/`: High-level procedural sequences the agent must follow.

## Precedence
When rules conflict, the agent will follow this precedence:
1. System/platform restrictions.
2. Project security requirements (`08-security-rules.md`).
3. Core project rules (`00-core-rules.md`).
4. Specific project rules (`01` through `11`).
5. Task-specific instructions from the user.
6. General coding preferences.

## Updating Rules
Developers should edit the markdown files in `.agents/rules/` to teach the agent new conventions.

# Debugging Rules

**Workflow:**
1. Reproduce the issue.
2. Read the complete error log.
3. Trace the data/call flow.
4. Identify root cause.
5. Implement the smallest safe fix.
6. Check for regressions.
7. Report cause and fix.

**Forbidden Hacks:**
- Empty try/catch blocks.
- Unjustified `@ts-ignore` or disabling lint rules.
- Removing tests to make CI pass.

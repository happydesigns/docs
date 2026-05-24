---
name: happydesigns-nuxt-ui
description: Use when styling, composing, reviewing, or refactoring Nuxt UI components inside happydesigns projects, including semantic utilities, token-driven color systems, app.config.ts component defaults, tables, forms, navigation, modals, badges, tabs, and dark mode styling.
---

# happydesigns Nuxt UI

Use Nuxt UI as the default component system for happydesigns app surfaces.

## Read first

Use the Docus MCP server or local docs to read:

- `/en/development/nuxt-ui-policy`
- `/en/identity/token-system`
- `/en/identity/brand-layers`

## Styling policy

1. Prefer Nuxt UI components before raw HTML for common app surfaces.
2. Use semantic utilities such as `text-default`, `text-muted`, `text-highlighted`, `bg-default`, `bg-muted`, `bg-elevated`, `border-default`, and `border-muted`.
3. Define custom colors centrally through Tailwind `@theme`, Nuxt UI semantic colors, `app.config.ts`, and `--ui-*` CSS variables.
4. Keep local `ui` overrides small and reusable.
5. Read generated Nuxt UI theme files when customizing slots.
6. Use `UTable` for row and column data instead of rebuilding tables with cards or grids.

## Avoid

- Repeated patterns like `text-gray-900 dark:text-gray-100`.
- Raw palette choices in normal reusable application components.
- One-off component color fixes that should be central token decisions.
- Rebuilding standard Nuxt UI surfaces from scratch.

Raw palette classes are acceptable inside identity or brand layers, logos, controlled illustrations, brand canvas areas, and deliberate art direction.

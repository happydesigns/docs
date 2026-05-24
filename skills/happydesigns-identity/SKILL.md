---
name: happydesigns-identity
description: Use when creating, modifying, reviewing, or applying happydesigns identity systems, brand layers, client identity layers, tokens, logos, Nuxt UI semantic color mappings, or brand-specific Docus styling.
---

# happydesigns Identity

Use this skill for identity and brand-layer work.

## Read first

Use the Docus MCP server or local docs to read:

- `/en/identity`
- `/en/identity/what-is-id`
- `/en/identity/brand-layers`
- `/en/identity/happydesigns-brand`
- `/en/identity/client-identities`
- `/en/identity/token-system`
- `/en/development/nuxt-ui-policy`

## Core model

```txt
ui = interface foundation
id = identity / brand-layer system
brand = current concrete happydesigns brand implementation
```

## Workflow

1. Distinguish the generic `id` system from the current `happydesigns/brand` implementation.
2. Build identity on top of `ui`; do not move brand expression into `ui`.
3. Define raw palettes centrally in the identity or brand layer.
4. Map colors to Nuxt UI semantic colors in `app.config.ts`.
5. Centralize `--ui-*` variables and component defaults.
6. Keep brand layers presentation-only.
7. Use client identity layers instead of forking base UI or product logic.

## Do not

- Put authorization, tenant isolation, audit behavior, invoice numbering, E-Rechnung generation, API behavior, webhooks, MCP tools, or production credentials in a brand layer.
- Scatter raw palette classes and `dark:` variants through reusable components.
- Treat the current `brand` repo name as the final generic identity product name.

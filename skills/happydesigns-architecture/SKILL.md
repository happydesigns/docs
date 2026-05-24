---
name: happydesigns-architecture
description: Use when modifying or creating happydesigns projects, packages, Nuxt layers, Nuxt modules, Docus docs, product architecture, or AI agent workflows. Guides agents to preserve product boundaries, layered architecture, brand-neutral cores, and durable documentation practices.
---

# happydesigns Architecture

Before changing architecture, identify which happydesigns product, layer, or project is being changed.

## Read first

Use the Docus MCP server or local docs to read:

- `/en/architecture/layered-architecture`
- `/en/architecture/runtime-placement`
- `/en/architecture/separation-of-concern`
- `/en/architecture/extensibility`
- `/en/architecture/where-code-belongs`
- `/en/ai/agent-workflow`

## Workflow

1. Inspect the repo structure before editing.
2. Decide whether the change belongs in docs, `ui`, `identity` / brand layer, product app, Nuxt module, Nitro/server code, or a plain TypeScript package.
3. Use Nuxt layers for presentation, branding, layouts, pages, components, and app config.
4. Use Nuxt modules for installable behavior, hooks, routes, runtime config, generated files, and typed integrations.
5. Use plain TypeScript packages for deterministic domain logic.
6. Keep product cores brand-neutral.
7. Keep temporary planning in `.agents/` or Business OS, not published docs.
8. Make the smallest change that preserves the boundary.

## Do not

- Put business behavior in brand layers.
- Put brand-specific identity in `ui`.
- Duplicate behavior between UI, API, MCP, webhooks, and jobs.
- Invent custom extension systems when Nuxt layers, Nuxt modules, Nitro, API, webhooks, OAuth, or MCP are enough.
- Publish unstable task notes as durable documentation.

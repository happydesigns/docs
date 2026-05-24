# docs.happydesigns.de

The Docus documentation site for the happydesigns ecosystem.

This repository contains the central operating manual for happydesigns: product boundaries, architecture principles, identity and brand-layer strategy, development policy, Nuxt UI usage, Docus authoring policy, and AI/agent workflow.

## Setup

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

## Content model

The site keeps the Docus i18n structure. English is the active documentation pass:

```txt
content/
  en/
    index.md
    1.start/          # ecosystem operating model
    2.architecture/   # product and runtime placement
    3.development/    # build, docs, and Nuxt UI policy
    4.identity/       # identity and brand-layer strategy
    5.products/       # product map and boundaries
    6.ai/             # MCP, LLM, and agent workflow
```

German is configured as the next intended locale, but German content is not part of the initial pass.

Pages use Docus frontmatter for titles and descriptions. Do not repeat a page title as the first Markdown heading. Use Mermaid diagrams where a diagram explains architecture better than prose.

## Published skills

Docus serves root `skills/` directories at `/.well-known/skills/`.

Initial skills:

- `happydesigns-architecture`
- `happydesigns-identity`
- `happydesigns-nuxt-ui`
- `happydesigns-docs`

## Scope

This site is not a customer help center, full product API reference, or copy of Nuxt, Docus, or Nuxt UI documentation.

Customer-facing guidance belongs later in `help.happydesigns.de`. Product-specific deep docs may later live at dedicated product docs sites.

## Contributing

Read `CONTRIBUTING.md` before changing the repository. Keep changes focused, use Conventional Commits, and avoid publishing `.agents/` scratch work as documentation.

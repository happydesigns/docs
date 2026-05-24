# docs.happydesigns.de

The Docus documentation site for the happydesigns ecosystem.

This repository contains the central operating manual for happydesigns: product boundaries, architecture principles, identity and brand-layer strategy, development policy, Nuxt UI usage, and AI/agent workflow.

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

The site keeps the Docus i18n structure. English content is the first published documentation pass:

```txt
content/
  en/
    index.md
    1.start/
    2.architecture/
    3.development/
    4.identity/
    5.products/
    6.ai/
```

German is configured as the next intended locale, but German content is not part of the initial pass.

## Published skills

Docus serves root `skills/` directories at `/.well-known/skills/`.

Initial skills:

- `happydesigns-architecture`
- `happydesigns-identity`
- `happydesigns-nuxt-ui`

## Scope

This site is not a customer help center, full product API reference, or copy of Nuxt, Docus, or Nuxt UI documentation.

Customer-facing guidance belongs later in `help.happydesigns.de`. Product-specific deep docs may later live at dedicated product docs sites.

## Contributing

Read `CONTRIBUTING.md` before changing the repository. Keep changes focused, use Conventional Commits, and avoid publishing `.agents/` scratch work as documentation.

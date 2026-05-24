---
name: happydesigns-docs
description: Use when writing, reviewing, restructuring, or publishing happydesigns Docus documentation, including page structure, navigation, i18n, Mermaid diagrams, source-of-truth rules, skills, MCP, LLM files, and no-duplication policy.
---

# happydesigns Docs

Use this skill for Docus documentation work in happydesigns repositories.

## Read first

Use the Docus MCP server or local docs to read:

- `/en/start/source-of-truth`
- `/en/development/content-and-docs`
- `/en/development/docus-authoring`
- `/en/products/docs`
- `/en/ai/llms`
- `/en/ai/agent-skills`
- `/en/ai/agent-acceptance-checklist`

## Authoring policy

1. Use frontmatter `title` and `description`; do not repeat the page title as the first Markdown heading.
2. Write durable strategy, architecture, and workflow guidance, not temporary task state.
3. Use prose for intent, tables for decisions, Mermaid for architecture flows, and MDC components only when they improve navigation or scanning.
4. Keep English as the active content pass until German translation is intentionally created.
5. Keep product-specific implementation detail in product docs, not the ecosystem operating manual.
6. Keep customer-facing instructions for future help docs.
7. Prefer Docus default aside navigation for one operating manual. Use header sub-navigation only when the IA needs a real third layer or distinct personas/modes.
8. Update skills when docs paths or agent workflows change.

## Do not

- Publish `.agents/` scratch work.
- Copy Nuxt, Docus, Nuxt Content, Nuxt UI, or product API reference docs.
- Create duplicate section-title pages.
- Leave stale package names, old paths, or broken read-next links.
- Add German pages by copying English content without translation.

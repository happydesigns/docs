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
2. Write for humans first: fold purpose into opening prose, then use headings only for real content groups.
3. Do not assume readers have read previous pages. Give enough local context for the page decision without copying boilerplate definitions everywhere.
4. Prefer clearer concrete words before defining hard terms. Replace broad shorthand such as `surface` with `page`, `app`, `API`, `entry point`, `UI area`, or `docs site` when one of those is accurate.
5. Define hard terms locally only when the term is necessary. Keep definitions short and link to the deeper model when useful.
6. Write stable strategy, architecture, and workflow guidance, not temporary task state.
7. Add a section heading before substantive lists, tables, diagrams, code blocks, or decision models.
8. Choose a page type before choosing headings: landing, model, boundary, workflow, policy, or product role page.
9. Use prose for intent, tables for decisions, ordered lists for sequences, and MDC components only when they improve navigation or scanning.
10. Product role pages describe canonical ownership, domains, repositories, and packages. Do not add `planned`, `future`, `coming soon`, or `current vs planned` labels.
11. Keep English as the canonical source language. Add German pages only as translated, reviewed documentation.
12. Keep product-specific implementation detail in product docs, not the ecosystem operating manual.
13. Keep customer-facing instructions for customer help docs.
14. Prefer Docus default aside navigation for one operating manual. Use header sub-navigation only when the IA needs a real third layer or distinct personas/modes.
15. Use Mermaid only for topology, branching, convergence, feedback loops, or ownership flows. Explain how to read each diagram in prose.
16. Use ordered lists for simple sequences and tables for comparisons.
17. Rely on Docus navigation and previous/next controls for sequential reading. Use inline links where the prose needs them; do not add blanket `Read next` sections.
18. Update skills when docs paths or agent workflows change.

## Do not

- Publish `.agents/` temporary task notes.
- Copy Nuxt, Docus, Nuxt Content, Nuxt UI, or product API reference docs.
- Create duplicate section-title pages.
- Leave stale package names, old paths, or broken internal links.
- Add German pages by copying English content without translation.

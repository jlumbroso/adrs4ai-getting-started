# Tested contract — what this guide was verified against, and when

*The guide should have a tested contract with its template, not merely
a link to whatever the template becomes next (external review,
2026-11-05). This file is that contract; update it whenever a claim
in the guide is re-verified.*

| Claim in the guide | Verified against | Date |
|---|---|---|
| Template path (`Use this template`, `docs/adr/templates/` present) | `ADRs4AI/human-ai-collaboration-template-A` @ `081555a` (v3.12.3, public, `is_template: true`); **v3.12.4 released 2026-11-05** (⟦HUMAN-NAME⟧ sigil, registry_lib restores refresh-terminals, MCP consent default false) — new clones get it; MCP-prompt text written against it | 2026-11-05 |
| asdf commands (`set -u`, shims PATH line) | asdf 0.18.0 installed / 0.20.2 brew-current; upstream getting-started | 2026-11-05 |
| Claude Code install methods (native installer, brew cask, npm/Node 22+) | code.claude.com/docs/en/setup, fetched live | 2026-11-04 |
| Capstone memory isolation (`CLAUDE_CODE_DISABLE_AUTO_MEMORY=1`) | code.claude.com/docs/en/memory (second-round review citation) | 2026-11-05 |
| Extension views (QST render, answer flow, empty queue) | `jlumbroso.adrs4ai` 1.4.5 in VS Code 1.145.0 (reviewer's Linux sandbox) and macOS VS Code (author's captures) | 2026-11-05 |
| Phone answering cycle | GitHub mobile on iOS, author's device | 2026-11-05 |
| GitHub Pages free-plan/public-repo rule | docs.github.com Pages availability (first-round review citation) | 2026-11-05 |
| Python course pin 3.12.4 | course fleet (cam machines) | 2026-11-05 |

**Not yet verified** (the pilot's job): a clean-account macOS
walkthrough end-to-end; novice completion time; Windows notes
(partial orientation only); Android phone cycle; the Actions-only
no-local-Node build path.

Screenshot provenance: `static/shots/` mixes the author's macOS
captures with a reviewer's Linux-sandbox captures (labeled in each
caption); full pack with checksums in the course records.

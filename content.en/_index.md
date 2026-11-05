---
title: Getting started
type: docs
---

# ADRs for AI — getting started

A guided, checkable walkthrough that takes you from a bare machine to
your first **deliberatively-built project**: a small game, live on the
internet, built *with* a model collaborator — and the decisions behind
it on the record, where you can find them again.

*The walkthrough is the macOS course path (CIS 7000-008); it assumes
an Anthropic account with Claude Code access — outside readers, check
that prerequisite first.*

**Three chapters, one path:**

1. **[Why are we doing this?]({{< relref "/docs/01-why" >}})** — one
   page, before any terminal.
2. **[Setting up your tools]({{< relref "/docs/02-setup" >}})** — the
   terminal and Claude Code first, then the foundation, each tool with
   its *why*. (~40 min of steps; installs and logins extra)
3. **[Your first project]({{< relref "/docs/03-first-project" >}})** —
   template → recruit → first decisions → live on GitHub Pages → the
   cold-resumption capstone. (~60 min of steps)

## How to read this guide {#how-to-read}

Two terms and three bracket species worth knowing up front:
an **ADR** (*Architectural Deliberation Record* — the template's own
expansion, with the industry's "Architecture Decision Record" as its
ancestor) is one file of recorded decisions in `docs/adr/`; a
**question card** is one block inside it — options, a recommendation,
an *If wrong* line, and an `ANS:` slot for you. Brackets, three
species: `⟨github-username⟩` — this site fills it once you set your
variables; `⟦LIKE-THIS⟧` — template placeholders your collaborator
fills; `[Fill this in]` — the one blank that's *yours*, the answer
slot. Click any dark code block to copy it.

Every step says how to verify it worked, your checkmarks persist in
your browser (they never leave it), and the
**[All tasks]({{< relref "/tasks" >}})** page shows the whole trail in
one place.

*Changelog — 2026-11-05: revised after three external reviews.
Alacritty step removed (its install is disabled upstream);
crew-relaunch step removed (template recipe broken at its HEAD, since
fixed upstream — returns after re-testing); the example card repaired
to the method's own spec; the capstone gained its rubric.*

> **You're among the first to walk this guide.** Where it doesn't
> match what you see, that's the guide failing you, not the reverse —
> every step carries a one-click *"this doesn't match what I see"*
> link, and that feedback is part of the design.

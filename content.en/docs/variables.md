---
title: "Your variables"
weight: 90
bookToc: false
---

# Your variables

This guide personalizes itself. Two values, entered once, appear in
every command that needs them — so what you copy-paste is already
*yours*, not a template you have to patch by hand.

{{< var-input github-username "Your GitHub username" >}}
{{< var-input project-name "Your repository name" "wordle-with-records" >}}

**Where they live**: in your browser's local storage, and nowhere
else. They never leave your machine, we never see them, and clearing
your browser data clears them (the guide then just shows the
placeholders again). You can change them here any time and every page
updates.

**What belongs here — and what never does**: these slots hold
*identifiers* — names that are public anyway, like a GitHub username.
No step of this guide will ever ask you to enter a password, a token,
or an API key into a page — if something that looks like this guide
ever does, that's a bug *and* a lesson: [report it](https://github.com/jlumbroso/adrs4ai-getting-started/issues/new?title=%5Bvariables%5D%20a%20page%20asked%20for%20a%20secret).

**Why a guide would bother**: half the friction in setup guides is the
silent *"replace YOUR-NAME-HERE"* step — it's where typos live and
where copy-paste confidence dies. Naming the variables, and being
explicit about where they're stored, is the same move this whole
methodology makes with decisions: what's implicit rots; what's written
down can be checked.

---
title: "Chapter 3 — Your first project"
weight: 30
steps:
  - id: gh-signup
    title: "A GitHub account"
    minutes: 4
    context: >-
      GitHub is where your project's code, its decision records, and (in
      a few steps) its live website all live. If you already have an
      account, enter your username below and skip to P2.
    verify: "you can log in at github.com, and your username is saved below (it personalizes the rest of this guide)"
  - id: gh-login
    title: "Log the tools in"
    minutes: 2
    context: >-
      The `gh` tool from Chapter 2 acts *as you* — so it has to know who
      you are. This connects the command line to the account you just
      made.
    verify: "`gh auth status` shows your new username"
    requires: [gh-signup, setup-gh]
  - id: use-template
    title: "Your repository, from the template"
    minutes: 3
    context: >-
      The methodology ships as a *template repository* — a project
      pre-shaped for working with model collaborators (the
      decision-record folders, the house rules, the terminal recipes).
      Template, not fork: your copy starts its own history, owned by you.
    verify: "your browser is on your new repository's page, and the file list shows `docs/`, `CLAUDE.md`, `justfile`"
    requires: [gh-signup]
    media:
      screenshot: /shots/use-template-button.png
  - id: clone-open
    title: "Clone it, open it"
    minutes: 3
    context: >-
      The repository needs to be on your machine, open in your editor,
      with a terminal in its folder — that trio is the working posture
      for everything that follows.
    verify: "VS Code shows the project files on the left; `ls` in its terminal shows `CLAUDE.md`"
    requires: [use-template, setup-vscode]
  - id: recruit
    title: "Recruit your collaborator — mission and project, one paste"
    minutes: 12
    context: >-
      This is the step that makes the project different from a chat
      window. You're not summoning a tool — you're recruiting a
      collaborator into a mission, and the difference is enacted, not
      poetic: they read the mission first, *consent* to it, and pick
      their own name. The paste below carries the mission AND the
      project, so one message starts everything.
    verify: "your collaborator has a name; `CLAUDE.md`'s AI line carries it; `git log` shows their configuration commit"
    requires: [clone-open, setup-claude-code]
  - id: project-blurb
    title: "The questions come back"
    minutes: 5
    context: >-
      A good first ask carries the *what* and leaves the *how* open —
      which is why your paste asked for decisions, not code. What
      returns is the methodology's native move, and it's worth reading
      slowly the first time.
    verify: "your collaborator answered with *QST cards*, not code — each carrying options, a recommendation, and an *If wrong:* line"
    requires: [recruit]
  - id: first-answers
    title: "Your first answers, four ways"
    minutes: 12
    context: >-
      Each card has a recommendation: their pick, the reasoning, a
      confidence, and (read this part twice) an ***If wrong:*** line
      naming what would change their mind. That last line is the heart
      of the method: a position stated so it can be *checked*, not
      performed so it can be believed. You are the decider; the cards
      protect your attention — because the reasoning is on the page,
      agreeing costs you two words.
    verify: "every QST shows answered (the extension's list drains to zero), and your collaborator is building"
    requires: [project-blurb, setup-extensions]
  - id: ship-pages
    title: "Ship it"
    minutes: 10
    context: >-
      The decisions you made govern the build; this is where they become
      a thing on the internet with your name on it.
    verify: "the game loads at your `*.github.io` URL and a CS word wins a round"
    requires: [first-answers]
  - id: tweaks
    title: "Tweaks, the deliberate way"
    minutes: 8
    context: >-
      The first change *after* a build is where vibe coding usually
      starts shedding context. Not here — one more decision, on the
      record.
    verify: "the tweak is live, and `grep -rn '^### QST' docs/adr/` shows your decisions accumulating — that grep is the whole retrieval system, forever"
    requires: [ship-pages]
  - id: terminals
    title: "The crew, one click"
    minutes: 4
    context: >-
      Real projects grow more than one collaborator session, and
      reopening them one by one gets old. The template ships the cure.
    verify: "Terminals: Run opens your collaborator's terminal(s) automatically"
    requires: [recruit]
---

# Chapter 3 — Your first project

*A real project: a Wordle variant, live on GitHub Pages, built with a
model collaborator — and your first decisions on the record. Budget
~60 minutes; each step shows its own estimate, and your actual times
are something we genuinely want to hear about. One path; each step
says how to verify it worked.*

{{< step gh-signup >}}
Go to [github.com/signup](https://github.com/signup). Don't stall on
the username — you can change it later (Settings → Account), add or
swap email addresses, all of it. Pick something and move.

Then tell the guide who you are — this stays in your browser and
personalizes every command below:

{{< var-input github-username "Your GitHub username" >}}

<!-- screenshot: gh-signup -->
{{< /step >}}

{{< step gh-login >}}
If you skipped T5's login earlier (no account yet), now:

```bash
gh auth login
```

Pick **GitHub.com** → **HTTPS** → **login with a web browser**, and
follow the code it shows you.

{{< expand "What each word does" >}}
- `gh` — GitHub's command-line client (installed in T5).
- `auth` — its authentication command group.
- `login` — start a new login: it opens github.com in your browser, shows you a one-time code to type there, and stores the resulting credential locally so every later `gh` command acts as {{< var github-username >}}.
{{< /expand >}}
{{< /step >}}

{{< step use-template >}}
Go to
[github.com/ADRs4AI/human-ai-collaboration-template-A](https://github.com/ADRs4AI/human-ai-collaboration-template-A),
press the green **Use this template** button (top right — it appears
once you're logged in; the screenshot below shows the page before
login, where the green **Code** button sits in its place) → *Create a
new repository* → name it — `wordle-with-records` is the name this
guide uses below, but it's yours:

{{< var-input project-name "Your repository name" "wordle-with-records" >}}

→ **Private** is fine → Create.

<!-- screenshot: use-template-button -->
{{< /step >}}

{{< step clone-open >}}
```bash
gh repo clone {{< var github-username >}}/{{< var project-name >}}
cd {{< var project-name >}}
code .
```

{{< expand "What each word does" >}}
- `gh repo clone` — copy a repository from GitHub to this machine, wired up so pushes go back to it.
- `{{< var github-username >}}/{{< var project-name >}}` — whose repository, and which one.
- `cd {{< var project-name >}}` — move this terminal into the folder the clone just created (*change directory*).
- `code .` — open VS Code on the current folder (`.` means "right here"), so the editor sees the whole project.
{{< /expand >}}

Then, inside VS Code: open the built-in terminal (ctrl-backtick). That
terminal is already in the project folder — it's where the next steps
happen.
{{< /step >}}

{{< step recruit >}}
In the VS Code terminal, run `claude`. First launch in a new folder
asks setup questions — trust the folder (yes — it's your own
repository), and project MCP servers (enable is fine).

Then paste this — **the mission and the project together, one
message** (edit the project half freely; it's yours):

```text
Hello — I have a mission for you: my first deliberatively-built project. Read CLAUDE.md and tell me if you accept — any pushback welcome. If you accept: configure the template (the ⟦⟧ placeholders and whatever else it asks), introduce yourself, and then we start on this:

The project is a Wordle variant — guess the word, colored feedback per letter — with a twist: the answers are computer science words (ARRAY, STACK, QUEUE, CACHE, TOKEN…). I want it hosted free on GitHub Pages, built with Vue using scoped CSS so styles stay component-local. Before you write any code: what are the 2–3 decisions we should settle first? Put them to me as proper QST cards in the record — with your recommendation on each.
```

They'll read, decide, name themselves, fill the template's
placeholders (asking you for anything that's genuinely yours to
answer), commit the configuration — and then turn to the project.

<!-- screenshot: recruit-consent -->
{{< /step >}}

{{< step project-blurb >}}
What comes back will look something like this (a real emission from
this exact blurb — yours will differ, and should):

> ### QST-VUE-SHAPE: single-file Vue from a CDN, or a Vite build with an Actions deploy?
> - Status: unanswered
> - Why asking: "Vue with scoped CSS on GitHub Pages" hides a real
>   fork — scoped CSS is a single-file-component feature, and SFCs
>   want a build step.
>
> Options:
> - **A — One index.html, Vue from a CDN**: no build, push and it's
>   live. But "scoped" CSS becomes a naming convention we keep by
>   discipline.
> - **B — Vite project + GitHub Action deploying to Pages**: true
>   scoped styles, the standard modern path. Costs one workflow file.
>
> **Recommendation**: **B.** *Rationale*: the project's own stated
> constraint is *scoped CSS* — A quietly downgrades it from a language
> feature to a promise. *Confidence*: 0.7. ***If wrong***: if the
> Actions setup eats more than ~15 minutes, A ships tonight and B
> becomes a recorded follow-up.

Notice what that is: options you can weigh without leaving the block,
a committed position, and the fact that would change it. Questions
like these — usually two or three — are now sitting in your
`docs/adr/` folder, waiting for you.

<!-- screenshot: adr-qst-rendered -->
{{< /step >}}

{{< step first-answers >}}
Answer each of your cards a different way, on purpose, to see that the
record doesn't care where answers come from:

1. **In the extension**: click the ADRs-for-AI icon in VS Code's
   sidebar — open questions appear as a list; open one, read the
   recommendation, type your answer in the ANS box. ("A, agreed." is a
   complete answer when you agree — the *why* is already on the page.
   Diverging? Then say why; the slot has no size limit.)
2. **Manually**: open the ADR file itself, find the next card's
   `**ANS:**` line (the `[Fill this in]` placeholder marks the blank),
   and type your answer right in the file. Save. That's it — the
   extension and the model read the same file you just edited; there
   is no database, and now you know it.
3. **From your phone**: install the [GitHub mobile app](https://github.com/mobile),
   open your repository → the ADR file → edit → answer the third card
   → commit from your thumbs. Decisions don't wait for your desk.
   *(Pull before the next step: `git pull` in the terminal.)*
4. **Notify the seat**: back in the terminal, tell your collaborator:
   *"I've answered everything — pull, read, and proceed."* Watch what
   happens: they read your answers *from the files*, update the
   records, and start building — no re-explaining, no "as I mentioned
   above." The record carried it.

<!-- screenshot: extension-qst-view -->
{{< /step >}}

{{< step ship-pages >}}
Your collaborator builds the Wordle and sets up GitHub Pages
deployment (they know how; the decisions you made in P7 govern the
details — ask them to walk you through enabling Pages if a browser
step needs your click). When they give you a link at
`{{< var github-username >}}.github.io`, open it. Play a round. You
built that — the two of you.

<!-- screenshot: pages-live -->
{{< /step >}}

{{< step tweaks >}}
Pick any tweak you actually want — hard mode, a streak counter, dark
theme, more words, a hint system. Ask for it the same way: *"I want X
— if there's a real fork in how, QST it; if not, just build."* Small
tweaks won't need a card; one of yours probably will. Answer it
whichever of the four ways you liked best.
{{< /step >}}

{{< step terminals >}}
In the project terminal:

```bash
just refresh-terminals
```

{{< expand "What each word does" >}}
- `just` — a command runner the template ships configured; it reads the project's `justfile`, a menu of named recipes.
- `refresh-terminals` — the recipe that regenerates `.vscode/terminals.json`: the list of model-collaborator terminals this project knows how to reopen.
{{< /expand >}}

…then ⌘-shift-P → **Terminals: Run**. Every configured session
launches at once. Tomorrow, when you reopen this project: `code .`,
one Terminals: Run, and the crew is back — reading the same records
you and they wrote today, remembering *why* everything is the way it
is.

<!-- screenshot: terminals-run -->

That's the guide — and you're among the first to walk it: your stall
points are worth more to us than your successes.
{{< /step >}}

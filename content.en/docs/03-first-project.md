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
      screenshot: shots/use-template-button.png
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
    title: "Your first answers"
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
    verify: "the tweak is live, and `grep -rn '^### QST' docs/adr/` shows your decisions accumulating — that grep is retrieval enough for this first walk"
    requires: [ship-pages]
  - id: cold-resume
    title: "The capstone: can a stranger recover the why?"
    minutes: 8
    context: >-
      Chapter 1 promised that the *why* survives the conversation that
      produced it. That's a testable claim, and you're about to test it
      — on a session with no memory of anything you did today.
    verify: "the fresh session points to the file and section for a decision, a rejected alternative, the why, and the reopen condition — or honestly names what's missing instead of inventing it"
    requires: [tweaks]
  - id: terminals
    title: "The crew, one click (optional extension)"
    minutes: 4
    optional: true
    context: >-
      Real projects grow more than one collaborator session, and
      reopening them one by one gets old. The template ships the cure —
      but its full machinery (tmux, the pneumatic launcher) is beyond
      this guide's installed path, so this is an extension to do with
      your collaborator, not a required step.
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
If you skipped the login during Chapter 2's *Command-line tools* step
(no account yet), now:

```bash
gh auth login
```

Pick **GitHub.com** → **HTTPS** → **login with a web browser**, and
follow the code it shows you.

{{< expand "What each word does" >}}
- `gh` — GitHub's command-line client (installed in Chapter 2's *Command-line tools* step).
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

→ **Public** (the free-hosting path: GitHub Pages on a free account
needs a public repository — your code and records will be visible,
which for this project is a feature; want private source anyway? The
site step then needs a paid plan, or a different host — your call,
made knowingly) → Create.

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
repository), and project MCP servers (**skip/decline for now**: the
template's server wants Node, which this path doesn't install;
nothing in this hour needs it).

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
> feature to a promise. *Confidence*: 0.7. ***If wrong***: if
> deployment fights us past ~15 minutes, I pause and ask you whether
> to relax scoped CSS, extend the budget, or pick another path — and
> we record whichever trade-off you accept.

Notice the *If wrong* doesn't quietly give away the thing the
recommendation was protecting — it hands the trade-off back to the
decider. If a falsifier ever relaxes your own requirement without
asking you, send it back.

Notice what that is: options you can weigh without leaving the block,
a committed position, and the fact that would change it. Two or three
like it are now in your `docs/adr/` folder, waiting for you.

<!-- screenshot: adr-qst-rendered -->
{{< /step >}}

{{< step first-answers >}}
**Pick one place to answer** — both read and write the same files,
and seeing that is the lesson:

1. **The extension**: click the ADRs-for-AI icon in VS Code's
   sidebar — open questions appear as a list; open one, read the
   recommendation, type your answer in the ANS box. ("A, agreed." is a
   complete answer when you agree — the *why* is already on the page.
   Diverging? Then say why; the slot has no size limit.)
2. **The file itself**: open the ADR, find each card's `**ANS:**` line
   (the `[Fill this in]` placeholder marks the blank), type your
   answer, save. There is no database — and now you know it.

**Then notify**: in the terminal, tell your collaborator *"I've
answered everything — read and proceed."* They read your answers
*from the files*, update the records, and start building — no
re-explaining. The record carried it.

{{< expand "Optional, after: answer from your phone — the full cycle" >}}
Decisions don't have to wait for your desk, but crossing devices means
meeting git's three distinct moves, in order:

1. **Publish what's local**: in the terminal — `git add -A && git
   commit -m "answers" && git push`. *Saving* a file changed your
   disk; *committing* recorded it in history; *pushing* put it on
   GitHub where your phone can see it. Three different things.
2. On the [GitHub mobile app](https://github.com/mobile): your
   repository → the ADR file → edit → change or extend one answer →
   commit from your thumbs.
3. **Pull before touching anything locally**: `git pull`. Your phone's
   commit now exists on your machine too. Skipping this is how two
   versions of the truth get born.

(We tested this on iOS; Android should match — tell us.)
{{< /expand >}}

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

{{< step cold-resume >}}
Your collaborator knows why everything is the way it is — but they
were *there*. The records only matter if someone who wasn't can
recover the reasoning. Test it:

Open a **new terminal** in the project and start a **fresh** session
(`claude` — a new session has no memory of today). Paste:

```text
Read the project records in docs/adr/. Identify one decision we made, an alternative we rejected, why we rejected it, and what would make us reconsider. Point to the file and section for each. If something is missing from the records, say so rather than reconstructing it.
```

Compare the answer with what actually happened. Success is **supported
reasoning and honest gaps** — not a plausible story. Then try the
second half: name one changed constraint (say, "word packs per course
week are now wanted") and ask whether any recorded decision should
reopen. Watch the *If wrong* lines earn their keep.

That — not trust, not vibes — is what the records were for.
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
launches at once. Tomorrow: `code .`, one Terminals: Run, and the crew
is back — reading the records you both wrote today, remembering *why*
everything is the way it is.

<!-- screenshot: terminals-run -->
{{< /step >}}

That's the guide — and you're among the first to walk it: your stall
points are worth more to us than your successes. The
[two-minute debrief](../04-tell-us/) closes the loop.

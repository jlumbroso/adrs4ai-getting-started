---
title: "Chapter 3 — Your first project"
weight: 30
steps:
  - id: gh-signup
    title: "A GitHub account"
    context: >-
      GitHub is where your project's code, its decision records, and (in
      a few steps) its live website all live. If you already have an
      account, skip to P2.
    verify: "you can log in at github.com"
  - id: gh-login
    title: "Log the tools in"
    context: >-
      The `gh` tool from Chapter 2 acts *as you* — so it has to know who
      you are. This connects the command line to the account you just
      made.
    verify: "`gh auth status` shows your new username"
    requires: [gh-signup, setup-gh]
  - id: use-template
    title: "Your repository, from the template"
    context: >-
      The methodology ships as a *template repository* — a project
      pre-shaped for working with model collaborators (the
      decision-record folders, the house rules, the terminal recipes).
      Template, not fork: your copy starts its own history, owned by you.
    verify: "your browser is on `github.com/YOU/your-name`, and the file list shows `docs/`, `CLAUDE.md`, `justfile`"
    requires: [gh-signup]
  - id: clone-open
    title: "Clone it, open it"
    context: >-
      The repository needs to be on your machine, open in your editor,
      with a terminal in its folder — that trio is the working posture
      for everything that follows.
    verify: "VS Code shows the project files on the left; `ls` in its terminal shows `CLAUDE.md`"
    requires: [use-template, setup-vscode]
  - id: recruit
    title: "Recruit your collaborator"
    context: >-
      This is the step that makes the project different from a chat
      window. You're not summoning a tool — you're recruiting a
      collaborator into a mission, and the difference is enacted, not
      poetic: they read the mission first, *consent* to it, and pick
      their own name. A collaborator who joined is one whose role
      survives between sessions — it's written in the record.
    verify: "your collaborator has a name; `CLAUDE.md`'s AI line carries it; `git log` shows their configuration commit"
    requires: [clone-open, setup-claude-code]
  - id: project-blurb
    title: "The project blurb"
    context: >-
      A good first ask carries the *what* and leaves the *how* open —
      that's what makes the next step's questions real instead of
      decorative.
    verify: "your collaborator answers with *questions*, not code"
    requires: [recruit]
  - id: first-answers
    title: "Your first answers, four ways"
    context: >-
      What came back is 2–3 **QST cards** — each with options, a
      recommendation, the reasoning, a confidence, and (read this part
      twice) an ***If wrong:*** line naming what would change their
      mind. That last line is the heart of the method: a position stated
      so it can be *checked*, not performed so it can be believed. You
      are the decider; the cards protect your attention — because the
      reasoning is on the page, agreeing costs you two words.
    verify: "every QST shows answered (the extension's list drains to zero), and your collaborator is building"
    requires: [project-blurb, setup-extensions]
  - id: ship-pages
    title: "Ship it"
    context: >-
      The decisions you made govern the build; this is where they become
      a thing on the internet with your name on it.
    verify: "the game loads at your `*.github.io` URL and a CS word wins a round"
    requires: [first-answers]
  - id: tweaks
    title: "Tweaks, the deliberate way"
    context: >-
      The first change *after* a build is where vibe coding usually
      starts shedding context. Not here — one more decision, on the
      record.
    verify: "the tweak is live, and `grep -rn '^### QST' docs/adr/` shows your decisions accumulating — that grep is the whole retrieval system, forever"
    requires: [ship-pages]
  - id: terminals
    title: "The crew, one click"
    context: >-
      Real projects grow more than one collaborator session, and
      reopening them one by one gets old. The template ships the cure.
    verify: "Terminals: Run opens your collaborator's terminal(s) automatically"
    requires: [recruit]
---

# Chapter 3 — Your first project

*A real project: a Wordle variant, live on GitHub Pages, built with a
model collaborator — and your first decisions on the record. Budget
45–60 minutes. One path; each step says how to verify it worked.*

{{< step gh-signup >}}
Go to [github.com/signup](https://github.com/signup). Don't stall on
the username — you can change it later (Settings → Account), add or
swap email addresses, all of it. Pick something and move.

<!-- screenshot: gh-signup -->
{{< /step >}}

{{< step gh-login >}}
If you skipped T5's login earlier (no account yet), now:
`gh auth login` → GitHub.com → HTTPS → browser flow.
{{< /step >}}

{{< step use-template >}}
Go to
[github.com/ADRs4AI/human-ai-collaboration-template-A](https://github.com/ADRs4AI/human-ai-collaboration-template-A),
press the green **Use this template** button (top right) → *Create a
new repository* → name it — `wordle-with-records` is a fine name, but
it's yours → **Private** is fine → Create.

<!-- screenshot: use-template-button -->
{{< /step >}}

{{< step clone-open >}}
```bash
gh repo clone YOUR-NAME-HERE
cd YOUR-NAME-HERE
code .
```

(Replace `YOUR-NAME-HERE` with the repository name from P3. If `gh`
asks which account/owner, pick yourself.)

Then, inside VS Code: open the built-in terminal (ctrl-backtick). That
terminal is already in the project folder — it's where the next steps
happen.
{{< /step >}}

{{< step recruit >}}
In the VS Code terminal, run `claude`. First launch in a new folder
asks setup questions — trust the folder (yes — it's your own
repository), and project MCP servers (enable is fine). Then say, like
you mean it:

> Hello — I have a mission for you: my first deliberatively-built
> project. Read CLAUDE.md, tell me if you accept — any pushback
> welcome. If you accept: please configure the template (the ⟦⟧
> placeholders and whatever else it asks), introduce yourself, and
> tell me when the project is ready for its first real decision.

They'll read, decide, name themselves, fill the template's
placeholders (asking you for anything that's genuinely yours to
answer, like the project's one-line description), and commit the
configuration.

<!-- screenshot: recruit-consent -->
{{< /step >}}

{{< step project-blurb >}}
Paste this to your collaborator (edit freely — it's your project):

> Here's the project: a **Wordle variant** — guess the word, colored
> feedback per letter — with a twist: the answers are **computer
> science words** (ARRAY, STACK, QUEUE, CACHE, TOKEN…). I want it
> **hosted free on GitHub Pages**, built with **Vue, using scoped
> CSS** so styles stay component-local. Before you write code: what
> are the 2–3 decisions we should settle first? Put them to me as
> proper QST cards in the record — with your recommendation on each.
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
step needs your click). When they give you a `github.io` link, open
it. Play a round. You built that — the two of you.

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

…then ⌘-shift-P → **Terminals: Run**. Every configured session
launches at once. Tomorrow, when you reopen this project: `code .`,
one Terminals: Run, and the crew is back — reading the same records
you and they wrote today, remembering *why* everything is the way it
is.

<!-- screenshot: terminals-run -->

That's the guide. The feedback page is two minutes, and you're among
the first to walk this: your stall points are worth more to us than
your successes.
{{< /step >}}

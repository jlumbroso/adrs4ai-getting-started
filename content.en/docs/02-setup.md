---
title: "Chapter 2 — Setting up your tools"
weight: 20
steps:
  - id: setup-terminal
    title: "The terminal"
    minutes: 4
    context: >-
      Everything in this guide happens in a terminal — and so does the
      collaborator you're about to install, which is the real reason to
      start here: it's the interface models are most fluent in, where
      everything they do is a line of text you can read.
    verify: "a terminal is open, and `echo hello` prints hello back"
    platforms: { macos: full, windows: tentative }
  - id: setup-claude-code
    title: "Claude Code"
    minutes: 6
    context: >-
      Claude Code is a model who can read files, run commands, and edit
      code, in a session you steer from the terminal. We install them
      first on purpose: they need nothing your Mac doesn't already ship —
      and **everything below this line, they can now help you through**,
      including any step of this guide that goes wrong.
    verify: "`claude --version` answers, and `claude` opens a session that responds"
    requires: [setup-terminal]
    platforms: { macos: full, windows: tentative }
  - id: setup-homebrew
    title: "Install Homebrew"
    minutes: 8
    context: >-
      macOS doesn't ship a package manager — a single tool that installs,
      updates, and uninstalls software from the command line. Linux users
      have had this for decades (it's the feature that makes a system
      *maintainable* rather than a pile of hand-installed apps); Homebrew
      brought it to the Mac, and nearly everything else in this guide
      arrives through it in one line each.
    verify: "open a NEW terminal window; `brew --version` answers"
    requires: [setup-terminal]
    platforms: { macos: full, windows: tentative }
  - id: setup-python-asdf
    title: "Python, via asdf"
    minutes: 8
    context: >-
      Your Mac has a Python, but it's Apple's — old, and risky to touch
      because the system uses it. The real problem asdf solves is
      *versions over time*: projects pin different Python (and Node, and
      more) versions, and asdf lets any number of them cohabit, switching
      per-project automatically. (This guide's required path doesn't run
      Python; the optional crew-relaunch extension and the rest of the
      course do. If you're racing the clock, it can wait.)
    verify: "`python --version` says 3.12.4"
    requires: [setup-homebrew]
    platforms: { macos: full, windows: tentative }
  - id: setup-vscode
    title: "Visual Studio Code"
    minutes: 4
    context: >-
      The editor where your project's files, terminals, and the decision
      records you'll meet in Chapter 3 all live in one window. Not the
      only good editor — but the one this guide's screenshots show, and
      the one with the extension we rely on.
    verify: "in a terminal, `code --version` answers"
    requires: [setup-homebrew]
  - id: setup-alacritty
    title: "A fast terminal: Alacritty (optional, recommended)"
    minutes: 3
    context: >-
      You're about to spend real time in a terminal, and snappiness
      compounds — Alacritty is one of the fastest terminals there is, and
      it has tabs now, which removes the old reason to skip it. (Entirely
      optional: Terminal.app and VS Code's built-in terminal both work
      for everything in this guide.)
    verify: "it launches; `echo hello` works like anywhere else"
    requires: [setup-homebrew]
  - id: setup-gh
    title: "Command-line tools: gh and just"
    minutes: 4
    context: >-
      `gh` is GitHub's own command-line client. Chapter 3 uses it to
      create your project from a template and connect it to your account
      without ever leaving the terminal — and once you're logged in with
      it, your model collaborators can use it too (creating repos,
      opening issues) *as you*. Which of their commands need your ok is
      set by your project's permission settings — you'll see (and own)
      that file in the template. `just` is a tiny command runner the template relies on —
      a menu of named recipes per project; you'll run your first one at
      the end of Chapter 3.
    verify: "`gh auth status` shows your username, logged in; `just --version` answers"
    requires: [setup-homebrew]
  - id: setup-extensions
    title: "VS Code extensions"
    minutes: 4
    context: >-
      Two small additions make the decision records of Chapter 3
      first-class citizens in your editor: **ADRs for AI** renders them,
      collects every open question into one view, and lets you answer in
      place; **Terminals Manager** relaunches your project's model
      sessions in one click (you'll meet that at the end of Chapter 3).
    verify: "⌘-shift-X → \"Installed\" lists both"
    requires: [setup-vscode]
    media:
      screenshot: shots/extension-panel.png
---

# Chapter 2 — Setting up your tools

*This is the **macOS course path**: written for CIS 7000-008, where
every walker has an Anthropic account with Claude Code access (Claude
Code is not on the free plan — outside readers, check that first).
Windows notes are partial orientation, not a tested walkthrough —
corrections genuinely wanted
([open an issue](https://github.com/jlumbroso/adrs4ai-getting-started/issues)
with the step ID). Budget ~40 minutes of steps; installs, logins, and
any debugging are extra. The chapter opens by installing the helper —
so every later step has someone to ask.*

Each tool comes with its *why* — "install these five things" with no
reasons is the style this methodology replaces.

{{< step setup-terminal >}}
A terminal is a conversation with your computer in text: you type one
line, press Enter, it answers. Things that take seven clicks are one
line here — and it's the interface your model collaborators are most
fluent in: when they work, every action is printed as a line of text,
in the same language you're about to start learning.

Open it: ⌘-space, type "Terminal", Enter. A window appears with a line
of text ending in `%` — the *prompt*. That's the computer, waiting.

Five facts, enough to not be lost:

1. **One line at a time.** Type, Enter, read the answer, new prompt.
   Copy-pasting a command from a guide is not cheating — it's how
   everyone does it (reading it first is the habit worth having).
2. **Quiet usually means working.** Installers often print nothing for
   a minute. A new prompt is the "done" signal, not silence.
3. **Passwords type invisibly.** When something asks for your Mac
   password, nothing appears as you type — no dots, nothing. That's a
   security feature, not a freeze. Type it and press Enter.
4. **ctrl-C stops the current command** and gives the prompt back.
   It's the universal "never mind" — though it can leave a job
   half-done, so keep the output on screen and ask your guide before
   retrying anything that was mid-install.
5. **"Open a new terminal" is a real instruction** (⌘-N). A terminal
   reads its configuration once, at birth — so a tool installed a
   minute ago often exists only in windows opened *after* the install.
   When a step says "open a new terminal," that's why.

Try it:

```bash
echo hello
```

{{< expand "What each word does" >}}
- `echo` — print back whatever follows.
- `hello` — the text to print.
{{< /expand >}}

It answers `hello`. You've now run a command. Everything else in this
guide is this same move, with longer sentences.
{{< /step >}}

{{< step setup-claude-code >}}
Paste into the terminal:

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

{{< expand "What each word does" >}}
- `curl` — the standard download-from-a-URL tool (your Mac ships it).
- `-f` — fail quietly on server errors instead of saving an error page.
- `-s` / `-S` — silent (no progress bar), but do show a message if it fails.
- `-L` — follow redirects.
- the URL — Anthropic's official installer script. You can open it in a browser and read it before running it — that's not paranoia, that's the habit this guide is teaching.
- `|` — the *pipe*: feed the left side's output straight into the right side's input.
- `bash` — run what arrives. You'll meet this exact download-then-run shape again in a few minutes, installing Homebrew.
{{< /expand >}}

**The different ways** — there are several legitimate installs, and
this guide recommends exactly one. The others are listed so that when
you meet them in the wild, you know they're the same program:

- **The native installer** (above — *recommended, and the guide's one
  path*): needs nothing but what your Mac already ships, and it keeps
  itself updated in the background.
- **Homebrew** (`brew install --cask claude-code`): fine — but you
  don't have Homebrew yet (next step), and this install doesn't update
  itself; you'd have to remember `brew upgrade`.
- **npm** (`npm install -g @anthropic-ai/claude-code`): for people who
  already live in Node (version 22+). Under the hood it delivers the
  same native program as the installer above.

> **[Windows — tentative]** In PowerShell:
> `irm https://claude.ai/install.ps1 | iex` — or
> `winget install Anthropic.ClaudeCode`.

Then **open a new terminal** (fact 5!) and run `claude` once, in any
folder: they'll walk you through logging in with your Anthropic
account — the same one you've been using in class all semester, which
is verified to work. (Reading this from outside the course? Claude
Code needs a paid Claude plan or API access — the free plan doesn't
include it; check current pricing before this step.)

This is the one step where nobody can help you yet — you can't be
rescued *by* the thing you're installing. If it fails: the error
message is the clue, the "this doesn't match" link below takes ten
seconds, and Anthropic's
[troubleshooting page](https://code.claude.com/docs/en/troubleshoot-install)
matches errors to fixes.

<!-- screenshot: claude-first-run -->
{{< /step >}}

## Where Claude Code lives — and why this guide picks the terminal

The same collaborator is reachable from four surfaces: the **terminal**
(what you just installed), a **desktop app** (the same engine in a
graphical shell), a **VS Code extension** (a panel inside the editor
you'll install later this chapter), and **Claude Code on the web**
(sessions on cloud machines, from a browser). None of them is wrong.
This guide teaches the terminal, for three reasons:

1. **Inspectability.** Commands, outputs, and where-you-are print as
   lines you can read, copy, and question. (No surface shows you
   everything a model does or understands — but this one hides the
   least.)
2. **What you watch, you inherit.** Every command they run is one you
   could run yourself; the friendlier surfaces wrap the part you're
   here to learn.
3. **The collaborator lives in your project.** A session starts inside
   a folder, and that folder — files, decision records — is the memory
   you share. The terminal is where that's visible, not a metaphor
   behind a pane.

The other surfaces are easier to learn *after* the terminal than
before it.

## Your guide, on call — the rule for the rest of this chapter

From this line down, every step of this guide has a diagnostician: if
anything wedges — an install that errors, a command "not found," a
password prompt you're unsure about — open a terminal, run `claude`,
and ask. Paste the exact error; exact beats paraphrased, every time.
Something like:

```text
I'm on step setup-homebrew of a setup guide. I ran the install command and got this: [paste the error]. Diagnose it, and tell me what to type — I want to type it myself.
```

That last clause is the rule for the rest of this chapter: **they
diagnose, you type.** The tools below are yours — worth installing by
your own hand once, because you'll maintain them for years. It's also
what keeps every walker on one shared path: ten improvised setups
would make the verify lines meaningless.

One distinction for later: what you installed is a helper you can ask.
*Recruiting* a collaborator — mission, consent, a name — is Chapter
3's different, better thing.

{{< step setup-homebrew >}}
Paste into the terminal:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

{{< expand "What each word does" >}}
- `/bin/bash -c "…"` — run the quoted text as a shell script, using the system's own bash.
- `$( … )` — "replace this with the output of the command inside": the script is downloaded first, then handed to bash.
- `curl -fsSL` — the same four flags, and the same download-then-run shape, as the Claude Code installer you already ran; reading the script first is the same habit.
- the URL — Homebrew's official install script, from Homebrew's own GitHub repository.
{{< /expand >}}

It will ask for your Mac password (typing shows nothing — that's
normal) and may install Apple's Command Line Tools first. At the end it
prints two `echo … >> ~/.zprofile` lines under "Next steps" — paste
those too.

<!-- screenshot: brew-done -->

> **[Windows — tentative]** The closest equivalent is `winget` (built
> into Windows 11); `choco` also works. Tool names below mostly match.
{{< /step >}}

{{< step setup-python-asdf >}}
```bash
brew install asdf
echo 'export PATH="${ASDF_DATA_DIR:-$HOME/.asdf}/shims:$PATH"' >> ~/.zshrc
```

{{< expand "What each word does" >}}
- `brew install asdf` — your new package manager's first job.
- `echo '…' >> ~/.zshrc` — *append* one line to your shell's startup file (`~` is your home folder; `.zshrc` runs every time a terminal opens; `>>` adds to the end — a single `>` would overwrite the whole file).
- the line itself — puts asdf's *shims* folder on your `PATH`: thin stand-ins for each tool that route `python` (etc.) to whichever version the current project wants. This is current asdf (v0.16+); older guides show a `. …/asdf.sh` line that no longer applies.
{{< /expand >}}

Open a new terminal, then:

```bash
asdf plugin add python
asdf install python 3.12.4
asdf set -u python 3.12.4
```

{{< expand "What each word does" >}}
- `asdf plugin add python` — teach asdf about a language: a *plugin* is asdf's adapter for one tool family (here, Python).
- `asdf install python 3.12.4` — download and build that exact version; it lives alongside any others, not instead of them. (3.12.4 is the course pin — same version the course's own machines run, so your errors match our fixes.)
- `asdf set -u python 3.12.4` — make it your default everywhere (`-u` writes it to your home folder's `.tool-versions`), until a project folder pins its own. Older guides say `asdf global` — same idea, retired command.
{{< /expand >}}

(The install compiles; a few minutes of scrolling text is expected —
fact 2 from the terminal step applies.)

> **[Windows — partial orientation, untested]** asdf is Unix-only; the
> closest path is `winget install Python.Python.3.12`. WSL2 gets you a
> Linux shell where the *shape* of this guide applies, but the
> Mac-specific lines (brew casks, shortcuts) do not transfer as
> written.
{{< /step >}}

{{< step setup-vscode >}}
```bash
brew install --cask visual-studio-code
```

Then once: ⌘-shift-P in VS Code → type "shell command" → **Install
'code' command in PATH**. That gives your terminal the `code .` trick:
open any folder as a project.

<!-- screenshot: vscode-first-open -->
{{< /step >}}

{{< step setup-alacritty >}}
```bash
brew install --cask alacritty
```
{{< /step >}}

{{< step setup-gh >}}
```bash
brew install gh just
gh auth login
```

Pick GitHub.com → HTTPS → login with a web browser, and follow the code
it gives you. (No GitHub account yet? Chapter 3 step P1 covers signing
up — do that first, then come back for `gh auth login`.)
{{< /step >}}

{{< step setup-extensions >}}
In VS Code, ⌘-shift-X, search and install:

- `ADRs for AI` (publisher: jlumbroso) — or from a terminal:
  `code --install-extension jlumbroso.adrs4ai`
- `Terminals Manager` (fabiospampinato) — or:
  `code --install-extension fabiospampinato.vscode-terminals`

<!-- screenshot: extension-panel -->

Environment complete. Chapter 3 is where it becomes a project.
{{< /step >}}

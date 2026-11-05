---
title: "Chapter 2 — Setting up your tools"
weight: 20
steps:
  - id: setup-homebrew
    title: "Install Homebrew"
    context: >-
      macOS doesn't ship a package manager — a single tool that installs,
      updates, and uninstalls software from the command line. Linux users
      have had this for decades (it's the feature that makes a system
      *maintainable* rather than a pile of hand-installed apps); Homebrew
      brought it to the Mac, and nearly everything else in this guide
      arrives through it in one line each.
    verify: "open a NEW terminal window; `brew --version` answers"
    platforms: { macos: full, windows: tentative }
  - id: setup-python-asdf
    title: "Python, via asdf"
    context: >-
      Your Mac has a Python, but it's Apple's — old, and risky to touch
      because the system uses it. The real problem asdf solves is
      *versions over time*: projects pin different Python (and Node, and
      more) versions, and asdf lets any number of them cohabit, switching
      per-project automatically. When a new Python ships, updating is one
      command, not an afternoon.
    verify: "`python --version` says 3.12.4"
    requires: [setup-homebrew]
    platforms: { macos: full, windows: tentative }
  - id: setup-vscode
    title: "Visual Studio Code"
    context: >-
      The editor where your project's files, terminals, and the decision
      records you'll meet in Chapter 3 all live in one window. Not the
      only good editor — but the one this guide's screenshots show, and
      the one with the extension we rely on.
    verify: "in a terminal, `code --version` answers"
    requires: [setup-homebrew]
  - id: setup-alacritty
    title: "A fast terminal: Alacritty (optional, recommended)"
    context: >-
      You're about to spend real time in a terminal, and snappiness
      compounds — Alacritty is one of the fastest terminals there is, and
      it has tabs now, which removes the old reason to skip it. (Entirely
      optional: Terminal.app and VS Code's built-in terminal both work
      for everything in this guide.)
    verify: "it launches; `echo hello` works like anywhere else"
    requires: [setup-homebrew]
  - id: setup-gh
    title: "Command-line tools: gh"
    context: >-
      `gh` is GitHub's own command-line client. Chapter 3 uses it to
      create your project from a template and connect it to your account
      without ever leaving the terminal — and once you're logged in with
      it, every model collaborator you work with can use it too (creating
      repos, opening issues) *on your behalf, with your consent per
      action*.
    verify: "`gh auth status` shows your username, logged in"
    requires: [setup-homebrew]
  - id: setup-claude-code
    title: "Claude Code"
    context: >-
      Claude Code is the collaborator's body — a model that can read your
      files, run commands, and edit code, in a session you steer from the
      terminal. We install it *after* the foundation on purpose: the
      tools above are yours, worth knowing by hand once. But note what
      changes at this step — **everything below this line, and much of
      what's above it, Claude can now do with you**, including diagnosing
      any step of this guide that went wrong. If something broke earlier,
      finishing this step and asking is a legitimate repair path.
    verify: "`claude --version` answers, and `claude` opens a session that responds"
  - id: setup-extensions
    title: "VS Code extensions"
    context: >-
      Two small additions make the decision records of Chapter 3
      first-class citizens in your editor: **ADRs for AI** renders them,
      collects every open question into one view, and lets you answer in
      place; **Terminals Manager** relaunches your project's model
      sessions in one click (you'll meet that at the end of Chapter 3).
    verify: "⌘-shift-X → \"Installed\" lists both"
    requires: [setup-vscode]
    media:
      screenshot: /shots/extension-panel.png
---

# Chapter 2 — Setting up your tools

*macOS path. Windows readers: tentative notes are marked — we haven't
walked them end-to-end yet, and we'd genuinely value your corrections
([open an issue](https://github.com/jlumbroso/adrs4ai-getting-started/issues)
with the step ID). Budget 25–40 minutes, mostly waiting on installers.*

Each tool below comes with its *why* — not as filler, but because
"install these five things" with no reasons is exactly the context-free
instruction style this whole methodology exists to replace.

{{< step setup-homebrew >}}
Paste into Terminal (⌘-space, type "Terminal", Enter):

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

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
echo '. "$(brew --prefix asdf)/libexec/asdf.sh"' >> ~/.zshrc
```

Open a new terminal, then:

```bash
asdf plugin add python
asdf install python 3.12.4
asdf global python 3.12.4
```

(The install compiles; a few minutes of scrolling text is expected.)

> **[Windows — tentative]** asdf is Unix-only; the spiritually closest
> path is `winget install Python.Python.3.12` — or WSL2, where
> everything in this guide works as written.
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
brew install gh
gh auth login
```

Pick GitHub.com → HTTPS → login with a web browser, and follow the code
it gives you. (No GitHub account yet? Chapter 3 step P1 covers signing
up — do that first, then come back for `gh auth login`.)
{{< /step >}}

{{< step setup-claude-code >}}
```bash
curl -fsSL https://claude.ai/install.sh | bash
```

Then open a new terminal and run `claude` once in any folder: it walks
you through logging in with your Anthropic account (your course account
works; the free tier is enough for this guide).

<!-- screenshot: claude-first-run -->
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

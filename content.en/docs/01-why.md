---
title: "Why are we doing this?"
weight: 10
---

# Why are we doing this?

*One page, before any terminal.*

You can now build real software by describing it — what people call
**vibe coding**: you say what you want, a model writes it, you steer.
It works, startlingly well. And it has a failure mode everyone who
tries it eventually hits: three weeks in, neither you nor the model
remembers *why* anything is the way it is. The code is there; the
reasoning evaporated with the chat window it happened in.

**Deliberative programming** is vibe coding made sustainable. The fix
is simple: decisions get written down, in the repository, as they're
made — each one a small record ("we chose A over B because…; here's
what would change our mind") that you and every future model session
can find, check, and build on. No database, no service, no app:
files, found by `grep`, versioned by commits.

Around that simple core there's now a toolkit — skills and plugins for
Claude Code, a VS Code extension that turns the records into something
you can read and answer like mail, templates that give a new project
the right shape from minute one.

**This guide sets you up with your first project.** By the end you'll
have: a working development environment (Chapter 2), and a real
project — a small game, live on the internet — built *with* a model
collaborator, with your first decisions on the record (Chapter 3). The
point isn't the game. The point is that when you reopen the project
next month, the *why* will still be there.

> **A note on honesty**: you're among the first people to walk this
> guide. Where it doesn't match what you see, that's not you failing
> the guide — it's the guide failing you, and we want to hear about it
> (every step has a "this doesn't match" link; it takes ten seconds).

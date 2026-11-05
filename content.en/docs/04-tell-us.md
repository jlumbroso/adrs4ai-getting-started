---
title: "Tell us what happened"
weight: 40
steps:
  - id: debrief
    title: "The debrief — a record, like everything else"
    minutes: 5
    context: >-
      You just practiced putting decisions on the record. The last move
      is to put the *walk itself* on the record — and this one is
      **ungraded, and will stay that way**: it calibrates the guide,
      never you. You are among its first walkers; your stall points are
      worth more to us than your successes.
    verify: "a `docs/adr/debrief-first-walk.md` exists in your project, and we have either its link or its summary"
    requires: [first-answers]
---

# Tell us what happened

Two minutes, two moves — and if you're reading this page because
you're **stopping partway**, that's exactly as valuable:
[tell us where and why](https://github.com/jlumbroso/adrs4ai-getting-started/issues/new?template=walk-report.md&title=%5Bwalk%5D%20stopped%20partway)
(ten seconds, three boxes), and thank you — the walkers who stop are
the ones a guide learns the most from.

{{< step debrief >}}
Ask your collaborator:

```text
Before we wrap: please write docs/adr/debrief-first-walk.md — a short record of this first walk, from both of us. Four sections: what we built and the decisions on the record; roughly how long each chapter actually took me; where the guide didn't match what we saw (step IDs if we noted them); and what you'd tell the next pair who walks this. Mark it clearly as ungraded feedback for the guide's authors. Then commit it.
```

Then get it to us, **either way is complete**:

- **Share**: [open a walk report](https://github.com/jlumbroso/adrs4ai-getting-started/issues/new?template=walk-report.md&title=%5Bwalk%5D%20completed)
  and paste your repository link (private is fine — add `jlumbroso`
  as a reader), or
- **Summarize**: same form, paste the debrief's text instead of the
  link. Keeping your repo to yourself is a fine choice and costs
  nothing.

No GitHub account (you stopped before Chapter 3)? Email works:
the course announcement's reply button, three lines — where you
stopped, what it said, what you expected.
{{< /step >}}

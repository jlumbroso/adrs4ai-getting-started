---
title: "Machinery demo (scaffold — Lapidary replaces)"
weight: 5
draft: false
steps:
  - id: demo-hello
    title: "Prove the checkbox survives"
    context: >-
      This page exists to verify the step machinery end to end before any
      real content lands. It is deleted before shipping.
    verify: "The checkbox stays ticked after you reload this page"
    platforms:
      macos: full
      windows: tentative
  - id: demo-config
    title: "Prove the config chip works"
    context: >-
      The book can remember identifiers you give it — only in your
      browser, never on a server, and never a password or token.
    verify: "The chip below shows what you typed, on this page and on the tasks page"
    requires: [demo-hello]
---

# Machinery demo

{{< step demo-hello >}}
Tick the box above, then reload. Nothing to install.
{{< /step >}}

{{< step demo-config >}}
Click this chip and type anything: {{< your github-username >}}
{{< /step >}}

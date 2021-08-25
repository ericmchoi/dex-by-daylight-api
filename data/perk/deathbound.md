---
name: Deathbound
id: deathbound
type: killer
owner: executioner
initialScore: 3
flavor: ~
tags:
  # icon tags
  - hands
  - cuffed
  - barbed wire
  # description tags
  - healing
  - screaming
  - revealing
  - oblivious
---

Those whose lives are intertwined in darkness are destined to suffer together.

When a Survivor heals another Survivor for one health state at least :val{values="32" unit="meters"} away from the Killer, the Survivor performing the healing action will scream, revealing their location and activating _Deathbound_ for the next :val{values="60" unit="seconds"}.

During that time, the Survivor will suffer from the :status{id="oblivious"} status effect when further than :val{values="16 12 8" unit="meters"} away from the healed Survivor.

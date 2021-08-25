---
name: Adrenaline
id: adrenaline
type: survivor
owner: megThomas
initialScore: 4
flavor: ~
tags:
  # icon tags
  - heart
  - shot
  - syringe
  # description tags
  - healing
  - running speed
  - exit gates
  - exhausted
---

You are fuelled by unexpected energy when on the verge of escape.

**Instantly heal one health state** and sprint at :val{values="150" unit="%"} of your normal running speed for :val{values="5" unit="seconds"} when the exit gates are powered. _Adrenaline_ is on hold if you are disabled at the moment it should take effect and will activate when freed.

_Adrenaline_ will **wake you up** if you are asleep when it triggers.

_Adrenaline_ ignores the :status{id="exhausted"} status effect.

Causes the :status{id="exhausted"} status effect for :val{values="60 50 40" unit="seconds"}.

You do not recover from the :status{id="exhausted"} status effect when running.

---
name: Sprint Burst
id: sprintBurst
type: survivor
owner: megThomas
initialScore: 4
flavor: ~
tags:
  # icon tags
  - feet
  - running
  - sneakers
  - shoes
  # description tags
  - exhausted
  - running speed
---

When starting to run, break into a sprint of :val{values="150" unit="%"} of your normal running speed for a maximum of :val{values="3" unit="seconds"}.

Causes the :status{id="exhausted"} status effect for :val{values="60 50 40" unit="seconds"}.

_Sprint Burst_ cannot be used while :status{id="exhausted"}.

You do not recover from the :status{id="exhausted"} status effect while running.

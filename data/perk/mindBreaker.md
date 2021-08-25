---
name: Mindbreaker
id: mindBreaker
type: killer
owner: demogorgon
initialScore: 2
flavor: >-
  "The specimen's apparent telepathic ability can evoke feelings of dread and fatigue in nearby individuals." -Hawkins National Laboratory
tags:
  # icon tags
  - person
  - headache
  # description tags
  - repairing
  - exhausted
---

Your distressing presence drains and weakens your prey.

While repairing generators, Survivors are afflicted by the :status{id="exhausted"} status effect.

Any existing :status{id="exhausted"} status effect timers are paused while the Survivor is repairing a Generator. After ending the repair action, the Survivor is afflicted by the :status{id="exhausted"} status effect for :val{values="3 4 5" unit="second(s)"}.

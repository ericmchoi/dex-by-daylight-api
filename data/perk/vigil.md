---
name: Vigil
id: vigil
type: survivor
owner: quentinSmith
initialScore: 3
flavor: ~
tags:
  # icon tags
  - crouching
  - kneeling
  - lantern
  - light
  # description tags
  - recovering
  - exhausted
  - hemorrhage
  - mangled
  - hindered
  - blindness
---

You look over your friends even in dire situations.

You and your allies within a :val{values="8" unit="meter"} range recover from the :status{id="exhausted"}, :status{id="bleeding"}, :status{id="hindered"}, and :status{id="vision"} status effects :val{values="10 15 20" unit="%"} faster. Once out of range, this effect persists for :val{values="15" unit="seconds"}.

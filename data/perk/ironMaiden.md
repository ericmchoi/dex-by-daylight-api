---
name: Iron Maiden
id: ironMaiden
type: killer
owner: legion
initialScore: 3
flavor: >-
  "There is no place for cowards." -The Legion
tags:
  # icon tags
  - cabinet
  - coffin
  - skull
  # description tags
  - lockers
  - exposed
  - revealed
---

You open lockers :val{values="30 40 50" unit="%"} faster.

Survivors who exit lockers suffer from the :status{id="exposed"} status effect for :val{values="30" unit="seconds"} and their location is revealed for :val{values="4" unit="seconds"}.

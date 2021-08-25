---
name: Breakout
id: breakout
type: survivor
owner: yuiKimura
initialScore: 4
flavor: >-
  "Come, we're going to rip our way out of this." - Yui Kimura
tags:
  # icon tags
  - motorcycle
  # description tags
  - carried
  - haste
  - movement speed
  - wiggle speed
---

You kick into high gear when someone's in trouble, inspiring them to overcome any obstacle.

When within :val{values="6" unit="meters"} of a carried Survivor, you gain the :status{id="speed"} status effect, moving at :val{values="5 6 7" unit="%"} increased speed. The carried Survivor's wiggle speed is increased by :val{values="20" unit="%"}.

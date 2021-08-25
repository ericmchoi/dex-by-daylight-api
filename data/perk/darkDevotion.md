---
name: Dark Devotion
id: darkDevotion
type: killer
owner: plague
initialScore: 4
flavor: >-
  "And terror shall take hold of a defiant non-believer, who shall falsely announce my arrival." (The Tablet of Adiris, 48. 9)
tags:
  # icon tags
  - heart
  - entity
  # description tags
  - obsession
  - terror radius
  - undetectable
---

The display of your powers creates a whirlwind of panic that spreads throughout the land.

You become **obsessed** with one Survivor.

Hitting the Obsession with a _basic attack_ transfers your Terror Radius to the Obsession for :val{values="20 25 30" unit="seconds"}, and sets its radius to :val{values="32" unit="meters"}. You are granted the :status{id="undetectable"} status effect for the duration.

The Survivor with the transferred Terror Radius is also considered to be the "inside the Terror Radius" for other purposes.

- _The Killer can only be **obsessed** with one Survivor at a time._

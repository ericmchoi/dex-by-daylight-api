---
name: Dragon's Grip
id: dragonsGrip
type: killer
owner: blight
initialScore: 4
flavor: >-
  "Such potential in this compound... even the slightest trace causes unnatural effects." -Journal of Talbot Grimes
tags:
  # icon tags
  - generator
  - skull
  # description tags
  - kicking
  - generator
  - noise audio sound
  - exposed
---

After kicking a generator, for the next :val{values="30" unit="seconds"}, the first Survivor that interacts with it will scream, revealing their location for :val{values="4" unit="seconds"}, and becoming afflicted with the :status{id="exposed"} status effect for :val{values="60" unit="seconds"}.

_Dragon's Grip_ has a cooldown of :val{values="120 100 80" unit="seconds"}.

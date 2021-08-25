---
name: 'Hex: Ruin'
id: ruin
type: killer
owner: hag
initialScore: 4
flavor: >-
  "A curse is upon you. It will be your ruin."
tags:
  # icon tags
  - entity
  - generator
  # description tags
  - regression
  - generator
---

A Hex that affects all Survivors' generator repair progress.

All generators are affected by _Hex: Ruin_. While a generator is not being repaired by a Survivor, it will immediately and automatically regress repair progress at :val{values="100 150 200" unit="%"} of the normal regression speed.

_The Hex effects persist as long as the related Hex Totem is standing._

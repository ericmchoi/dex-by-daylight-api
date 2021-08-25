---
name: Sloppy Butcher
id: sloppyButcher
type: killer
owner: ~
initialScore: 4
flavor: >-
  "It's in its sadistic nature. There is no swift kill as it delights in the obscene spectacle of our agonizing suffering."
tags:
  # icon tags
  - pig
  - head
  # description tags
  - bleeding
  - mangle
  - hemorrhage
---

You know where to hit to make them bleed.

Wounds inflicted by successful _basic attacks_ cause the :status{id="mangled"} and :status{id="bleeding"} status effects.

:status{id="bleeding"} :val{values="slightly moderately considerably"} increases the Survivor's bleeding frequency.

The :status{id="bleeding"} effect caused by _Sloppy Butcher_ is removed once the Survivor is fully healed.

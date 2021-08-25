---
name: Second Wind
id: secondWind
type: survivor
owner: steveHarrington
initialScore: 4
flavor: >-
  "Yeah, that's a no." -Steve Harrington
tags:
  # icon tags
  - kneeling
  - crouching
  - hurt
  - bat
  - bleeding
  - person
  # description tags
  - unhooking
  - broken
  - healing
---

When you have healed other Survivors for the equivalent of one health state, _Second Wind_ activates. If you are already afflicted by the :status{id="broken"} status effect, _Second Wind_ does not activate.

While _Second Wind_ is activated, the next time you are unhooked or you unhook yourself, you are affected by the :status{id="broken"} status effect. After a total duration of :val{values="28 24 20" unit="seconds"}, _Second Wind_ automatically heals you from injured to healthy.

_Second Wind_ deactivates once you become healthy or if you are put into the dying state before _Second Wind_ successfully triggers. You lose the :status{id="broken"} status effect.

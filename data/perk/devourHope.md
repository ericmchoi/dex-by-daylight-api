---
name: 'Hex: Devour Hope'
id: devourHope
type: killer
owner: hag
initialScore: 4
flavor: >-
  "If you do nothing, you have their blood on their hands. If you save them, her hunger grows."
tags:
  # icon tags
  - face
  - smile
  - mouth
  # description tags
  - haste
  - exposed
  - kill
  - hex
---

A Hex rooting its power on hope. The false hope of Survivors ignites your hunger.

When a Survivor is rescued from a hook at least :val{values="24" unit="meters"} away, Devour Hope receives a token.

- :val{values="2" unit="tokens"}: Gain a :val{values="3 4 5" unit="%"} :status{id="speed"} status effect, :val{values="10" unit="seconds"} after hooking a Survivor, for a duration of :val{values="10" unit="seconds"}.
- :val{values="3" unit="tokens"}: Survivors suffer from the :status{id="exposed"} status effect.
- :val{values="5" unit="tokens"}: Grants the ability to kill Survivors by your own hand.

_The Hex effects persist as long as the related Hex Totem is standing._

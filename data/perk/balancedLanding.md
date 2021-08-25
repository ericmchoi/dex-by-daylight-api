---
name: Balanced Landing
id: balancedLanding
type: survivor
owner: neaKarlsson
initialScore: 4
flavor: >-
  "I've jumped from higher places." -Nea
tags:
  # icon tags
  - pose posing
  # description tags
  - falling
  - stagger
  - noise sound audio
  - running speed
  - exhausted
---

Your agility is incomparable.

After falling from a height, cat-like reflexes reduce your stagger duration from falling by :val{values="75" unit="%"} and reduce the volume of grunts from falling by :val{values="100" unit="%"}. You start sprinting at :val{values="150" unit="%"} your normal running speed for a maximum of :val{values="3" unit="seconds"}.

Causes the :status{id="exhausted"} status effect for :val{values="60 50 40" unit="seconds"}.

_Balanced Landing_ cannot be used while :status{id="exhausted"}.

You do not recover from the :status{id="exhausted"} status effect while running.

---
name: Technician
id: technician
type: survivor
owner: fengMin
initialScore: 2
flavor: >-
  "I'm gonna stealth this one." -Feng Min
tags:
  # icon tags
  - quiet
  - hood
  - face
  - gears
  # description tags
  - repairing
  - noise audio sound
  - Skill Check
---

You are apt at handling machinery with the greatest care and precision.

The noises caused by your repairs and their hearing distance are reduced by :val{values="8" unit="meters"}.

On a failed repair Skill Check, the following effects happen:

- The generator explosion will be prevented.
- The generator loses progress as usual.
- An additional :val{values="5 4 3" unit="%"} progress is lost.

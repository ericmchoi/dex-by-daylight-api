---
name: Discordance
id: discordance
type: killer
owner: legion
initialScore: 4
flavor: >-
  "Smartasses get killed. We always see to that." -The Legion
tags:
  # icon tags
  - sword
  - blade
  - generator
  # description tags
  - repairing
  - working
  - generator
  - aura
---

Any generator within a range of :val{values="64 96 128" unit="meters"} that is being repaired by two or more Survivors is marked by a yellow aura.

When the generator is first highlighted, _Discordance_ triggers a loud noise notification on the generator.

After the generator is no longer within range or is no longer being repaired by two or more Survivors, the aura remains for another :val{values="4" unit="seconds"}.

---
name: Surge
id: surge
type: killer
owner: demogorgon
initialScore: 3
flavor: >-
  "The creature appears to have some unknown influence over electricity and nearby electronics." -Hawkins National Laboratory
tags:
  # icon tags
  - generator
  - splash
  # description tags
  - dying state
  - generator
  - explode
  - regression
---

Your eerie presence charges the air and interferes with technology.

Putting a Survivor into the dying state with a _basic attack_ causes all generators within a :val{values="32" unit="32 meter radius"} instantly to explode and begin regressing. Generators affected by _Surge_ immediately lose :val{values="8" unit="%"} of their progress.

- _Surge_ can only be triggered once every :val{values="60 50 40" unit="seconds"}.

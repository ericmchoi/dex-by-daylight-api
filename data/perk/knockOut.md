---
name: Knock Out
id: knockOut
type: killer
owner: cannibal
initialScore: 3
flavor: >-
  "Oh, that gun's no good. The old way... with a sledge! You see, that way's better. They die better that way." -Nubbins Sawyer
tags:
  # icon tags
  - head
  - injury
  # description tags
  - dying state
  - blindness
  - crawling
---

The trauma caused by your brutal attacks makes crying for help painfully difficult.

Survivors put into the dying state by your basic attacks are not revealed to other Survivors when they are standing outside of a :val{values="32 24 16" unit="meter"} range.

Survivors put into the dying state by your basic attacks crawl :val{values="50" unit="%"} slower for :val{values="15" unit="seconds"}.

During this time, Survivors are affected by the :status{id="vision"} status effect.

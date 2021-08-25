---
name: Stake Out
id: stakeOut
type: survivor
owner: davidTapp
initialScore: 3
flavor: >-
  "I had you, I had you on your knees. You're runnin' scared because we had you. We're gonna close this case!" -Detective David Tapp
tags:
  # icon tags
  - people
  - followed following
  # description tags
  - tokens
  - skill checks
  - terror radius
  - repairing
---

Getting close to the Killer fills you with determination.

For each :val{values="15" unit="seconds"} you are standing within the Killer Terror Radius and not in a chase, you gain a token up to a maximum of :val{values="2 3 4" unit="tokens"}.

When _Stake Out_ has at least _1 token_, Good Skill Checks are considered Great Skill Checks, consume _1 token_, and grant an additional :val{values="1" unit="%"} bonus to Generator repair progress.

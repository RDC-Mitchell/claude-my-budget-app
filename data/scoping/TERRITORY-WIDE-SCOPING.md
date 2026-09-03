# Scoping the 23 Territory-wide projects

`data.js` places 30 of the 53 capital projects in a district and gives up on 23,
worth **$400,060k** in 2026-27. Those 23 are labelled `Territory-wide` with
`district_basis: "unlocatable"` — which is honest, but it hides 44% of the year's
capital spend behind a word that means "we didn't find it", not "it has no place".

This is the attempt to find it.

**Nothing in `data.js` has been changed.** The findings live in
`territory-wide-scoping.json` as a separate overlay, keyed by the same project
`id`, so the verified extraction stays verified and every new call carries its own
evidence and its own confidence rating. `verify-scoping.js` checks the two files
against each other.

```
node data/scoping/verify-scoping.js
```

---

## What came back

| | 2026-27 | share |
|---|---:|---:|
| **Placed to a single district** | $308,572k | 77.1% |
| **Narrowed to a named set of districts** | $17,478k | 4.4% |
| **Genuinely unplaceable** | $71,295k | 17.8% |
| **Unresolved — needs an agency answer** | $2,715k | 0.7% |
| | **$400,060k** | |

Eight of the 23 projects place cleanly to one district. Because the two biggest
lines are both in that group, they carry three quarters of the unplaced money.

If the single-district calls were applied to `data.js`:

| District | would gain |
|---|---:|
| North Canberra | +$174,217k |
| Belconnen | +$96,324k |
| Tuggeranong | +$19,090k |
| Gungahlin | +$18,941k |

That is a large enough shift that any district chart built on the current file is
telling a materially different story from one built on this. **North Canberra and
Belconnen are the two districts most understated today.**

---

## Confidence, and what each level means

| Level | Meaning |
|---|---|
| `budget_confirmed` | The Budget papers name the place. No outside source needed. |
| `strong` | The Budget doesn't name it, but an official ACT Government source outside the Budget (media release, Built for CBR, a planning/EIS document) names a specific site for the same initiative. |
| `partial` | Real sites are known and named, but the line covers several and the Budget doesn't publish the split. Placeable as a set, not as one. |
| `unplaceable` | There is no location to find — a provision, a portfolio-wide program, or a pipeline whose sites aren't chosen yet. |

The distinction matters because `budget_confirmed` and `strong` are *different
kinds of claim*. A `strong` call says "the ACT Government has said elsewhere that
this named initiative is at this site". That is good evidence, but it is not the
Budget, and it should be labelled as such on screen.

---

## Placed to a single district

### Canberra Theatre Redevelopment – new Lyric Theatre — $162,704k → North Canberra
Civic Square, London Circuit, Canberra City. The new theatre is going up
north-west of the existing centre, on the north side of The Playhouse, bordering
Northbourne Avenue and Vernon Circle. Site established October 2025, main
construction from January 2026, completion 2028 — which matches the Budget's
printed Jul-28. `strong`

### Northside Hospital Development — $96,324k → Belconnen
On the existing Calvary / North Canberra Hospital campus in **Bruce**. The Budget
only says "a new, state-of-the-art hospital in Canberra's North", but Statement C
pairs the enabling works for the new hospital with "enhancing health
infrastructure at North Canberra Hospital", which is the Bruce site; the 2023
announcement and the 2026 DA approval both name it outright. `strong`

> **The trap.** The project is called *northside*, the existing facility is called
> *North Canberra Hospital* — and Bruce is a **Belconnen** suburb. Any keyword
> matcher reading the title places this in North Canberra. That single row is
> $96m, and it would be wrong.

### New light rail vehicles and depot expansion — $18,941k → Gungahlin
The depot is in **Mitchell**: extended with a new Stabling Road 6, a materials
storage shed, and a building for the on-board battery retrofit. Two things share
this line — the depot is a fixed asset in Gungahlin, the vehicles are rolling
stock running the whole corridor. We place it on the depot because that is the
built asset. The vehicle/depot dollar split isn't published. `strong`

### MRF and FOGO Facility — $12,750k → Tuggeranong *(see caveat)*
### New Materials Recovery Facility — $6,340k → Tuggeranong *(see caveat)*
Both are in the **Hume Resource Recovery Estate**. FOGO is on John Cory Road
(Block 5, Section 26), in-vessel composting up to 70,000 tonnes a year; the MRF is
immediately west across Recycling Road. Sites are certain. `strong`

> **The caveat.** Hume is gazetted in the district of **Jerrabomberra**, which is
> not one of the eight districts this app uses. Two things point to Tuggeranong:
> `data.js` already resolved this once by placing *Improving Mugga Lane landfill
> capacity* (same corner of the ACT) in Tuggeranong, and ACT City Services files
> its own FOGO project page under `/Infrastructure-Projects/tuggeranong/`. Both
> rows are flagged `district_caveat: "jerrabomberra_gap"`.

These two rows describe the same estate but are **separate** Table 9 rows with
separate totals and completion dates (Apr-28 vs TBD). Don't merge them — and
don't describe them as two unrelated facilities either.

### Light Rail Stage 2A — $5,618k → North Canberra
City (Alinga Street) to Commonwealth Park via London Circuit and Commonwealth
Avenue. The Budget names the destination in two separate statements.
`budget_confirmed`

> The appropriation history on this row also carries an item called *Building
> light rail to Woden* — that's Stage 2B, and it already has its own row in
> `data.js` placed in Woden Valley. Don't double-count.

### Canberra Aquatic Centre — $5,474k → North Canberra
**The Budget says where it is.** Statement G's 2026-27 priorities: *"continue to
progress planning and design for a new aquatic centre in Commonwealth Park"*.
Next to Commonwealth Avenue and the new light rail line; 50m indoor lap pool,
no dive pool because the site can't take one. `budget_confirmed`

> This one is worth pausing on. It was never unlocatable — the keyword list just
> had no entry for Commonwealth Park. It's the cheapest possible reminder that
> "unlocatable" is a property of the matcher, not of the project.

### ACT Government office accommodation consolidation — $421k → North Canberra
220 London Circuit (Civic) and 480 Northbourne Avenue (Dickson) — both North
Canberra. The location was found by looking *outside* Statement G: Statements B
and H both carry a matching initiative named *"Building a better city – Civic and
Dickson office accommodation"*. `strong`

> **Method note.** This is the clearest case for not stopping at the project's own
> table. The Budget placed this line itself, in a different statement, under a
> slightly different name.

---

## Narrowed to a named set of districts

These have real, named sites — the Budget just doesn't publish which ones get
what. They should render as a district *set*, never as a single guess.

| Project | 2026-27 | Districts | What's known |
|---|---:|---|---|
| **Public Building Upgrades** | $8,330k | North Canberra + portfolio | Five sub-items in the appropriation table; exactly one names a building — roof upgrades at the **ACT Legislative Assembly and North Building**, Civic Square. The other four (building safety, depot compliance, fire/switchboard/HVAC, roof replacement) name a work type, not a place. |
| **More energy efficient Government accommodation** | $2,995k | North Canberra, Woden Valley | The government office estate is concentrated in Civic, Dickson and Woden. Which buildings got the work is not published — these candidates are inferred from where the estate is, not from the Budget. |
| **New Health Centres across the ACT** | $2,677k | Gungahlin, Belconnen | Four new centres exist as a program, but two already have their own rows (Inner South → South Canberra; South Tuggeranong in Conder). What's left here is **North Gungahlin** (Kingsland Parade, Casey — design underway) and **West Belconnen** (site still being selected). Statement C explicitly attaches the West Belconnen feasibility study to this initiative by name. |
| **Expanding health centres across the city** | $2,574k | 6 districts | The estate is seven existing community health centres: Belconnen, City, Dickson, Gungahlin, Phillip, Tuggeranong (Greenway), Weston Creek. All seven are in the JSON with addresses. "Across the city" is the only geographic word the Budget offers. |
| **Public pool upgrades, operations and maintenance** | $718k | 5 districts | Seven ACT Government pools: Canberra Olympic (City), Dickson, Manuka, Gungahlin, Lakeside (Greenway), Erindale, Stromlo. |
| **Refurbishing Canberra's public pools** | $184k | 5 districts | Same seven-pool estate, different program — this row is the tail of one finishing Dec-26, the other is an ongoing allowance. Don't merge. |

> **Stromlo is contestable.** Stromlo Leisure Centre is gazetted in Molonglo
> Valley but serves Weston Creek, and `data.js` already placed *Stromlo District
> Playing Fields* in **Weston Creek**. We used Molonglo in the JSON and flagged it.
> Pick one and be consistent across both files.

---

## Genuinely unplaceable — $71,295k

These are not research failures. They have no location because of what they are.

| Project | 2026-27 | Why |
|---|---:|---|
| **Market Conditions Provision** | $50,000k | A central contingency against construction cost escalation. No total project value printed, completion TBD — the row shape of a provision, not a project. It isn't attached to a site because it isn't attached to a project yet. |
| **Electrification of Government Assets** | $9,189k | Rolling program across the government building estate and the public school network. |
| **iCBR 2026-27 Asset Renewal Program** | $4,930k | An annual pool spread across the whole asset base. Statements C, D and F each carry their own; none publish a site list. |
| **Managing government and community facilities** | $2,766k | Portfolio management of ~250 buildings and sites. |
| **Public housing pipeline** | $1,995k | 450 dwellings, $360m — **sites not yet chosen**. That's what a pipeline is. More than half are contingent on a HAFF Round 3 outcome. |
| **Moving more government facilities off gas** | $1,425k | Sibling of the electrification line. Same estate-wide shape. |
| **Office Accommodation** | $500k | "Ongoing" value, "Ongoing" completion, flat $500k a year. A standing allowance. |
| **Refurbishing community and government buildings** | $490k | A refurbishment pool with no sub-item detail — unlike its sibling *Public Building Upgrades*, which does have named sub-items. |

> **Do not place the public housing pipeline from `LAYERS.housing`.** That layer
> names real suburbs — Strathnairn, Phillip, Taylor, Turner, Belconnen, Moncrieff,
> Lyneham, Whitlam, Gungahlin Town Centre — but they belong to the **Affordable
> Housing Project Fund**, a different program. Using them here would be inventing
> a location.

The honest framing for these on screen isn't "unknown". It's **"spread across the
whole Territory"** for the programs, and **"not yet allocated"** for the provision
and the pipeline. Those are two different things and they read differently to a
resident asking what's being spent in their suburb.

---

## The one we couldn't resolve

### Investing in Canberra's Arts Sector — $2,715k

It sits in the capital works table with a Jun-28 completion date, so it buys
something physical. No ACT Government source we could find names the asset or the
venue. The announced 2026-27 arts money is almost entirely *operating* — a 25%
uplift to 29 arts organisations, project grants, screen and games support, CMAG
and Lanyon — and none of that explains a capital row.

It is **not** the Kingston Arts Precinct: that's a separate Table 9 row, already
placed in South Canberra.

**Next step:** ask artsACT or Infrastructure Canberra what the capital component
funds. The candidate districts in the JSON are the artsACT venue estate (Ainslie
& Gorman and Watson in North Canberra, Belconnen Arts Centre and Strathnairn in
Belconnen, Tuggeranong Arts Centre, Canberra Glassworks in South Canberra) — that
is a description of the search space, not a finding, and it is marked
`placement: "unresolved"` so it never gets mistaken for one.

---

## What would close the remaining gaps

Ranked by money unlocked per question asked:

1. **The per-pool split** for the two pool lines ($902k). The estate is exactly
   seven pools and the government clearly tracks spend per pool — the October 2025
   reopening named $925,000 at Dickson and $30,000 at Manuka.
2. **Which health centres are being expanded** ($2,574k). Seven candidates, and
   naming one or two would place the line.
3. **The arts capital purpose** ($2,715k) — see above.
4. **The sub-item sites** behind Public Building Upgrades ($8,330k): which depots,
   which buildings got safety, HVAC and roof work.
5. **The building schedule** for electrification and off-gas ($10,614k combined).
   Infrastructure Canberra holds this; the Public School Heating and Cooling Fund
   may report part of it.

Items 1, 2 and 4 are the realistic ones — the data exists, it just isn't in the
Budget papers.

---

## Two conventions this file had to invent

Both are flagged on every row they touch, in `district_convention` in the JSON.

**`jerrabomberra_gap`** — Hume and Symonston are in the gazetted district of
Jerrabomberra, which isn't one of the app's eight. Filed as Tuggeranong, following
the precedent `data.js` already set with Mugga Lane and the ACT Government's own
URL structure.

**`parkes_wrinkle`** — Commonwealth Park is gazetted in the suburb of Parkes,
which normally reads as South Canberra, but the park is north of Lake Burley
Griffin and adjoins the City. Filed as North Canberra on geography. This affects
the Aquatic Centre and the Stage 2A terminus.

Neither is a fact. Both are calls, and a reader should be able to disagree with
them without having to re-do the research.

---

## Sources

Budget: [2026-27 ACT Budget](https://www.treasury.act.gov.au/budget/budget-2026-27/budget-papers-and-statements),
Statements B, C, E, G, and the Housing Statement — all present in `data/markdown/`.

Official ACT Government, outside the Budget:
[New lyric theatre](https://www.act.gov.au/builtforcbr/browse-all-projects/entertainment-arts-and-sports/new-lyric-theatre) ·
[Canberra Aquatic Centre](https://www.act.gov.au/builtforcbr/browse-all-projects/entertainment-arts-and-sports/canberra-aquatic-centre) ·
[Health centres](https://www.act.gov.au/builtforcbr/browse-all-projects/health/health-centres) ·
[Community health centres](https://health.act.gov.au/hospitals-and-health-centres/community-health-centres) ·
[Aquatic and leisure facilities](https://www.sport.act.gov.au/sport-facilities/aquatic-and-leisure-facilities) ·
[FOGO facility](https://www.cityservices.act.gov.au/Infrastructure-Projects/tuggeranong/food-organics-and-garden-organics-facility) ·
[FOGO EIS202200016](https://www.planning.act.gov.au/applications-and-assessments/environmental-impact-assessment/environmental-impact-statement/fogo-waste-facility-eis202200016) ·
[Northside hospital announcement](https://www.cmtedd.act.gov.au/open_government/inform/act_government_media_releases/rachel-stephen-smith-mla-media-releases/2023/building-a-new-northside-hospital-and-a-more-efficient-health-system) ·
[Northside hospital first DA](https://www.cmtedd.act.gov.au/open_government/inform/act_government_media_releases/chris-steel-mla-media-releases/2026/first-da-approved-for-canberras-new-northside-hospital) ·
[Light rail vehicle contract](https://www.cmtedd.act.gov.au/open_government/inform/act_government_media_releases/chris-steel-mla-media-releases/2022/vehicle-contract-signed-as-canberra-light-rail-stage-2a-gets-the-green-light) ·
[Dickson and Manuka pool upgrades](https://www.act.gov.au/our-canberra/latest-news/2025/october/dickson-and-manuka-pools-reopen-with-upgrades) ·
[2026-27 Budget: investing in the arts](https://www.act.gov.au/our-canberra/latest-news/2026/may/2026-27-act-budget-investing-in-the-arts)

Other: [Canberra Metro LPRDE](https://www.canberra-metro.com.au/projects/lprde/) ·
[Multiplex lyric theatre](https://www.multiplex.global/news/construction-progressing-on-canberra-s-new-lyric-theatre/) ·
[220 London Circuit](https://www.investa.com.au/properties/220-london-circuit-canberra-act-2601) ·
[ACT office consolidation strategy](https://www.canberratimes.com.au/story/6089783/act-government-on-the-hunt-for-more-civic-office-space/)

Every claim in the JSON carries its own `evidence[]` array with the citation and,
where it matters, the quote. If a call looks wrong, the row tells you what it was
built on.

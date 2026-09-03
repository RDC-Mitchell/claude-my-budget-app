// ─────────────────────────────────────────────────────────────
// TERRITORY-WIDE SCOPING OVERLAY  —  GENERATED FILE, DO NOT EDIT
//
// Source of truth: data/scoping/territory-wide-scoping.json
// Regenerate:      node data/scoping/build-scoping-js.js
// Check:           node data/scoping/verify-scoping.js
//
// window.SCOPING.byId[<data.js project id>] gives our attempt to place one of
// the 23 projects data.js marks Territory-wide / unlocatable.
//
// This does NOT override data.js. data.js remains the verified extraction from
// the Budget papers. Everything here is a separate, separately-sourced call
// with its own .confidence and its own .evidence[]. If you show a scoped
// district on screen, show the confidence with it — a "strong" call rests on an
// ACT Government source that is NOT the Budget, and that difference matters.
//
// .placement is one of:
//   single_district  placed to one district
//   multi_district   narrowed to .scoped_candidates, split not published
//   unplaceable      no location exists to find (provision, portfolio, pipeline)
//   unresolved       we could not determine what is being built
// ─────────────────────────────────────────────────────────────

window.SCOPING = {
 "about": "Scoping research on the 23 projects that data.js classifies as Territory-wide / district_basis 'unlocatable'. This file does NOT change data.js. It is an overlay: a separate, separately-sourced attempt to place each project, with the evidence and the confidence attached to every call.",
 "base_dataset": "data.js — window.DATA, 53 projects, 2026-27 ACT Budget Statement G Table 9",
 "compiled": "2026-09-03",
 "unit": "$'000 (thousands of dollars), 2026-27 spend, matching data.js spend_2026_27",
 "confidence_scale": {
  "budget_confirmed": "The Budget papers themselves name the place. No outside source needed.",
  "strong": "The Budget does not name the place, but an official ACT Government source outside the Budget (media release, Built for CBR project page, planning/EIS document) names a specific site for the same named initiative.",
  "partial": "Real sites are known and named, but the initiative covers several of them and the Budget does not publish the split between them. Placeable as a set of districts, not as one.",
  "unplaceable": "There is no location to find. The line is a provision, a portfolio-wide program across the whole government estate, or a pipeline whose sites have not been selected yet."
 },
 "district_convention": {
  "note": "Districts follow the same eight-district scheme data.js uses, plus 'Multiple' and 'Territory-wide'.",
  "jerrabomberra_gap": "Hume and Symonston sit in the gazetted district of Jerrabomberra, which is not one of the eight. data.js already resolved this once by placing 'Improving Mugga Lane landfill capacity' in Tuggeranong. We follow that precedent and flag every row where it applies.",
  "parkes_wrinkle": "Commonwealth Park is in the gazetted suburb of Parkes. Parkes is normally read as South Canberra, but Commonwealth Park lies north of Lake Burley Griffin, adjoining the City. We place it North Canberra on geography and flag it."
 },
 "projects": [
  {
   "id": "canberra-theatre-redevelopment-delivering-a-new-lyric-theatr",
   "project": "Canberra Theatre Redevelopment – Delivering a new Lyric Theatre",
   "spend_2026_27": 162704,
   "scoped_district": "North Canberra",
   "scoped_candidates": [
    "North Canberra"
   ],
   "confidence": "strong",
   "placement": "single_district",
   "sites": [
    {
     "name": "Canberra Theatre Centre",
     "address": "Civic Square, London Circuit, Canberra City ACT 2601",
     "suburb": "City",
     "district": "North Canberra",
     "detail": "New theatre is being built north-west of the existing centre, on the north side of The Playhouse, bordering Northbourne Avenue and Vernon Circle.",
     "approx_latlng": [
      -35.2799,
      149.1296
     ]
    }
   ],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement G, 2026-27 Priorities",
     "quote": "continue construction on a new Lyric Theatre",
     "gives_location": false
    },
    {
     "type": "budget",
     "citation": "Statement B, CMTEDD",
     "quote": "The delivery of a new 2,000-seat Lyric Theatre represents a transformational investment in Canberra's cultural infrastructure",
     "gives_location": false
    },
    {
     "type": "official_external",
     "citation": "ACT Government, Built for CBR — New lyric theatre",
     "url": "https://www.act.gov.au/builtforcbr/browse-all-projects/entertainment-arts-and-sports/new-lyric-theatre",
     "gives_location": true
    },
    {
     "type": "external",
     "citation": "Multiplex — Construction progressing on Canberra's new lyric theatre",
     "url": "https://www.multiplex.global/news/construction-progressing-on-canberra-s-new-lyric-theatre/",
     "note": "Site established Oct 2025, main construction from Jan 2026, completion 2028 — consistent with the published Jul-28 completion date."
    }
   ],
   "residual_unknown": null
  },
  {
   "id": "improving-canberra-s-health-infrastructure-northside-hospita",
   "project": "Improving Canberra's Health Infrastructure – Northside Hospital Development",
   "spend_2026_27": 96324,
   "scoped_district": "Belconnen",
   "scoped_candidates": [
    "Belconnen"
   ],
   "confidence": "strong",
   "placement": "single_district",
   "sites": [
    {
     "name": "New Northside Hospital (existing Calvary / North Canberra Hospital campus)",
     "address": "Mary Potter Circuit, Bruce ACT 2617",
     "suburb": "Bruce",
     "district": "Belconnen",
     "detail": "Staged demolition of the existing buildings approved; early works underway from April 2026, main construction from late 2027.",
     "approx_latlng": [
      -35.2478,
      149.0899
     ]
    }
   ],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement G, 2026-27 Priorities",
     "quote": "commence early works and demolition to enable construction of a new, state-of-the-art hospital in Canberra's North",
     "gives_location": false,
     "note": "Names a direction, not a district."
    },
    {
     "type": "budget",
     "citation": "Statement C, Changes to Appropriation",
     "quote": "Enabling works for the new northside hospital and enhancing health infrastructure at North Canberra Hospital",
     "gives_location": true,
     "note": "The Budget pairs the new hospital's enabling works with North Canberra Hospital, which is the Bruce campus. This is the closest the Budget comes to naming the site."
    },
    {
     "type": "official_external",
     "citation": "ACT Government media release — Building a new northside hospital and a more efficient health system",
     "url": "https://www.cmtedd.act.gov.au/open_government/inform/act_government_media_releases/rachel-stephen-smith-mla-media-releases/2023/building-a-new-northside-hospital-and-a-more-efficient-health-system",
     "quote": "build a new northside hospital on the current Calvary Public Hospital site in Bruce",
     "gives_location": true
    },
    {
     "type": "official_external",
     "citation": "ACT Government media release — First DA approved for Canberra's new Northside Hospital (2026)",
     "url": "https://www.cmtedd.act.gov.au/open_government/inform/act_government_media_releases/chris-steel-mla-media-releases/2026/first-da-approved-for-canberras-new-northside-hospital",
     "gives_location": true
    }
   ],
   "trap": "The hospital is called 'northside' and the existing facility is called 'North Canberra Hospital', but Bruce is a Belconnen suburb. A keyword matcher reading the project title will place this in North Canberra, and that is wrong.",
   "residual_unknown": null
  },
  {
   "id": "market-conditions-provision",
   "project": "Market Conditions Provision",
   "spend_2026_27": 50000,
   "scoped_district": "Territory-wide",
   "scoped_candidates": [],
   "confidence": "unplaceable",
   "placement": "unplaceable",
   "sites": [],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement G, Table 9",
     "quote": "Market Conditions Provision | 50,000 | 0 | 0 | 0 | 50,000 | TBD",
     "gives_location": false,
     "note": "No total project value is printed and completion is TBD — the row shape of a provision, not a project."
    }
   ],
   "reason_unplaceable": "This is a contingency held centrally against construction cost escalation across the whole capital program. It has no site because it is not yet attached to a project. It is the single biggest unplaced line and it should stay unplaced.",
   "residual_unknown": "Which projects it is eventually drawn down against. That will only appear in a later Budget or Budget Review."
  },
  {
   "id": "better-transport-infrastructure-new-light-rail-vehicles-and-",
   "project": "Better transport infrastructure – New light rail vehicles and depot expansion",
   "spend_2026_27": 18941,
   "scoped_district": "Gungahlin",
   "scoped_candidates": [
    "Gungahlin"
   ],
   "confidence": "strong",
   "placement": "single_district",
   "sites": [
    {
     "name": "Canberra light rail depot, Mitchell",
     "address": "Sandford Street, Mitchell ACT 2911",
     "suburb": "Mitchell",
     "district": "Gungahlin",
     "detail": "Depot extended to take five new light rail vehicles and the retrofit program: new Stabling Road 6, a materials storage shed, and a building for on-board energy storage batteries.",
     "approx_latlng": [
      -35.2213,
      149.1417
     ]
    }
   ],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement G, Table 9",
     "gives_location": false
    },
    {
     "type": "official_external",
     "citation": "Canberra Metro — Light Rail Procurement, Retrofit and Depot Expansion (LPRDE)",
     "url": "https://www.canberra-metro.com.au/projects/lprde/",
     "quote": "The existing maintenance depot in Mitchell was extended",
     "gives_location": true
    },
    {
     "type": "official_external",
     "citation": "ACT Government media release — Vehicle contract signed as Canberra light rail Stage 2A gets the green light",
     "url": "https://www.cmtedd.act.gov.au/open_government/inform/act_government_media_releases/chris-steel-mla-media-releases/2022/vehicle-contract-signed-as-canberra-light-rail-stage-2a-gets-the-green-light",
     "gives_location": true
    }
   ],
   "split_note": "Two things share one line. The depot is a fixed asset in Mitchell (Gungahlin). The vehicles are rolling stock that runs the whole Gungahlin-to-City corridor and, once retrofitted, Stage 2A. Only the depot half is genuinely locatable; we place the line on the depot because that is the built asset.",
   "residual_unknown": "The split between vehicle spend and depot spend is not published."
  },
  {
   "id": "delivering-the-new-materials-recovery-facility-and-food-orga",
   "project": "Delivering the New Materials Recovery Facility and Food Organics / Garden Organics Facility",
   "spend_2026_27": 12750,
   "scoped_district": "Tuggeranong",
   "scoped_candidates": [
    "Tuggeranong"
   ],
   "confidence": "strong",
   "placement": "single_district",
   "district_caveat": "jerrabomberra_gap",
   "sites": [
    {
     "name": "Food Organics and Garden Organics (FOGO) processing facility",
     "address": "John Cory Road, Hume Resource Recovery Estate (Block 5, Section 26), Hume ACT 2620",
     "suburb": "Hume",
     "district": "Jerrabomberra (gazetted) — filed as Tuggeranong here",
     "detail": "In-vessel composting, up to 70,000 tonnes of FOGO a year, producing about 28,000 tonnes of compost. Mugga Lane Landfill sits about 200m north-west.",
     "approx_latlng": [
      -35.4032,
      149.166
     ]
    },
    {
     "name": "Hume Materials Recovery Facility",
     "address": "Recycling Road, Hume ACT 2620",
     "suburb": "Hume",
     "district": "Jerrabomberra (gazetted) — filed as Tuggeranong here",
     "detail": "West of the FOGO site across Recycling Road.",
     "approx_latlng": [
      -35.4021,
      149.1622
     ]
    }
   ],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement G, 2026-27 Priorities",
     "quote": "complete construction of the New Recycling Facility and continue planning for the organic waste processing (FOGO) facility",
     "gives_location": false
    },
    {
     "type": "official_external",
     "citation": "ACT Planning — Hume Food Organics and Garden Organics Facility, EIS202200016",
     "url": "https://www.planning.act.gov.au/applications-and-assessments/environmental-impact-assessment/environmental-impact-statement/fogo-waste-facility-eis202200016",
     "gives_location": true
    },
    {
     "type": "official_external",
     "citation": "ACT City Services — Food Organics and Garden Organics Facility",
     "url": "https://www.cityservices.act.gov.au/Infrastructure-Projects/tuggeranong/food-organics-and-garden-organics-facility",
     "gives_location": true,
     "note": "The ACT Government's own project page files this Hume facility under 'tuggeranong'. That is the strongest available argument for the district call here."
    }
   ],
   "residual_unknown": "Nothing about the site. The open question is only which district label a Hume site should carry — see district_convention.jerrabomberra_gap."
  },
  {
   "id": "climate-action-continuing-the-electrification-of-government-",
   "project": "Climate action – Continuing the Electrification of Government Assets",
   "spend_2026_27": 9189,
   "scoped_district": "Territory-wide",
   "scoped_candidates": [],
   "confidence": "unplaceable",
   "placement": "unplaceable",
   "sites": [],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement G, 2026-27 Priorities",
     "quote": "continue the electrification of Government buildings and delivering the Public School Heating and Cooling Fund",
     "gives_location": false
    },
    {
     "type": "budget",
     "citation": "Statement G, 2026-27 Priorities",
     "quote": "continue to lease, manage and maintain almost 250 public buildings and sites on behalf of the Government",
     "gives_location": false,
     "note": "This is the estate the program runs across."
    }
   ],
   "reason_unplaceable": "A rolling program across the government building estate and the public school network. Every district contains some of it. A per-building schedule would be needed to split it and none is published.",
   "residual_unknown": "The building-by-building schedule. Potentially obtainable from Infrastructure Canberra or via the Public School Heating and Cooling Fund reporting."
  },
  {
   "id": "better-community-infrastructure-public-building-upgrades",
   "project": "Better Community Infrastructure – Public Building Upgrades",
   "spend_2026_27": 8330,
   "scoped_district": "Multiple",
   "scoped_candidates": [
    "North Canberra"
   ],
   "confidence": "partial",
   "placement": "multi_district",
   "sites": [
    {
     "name": "ACT Legislative Assembly and North Building",
     "address": "Civic Square, London Circuit, Canberra City ACT 2601",
     "suburb": "City",
     "district": "North Canberra",
     "detail": "Roof upgrades. This is the only sub-item in the whole line that names a building.",
     "approx_latlng": [
      -35.2809,
      149.129
     ]
    }
   ],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement G, Table 8 — Changes to Appropriation sub-items",
     "quote": "Better community infrastructure – Public Building Upgrades – Roof upgrades at ACT Legislative Assembly and North Buildings",
     "gives_location": true
    },
    {
     "type": "budget",
     "citation": "Statement G, Table 8 — remaining sub-items",
     "quote": "Building safety upgrades; Depot compliance upgrades; Fire system, switchboard and HVAC upgrades; Roof replacement and rectification work",
     "gives_location": false,
     "note": "Four of the five sub-items name a work type, not a place."
    }
   ],
   "how_to_finish": "The appropriation table breaks this line into five named sub-items and one of them names a building. If Infrastructure Canberra publishes the sites behind 'building safety', 'depot compliance' and 'roof replacement', the remaining spend becomes placeable at building level.",
   "residual_unknown": "Which depots, and which buildings received safety / HVAC / roof work."
  },
  {
   "id": "new-materials-recovery-facility",
   "project": "New Materials Recovery Facility",
   "spend_2026_27": 6340,
   "scoped_district": "Tuggeranong",
   "scoped_candidates": [
    "Tuggeranong"
   ],
   "confidence": "strong",
   "placement": "single_district",
   "district_caveat": "jerrabomberra_gap",
   "sites": [
    {
     "name": "Hume Materials Recovery Facility",
     "address": "Recycling Road, Hume Resource Recovery Estate, Hume ACT 2620",
     "suburb": "Hume",
     "district": "Jerrabomberra (gazetted) — filed as Tuggeranong here",
     "approx_latlng": [
      -35.4021,
      149.1622
     ]
    }
   ],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement G, Table 9",
     "quote": "New Materials Recovery Facility | 26,000 | 6,340 | 6,250 | 0 | 0 | 12,590 | Apr-28",
     "gives_location": false
    },
    {
     "type": "official_external",
     "citation": "ACT Planning — Hume FOGO Facility EIS appendices (locate the MRF relative to the FOGO site)",
     "url": "https://www.planning.act.gov.au/__data/assets/pdf_file/0006/2381424/Appendix-R-Preliminary-Hazard-Analysis-Report.pdf",
     "quote": "Hume Materials Recovery Facility is west of the site across Recycling Road",
     "gives_location": true
    }
   ],
   "duplicate_watch": "This line and 'Delivering the New Materials Recovery Facility and Food Organics / Garden Organics Facility' both appear in Table 9 and both concern the same Hume estate. They are separate rows with separate totals and completion dates (Apr-28 vs TBD) and should not be merged, but do not describe them as two unrelated facilities either.",
   "residual_unknown": null
  },
  {
   "id": "better-transport-infrastructure-delivering-light-rail-stage-",
   "project": "Better transport infrastructure – Delivering Light Rail Stage 2A",
   "spend_2026_27": 5618,
   "scoped_district": "North Canberra",
   "scoped_candidates": [
    "North Canberra"
   ],
   "confidence": "budget_confirmed",
   "placement": "single_district",
   "sites": [
    {
     "name": "Light Rail Stage 2A alignment",
     "address": "Alinga Street, City to Commonwealth Park, via London Circuit and Commonwealth Avenue",
     "suburb": "City; Acton; Parkes (Commonwealth Park)",
     "district": "North Canberra",
     "detail": "Wire-free extension from the existing City terminus to a new Commonwealth Park stop.",
     "approx_latlng": [
      -35.287,
      149.1275
     ]
    }
   ],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement G, 2026-27 Priorities",
     "quote": "continue construction of the light rail network to Commonwealth Park, and conduct planning and approvals to extend the route to Woden",
     "gives_location": true
    },
    {
     "type": "budget",
     "citation": "Statement E, City and Environment",
     "quote": "management of service disruption impacts for Light Rail Stage 2A to Commonwealth Park construction, creating a public transport spine connecting Canberra's north and south",
     "gives_location": true
    }
   ],
   "split_note": "The appropriation history for this line also carries an item named 'Better transport infrastructure – Building light rail to Woden', which is Stage 2B and spans South Canberra and Woden Valley. Stage 2B already has its own row in data.js ('Delivering Light Rail to Woden', placed in Woden Valley), so do not double-count. The 2026-27 spend on this row is Stage 2A only.",
   "residual_unknown": "The Commonwealth Park terminus is in the gazetted suburb of Parkes — see district_convention.parkes_wrinkle."
  },
  {
   "id": "canberra-aquatic-centre",
   "project": "Canberra Aquatic Centre",
   "spend_2026_27": 5474,
   "scoped_district": "North Canberra",
   "scoped_candidates": [
    "North Canberra"
   ],
   "confidence": "budget_confirmed",
   "placement": "single_district",
   "district_caveat": "parkes_wrinkle",
   "sites": [
    {
     "name": "New Canberra Aquatic Centre",
     "address": "Commonwealth Park, Commonwealth Avenue, Parkes ACT 2600",
     "suburb": "Parkes (Commonwealth Park)",
     "district": "North Canberra",
     "detail": "Next to Commonwealth Avenue and the new light rail line. 50m indoor lap pool and splash play areas; no deep-water dive facility, because the site cannot take one. Concept design through 2026, construction signalled 2027-28.",
     "approx_latlng": [
      -35.2926,
      149.1305
     ]
    }
   ],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement G, 2026-27 Priorities",
     "quote": "continue to progress planning and design for a new aquatic centre in Commonwealth Park",
     "gives_location": true,
     "note": "The Budget names the site outright. This project should never have been Territory-wide — the keyword list simply had no entry for Commonwealth Park."
    },
    {
     "type": "official_external",
     "citation": "ACT Government, Built for CBR — Canberra Aquatic Centre",
     "url": "https://www.act.gov.au/builtforcbr/browse-all-projects/entertainment-arts-and-sports/canberra-aquatic-centre",
     "gives_location": true
    }
   ],
   "residual_unknown": "Only the district label. Commonwealth Park is gazetted in the suburb of Parkes, which normally reads as South Canberra, but the park is north of Lake Burley Griffin and adjoins the City."
  },
  {
   "id": "infrastructure-canberra-2026-27-asset-renewal-program",
   "project": "Infrastructure Canberra – 2026-27 Asset Renewal Program",
   "spend_2026_27": 4930,
   "scoped_district": "Territory-wide",
   "scoped_candidates": [],
   "confidence": "unplaceable",
   "placement": "unplaceable",
   "sites": [],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement G, Table 9",
     "gives_location": false
    },
    {
     "type": "budget",
     "citation": "Statement G, 2026-27 Priorities",
     "quote": "continue to lease, manage and maintain almost 250 public buildings and sites on behalf of the Government",
     "gives_location": false
    }
   ],
   "reason_unplaceable": "Asset Renewal Programs are annual pools of money spread across an agency's whole asset base. Statements C, D and F each carry their own Asset Renewal Program line for their own estates; this is Infrastructure Canberra's. None of them publish a site list.",
   "residual_unknown": "The renewal schedule across the ~250 buildings and sites."
  },
  {
   "id": "more-energy-efficient-government-accommodation",
   "project": "More energy efficient Government accommodation",
   "spend_2026_27": 2995,
   "scoped_district": "Multiple",
   "scoped_candidates": [
    "North Canberra",
    "Woden Valley"
   ],
   "confidence": "partial",
   "placement": "multi_district",
   "sites": [
    {
     "name": "ACT Government Office Building, Civic",
     "address": "220 London Circuit, Canberra City ACT 2601",
     "suburb": "City",
     "district": "North Canberra",
     "detail": "23,000sqm; the ACT Government headquarters building.",
     "approx_latlng": [
      -35.2807,
      149.1305
     ]
    },
    {
     "name": "ACT Government Office, Dickson",
     "address": "480 Northbourne Avenue, Dickson ACT 2602",
     "suburb": "Dickson",
     "district": "North Canberra",
     "detail": "13,200sqm pre-commitment, adjacent to the Dickson light rail stop.",
     "approx_latlng": [
      -35.2513,
      149.1355
     ]
    }
   ],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement G, Table 9 and Table 8",
     "gives_location": false
    },
    {
     "type": "external",
     "citation": "ACT office consolidation strategy — hub and satellite: 1700 staff in Civic, 1000 in Dickson, 1100 in Woden",
     "url": "https://www.canberratimes.com.au/story/6089783/act-government-on-the-hunt-for-more-civic-office-space/",
     "gives_location": true,
     "note": "Identifies where the government office estate actually is; does not confirm which buildings this line pays for."
    }
   ],
   "how_to_finish": "The government office estate is concentrated in three places. Confirming which buildings received energy-efficiency work in 2026-27 would place this line properly; the Budget does not say.",
   "residual_unknown": "Which buildings. The candidate districts here are inferred from where the office estate is, not from the Budget."
  },
  {
   "id": "managing-government-and-community-facilities",
   "project": "Managing government and community facilities",
   "spend_2026_27": 2766,
   "scoped_district": "Territory-wide",
   "scoped_candidates": [],
   "confidence": "unplaceable",
   "placement": "unplaceable",
   "sites": [],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement G, Table 9",
     "quote": "Managing government and community facilities | 2,766 | 2,766 | 0 | 0 | 0 | 2,766 | Jun-27",
     "gives_location": false
    },
    {
     "type": "budget",
     "citation": "Statement G, 2026-27 Priorities",
     "quote": "continue to lease, manage and maintain almost 250 public buildings and sites on behalf of the Government",
     "gives_location": false
    }
   ],
   "reason_unplaceable": "Portfolio management of the ~250-building estate. No single site.",
   "residual_unknown": "The facility list."
  },
  {
   "id": "investing-in-canberra-s-arts-sector",
   "project": "Investing in Canberra's Arts Sector",
   "spend_2026_27": 2715,
   "scoped_district": "Territory-wide",
   "scoped_candidates": [
    "North Canberra",
    "Belconnen",
    "Tuggeranong",
    "South Canberra"
   ],
   "confidence": "unplaceable",
   "placement": "unresolved",
   "sites": [],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement G, Table 9",
     "quote": "Investing in Canberra's Arts Sector | 5,845 | 2,715 | 2,710 | 0 | 0 | 5,425 | Jun-28",
     "gives_location": false
    },
    {
     "type": "budget",
     "citation": "Statement G, Table 9 — adjacent row",
     "quote": "Kingston Arts Precinct | 30,074 | 28,456 | ... | TBD",
     "gives_location": true,
     "note": "Kingston Arts Precinct is a SEPARATE row, already placed in South Canberra in data.js. So this line is not the Kingston project."
    },
    {
     "type": "official_external",
     "citation": "ACT Government — 2026-27 ACT Budget: investing in the arts",
     "url": "https://www.act.gov.au/our-canberra/latest-news/2026/may/2026-27-act-budget-investing-in-the-arts",
     "gives_location": false,
     "note": "The announced arts money is largely OPERATING funding: a 25% uplift to 29 arts organisations, project grants, screen and games industry support, CMAG and Lanyon. None of that explains a capital works row. The capital purpose of this line is not published anywhere we could find."
    }
   ],
   "reason_unplaceable": "This is the one line where we could not determine what is being built. It sits in the capital works table with a Jun-28 completion date, so it buys something physical, but no ACT Government source we found names the asset or the venue.",
   "how_to_finish": "Ask artsACT or Infrastructure Canberra what the capital component of 'Investing in Canberra's Arts Sector' funds. The candidate list above is the set of artsACT-supported venues by district (Ainslie and Gorman Arts Centres and Watson Arts Centre in North Canberra; Belconnen Arts Centre and Strathnairn in Belconnen; Tuggeranong Arts Centre; Canberra Glassworks in South Canberra) and is a guess at the search space, not a finding.",
   "residual_unknown": "Everything. This is the highest-value unanswered question in the set relative to its size."
  },
  {
   "id": "improving-canberra-s-health-infrastructure-new-health-centre",
   "project": "Improving Canberra's health infrastructure – New Health Centres across the ACT",
   "spend_2026_27": 2677,
   "scoped_district": "Multiple",
   "scoped_candidates": [
    "Gungahlin",
    "Belconnen"
   ],
   "confidence": "strong",
   "placement": "multi_district",
   "sites": [
    {
     "name": "North Gungahlin Health Centre",
     "address": "Kingsland Parade, Casey ACT 2913",
     "suburb": "Casey",
     "district": "Gungahlin",
     "detail": "Design work underway.",
     "approx_latlng": [
      -35.1663,
      149.08
     ]
    },
    {
     "name": "West Belconnen Health Centre",
     "address": "Site not yet selected",
     "suburb": null,
     "district": "Belconnen",
     "detail": "Early planning. The Budget funds a feasibility study; consultation begins once a site is chosen.",
     "approx_latlng": null
    }
   ],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement C, Changes to Appropriation",
     "quote": "Transfer - Capital Injection to CRP - New Health Centres Across the ACT - for the West Belconnen early planning feasibility study",
     "gives_location": true,
     "note": "The Budget explicitly attaches a West Belconnen feasibility study to THIS initiative by name."
    },
    {
     "type": "official_external",
     "citation": "ACT Government, Built for CBR — Health centres",
     "url": "https://www.act.gov.au/builtforcbr/browse-all-projects/health/health-centres",
     "quote": "four new health centres located in South Tuggeranong, Inner South, North Gungahlin and West Belconnen",
     "gives_location": true
    }
   ],
   "split_note": "Four new health centres exist as a program, but two of them already have their own rows: 'Inner South Health Centre Construction' (placed South Canberra in data.js) and the South Tuggeranong centre in Conder (funded through Statement C operating lines). What is left in THIS row is the North Gungahlin and West Belconnen work — which is why the candidates are Gungahlin and Belconnen and not all four districts.",
   "residual_unknown": "The dollar split between North Gungahlin and West Belconnen, and the West Belconnen site itself."
  },
  {
   "id": "improving-canberra-s-health-infrastructure-expanding-health-",
   "project": "Improving Canberra's health infrastructure – Expanding health centres across the city",
   "spend_2026_27": 2574,
   "scoped_district": "Multiple",
   "scoped_candidates": [
    "Belconnen",
    "North Canberra",
    "Gungahlin",
    "Woden Valley",
    "Tuggeranong",
    "Weston Creek"
   ],
   "confidence": "partial",
   "placement": "multi_district",
   "sites": [
    {
     "name": "Belconnen Community Health Centre",
     "address": "56 Lathlain Street, Belconnen ACT 2617",
     "suburb": "Belconnen",
     "district": "Belconnen",
     "approx_latlng": [
      -35.2385,
      149.0644
     ]
    },
    {
     "name": "City Community Health Centre",
     "address": "Level 2, 1 Moore Street, Canberra City ACT 2601",
     "suburb": "City",
     "district": "North Canberra",
     "approx_latlng": [
      -35.2793,
      149.1287
     ]
    },
    {
     "name": "Dickson Community Health Centre",
     "address": "111 Dickson Place, Dickson ACT 2602",
     "suburb": "Dickson",
     "district": "North Canberra",
     "approx_latlng": [
      -35.2506,
      149.1394
     ]
    },
    {
     "name": "Gungahlin Community Health Centre",
     "address": "57 Ernest Cavanagh Street, Gungahlin ACT 2912",
     "suburb": "Gungahlin",
     "district": "Gungahlin",
     "approx_latlng": [
      -35.1846,
      149.1332
     ]
    },
    {
     "name": "Phillip Community Health Centre",
     "address": "17 Corinna Street, Phillip ACT 2606",
     "suburb": "Phillip",
     "district": "Woden Valley",
     "approx_latlng": [
      -35.3475,
      149.0872
     ]
    },
    {
     "name": "Tuggeranong Community Health Centre",
     "address": "147 Anketell Street, Greenway ACT 2900",
     "suburb": "Greenway",
     "district": "Tuggeranong",
     "approx_latlng": [
      -35.4159,
      149.068
     ]
    },
    {
     "name": "Weston Creek Community Health Centre",
     "address": "Weston Creek ACT 2611",
     "suburb": "Stirling",
     "district": "Weston Creek",
     "approx_latlng": [
      -35.3357,
      149.0562
     ]
    }
   ],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement G, Table 8 and Statement C, Changes to Appropriation",
     "quote": "Improving Canberra's health infrastructure – Expanding health centres across the city",
     "gives_location": false,
     "note": "'Across the city' is the only geographic word the Budget offers."
    },
    {
     "type": "official_external",
     "citation": "Canberra Health Services — Community health centres",
     "url": "https://health.act.gov.au/hospitals-and-health-centres/community-health-centres",
     "gives_location": true,
     "note": "Gives the full estate of existing centres, which is the set this line expands."
    }
   ],
   "how_to_finish": "The set of existing community health centres is known and small (seven). Confirming which of them are being expanded in 2026-27 would place this line to one or two districts.",
   "residual_unknown": "Which centres are being expanded, and by how much each."
  },
  {
   "id": "30-000-homes-by-2030-public-housing-pipeline",
   "project": "30,000 homes by 2030 – Public housing pipeline",
   "spend_2026_27": 1995,
   "scoped_district": "Territory-wide",
   "scoped_candidates": [],
   "confidence": "unplaceable",
   "placement": "unplaceable",
   "sites": [],
   "evidence": [
    {
     "type": "budget",
     "citation": "Housing Statement",
     "quote": "The 2026-27 Budget paves the way for further increases to the portfolio by providing $360 million for an additional 450 public housing dwellings, through the launch of the new Public Housing Pipeline.",
     "gives_location": false,
     "note": "450 dwellings, no suburbs named anywhere in the statement."
    },
    {
     "type": "budget",
     "citation": "Statement C, Housing ACT",
     "quote": "30,000 homes by 2030 – Public housing pipeline | 67,975 | 148,074 | 66,805 | 0 | 282,854 | Dec-30",
     "gives_location": false
    }
   ],
   "reason_unplaceable": "The sites have not been chosen yet — that is what a pipeline is. More than half the homes are also contingent on a Housing Australia Future Fund Round 3 outcome.",
   "do_not_confuse_with": "data.js LAYERS.housing names real suburbs (Strathnairn, Phillip, Taylor, Turner, Belconnen, Moncrieff, Lyneham, Whitlam, Gungahlin Town Centre). Those belong to the Affordable Housing Project Fund, a DIFFERENT program, and must not be used to place this line.",
   "residual_unknown": "All 450 dwelling locations. These will be announced progressively to Dec-30."
  },
  {
   "id": "climate-action-moving-more-government-facilities-off-gas",
   "project": "Climate action – Moving more government facilities off gas",
   "spend_2026_27": 1425,
   "scoped_district": "Territory-wide",
   "scoped_candidates": [],
   "confidence": "unplaceable",
   "placement": "unplaceable",
   "sites": [],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement G, Tables 8 and 9",
     "quote": "Climate action – Moving more government facilities off gas | 6,900 | 1,425 | 0 | 0 | 0 | 1,425 | Jun-27",
     "gives_location": false
    }
   ],
   "reason_unplaceable": "Same estate-wide program shape as 'Continuing the Electrification of Government Assets'. The two lines are siblings and neither names a facility.",
   "residual_unknown": "The facility list."
  },
  {
   "id": "public-pool-upgrades-operations-and-maintenance",
   "project": "Public pool upgrades, operations and maintenance",
   "spend_2026_27": 718,
   "scoped_district": "Multiple",
   "scoped_candidates": [
    "North Canberra",
    "South Canberra",
    "Gungahlin",
    "Tuggeranong",
    "Molonglo"
   ],
   "confidence": "partial",
   "placement": "multi_district",
   "sites": [
    {
     "name": "Canberra Olympic Pool",
     "address": "Allara Street, Canberra City ACT 2601",
     "suburb": "City",
     "district": "North Canberra",
     "approx_latlng": [
      -35.2802,
      149.1352
     ]
    },
    {
     "name": "Dickson Aquatic Centre",
     "address": "Cowper Street, Dickson ACT 2602",
     "suburb": "Dickson",
     "district": "North Canberra",
     "approx_latlng": [
      -35.2493,
      149.1379
     ]
    },
    {
     "name": "Manuka Pool",
     "address": "Manuka Circle, Griffith ACT 2603",
     "suburb": "Griffith",
     "district": "South Canberra",
     "detail": "Heritage listed.",
     "approx_latlng": [
      -35.3216,
      149.133
     ]
    },
    {
     "name": "Gungahlin Leisure Centre",
     "address": "Gungahlin ACT 2912",
     "suburb": "Gungahlin",
     "district": "Gungahlin",
     "approx_latlng": [
      -35.1855,
      149.1338
     ]
    },
    {
     "name": "Lakeside Leisure Centre",
     "address": "Greenway ACT 2900",
     "suburb": "Greenway",
     "district": "Tuggeranong",
     "approx_latlng": [
      -35.4173,
      149.0658
     ]
    },
    {
     "name": "Active Leisure Centre, Erindale",
     "address": "Erindale, Wanniassa ACT 2903",
     "suburb": "Wanniassa",
     "district": "Tuggeranong",
     "approx_latlng": [
      -35.3961,
      149.0899
     ]
    },
    {
     "name": "Stromlo Leisure Centre",
     "address": "Stromlo ACT 2611",
     "suburb": "Stromlo",
     "district": "Molonglo",
     "detail": "District call is contestable — Stromlo is gazetted in Molonglo Valley but the centre serves Weston Creek, and data.js already placed 'Stromlo District Playing Fields' in Weston Creek.",
     "approx_latlng": [
      -35.3186,
      149.0179
     ]
    }
   ],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement G, Table 9",
     "quote": "Public pool upgrades, operations and maintenance | 1,134 | 718 | 98 | 210 | 108 | 1,134 | Ongoing",
     "gives_location": false
    },
    {
     "type": "official_external",
     "citation": "ACT Sport and Recreation — Aquatic and leisure facilities",
     "url": "https://www.sport.act.gov.au/sport-facilities/aquatic-and-leisure-facilities",
     "gives_location": true,
     "note": "Seven ACT Government public pools. This is the complete estate the line covers."
    }
   ],
   "how_to_finish": "The estate is exactly seven pools across five districts. A per-pool spend breakdown would place this line fully. Recent per-pool figures exist in ACT media releases (for example $925,000 at Dickson and $30,000 at Manuka in the 2025 off-season), so the government does hold this detail.",
   "residual_unknown": "The 2026-27 split across the seven pools, and the Stromlo district call."
  },
  {
   "id": "office-accommodation",
   "project": "Office Accommodation",
   "spend_2026_27": 500,
   "scoped_district": "Territory-wide",
   "scoped_candidates": [
    "North Canberra",
    "Woden Valley"
   ],
   "confidence": "unplaceable",
   "placement": "unplaceable",
   "sites": [],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement G, Table 9",
     "quote": "Office Accommodation | Ongoing | 500 | 500 | 500 | 500 | 2,000 | Ongoing",
     "gives_location": false,
     "note": "'Ongoing' total value, 'Ongoing' completion, flat $500k a year. A standing allowance, not a project."
    }
   ],
   "reason_unplaceable": "A flat annual allowance against the leased office estate. Nothing to place.",
   "residual_unknown": "Nothing worth chasing at this value."
  },
  {
   "id": "better-community-infrastructure-refurbishing-community-and-g",
   "project": "Better community infrastructure – Refurbishing community and government buildings",
   "spend_2026_27": 490,
   "scoped_district": "Territory-wide",
   "scoped_candidates": [],
   "confidence": "unplaceable",
   "placement": "unplaceable",
   "sites": [],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement G, Tables 8 and 9",
     "quote": "Better community infrastructure – Refurbishing community and government buildings | 7,249 | 490 | 0 | 0 | 0 | 490 | Jun-27",
     "gives_location": false,
     "note": "Unlike its sibling 'Public Building Upgrades', this line has no named sub-items in the appropriation tables."
    }
   ],
   "reason_unplaceable": "A refurbishment pool across community and government buildings, with no sub-item detail published. The 2026-27 figure is the tail of a larger program.",
   "residual_unknown": "The building list."
  },
  {
   "id": "act-government-office-accommodation-consolidation",
   "project": "ACT Government office accommodation consolidation",
   "spend_2026_27": 421,
   "scoped_district": "North Canberra",
   "scoped_candidates": [
    "North Canberra"
   ],
   "confidence": "strong",
   "placement": "single_district",
   "sites": [
    {
     "name": "ACT Government Office Building, Civic",
     "address": "220 London Circuit, Canberra City ACT 2601",
     "suburb": "City",
     "district": "North Canberra",
     "approx_latlng": [
      -35.2807,
      149.1305
     ]
    },
    {
     "name": "ACT Government Office, Dickson",
     "address": "480 Northbourne Avenue, Dickson ACT 2602",
     "suburb": "Dickson",
     "district": "North Canberra",
     "approx_latlng": [
      -35.2513,
      149.1355
     ]
    }
   ],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement B (CMTEDD) and Statement H (Digital), Changes to Appropriation",
     "quote": "Building a better city – Civic and Dickson office accommodation",
     "gives_location": true,
     "note": "A matching initiative name in two other statements names both buildings. This is the Budget placing the line itself, in a different table from the one the project row came from."
    },
    {
     "type": "budget",
     "citation": "Statement B, 2026-27 Budget Technical Adjustments",
     "quote": "Accommodation savings as a result of new Government Office Buildings",
     "gives_location": false
    },
    {
     "type": "official_external",
     "citation": "220 London Circuit — Investa property page",
     "url": "https://www.investa.com.au/properties/220-london-circuit-canberra-act-2601",
     "gives_location": true
    }
   ],
   "method_note": "This is the clearest example of why the district search should not stop at the project's own table. The location was sitting in a different statement under a slightly different initiative name.",
   "residual_unknown": "Whether any of the 2026-27 spend touches the Woden satellite site named in the original consolidation strategy."
  },
  {
   "id": "better-community-infrastructure-refurbishing-canberra-s-publ",
   "project": "Better community infrastructure – Refurbishing Canberra's public pools",
   "spend_2026_27": 184,
   "scoped_district": "Multiple",
   "scoped_candidates": [
    "North Canberra",
    "South Canberra",
    "Gungahlin",
    "Tuggeranong",
    "Molonglo"
   ],
   "confidence": "partial",
   "placement": "multi_district",
   "sites": [],
   "sites_ref": "public-pool-upgrades-operations-and-maintenance",
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement G, Table 9",
     "quote": "Better community infrastructure – Refurbishing Canberra's public pools | 4,008 | 184 | 0 | 0 | 0 | 184 | Dec-26",
     "gives_location": false
    },
    {
     "type": "official_external",
     "citation": "ACT Government — Dickson and Manuka pools reopen with upgrades (October 2025)",
     "url": "https://www.act.gov.au/our-canberra/latest-news/2025/october/dickson-and-manuka-pools-reopen-with-upgrades",
     "gives_location": true,
     "note": "Names Dickson ($925,000) and Manuka ($30,000) as recipients of off-season upgrade work in this program's earlier years. Good evidence that spend IS tracked per pool internally."
    }
   ],
   "split_note": "Same seven-pool estate as 'Public pool upgrades, operations and maintenance'. This row is the tail of a program finishing Dec-26; the other row is the ongoing maintenance allowance. Do not merge them.",
   "residual_unknown": "Which pools the final tranche lands on."
  }
 ],
 "byId": {
  "canberra-theatre-redevelopment-delivering-a-new-lyric-theatr": {
   "id": "canberra-theatre-redevelopment-delivering-a-new-lyric-theatr",
   "project": "Canberra Theatre Redevelopment – Delivering a new Lyric Theatre",
   "spend_2026_27": 162704,
   "scoped_district": "North Canberra",
   "scoped_candidates": [
    "North Canberra"
   ],
   "confidence": "strong",
   "placement": "single_district",
   "sites": [
    {
     "name": "Canberra Theatre Centre",
     "address": "Civic Square, London Circuit, Canberra City ACT 2601",
     "suburb": "City",
     "district": "North Canberra",
     "detail": "New theatre is being built north-west of the existing centre, on the north side of The Playhouse, bordering Northbourne Avenue and Vernon Circle.",
     "approx_latlng": [
      -35.2799,
      149.1296
     ]
    }
   ],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement G, 2026-27 Priorities",
     "quote": "continue construction on a new Lyric Theatre",
     "gives_location": false
    },
    {
     "type": "budget",
     "citation": "Statement B, CMTEDD",
     "quote": "The delivery of a new 2,000-seat Lyric Theatre represents a transformational investment in Canberra's cultural infrastructure",
     "gives_location": false
    },
    {
     "type": "official_external",
     "citation": "ACT Government, Built for CBR — New lyric theatre",
     "url": "https://www.act.gov.au/builtforcbr/browse-all-projects/entertainment-arts-and-sports/new-lyric-theatre",
     "gives_location": true
    },
    {
     "type": "external",
     "citation": "Multiplex — Construction progressing on Canberra's new lyric theatre",
     "url": "https://www.multiplex.global/news/construction-progressing-on-canberra-s-new-lyric-theatre/",
     "note": "Site established Oct 2025, main construction from Jan 2026, completion 2028 — consistent with the published Jul-28 completion date."
    }
   ],
   "residual_unknown": null
  },
  "improving-canberra-s-health-infrastructure-northside-hospita": {
   "id": "improving-canberra-s-health-infrastructure-northside-hospita",
   "project": "Improving Canberra's Health Infrastructure – Northside Hospital Development",
   "spend_2026_27": 96324,
   "scoped_district": "Belconnen",
   "scoped_candidates": [
    "Belconnen"
   ],
   "confidence": "strong",
   "placement": "single_district",
   "sites": [
    {
     "name": "New Northside Hospital (existing Calvary / North Canberra Hospital campus)",
     "address": "Mary Potter Circuit, Bruce ACT 2617",
     "suburb": "Bruce",
     "district": "Belconnen",
     "detail": "Staged demolition of the existing buildings approved; early works underway from April 2026, main construction from late 2027.",
     "approx_latlng": [
      -35.2478,
      149.0899
     ]
    }
   ],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement G, 2026-27 Priorities",
     "quote": "commence early works and demolition to enable construction of a new, state-of-the-art hospital in Canberra's North",
     "gives_location": false,
     "note": "Names a direction, not a district."
    },
    {
     "type": "budget",
     "citation": "Statement C, Changes to Appropriation",
     "quote": "Enabling works for the new northside hospital and enhancing health infrastructure at North Canberra Hospital",
     "gives_location": true,
     "note": "The Budget pairs the new hospital's enabling works with North Canberra Hospital, which is the Bruce campus. This is the closest the Budget comes to naming the site."
    },
    {
     "type": "official_external",
     "citation": "ACT Government media release — Building a new northside hospital and a more efficient health system",
     "url": "https://www.cmtedd.act.gov.au/open_government/inform/act_government_media_releases/rachel-stephen-smith-mla-media-releases/2023/building-a-new-northside-hospital-and-a-more-efficient-health-system",
     "quote": "build a new northside hospital on the current Calvary Public Hospital site in Bruce",
     "gives_location": true
    },
    {
     "type": "official_external",
     "citation": "ACT Government media release — First DA approved for Canberra's new Northside Hospital (2026)",
     "url": "https://www.cmtedd.act.gov.au/open_government/inform/act_government_media_releases/chris-steel-mla-media-releases/2026/first-da-approved-for-canberras-new-northside-hospital",
     "gives_location": true
    }
   ],
   "trap": "The hospital is called 'northside' and the existing facility is called 'North Canberra Hospital', but Bruce is a Belconnen suburb. A keyword matcher reading the project title will place this in North Canberra, and that is wrong.",
   "residual_unknown": null
  },
  "market-conditions-provision": {
   "id": "market-conditions-provision",
   "project": "Market Conditions Provision",
   "spend_2026_27": 50000,
   "scoped_district": "Territory-wide",
   "scoped_candidates": [],
   "confidence": "unplaceable",
   "placement": "unplaceable",
   "sites": [],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement G, Table 9",
     "quote": "Market Conditions Provision | 50,000 | 0 | 0 | 0 | 50,000 | TBD",
     "gives_location": false,
     "note": "No total project value is printed and completion is TBD — the row shape of a provision, not a project."
    }
   ],
   "reason_unplaceable": "This is a contingency held centrally against construction cost escalation across the whole capital program. It has no site because it is not yet attached to a project. It is the single biggest unplaced line and it should stay unplaced.",
   "residual_unknown": "Which projects it is eventually drawn down against. That will only appear in a later Budget or Budget Review."
  },
  "better-transport-infrastructure-new-light-rail-vehicles-and-": {
   "id": "better-transport-infrastructure-new-light-rail-vehicles-and-",
   "project": "Better transport infrastructure – New light rail vehicles and depot expansion",
   "spend_2026_27": 18941,
   "scoped_district": "Gungahlin",
   "scoped_candidates": [
    "Gungahlin"
   ],
   "confidence": "strong",
   "placement": "single_district",
   "sites": [
    {
     "name": "Canberra light rail depot, Mitchell",
     "address": "Sandford Street, Mitchell ACT 2911",
     "suburb": "Mitchell",
     "district": "Gungahlin",
     "detail": "Depot extended to take five new light rail vehicles and the retrofit program: new Stabling Road 6, a materials storage shed, and a building for on-board energy storage batteries.",
     "approx_latlng": [
      -35.2213,
      149.1417
     ]
    }
   ],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement G, Table 9",
     "gives_location": false
    },
    {
     "type": "official_external",
     "citation": "Canberra Metro — Light Rail Procurement, Retrofit and Depot Expansion (LPRDE)",
     "url": "https://www.canberra-metro.com.au/projects/lprde/",
     "quote": "The existing maintenance depot in Mitchell was extended",
     "gives_location": true
    },
    {
     "type": "official_external",
     "citation": "ACT Government media release — Vehicle contract signed as Canberra light rail Stage 2A gets the green light",
     "url": "https://www.cmtedd.act.gov.au/open_government/inform/act_government_media_releases/chris-steel-mla-media-releases/2022/vehicle-contract-signed-as-canberra-light-rail-stage-2a-gets-the-green-light",
     "gives_location": true
    }
   ],
   "split_note": "Two things share one line. The depot is a fixed asset in Mitchell (Gungahlin). The vehicles are rolling stock that runs the whole Gungahlin-to-City corridor and, once retrofitted, Stage 2A. Only the depot half is genuinely locatable; we place the line on the depot because that is the built asset.",
   "residual_unknown": "The split between vehicle spend and depot spend is not published."
  },
  "delivering-the-new-materials-recovery-facility-and-food-orga": {
   "id": "delivering-the-new-materials-recovery-facility-and-food-orga",
   "project": "Delivering the New Materials Recovery Facility and Food Organics / Garden Organics Facility",
   "spend_2026_27": 12750,
   "scoped_district": "Tuggeranong",
   "scoped_candidates": [
    "Tuggeranong"
   ],
   "confidence": "strong",
   "placement": "single_district",
   "district_caveat": "jerrabomberra_gap",
   "sites": [
    {
     "name": "Food Organics and Garden Organics (FOGO) processing facility",
     "address": "John Cory Road, Hume Resource Recovery Estate (Block 5, Section 26), Hume ACT 2620",
     "suburb": "Hume",
     "district": "Jerrabomberra (gazetted) — filed as Tuggeranong here",
     "detail": "In-vessel composting, up to 70,000 tonnes of FOGO a year, producing about 28,000 tonnes of compost. Mugga Lane Landfill sits about 200m north-west.",
     "approx_latlng": [
      -35.4032,
      149.166
     ]
    },
    {
     "name": "Hume Materials Recovery Facility",
     "address": "Recycling Road, Hume ACT 2620",
     "suburb": "Hume",
     "district": "Jerrabomberra (gazetted) — filed as Tuggeranong here",
     "detail": "West of the FOGO site across Recycling Road.",
     "approx_latlng": [
      -35.4021,
      149.1622
     ]
    }
   ],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement G, 2026-27 Priorities",
     "quote": "complete construction of the New Recycling Facility and continue planning for the organic waste processing (FOGO) facility",
     "gives_location": false
    },
    {
     "type": "official_external",
     "citation": "ACT Planning — Hume Food Organics and Garden Organics Facility, EIS202200016",
     "url": "https://www.planning.act.gov.au/applications-and-assessments/environmental-impact-assessment/environmental-impact-statement/fogo-waste-facility-eis202200016",
     "gives_location": true
    },
    {
     "type": "official_external",
     "citation": "ACT City Services — Food Organics and Garden Organics Facility",
     "url": "https://www.cityservices.act.gov.au/Infrastructure-Projects/tuggeranong/food-organics-and-garden-organics-facility",
     "gives_location": true,
     "note": "The ACT Government's own project page files this Hume facility under 'tuggeranong'. That is the strongest available argument for the district call here."
    }
   ],
   "residual_unknown": "Nothing about the site. The open question is only which district label a Hume site should carry — see district_convention.jerrabomberra_gap."
  },
  "climate-action-continuing-the-electrification-of-government-": {
   "id": "climate-action-continuing-the-electrification-of-government-",
   "project": "Climate action – Continuing the Electrification of Government Assets",
   "spend_2026_27": 9189,
   "scoped_district": "Territory-wide",
   "scoped_candidates": [],
   "confidence": "unplaceable",
   "placement": "unplaceable",
   "sites": [],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement G, 2026-27 Priorities",
     "quote": "continue the electrification of Government buildings and delivering the Public School Heating and Cooling Fund",
     "gives_location": false
    },
    {
     "type": "budget",
     "citation": "Statement G, 2026-27 Priorities",
     "quote": "continue to lease, manage and maintain almost 250 public buildings and sites on behalf of the Government",
     "gives_location": false,
     "note": "This is the estate the program runs across."
    }
   ],
   "reason_unplaceable": "A rolling program across the government building estate and the public school network. Every district contains some of it. A per-building schedule would be needed to split it and none is published.",
   "residual_unknown": "The building-by-building schedule. Potentially obtainable from Infrastructure Canberra or via the Public School Heating and Cooling Fund reporting."
  },
  "better-community-infrastructure-public-building-upgrades": {
   "id": "better-community-infrastructure-public-building-upgrades",
   "project": "Better Community Infrastructure – Public Building Upgrades",
   "spend_2026_27": 8330,
   "scoped_district": "Multiple",
   "scoped_candidates": [
    "North Canberra"
   ],
   "confidence": "partial",
   "placement": "multi_district",
   "sites": [
    {
     "name": "ACT Legislative Assembly and North Building",
     "address": "Civic Square, London Circuit, Canberra City ACT 2601",
     "suburb": "City",
     "district": "North Canberra",
     "detail": "Roof upgrades. This is the only sub-item in the whole line that names a building.",
     "approx_latlng": [
      -35.2809,
      149.129
     ]
    }
   ],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement G, Table 8 — Changes to Appropriation sub-items",
     "quote": "Better community infrastructure – Public Building Upgrades – Roof upgrades at ACT Legislative Assembly and North Buildings",
     "gives_location": true
    },
    {
     "type": "budget",
     "citation": "Statement G, Table 8 — remaining sub-items",
     "quote": "Building safety upgrades; Depot compliance upgrades; Fire system, switchboard and HVAC upgrades; Roof replacement and rectification work",
     "gives_location": false,
     "note": "Four of the five sub-items name a work type, not a place."
    }
   ],
   "how_to_finish": "The appropriation table breaks this line into five named sub-items and one of them names a building. If Infrastructure Canberra publishes the sites behind 'building safety', 'depot compliance' and 'roof replacement', the remaining spend becomes placeable at building level.",
   "residual_unknown": "Which depots, and which buildings received safety / HVAC / roof work."
  },
  "new-materials-recovery-facility": {
   "id": "new-materials-recovery-facility",
   "project": "New Materials Recovery Facility",
   "spend_2026_27": 6340,
   "scoped_district": "Tuggeranong",
   "scoped_candidates": [
    "Tuggeranong"
   ],
   "confidence": "strong",
   "placement": "single_district",
   "district_caveat": "jerrabomberra_gap",
   "sites": [
    {
     "name": "Hume Materials Recovery Facility",
     "address": "Recycling Road, Hume Resource Recovery Estate, Hume ACT 2620",
     "suburb": "Hume",
     "district": "Jerrabomberra (gazetted) — filed as Tuggeranong here",
     "approx_latlng": [
      -35.4021,
      149.1622
     ]
    }
   ],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement G, Table 9",
     "quote": "New Materials Recovery Facility | 26,000 | 6,340 | 6,250 | 0 | 0 | 12,590 | Apr-28",
     "gives_location": false
    },
    {
     "type": "official_external",
     "citation": "ACT Planning — Hume FOGO Facility EIS appendices (locate the MRF relative to the FOGO site)",
     "url": "https://www.planning.act.gov.au/__data/assets/pdf_file/0006/2381424/Appendix-R-Preliminary-Hazard-Analysis-Report.pdf",
     "quote": "Hume Materials Recovery Facility is west of the site across Recycling Road",
     "gives_location": true
    }
   ],
   "duplicate_watch": "This line and 'Delivering the New Materials Recovery Facility and Food Organics / Garden Organics Facility' both appear in Table 9 and both concern the same Hume estate. They are separate rows with separate totals and completion dates (Apr-28 vs TBD) and should not be merged, but do not describe them as two unrelated facilities either.",
   "residual_unknown": null
  },
  "better-transport-infrastructure-delivering-light-rail-stage-": {
   "id": "better-transport-infrastructure-delivering-light-rail-stage-",
   "project": "Better transport infrastructure – Delivering Light Rail Stage 2A",
   "spend_2026_27": 5618,
   "scoped_district": "North Canberra",
   "scoped_candidates": [
    "North Canberra"
   ],
   "confidence": "budget_confirmed",
   "placement": "single_district",
   "sites": [
    {
     "name": "Light Rail Stage 2A alignment",
     "address": "Alinga Street, City to Commonwealth Park, via London Circuit and Commonwealth Avenue",
     "suburb": "City; Acton; Parkes (Commonwealth Park)",
     "district": "North Canberra",
     "detail": "Wire-free extension from the existing City terminus to a new Commonwealth Park stop.",
     "approx_latlng": [
      -35.287,
      149.1275
     ]
    }
   ],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement G, 2026-27 Priorities",
     "quote": "continue construction of the light rail network to Commonwealth Park, and conduct planning and approvals to extend the route to Woden",
     "gives_location": true
    },
    {
     "type": "budget",
     "citation": "Statement E, City and Environment",
     "quote": "management of service disruption impacts for Light Rail Stage 2A to Commonwealth Park construction, creating a public transport spine connecting Canberra's north and south",
     "gives_location": true
    }
   ],
   "split_note": "The appropriation history for this line also carries an item named 'Better transport infrastructure – Building light rail to Woden', which is Stage 2B and spans South Canberra and Woden Valley. Stage 2B already has its own row in data.js ('Delivering Light Rail to Woden', placed in Woden Valley), so do not double-count. The 2026-27 spend on this row is Stage 2A only.",
   "residual_unknown": "The Commonwealth Park terminus is in the gazetted suburb of Parkes — see district_convention.parkes_wrinkle."
  },
  "canberra-aquatic-centre": {
   "id": "canberra-aquatic-centre",
   "project": "Canberra Aquatic Centre",
   "spend_2026_27": 5474,
   "scoped_district": "North Canberra",
   "scoped_candidates": [
    "North Canberra"
   ],
   "confidence": "budget_confirmed",
   "placement": "single_district",
   "district_caveat": "parkes_wrinkle",
   "sites": [
    {
     "name": "New Canberra Aquatic Centre",
     "address": "Commonwealth Park, Commonwealth Avenue, Parkes ACT 2600",
     "suburb": "Parkes (Commonwealth Park)",
     "district": "North Canberra",
     "detail": "Next to Commonwealth Avenue and the new light rail line. 50m indoor lap pool and splash play areas; no deep-water dive facility, because the site cannot take one. Concept design through 2026, construction signalled 2027-28.",
     "approx_latlng": [
      -35.2926,
      149.1305
     ]
    }
   ],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement G, 2026-27 Priorities",
     "quote": "continue to progress planning and design for a new aquatic centre in Commonwealth Park",
     "gives_location": true,
     "note": "The Budget names the site outright. This project should never have been Territory-wide — the keyword list simply had no entry for Commonwealth Park."
    },
    {
     "type": "official_external",
     "citation": "ACT Government, Built for CBR — Canberra Aquatic Centre",
     "url": "https://www.act.gov.au/builtforcbr/browse-all-projects/entertainment-arts-and-sports/canberra-aquatic-centre",
     "gives_location": true
    }
   ],
   "residual_unknown": "Only the district label. Commonwealth Park is gazetted in the suburb of Parkes, which normally reads as South Canberra, but the park is north of Lake Burley Griffin and adjoins the City."
  },
  "infrastructure-canberra-2026-27-asset-renewal-program": {
   "id": "infrastructure-canberra-2026-27-asset-renewal-program",
   "project": "Infrastructure Canberra – 2026-27 Asset Renewal Program",
   "spend_2026_27": 4930,
   "scoped_district": "Territory-wide",
   "scoped_candidates": [],
   "confidence": "unplaceable",
   "placement": "unplaceable",
   "sites": [],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement G, Table 9",
     "gives_location": false
    },
    {
     "type": "budget",
     "citation": "Statement G, 2026-27 Priorities",
     "quote": "continue to lease, manage and maintain almost 250 public buildings and sites on behalf of the Government",
     "gives_location": false
    }
   ],
   "reason_unplaceable": "Asset Renewal Programs are annual pools of money spread across an agency's whole asset base. Statements C, D and F each carry their own Asset Renewal Program line for their own estates; this is Infrastructure Canberra's. None of them publish a site list.",
   "residual_unknown": "The renewal schedule across the ~250 buildings and sites."
  },
  "more-energy-efficient-government-accommodation": {
   "id": "more-energy-efficient-government-accommodation",
   "project": "More energy efficient Government accommodation",
   "spend_2026_27": 2995,
   "scoped_district": "Multiple",
   "scoped_candidates": [
    "North Canberra",
    "Woden Valley"
   ],
   "confidence": "partial",
   "placement": "multi_district",
   "sites": [
    {
     "name": "ACT Government Office Building, Civic",
     "address": "220 London Circuit, Canberra City ACT 2601",
     "suburb": "City",
     "district": "North Canberra",
     "detail": "23,000sqm; the ACT Government headquarters building.",
     "approx_latlng": [
      -35.2807,
      149.1305
     ]
    },
    {
     "name": "ACT Government Office, Dickson",
     "address": "480 Northbourne Avenue, Dickson ACT 2602",
     "suburb": "Dickson",
     "district": "North Canberra",
     "detail": "13,200sqm pre-commitment, adjacent to the Dickson light rail stop.",
     "approx_latlng": [
      -35.2513,
      149.1355
     ]
    }
   ],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement G, Table 9 and Table 8",
     "gives_location": false
    },
    {
     "type": "external",
     "citation": "ACT office consolidation strategy — hub and satellite: 1700 staff in Civic, 1000 in Dickson, 1100 in Woden",
     "url": "https://www.canberratimes.com.au/story/6089783/act-government-on-the-hunt-for-more-civic-office-space/",
     "gives_location": true,
     "note": "Identifies where the government office estate actually is; does not confirm which buildings this line pays for."
    }
   ],
   "how_to_finish": "The government office estate is concentrated in three places. Confirming which buildings received energy-efficiency work in 2026-27 would place this line properly; the Budget does not say.",
   "residual_unknown": "Which buildings. The candidate districts here are inferred from where the office estate is, not from the Budget."
  },
  "managing-government-and-community-facilities": {
   "id": "managing-government-and-community-facilities",
   "project": "Managing government and community facilities",
   "spend_2026_27": 2766,
   "scoped_district": "Territory-wide",
   "scoped_candidates": [],
   "confidence": "unplaceable",
   "placement": "unplaceable",
   "sites": [],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement G, Table 9",
     "quote": "Managing government and community facilities | 2,766 | 2,766 | 0 | 0 | 0 | 2,766 | Jun-27",
     "gives_location": false
    },
    {
     "type": "budget",
     "citation": "Statement G, 2026-27 Priorities",
     "quote": "continue to lease, manage and maintain almost 250 public buildings and sites on behalf of the Government",
     "gives_location": false
    }
   ],
   "reason_unplaceable": "Portfolio management of the ~250-building estate. No single site.",
   "residual_unknown": "The facility list."
  },
  "investing-in-canberra-s-arts-sector": {
   "id": "investing-in-canberra-s-arts-sector",
   "project": "Investing in Canberra's Arts Sector",
   "spend_2026_27": 2715,
   "scoped_district": "Territory-wide",
   "scoped_candidates": [
    "North Canberra",
    "Belconnen",
    "Tuggeranong",
    "South Canberra"
   ],
   "confidence": "unplaceable",
   "placement": "unresolved",
   "sites": [],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement G, Table 9",
     "quote": "Investing in Canberra's Arts Sector | 5,845 | 2,715 | 2,710 | 0 | 0 | 5,425 | Jun-28",
     "gives_location": false
    },
    {
     "type": "budget",
     "citation": "Statement G, Table 9 — adjacent row",
     "quote": "Kingston Arts Precinct | 30,074 | 28,456 | ... | TBD",
     "gives_location": true,
     "note": "Kingston Arts Precinct is a SEPARATE row, already placed in South Canberra in data.js. So this line is not the Kingston project."
    },
    {
     "type": "official_external",
     "citation": "ACT Government — 2026-27 ACT Budget: investing in the arts",
     "url": "https://www.act.gov.au/our-canberra/latest-news/2026/may/2026-27-act-budget-investing-in-the-arts",
     "gives_location": false,
     "note": "The announced arts money is largely OPERATING funding: a 25% uplift to 29 arts organisations, project grants, screen and games industry support, CMAG and Lanyon. None of that explains a capital works row. The capital purpose of this line is not published anywhere we could find."
    }
   ],
   "reason_unplaceable": "This is the one line where we could not determine what is being built. It sits in the capital works table with a Jun-28 completion date, so it buys something physical, but no ACT Government source we found names the asset or the venue.",
   "how_to_finish": "Ask artsACT or Infrastructure Canberra what the capital component of 'Investing in Canberra's Arts Sector' funds. The candidate list above is the set of artsACT-supported venues by district (Ainslie and Gorman Arts Centres and Watson Arts Centre in North Canberra; Belconnen Arts Centre and Strathnairn in Belconnen; Tuggeranong Arts Centre; Canberra Glassworks in South Canberra) and is a guess at the search space, not a finding.",
   "residual_unknown": "Everything. This is the highest-value unanswered question in the set relative to its size."
  },
  "improving-canberra-s-health-infrastructure-new-health-centre": {
   "id": "improving-canberra-s-health-infrastructure-new-health-centre",
   "project": "Improving Canberra's health infrastructure – New Health Centres across the ACT",
   "spend_2026_27": 2677,
   "scoped_district": "Multiple",
   "scoped_candidates": [
    "Gungahlin",
    "Belconnen"
   ],
   "confidence": "strong",
   "placement": "multi_district",
   "sites": [
    {
     "name": "North Gungahlin Health Centre",
     "address": "Kingsland Parade, Casey ACT 2913",
     "suburb": "Casey",
     "district": "Gungahlin",
     "detail": "Design work underway.",
     "approx_latlng": [
      -35.1663,
      149.08
     ]
    },
    {
     "name": "West Belconnen Health Centre",
     "address": "Site not yet selected",
     "suburb": null,
     "district": "Belconnen",
     "detail": "Early planning. The Budget funds a feasibility study; consultation begins once a site is chosen.",
     "approx_latlng": null
    }
   ],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement C, Changes to Appropriation",
     "quote": "Transfer - Capital Injection to CRP - New Health Centres Across the ACT - for the West Belconnen early planning feasibility study",
     "gives_location": true,
     "note": "The Budget explicitly attaches a West Belconnen feasibility study to THIS initiative by name."
    },
    {
     "type": "official_external",
     "citation": "ACT Government, Built for CBR — Health centres",
     "url": "https://www.act.gov.au/builtforcbr/browse-all-projects/health/health-centres",
     "quote": "four new health centres located in South Tuggeranong, Inner South, North Gungahlin and West Belconnen",
     "gives_location": true
    }
   ],
   "split_note": "Four new health centres exist as a program, but two of them already have their own rows: 'Inner South Health Centre Construction' (placed South Canberra in data.js) and the South Tuggeranong centre in Conder (funded through Statement C operating lines). What is left in THIS row is the North Gungahlin and West Belconnen work — which is why the candidates are Gungahlin and Belconnen and not all four districts.",
   "residual_unknown": "The dollar split between North Gungahlin and West Belconnen, and the West Belconnen site itself."
  },
  "improving-canberra-s-health-infrastructure-expanding-health-": {
   "id": "improving-canberra-s-health-infrastructure-expanding-health-",
   "project": "Improving Canberra's health infrastructure – Expanding health centres across the city",
   "spend_2026_27": 2574,
   "scoped_district": "Multiple",
   "scoped_candidates": [
    "Belconnen",
    "North Canberra",
    "Gungahlin",
    "Woden Valley",
    "Tuggeranong",
    "Weston Creek"
   ],
   "confidence": "partial",
   "placement": "multi_district",
   "sites": [
    {
     "name": "Belconnen Community Health Centre",
     "address": "56 Lathlain Street, Belconnen ACT 2617",
     "suburb": "Belconnen",
     "district": "Belconnen",
     "approx_latlng": [
      -35.2385,
      149.0644
     ]
    },
    {
     "name": "City Community Health Centre",
     "address": "Level 2, 1 Moore Street, Canberra City ACT 2601",
     "suburb": "City",
     "district": "North Canberra",
     "approx_latlng": [
      -35.2793,
      149.1287
     ]
    },
    {
     "name": "Dickson Community Health Centre",
     "address": "111 Dickson Place, Dickson ACT 2602",
     "suburb": "Dickson",
     "district": "North Canberra",
     "approx_latlng": [
      -35.2506,
      149.1394
     ]
    },
    {
     "name": "Gungahlin Community Health Centre",
     "address": "57 Ernest Cavanagh Street, Gungahlin ACT 2912",
     "suburb": "Gungahlin",
     "district": "Gungahlin",
     "approx_latlng": [
      -35.1846,
      149.1332
     ]
    },
    {
     "name": "Phillip Community Health Centre",
     "address": "17 Corinna Street, Phillip ACT 2606",
     "suburb": "Phillip",
     "district": "Woden Valley",
     "approx_latlng": [
      -35.3475,
      149.0872
     ]
    },
    {
     "name": "Tuggeranong Community Health Centre",
     "address": "147 Anketell Street, Greenway ACT 2900",
     "suburb": "Greenway",
     "district": "Tuggeranong",
     "approx_latlng": [
      -35.4159,
      149.068
     ]
    },
    {
     "name": "Weston Creek Community Health Centre",
     "address": "Weston Creek ACT 2611",
     "suburb": "Stirling",
     "district": "Weston Creek",
     "approx_latlng": [
      -35.3357,
      149.0562
     ]
    }
   ],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement G, Table 8 and Statement C, Changes to Appropriation",
     "quote": "Improving Canberra's health infrastructure – Expanding health centres across the city",
     "gives_location": false,
     "note": "'Across the city' is the only geographic word the Budget offers."
    },
    {
     "type": "official_external",
     "citation": "Canberra Health Services — Community health centres",
     "url": "https://health.act.gov.au/hospitals-and-health-centres/community-health-centres",
     "gives_location": true,
     "note": "Gives the full estate of existing centres, which is the set this line expands."
    }
   ],
   "how_to_finish": "The set of existing community health centres is known and small (seven). Confirming which of them are being expanded in 2026-27 would place this line to one or two districts.",
   "residual_unknown": "Which centres are being expanded, and by how much each."
  },
  "30-000-homes-by-2030-public-housing-pipeline": {
   "id": "30-000-homes-by-2030-public-housing-pipeline",
   "project": "30,000 homes by 2030 – Public housing pipeline",
   "spend_2026_27": 1995,
   "scoped_district": "Territory-wide",
   "scoped_candidates": [],
   "confidence": "unplaceable",
   "placement": "unplaceable",
   "sites": [],
   "evidence": [
    {
     "type": "budget",
     "citation": "Housing Statement",
     "quote": "The 2026-27 Budget paves the way for further increases to the portfolio by providing $360 million for an additional 450 public housing dwellings, through the launch of the new Public Housing Pipeline.",
     "gives_location": false,
     "note": "450 dwellings, no suburbs named anywhere in the statement."
    },
    {
     "type": "budget",
     "citation": "Statement C, Housing ACT",
     "quote": "30,000 homes by 2030 – Public housing pipeline | 67,975 | 148,074 | 66,805 | 0 | 282,854 | Dec-30",
     "gives_location": false
    }
   ],
   "reason_unplaceable": "The sites have not been chosen yet — that is what a pipeline is. More than half the homes are also contingent on a Housing Australia Future Fund Round 3 outcome.",
   "do_not_confuse_with": "data.js LAYERS.housing names real suburbs (Strathnairn, Phillip, Taylor, Turner, Belconnen, Moncrieff, Lyneham, Whitlam, Gungahlin Town Centre). Those belong to the Affordable Housing Project Fund, a DIFFERENT program, and must not be used to place this line.",
   "residual_unknown": "All 450 dwelling locations. These will be announced progressively to Dec-30."
  },
  "climate-action-moving-more-government-facilities-off-gas": {
   "id": "climate-action-moving-more-government-facilities-off-gas",
   "project": "Climate action – Moving more government facilities off gas",
   "spend_2026_27": 1425,
   "scoped_district": "Territory-wide",
   "scoped_candidates": [],
   "confidence": "unplaceable",
   "placement": "unplaceable",
   "sites": [],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement G, Tables 8 and 9",
     "quote": "Climate action – Moving more government facilities off gas | 6,900 | 1,425 | 0 | 0 | 0 | 1,425 | Jun-27",
     "gives_location": false
    }
   ],
   "reason_unplaceable": "Same estate-wide program shape as 'Continuing the Electrification of Government Assets'. The two lines are siblings and neither names a facility.",
   "residual_unknown": "The facility list."
  },
  "public-pool-upgrades-operations-and-maintenance": {
   "id": "public-pool-upgrades-operations-and-maintenance",
   "project": "Public pool upgrades, operations and maintenance",
   "spend_2026_27": 718,
   "scoped_district": "Multiple",
   "scoped_candidates": [
    "North Canberra",
    "South Canberra",
    "Gungahlin",
    "Tuggeranong",
    "Molonglo"
   ],
   "confidence": "partial",
   "placement": "multi_district",
   "sites": [
    {
     "name": "Canberra Olympic Pool",
     "address": "Allara Street, Canberra City ACT 2601",
     "suburb": "City",
     "district": "North Canberra",
     "approx_latlng": [
      -35.2802,
      149.1352
     ]
    },
    {
     "name": "Dickson Aquatic Centre",
     "address": "Cowper Street, Dickson ACT 2602",
     "suburb": "Dickson",
     "district": "North Canberra",
     "approx_latlng": [
      -35.2493,
      149.1379
     ]
    },
    {
     "name": "Manuka Pool",
     "address": "Manuka Circle, Griffith ACT 2603",
     "suburb": "Griffith",
     "district": "South Canberra",
     "detail": "Heritage listed.",
     "approx_latlng": [
      -35.3216,
      149.133
     ]
    },
    {
     "name": "Gungahlin Leisure Centre",
     "address": "Gungahlin ACT 2912",
     "suburb": "Gungahlin",
     "district": "Gungahlin",
     "approx_latlng": [
      -35.1855,
      149.1338
     ]
    },
    {
     "name": "Lakeside Leisure Centre",
     "address": "Greenway ACT 2900",
     "suburb": "Greenway",
     "district": "Tuggeranong",
     "approx_latlng": [
      -35.4173,
      149.0658
     ]
    },
    {
     "name": "Active Leisure Centre, Erindale",
     "address": "Erindale, Wanniassa ACT 2903",
     "suburb": "Wanniassa",
     "district": "Tuggeranong",
     "approx_latlng": [
      -35.3961,
      149.0899
     ]
    },
    {
     "name": "Stromlo Leisure Centre",
     "address": "Stromlo ACT 2611",
     "suburb": "Stromlo",
     "district": "Molonglo",
     "detail": "District call is contestable — Stromlo is gazetted in Molonglo Valley but the centre serves Weston Creek, and data.js already placed 'Stromlo District Playing Fields' in Weston Creek.",
     "approx_latlng": [
      -35.3186,
      149.0179
     ]
    }
   ],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement G, Table 9",
     "quote": "Public pool upgrades, operations and maintenance | 1,134 | 718 | 98 | 210 | 108 | 1,134 | Ongoing",
     "gives_location": false
    },
    {
     "type": "official_external",
     "citation": "ACT Sport and Recreation — Aquatic and leisure facilities",
     "url": "https://www.sport.act.gov.au/sport-facilities/aquatic-and-leisure-facilities",
     "gives_location": true,
     "note": "Seven ACT Government public pools. This is the complete estate the line covers."
    }
   ],
   "how_to_finish": "The estate is exactly seven pools across five districts. A per-pool spend breakdown would place this line fully. Recent per-pool figures exist in ACT media releases (for example $925,000 at Dickson and $30,000 at Manuka in the 2025 off-season), so the government does hold this detail.",
   "residual_unknown": "The 2026-27 split across the seven pools, and the Stromlo district call."
  },
  "office-accommodation": {
   "id": "office-accommodation",
   "project": "Office Accommodation",
   "spend_2026_27": 500,
   "scoped_district": "Territory-wide",
   "scoped_candidates": [
    "North Canberra",
    "Woden Valley"
   ],
   "confidence": "unplaceable",
   "placement": "unplaceable",
   "sites": [],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement G, Table 9",
     "quote": "Office Accommodation | Ongoing | 500 | 500 | 500 | 500 | 2,000 | Ongoing",
     "gives_location": false,
     "note": "'Ongoing' total value, 'Ongoing' completion, flat $500k a year. A standing allowance, not a project."
    }
   ],
   "reason_unplaceable": "A flat annual allowance against the leased office estate. Nothing to place.",
   "residual_unknown": "Nothing worth chasing at this value."
  },
  "better-community-infrastructure-refurbishing-community-and-g": {
   "id": "better-community-infrastructure-refurbishing-community-and-g",
   "project": "Better community infrastructure – Refurbishing community and government buildings",
   "spend_2026_27": 490,
   "scoped_district": "Territory-wide",
   "scoped_candidates": [],
   "confidence": "unplaceable",
   "placement": "unplaceable",
   "sites": [],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement G, Tables 8 and 9",
     "quote": "Better community infrastructure – Refurbishing community and government buildings | 7,249 | 490 | 0 | 0 | 0 | 490 | Jun-27",
     "gives_location": false,
     "note": "Unlike its sibling 'Public Building Upgrades', this line has no named sub-items in the appropriation tables."
    }
   ],
   "reason_unplaceable": "A refurbishment pool across community and government buildings, with no sub-item detail published. The 2026-27 figure is the tail of a larger program.",
   "residual_unknown": "The building list."
  },
  "act-government-office-accommodation-consolidation": {
   "id": "act-government-office-accommodation-consolidation",
   "project": "ACT Government office accommodation consolidation",
   "spend_2026_27": 421,
   "scoped_district": "North Canberra",
   "scoped_candidates": [
    "North Canberra"
   ],
   "confidence": "strong",
   "placement": "single_district",
   "sites": [
    {
     "name": "ACT Government Office Building, Civic",
     "address": "220 London Circuit, Canberra City ACT 2601",
     "suburb": "City",
     "district": "North Canberra",
     "approx_latlng": [
      -35.2807,
      149.1305
     ]
    },
    {
     "name": "ACT Government Office, Dickson",
     "address": "480 Northbourne Avenue, Dickson ACT 2602",
     "suburb": "Dickson",
     "district": "North Canberra",
     "approx_latlng": [
      -35.2513,
      149.1355
     ]
    }
   ],
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement B (CMTEDD) and Statement H (Digital), Changes to Appropriation",
     "quote": "Building a better city – Civic and Dickson office accommodation",
     "gives_location": true,
     "note": "A matching initiative name in two other statements names both buildings. This is the Budget placing the line itself, in a different table from the one the project row came from."
    },
    {
     "type": "budget",
     "citation": "Statement B, 2026-27 Budget Technical Adjustments",
     "quote": "Accommodation savings as a result of new Government Office Buildings",
     "gives_location": false
    },
    {
     "type": "official_external",
     "citation": "220 London Circuit — Investa property page",
     "url": "https://www.investa.com.au/properties/220-london-circuit-canberra-act-2601",
     "gives_location": true
    }
   ],
   "method_note": "This is the clearest example of why the district search should not stop at the project's own table. The location was sitting in a different statement under a slightly different initiative name.",
   "residual_unknown": "Whether any of the 2026-27 spend touches the Woden satellite site named in the original consolidation strategy."
  },
  "better-community-infrastructure-refurbishing-canberra-s-publ": {
   "id": "better-community-infrastructure-refurbishing-canberra-s-publ",
   "project": "Better community infrastructure – Refurbishing Canberra's public pools",
   "spend_2026_27": 184,
   "scoped_district": "Multiple",
   "scoped_candidates": [
    "North Canberra",
    "South Canberra",
    "Gungahlin",
    "Tuggeranong",
    "Molonglo"
   ],
   "confidence": "partial",
   "placement": "multi_district",
   "sites": [],
   "sites_ref": "public-pool-upgrades-operations-and-maintenance",
   "evidence": [
    {
     "type": "budget",
     "citation": "Statement G, Table 9",
     "quote": "Better community infrastructure – Refurbishing Canberra's public pools | 4,008 | 184 | 0 | 0 | 0 | 184 | Dec-26",
     "gives_location": false
    },
    {
     "type": "official_external",
     "citation": "ACT Government — Dickson and Manuka pools reopen with upgrades (October 2025)",
     "url": "https://www.act.gov.au/our-canberra/latest-news/2025/october/dickson-and-manuka-pools-reopen-with-upgrades",
     "gives_location": true,
     "note": "Names Dickson ($925,000) and Manuka ($30,000) as recipients of off-season upgrade work in this program's earlier years. Good evidence that spend IS tracked per pool internally."
    }
   ],
   "split_note": "Same seven-pool estate as 'Public pool upgrades, operations and maintenance'. This row is the tail of a program finishing Dec-26; the other row is the ongoing maintenance allowance. Do not merge them.",
   "residual_unknown": "Which pools the final tranche lands on."
  }
 }
};

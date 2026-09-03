// ─────────────────────────────────────────────────────────────
// 2026-27 ACT BUDGET — CAPITAL PROGRAM BY DISTRICT
//
// window.DATA    53 capital projects, one per published table row.
//                Source: Statement G, Table 9 — "2026-27 Infrastructure Canberra Infrastructure Program ($'000)"
//                Values are $'000. .appropriation[] holds the complete
//                changes-to-appropriation history for that initiative.
//
// window.META    citation, counts, and caveats that must stay on screen.
// window.LAYERS  optional, unused by default:
//                .schools (57 rows), .housing (11 rows).
//
// READ META.sign_convention BEFORE describing any negative number.
// A negative in 2025-26 with a positive later is a DELAY, not a cut.
//
// 2026-27 ACT Budget, ACT Treasury.
// https://www.treasury.act.gov.au/budget/budget-2026-27/budget-papers-and-statements
// ─────────────────────────────────────────────────────────────

window.META = {
 "primary_source": "Statement G, Table 9 — \"2026-27 Infrastructure Canberra Infrastructure Program ($'000)\"",
 "appropriation_source": "Changes to appropriation tables, Statements A-H",
 "budget": "2026-27 ACT Budget",
 "budget_url": "https://www.treasury.act.gov.au/budget/budget-2026-27/budget-papers-and-statements",
 "unit": "$'000 (thousands of dollars)",
 "year": "2026-27",
 "counts": {
  "projects": 53,
  "total_spend_2026_27": 924594,
  "with_published_date": 30,
  "without_published_date": 23,
  "unlocatable": 23,
  "unlocatable_spend": 400060,
  "projects_with_appropriation": 47,
  "appropriation_rows": 101
 },
 "sign_convention": "In the changes-to-appropriation tables a NEGATIVE figure means money REMOVED from that financial year and a POSITIVE means money ADDED. Verified by reconciliation: Statement G Table 7 opens at $156,955k for 2025-26, its adjustments sum to -$17,968k, and the printed 2026-27 Budget figure is $138,987k. A negative in 2025-26 paired with a positive in a later year is a DELAY, not a cut.",
 "caveats": [
  "District is OUR classification, not Treasury's. The Budget does not publish spending by district. Districts were assigned by matching place names in project titles, and the totals shift if the keyword list changes. Every row shows its assigned district so you can check the call.",
  "23 projects worth $400,060k could not be placed in any district. They are shown as Territory-wide, not hidden.",
  "23 of 53 projects have no usable completion date (TBD, DLP, Ongoing or blank).",
  "appropriation[] lists EVERY changes-to-appropriation row for that initiative, not just the reprofiling ones, so the reconciliation is complete. Rows where is_reprofile is false sit under other headings such as Savings, Offsets or Transfers.",
  "NEVER add appropriation figures to spend_2026_27. They are adjustments against the previous Budget, not extra money, and they report the same money at a different level.",
  "A row with a 'flag' is labelled as a timing change but nets negative. Do not call it a cut without reading the source table.",
  "Kenny High School's printed completion date is Jan-24, a date in the past. Reproduced as published.",
  "Telopea Park High School shows $0 in the infrastructure table for 2026-27, while the appropriation tables show +$6,150k under one name and -$24,050k under another.",
  "LAYERS.housing dwelling counts OVERLAP and must never be summed. The 464 figure names suburbs that also appear as their own rows, and all rows sit inside the Affordable Housing Project Fund's 'over 800 new affordable rental homes'.",
  "LAYERS.schools rows appear at two mutually exclusive levels and 53 of 57 are flagged as possible duplicates. Never sum across a duplicate_group."
 ]
};

window.DATA = [
 {
  "id": "canberra-theatre-redevelopment-delivering-a-new-lyric-theatr",
  "project": "Canberra Theatre Redevelopment – Delivering a new Lyric Theatre",
  "district": "Territory-wide",
  "district_basis": "unlocatable",
  "district_candidates": [],
  "total_project_value": 456636,
  "spend_2026_27": 162704,
  "completion": "Jul-28",
  "date_published": true,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "Canberra Theatre Redevelopment – Delivering a new Lyric Theatre",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": 93538,
    "y2026_27": 187704,
    "y2027_28": 118086,
    "y2028_29": 15361,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   }
  ],
  "appropriation_net_2026_27": 187704
 },
 {
  "id": "improving-canberra-s-health-infrastructure-northside-hospita",
  "project": "Improving Canberra's Health Infrastructure – Northside Hospital Development",
  "district": "Territory-wide",
  "district_basis": "unlocatable",
  "district_candidates": [],
  "total_project_value": 1471215,
  "spend_2026_27": 96324,
  "completion": "TBD",
  "date_published": false,
  "source": "Statement G, Table 9",
  "appropriation": [],
  "appropriation_net_2026_27": null
 },
 {
  "id": "connected-and-sustainable-canberra-monaro-highway-upgrades",
  "project": "Connected and sustainable Canberra – Monaro Highway upgrades",
  "district": "Tuggeranong",
  "district_basis": "derived",
  "district_candidates": [
   "Tuggeranong"
  ],
  "total_project_value": "TBD",
  "spend_2026_27": 88477,
  "completion": "TBD",
  "date_published": false,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "Connected and sustainable Canberra – Monaro Highway upgrades",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": 4503,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "Connected and sustainable Canberra – Monaro Highway Upgrades",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": -11480,
    "y2026_27": -20010,
    "y2027_28": -27738,
    "y2028_29": 22000,
    "y2029_30": 9966,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "Connected and sustainable Canberra – Monaro Highway upgrades",
    "statement": "Statement G",
    "table": "8",
    "section": "Revised Funding Profile",
    "y2025_26": 0,
    "y2026_27": 2747,
    "y2027_28": 2470,
    "y2028_29": -21627,
    "y2029_30": -2175,
    "is_reprofile": true,
    "direction": "reversed",
    "timing_not_a_cut": false,
    "flag": "labelled as a funding-profile / reprofiling change but the net five-year effect is negative - this may be a genuine reduction or a transfer out, NOT a timing change"
   }
  ],
  "appropriation_net_2026_27": -17263
 },
 {
  "id": "new-and-expanded-schools-development-of-the-whitlam-primary-",
  "project": "New and expanded schools – Development of the Whitlam Primary School and Early Childhood Education Centre",
  "district": "Molonglo",
  "district_basis": "derived",
  "district_candidates": [
   "Molonglo"
  ],
  "total_project_value": 114750,
  "spend_2026_27": 61753,
  "completion": "Jan-27",
  "date_published": true,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "New and Expanded Schools - Development of the Whitlam Primary School and Early Childhood Education Centre",
    "statement": "Statement F",
    "table": "25",
    "section": "",
    "y2025_26": 401,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "New and expanded schools – Development of the Whitlam Primary School and Early Childhood Education Centre",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": 4159,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   }
  ],
  "appropriation_net_2026_27": 0
 },
 {
  "id": "molonglo-enabling-works",
  "project": "Molonglo Enabling Works",
  "district": "Molonglo",
  "district_basis": "derived",
  "district_candidates": [
   "Molonglo"
  ],
  "total_project_value": 226200,
  "spend_2026_27": 53442,
  "completion": "Dec-26",
  "date_published": true,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "Molonglo Enabling Works",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": -16292,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "Molonglo Enabling Works",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": 14000,
    "y2026_27": 3000,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": -17300,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "Molonglo Enabling Works",
    "statement": "Statement G",
    "table": "8",
    "section": "Revised Funding Profile",
    "y2025_26": 45665,
    "y2026_27": -6772,
    "y2027_28": 4500,
    "y2028_29": 0,
    "y2029_30": -43393,
    "is_reprofile": true,
    "direction": "pulled_forward",
    "timing_not_a_cut": true,
    "flag": null
   }
  ],
  "appropriation_net_2026_27": -3772
 },
 {
  "id": "market-conditions-provision",
  "project": "Market Conditions Provision",
  "district": "Territory-wide",
  "district_basis": "unlocatable",
  "district_candidates": [],
  "total_project_value": null,
  "spend_2026_27": 50000,
  "completion": "TBD",
  "date_published": false,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "Market Conditions Provision",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": 0,
    "y2026_27": 50000,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   }
  ],
  "appropriation_net_2026_27": 50000
 },
 {
  "id": "delivering-a-second-public-college-for-gungahlin",
  "project": "Delivering a second public college for Gungahlin",
  "district": "Gungahlin",
  "district_basis": "derived",
  "district_candidates": [
   "Gungahlin"
  ],
  "total_project_value": 125511,
  "spend_2026_27": 47067,
  "completion": "Dec-28",
  "date_published": true,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "Delivering a second public college for Gungahlin",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": 0,
    "y2026_27": 6343,
    "y2027_28": 5100,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   }
  ],
  "appropriation_net_2026_27": 6343
 },
 {
  "id": "connected-and-sustainable-canberra-constructing-the-william-",
  "project": "Connected and sustainable Canberra – Constructing the William Hovell Drive duplication",
  "district": "Belconnen",
  "district_basis": "derived",
  "district_candidates": [
   "Belconnen"
  ],
  "total_project_value": 107250,
  "spend_2026_27": 35785,
  "completion": "Dec-28",
  "date_published": true,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "Connected and sustainable Canberra – Constructing the William Hovell Drive duplication",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": -12561,
    "y2026_27": 2375,
    "y2027_28": 3075,
    "y2028_29": 13561,
    "y2029_30": -6450,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "Connected and sustainable Canberra – Constructing the William Hovell Drive duplication",
    "statement": "Statement G",
    "table": "8",
    "section": "Revised Funding Profile",
    "y2025_26": 8100,
    "y2026_27": 0,
    "y2027_28": -1650,
    "y2028_29": 0,
    "y2029_30": -6450,
    "is_reprofile": true,
    "direction": "pulled_forward",
    "timing_not_a_cut": true,
    "flag": null
   }
  ],
  "appropriation_net_2026_27": 2375
 },
 {
  "id": "delivering-light-rail-to-woden",
  "project": "Delivering Light Rail to Woden",
  "district": "Woden Valley",
  "district_basis": "derived",
  "district_candidates": [
   "Woden Valley"
  ],
  "total_project_value": "TBD",
  "spend_2026_27": 32657,
  "completion": "TBD",
  "date_published": false,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "Delivering Light Rail to Woden",
    "statement": "Statement G",
    "table": "7",
    "section": "",
    "y2025_26": 0,
    "y2026_27": 800,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "Delivering Light Rail to Woden",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": 0,
    "y2026_27": 31857,
    "y2027_28": 5545,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   }
  ],
  "appropriation_net_2026_27": 32657
 },
 {
  "id": "new-and-expanded-schools-garran-primary-school",
  "project": "New and expanded schools – Garran Primary School",
  "district": "South Canberra",
  "district_basis": "derived",
  "district_candidates": [
   "South Canberra"
  ],
  "total_project_value": 106422,
  "spend_2026_27": 31115,
  "completion": "Dec-26",
  "date_published": true,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "New and Expanded Schools - Garran Primary School",
    "statement": "Statement F",
    "table": "25",
    "section": "",
    "y2025_26": 215,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "New and expanded schools – Garran Primary School",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": -9770,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   }
  ],
  "appropriation_net_2026_27": 0
 },
 {
  "id": "kingston-arts-precinct",
  "project": "Kingston Arts Precinct",
  "district": "South Canberra",
  "district_basis": "derived",
  "district_candidates": [
   "South Canberra"
  ],
  "total_project_value": 30074,
  "spend_2026_27": 28456,
  "completion": "TBD",
  "date_published": false,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "Kingston Arts Precinct",
    "statement": "Statement G",
    "table": "8",
    "section": "Revised Funding Profile",
    "y2025_26": 1618,
    "y2026_27": -1618,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": true,
    "direction": "pulled_forward",
    "timing_not_a_cut": true,
    "flag": null
   }
  ],
  "appropriation_net_2026_27": -1618
 },
 {
  "id": "new-and-expanded-schools-strathnairn-primary-school",
  "project": "New and expanded schools – Strathnairn Primary School",
  "district": "Belconnen",
  "district_basis": "derived",
  "district_candidates": [
   "Belconnen"
  ],
  "total_project_value": 126542,
  "spend_2026_27": 26551,
  "completion": "Dec-26",
  "date_published": true,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "New and Expanded Schools - Strathnairn Primary School",
    "statement": "Statement F",
    "table": "25",
    "section": "",
    "y2025_26": 48,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "New and expanded schools – Strathnairn Primary School",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": 7411,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "New and expanded schools – Strathnairn Primary School",
    "statement": "Statement G",
    "table": "8",
    "section": "Revised Funding Profile",
    "y2025_26": 2500,
    "y2026_27": -2500,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": true,
    "direction": "pulled_forward",
    "timing_not_a_cut": true,
    "flag": null
   }
  ],
  "appropriation_net_2026_27": -2500
 },
 {
  "id": "athllon-drive-duplication",
  "project": "Athllon Drive Duplication",
  "district": "Tuggeranong",
  "district_basis": "derived",
  "district_candidates": [
   "Tuggeranong"
  ],
  "total_project_value": 98550,
  "spend_2026_27": 24298,
  "completion": "Dec-29",
  "date_published": true,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "Better and safer roads – Athllon Drive duplication",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": 2352,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "Commencing the Athllon Drive Duplication",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": 30,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "Better and safer roads – Athllon Drive duplication",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": -4835,
    "y2026_27": -3841,
    "y2027_28": -6884,
    "y2028_29": 18166,
    "y2029_30": -2606,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "Better and safer roads – Athllon Drive duplication",
    "statement": "Statement G",
    "table": "8",
    "section": "Revised Funding Profile",
    "y2025_26": -1303,
    "y2026_27": -5628,
    "y2027_28": -3354,
    "y2028_29": 6476,
    "y2029_30": 3809,
    "is_reprofile": true,
    "direction": "pushed_out",
    "timing_not_a_cut": true,
    "flag": null
   },
   {
    "item": "Commencing the Athllon Drive Duplication",
    "statement": "Statement G",
    "table": "8",
    "section": "Revised Funding Profile",
    "y2025_26": 2454,
    "y2026_27": -2454,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": true,
    "direction": "pulled_forward",
    "timing_not_a_cut": true,
    "flag": null
   }
  ],
  "appropriation_net_2026_27": -11923
 },
 {
  "id": "better-transport-infrastructure-new-light-rail-vehicles-and-",
  "project": "Better transport infrastructure – New light rail vehicles and depot expansion",
  "district": "Territory-wide",
  "district_basis": "unlocatable",
  "district_candidates": [],
  "total_project_value": 149684,
  "spend_2026_27": 18941,
  "completion": "Aug-26",
  "date_published": true,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "Better transport infrastructure – New light rail vehicles and depot expansion",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": -16198,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   }
  ],
  "appropriation_net_2026_27": 0
 },
 {
  "id": "canberra-institute-of-technology-woden-campus-project-and-pu",
  "project": "Canberra Institute of Technology Woden Campus Project and public transport interchange",
  "district": "Woden Valley",
  "district_basis": "derived",
  "district_candidates": [
   "Woden Valley"
  ],
  "total_project_value": 384421,
  "spend_2026_27": 17000,
  "completion": "DLP",
  "date_published": false,
  "source": "Statement G, Table 9",
  "appropriation": [],
  "appropriation_net_2026_27": null
 },
 {
  "id": "delivery-of-the-whitlam-school-stage",
  "project": "Delivery of the Whitlam School – Stage",
  "district": "Molonglo",
  "district_basis": "derived",
  "district_candidates": [
   "Molonglo"
  ],
  "total_project_value": 36736,
  "spend_2026_27": 14091,
  "completion": "TBD",
  "date_published": false,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "Delivery of the Whitlam School – Stage 2",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": 0,
    "y2026_27": 14091,
    "y2027_28": 20939,
    "y2028_29": 1706,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   }
  ],
  "appropriation_net_2026_27": 14091
 },
 {
  "id": "new-and-expanded-schools-narrabundah-college",
  "project": "New and expanded schools – Narrabundah College",
  "district": "South Canberra",
  "district_basis": "derived",
  "district_candidates": [
   "South Canberra"
  ],
  "total_project_value": 31910,
  "spend_2026_27": 12870,
  "completion": "Feb-27",
  "date_published": true,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "New and Expanded Schools - Narrabundah College",
    "statement": "Statement F",
    "table": "25",
    "section": "",
    "y2025_26": 25,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "New and expanded schools – Narrabundah College",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": 4625,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "New and expanded schools – Narrabundah College",
    "statement": "Statement G",
    "table": "8",
    "section": "Revised Funding Profile",
    "y2025_26": 0,
    "y2026_27": 5870,
    "y2027_28": -5870,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": true,
    "direction": "pulled_forward",
    "timing_not_a_cut": true,
    "flag": "movement does not start in 2025-26; earliest affected year is budget_2026_27"
   }
  ],
  "appropriation_net_2026_27": 5870
 },
 {
  "id": "delivering-the-new-materials-recovery-facility-and-food-orga",
  "project": "Delivering the New Materials Recovery Facility and Food Organics / Garden Organics Facility",
  "district": "Territory-wide",
  "district_basis": "unlocatable",
  "district_candidates": [],
  "total_project_value": 29620,
  "spend_2026_27": 12750,
  "completion": "TBD",
  "date_published": false,
  "source": "Statement G, Table 9",
  "appropriation": [],
  "appropriation_net_2026_27": null
 },
 {
  "id": "climate-action-continuing-the-electrification-of-government-",
  "project": "Climate action – Continuing the Electrification of Government Assets",
  "district": "Territory-wide",
  "district_basis": "unlocatable",
  "district_candidates": [],
  "total_project_value": "Ongoing",
  "spend_2026_27": 9189,
  "completion": "Ongoing",
  "date_published": false,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "Continuing the electrification of Government Gas Assets",
    "statement": "Statement G",
    "table": "7",
    "section": "",
    "y2025_26": 264,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "Continuing the electrification of Government Gas Assets",
    "statement": "Statement G",
    "table": "7",
    "section": "Revised Funding Profile",
    "y2025_26": -600,
    "y2026_27": 600,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": true,
    "direction": "pushed_out",
    "timing_not_a_cut": true,
    "flag": null
   },
   {
    "item": "Climate action – Continuing the Electrification of Government Assets",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": 1203,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "Climate action – Continuing the Electrification of Government Assets",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": 0,
    "y2026_27": -5811,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "Climate action – Continuing the Electrification of Government Assets",
    "statement": "Statement G",
    "table": "8",
    "section": "Revised Funding Profile",
    "y2025_26": 0,
    "y2026_27": -10000,
    "y2027_28": 10000,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": true,
    "direction": "pushed_out",
    "timing_not_a_cut": true,
    "flag": "movement does not start in 2025-26; earliest affected year is budget_2026_27"
   }
  ],
  "appropriation_net_2026_27": -15211
 },
 {
  "id": "better-community-infrastructure-public-building-upgrades",
  "project": "Better Community Infrastructure – Public Building Upgrades",
  "district": "Territory-wide",
  "district_basis": "unlocatable",
  "district_candidates": [],
  "total_project_value": 27127,
  "spend_2026_27": 8330,
  "completion": "Jun-27",
  "date_published": true,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "Better Community Infrastructure – Public Building Upgrades – Building safety upgrades",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": 446,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "Better Community Infrastructure – Public Building Upgrades – Depot compliance upgrades",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": 129,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "Better Community Infrastructure – Public Building Upgrades – Fire system, switchboard and HVAC upgrades",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": 955,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "Better Community Infrastructure – Public Building Upgrades – Roof upgrades at ACT Legislative Assembly and North Buildings",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": 145,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "Better community infrastructure – Public Building Upgrades – Building safety upgrades",
    "statement": "Statement G",
    "table": "8",
    "section": "Revised Funding Profile",
    "y2025_26": -172,
    "y2026_27": 172,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": true,
    "direction": "pushed_out",
    "timing_not_a_cut": true,
    "flag": null
   },
   {
    "item": "Better community infrastructure – Public Building Upgrades – Depot compliance upgrades",
    "statement": "Statement G",
    "table": "8",
    "section": "Revised Funding Profile",
    "y2025_26": -568,
    "y2026_27": 568,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": true,
    "direction": "pushed_out",
    "timing_not_a_cut": true,
    "flag": null
   },
   {
    "item": "Better community infrastructure – Public Building Upgrades – Fire system switchboard and HVAC upgrades",
    "statement": "Statement G",
    "table": "8",
    "section": "Revised Funding Profile",
    "y2025_26": -589,
    "y2026_27": 589,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": true,
    "direction": "pushed_out",
    "timing_not_a_cut": true,
    "flag": null
   },
   {
    "item": "Better community infrastructure – Public Building Upgrades – Roof replacement and rectification work",
    "statement": "Statement G",
    "table": "8",
    "section": "Revised Funding Profile",
    "y2025_26": -2118,
    "y2026_27": 2118,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": true,
    "direction": "pushed_out",
    "timing_not_a_cut": true,
    "flag": null
   },
   {
    "item": "Better community infrastructure – Public Building Upgrades – Roof upgrades at ACT Legislative Assembly and North Buildings",
    "statement": "Statement G",
    "table": "8",
    "section": "Revised Funding Profile",
    "y2025_26": -424,
    "y2026_27": 424,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": true,
    "direction": "pushed_out",
    "timing_not_a_cut": true,
    "flag": null
   }
  ],
  "appropriation_net_2026_27": 3871
 },
 {
  "id": "better-community-infrastructure-gungahlin-community-centre-d",
  "project": "Better community infrastructure – Gungahlin Community Centre – design and construction",
  "district": "Gungahlin",
  "district_basis": "derived",
  "district_candidates": [
   "Gungahlin"
  ],
  "total_project_value": 26247,
  "spend_2026_27": 6623,
  "completion": "Jun-26",
  "date_published": true,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "Better community infrastructure – Gungahlin Community Centre – design and construction",
    "statement": "Statement G",
    "table": "8",
    "section": "Revised Funding Profile",
    "y2025_26": 15800,
    "y2026_27": -3998,
    "y2027_28": -11802,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": true,
    "direction": "pulled_forward",
    "timing_not_a_cut": true,
    "flag": null
   }
  ],
  "appropriation_net_2026_27": -3998
 },
 {
  "id": "new-materials-recovery-facility",
  "project": "New Materials Recovery Facility",
  "district": "Territory-wide",
  "district_basis": "unlocatable",
  "district_candidates": [],
  "total_project_value": 26000,
  "spend_2026_27": 6340,
  "completion": "Apr-28",
  "date_published": true,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "New Materials Recovery Facility",
    "statement": "Statement G",
    "table": "8",
    "section": "Revised Funding Profile",
    "y2025_26": 0,
    "y2026_27": -6250,
    "y2027_28": 6250,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": true,
    "direction": "pushed_out",
    "timing_not_a_cut": true,
    "flag": "movement does not start in 2025-26; earliest affected year is budget_2026_27"
   }
  ],
  "appropriation_net_2026_27": -6250
 },
 {
  "id": "better-transport-infrastructure-delivering-light-rail-stage-",
  "project": "Better transport infrastructure – Delivering Light Rail Stage 2A",
  "district": "Territory-wide",
  "district_basis": "unlocatable",
  "district_candidates": [],
  "total_project_value": 818573,
  "spend_2026_27": 5618,
  "completion": "Jan-28",
  "date_published": true,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "Better transport infrastructure – Building light rail to Woden",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": 686,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "Better transport infrastructure – Building light rail to Woden",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": -7500,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "Better transport infrastructure – Delivering Light Rail Stage 2A",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": 0,
    "y2026_27": -3493,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "Better transport infrastructure – Building light rail to Woden",
    "statement": "Statement G",
    "table": "8",
    "section": "Revised Funding Profile",
    "y2025_26": -5000,
    "y2026_27": 17515,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": -12515,
    "is_reprofile": true,
    "direction": "pushed_out",
    "timing_not_a_cut": true,
    "flag": null
   }
  ],
  "appropriation_net_2026_27": 14022
 },
 {
  "id": "new-and-expanded-schools-majura-primary-school-modernisation",
  "project": "New and expanded schools – Majura Primary School modernisation",
  "district": "North Canberra",
  "district_basis": "derived",
  "district_candidates": [
   "North Canberra"
  ],
  "total_project_value": 20450,
  "spend_2026_27": 5575,
  "completion": "Dec-28",
  "date_published": true,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "New and Expanded Schools - Majura Primary School Modernisation",
    "statement": "Statement F",
    "table": "25",
    "section": "",
    "y2025_26": 14,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "New and expanded schools – Majura Primary School modernisation",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": -7526,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "New and expanded schools – Majura Primary School modernisation",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": 333,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   }
  ],
  "appropriation_net_2026_27": 0
 },
 {
  "id": "improving-canberra-s-health-infrastructure-redeveloping-and-",
  "project": "Improving Canberra’s health infrastructure – Redeveloping and expanding services at the Watson Health Precinct",
  "district": "North Canberra",
  "district_basis": "derived",
  "district_candidates": [
   "North Canberra"
  ],
  "total_project_value": 48993,
  "spend_2026_27": 5500,
  "completion": "Aug-26",
  "date_published": true,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "Improving Canberra’s health infrastructure – Redeveloping and expanding services at the Watson Health Precinct",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": 2634,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "Improving Canberra’s health infrastructure – Redeveloping and expanding services at the Watson Health Precinct",
    "statement": "Statement G",
    "table": "8",
    "section": "Revised Funding Profile",
    "y2025_26": 6283,
    "y2026_27": -6283,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": true,
    "direction": "pulled_forward",
    "timing_not_a_cut": true,
    "flag": null
   }
  ],
  "appropriation_net_2026_27": -6283
 },
 {
  "id": "canberra-aquatic-centre",
  "project": "Canberra Aquatic Centre",
  "district": "Territory-wide",
  "district_basis": "unlocatable",
  "district_candidates": [],
  "total_project_value": 10574,
  "spend_2026_27": 5474,
  "completion": "TBD",
  "date_published": false,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "Canberra Aquatic Centre",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": 230,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "Canberra Aquatic Centre",
    "statement": "Statement G",
    "table": "8",
    "section": "Revised Funding Profile",
    "y2025_26": -5474,
    "y2026_27": 5474,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": true,
    "direction": "pushed_out",
    "timing_not_a_cut": true,
    "flag": null
   }
  ],
  "appropriation_net_2026_27": 5474
 },
 {
  "id": "supporting-local-sport-stromlo-district-playing-fields-stage",
  "project": "Supporting local sport – Stromlo District Playing Fields – Stage 1 Construction",
  "district": "Weston Creek",
  "district_basis": "derived",
  "district_candidates": [
   "Weston Creek"
  ],
  "total_project_value": 36765,
  "spend_2026_27": 5100,
  "completion": "Oct-28",
  "date_published": true,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "Supporting local sport – Stromlo District Playing Fields – Stage 1 Construction",
    "statement": "Statement G",
    "table": "8",
    "section": "Revised Funding Profile",
    "y2025_26": 0,
    "y2026_27": -22467,
    "y2027_28": 16125,
    "y2028_29": 6342,
    "y2029_30": 0,
    "is_reprofile": true,
    "direction": "pushed_out",
    "timing_not_a_cut": true,
    "flag": "movement does not start in 2025-26; earliest affected year is budget_2026_27"
   }
  ],
  "appropriation_net_2026_27": -22467
 },
 {
  "id": "improving-canberra-s-health-infrastructure-inner-south-healt",
  "project": "Improving Canberra’s health infrastructure – Inner South Health Centre Construction",
  "district": "South Canberra",
  "district_basis": "derived",
  "district_candidates": [
   "South Canberra"
  ],
  "total_project_value": 36111,
  "spend_2026_27": 4952,
  "completion": "Jun-28",
  "date_published": true,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "Improving Canberra’s health infrastructure – Inner South Health Centre Construction",
    "statement": "Statement G",
    "table": "8",
    "section": "Revised Funding Profile",
    "y2025_26": 0,
    "y2026_27": 0,
    "y2027_28": -7293,
    "y2028_29": 7293,
    "y2029_30": 0,
    "is_reprofile": true,
    "direction": "pushed_out",
    "timing_not_a_cut": true,
    "flag": "movement does not start in 2025-26; earliest affected year is estimate_2027_28"
   }
  ],
  "appropriation_net_2026_27": 0
 },
 {
  "id": "infrastructure-canberra-2026-27-asset-renewal-program",
  "project": "Infrastructure Canberra – 2026-27 Asset Renewal Program",
  "district": "Territory-wide",
  "district_basis": "unlocatable",
  "district_candidates": [],
  "total_project_value": "Ongoing",
  "spend_2026_27": 4930,
  "completion": "Ongoing",
  "date_published": false,
  "source": "Statement G, Table 9",
  "appropriation": [],
  "appropriation_net_2026_27": null
 },
 {
  "id": "improving-canberra-s-health-infrastructure-more-parking-at-t",
  "project": "Improving Canberra’s health infrastructure – More parking at the Canberra Hospital",
  "district": "South Canberra",
  "district_basis": "derived",
  "district_candidates": [
   "South Canberra"
  ],
  "total_project_value": 4820,
  "spend_2026_27": 4259,
  "completion": "Jun-27",
  "date_published": true,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "Improving Canberra's health infrastructure – More parking at the Canberra Hospital",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": -45,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "Improving Canberra’s health infrastructure – More parking at the Canberra Hospital",
    "statement": "Statement G",
    "table": "8",
    "section": "Revised Funding Profile",
    "y2025_26": -1678,
    "y2026_27": 1678,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": true,
    "direction": "pushed_out",
    "timing_not_a_cut": true,
    "flag": null
   }
  ],
  "appropriation_net_2026_27": 1678
 },
 {
  "id": "improving-canberra-s-health-infrastructure-next-steps-for-th",
  "project": "Improving Canberra’s health infrastructure – Next steps for the Canberra Hospital Masterplan",
  "district": "South Canberra",
  "district_basis": "derived",
  "district_candidates": [
   "South Canberra"
  ],
  "total_project_value": 11100,
  "spend_2026_27": 3800,
  "completion": "TBD",
  "date_published": false,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "Improving Canberra’s health infrastructure – Next steps for the Canberra Hospital Masterplan",
    "statement": "Statement G",
    "table": "8",
    "section": "Revised Funding Profile",
    "y2025_26": -3602,
    "y2026_27": 75,
    "y2027_28": 3527,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": true,
    "direction": "pushed_out",
    "timing_not_a_cut": true,
    "flag": null
   }
  ],
  "appropriation_net_2026_27": 75
 },
 {
  "id": "improving-canberra-s-health-infrastructure-canberra-hospital",
  "project": "Improving Canberra's Health Infrastructure – Canberra Hospital Expansion",
  "district": "South Canberra",
  "district_basis": "derived",
  "district_candidates": [
   "South Canberra"
  ],
  "total_project_value": 673254,
  "spend_2026_27": 3000,
  "completion": "DLP",
  "date_published": false,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "Improving Canberra's health infrastructure – Canberra Hospital Expansion",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": 4046,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "Improving Canberra's health infrastructure – Canberra Hospital Expansion",
    "statement": "Statement G",
    "table": "8",
    "section": "Revised Funding Profile",
    "y2025_26": -3000,
    "y2026_27": 3000,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": true,
    "direction": "pushed_out",
    "timing_not_a_cut": true,
    "flag": null
   }
  ],
  "appropriation_net_2026_27": 3000
 },
 {
  "id": "more-energy-efficient-government-accommodation",
  "project": "More energy efficient Government accommodation",
  "district": "Territory-wide",
  "district_basis": "unlocatable",
  "district_candidates": [],
  "total_project_value": 15252,
  "spend_2026_27": 2995,
  "completion": "Jun-29",
  "date_published": true,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "More energy efficient Government accommodation",
    "statement": "Statement G",
    "table": "8",
    "section": "Revised Funding Profile",
    "y2025_26": -1495,
    "y2026_27": 1495,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": true,
    "direction": "pushed_out",
    "timing_not_a_cut": true,
    "flag": null
   }
  ],
  "appropriation_net_2026_27": 1495
 },
 {
  "id": "designing-the-molonglo-parkway-drive-connector",
  "project": "Designing the Molonglo Parkway-Drive Connector",
  "district": "Molonglo",
  "district_basis": "derived",
  "district_candidates": [
   "Molonglo"
  ],
  "total_project_value": "TBD",
  "spend_2026_27": 2888,
  "completion": "TBD",
  "date_published": false,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "Designing the Molonglo Parkway – Drive Connector",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": 0,
    "y2026_27": 2288,
    "y2027_28": 2287,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   }
  ],
  "appropriation_net_2026_27": 2288
 },
 {
  "id": "investing-in-public-services-relocation-of-access-canberra-w",
  "project": "Investing in public services – Relocation of Access Canberra Woden",
  "district": "Woden Valley",
  "district_basis": "derived",
  "district_candidates": [
   "Woden Valley"
  ],
  "total_project_value": 3192,
  "spend_2026_27": 2881,
  "completion": "Jun-27",
  "date_published": true,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "Investing in public services – Relocation of Access Canberra Woden",
    "statement": "Statement G",
    "table": "7",
    "section": "",
    "y2025_26": 0,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 31,
    "y2029_30": 62,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "Investing in public services – Relocation of Access Canberra Woden",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": 0,
    "y2026_27": 2881,
    "y2027_28": 311,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   }
  ],
  "appropriation_net_2026_27": 2881
 },
 {
  "id": "managing-government-and-community-facilities",
  "project": "Managing government and community facilities",
  "district": "Territory-wide",
  "district_basis": "unlocatable",
  "district_candidates": [],
  "total_project_value": 2766,
  "spend_2026_27": 2766,
  "completion": "Jun-27",
  "date_published": true,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "Managing government and community facilities",
    "statement": "Statement G",
    "table": "7",
    "section": "",
    "y2025_26": 0,
    "y2026_27": 2060,
    "y2027_28": 902,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "Managing government and community facilities",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": 0,
    "y2026_27": 2766,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   }
  ],
  "appropriation_net_2026_27": 4826
 },
 {
  "id": "investing-in-canberra-s-arts-sector",
  "project": "Investing in Canberra’s Arts Sector",
  "district": "Territory-wide",
  "district_basis": "unlocatable",
  "district_candidates": [],
  "total_project_value": 5845,
  "spend_2026_27": 2715,
  "completion": "Jun-28",
  "date_published": true,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "– Investing in Canberra's Arts Sector",
    "statement": "Statement B",
    "table": "32",
    "section": "Revised Funding Profile:",
    "y2025_26": -126,
    "y2026_27": 126,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": true,
    "direction": "pushed_out",
    "timing_not_a_cut": true,
    "flag": null
   },
   {
    "item": "Investing in Canberra’s Arts Sector",
    "statement": "Statement G",
    "table": "8",
    "section": "Revised Funding Profile",
    "y2025_26": -5425,
    "y2026_27": 2715,
    "y2027_28": 2710,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": true,
    "direction": "pushed_out",
    "timing_not_a_cut": true,
    "flag": null
   }
  ],
  "appropriation_net_2026_27": 2841
 },
 {
  "id": "improving-canberra-s-health-infrastructure-new-health-centre",
  "project": "Improving Canberra’s health infrastructure – New Health Centres across the ACT",
  "district": "Territory-wide",
  "district_basis": "unlocatable",
  "district_candidates": [],
  "total_project_value": 4378,
  "spend_2026_27": 2677,
  "completion": "TBD",
  "date_published": false,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "Improving Canberra’s health infrastructure – New Health Centres across the ACT",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": 911,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "Improving Canberra’s health infrastructure – New Health Centres across the ACT",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": -457,
    "y2026_27": -1019,
    "y2027_28": -2062,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   }
  ],
  "appropriation_net_2026_27": -1019
 },
 {
  "id": "improving-canberra-s-health-infrastructure-expanding-health-",
  "project": "Improving Canberra’s health infrastructure – Expanding health centres across the city",
  "district": "Territory-wide",
  "district_basis": "unlocatable",
  "district_candidates": [],
  "total_project_value": 15572,
  "spend_2026_27": 2574,
  "completion": "Sep-26",
  "date_published": true,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "Improving Canberra’s health infrastructure – Expanding health centres across the city",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": 638,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "Improving Canberra’s health infrastructure – Expanding health centres across the city",
    "statement": "Statement G",
    "table": "8",
    "section": "Revised Funding Profile",
    "y2025_26": 3894,
    "y2026_27": -3894,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": true,
    "direction": "pulled_forward",
    "timing_not_a_cut": true,
    "flag": null
   }
  ],
  "appropriation_net_2026_27": -3894
 },
 {
  "id": "strengthening-emergency-services-planning-for-the-molonglo-v",
  "project": "Strengthening emergency services – Planning for the Molonglo Valley Police Station",
  "district": "Molonglo",
  "district_basis": "derived",
  "district_candidates": [
   "Molonglo"
  ],
  "total_project_value": 2500,
  "spend_2026_27": 2100,
  "completion": "TBD",
  "date_published": false,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "Strengthening emergency services – Planning for the Molonglo Valley Police Station",
    "statement": "Statement G",
    "table": "8",
    "section": "Revised Funding Profile",
    "y2025_26": -850,
    "y2026_27": 850,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": true,
    "direction": "pushed_out",
    "timing_not_a_cut": true,
    "flag": null
   }
  ],
  "appropriation_net_2026_27": 850
 },
 {
  "id": "30-000-homes-by-2030-public-housing-pipeline",
  "project": "30,000 homes by 2030 – Public housing pipeline",
  "district": "Territory-wide",
  "district_basis": "unlocatable",
  "district_candidates": [],
  "total_project_value": 6070,
  "spend_2026_27": 1995,
  "completion": "Jun-30",
  "date_published": true,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "30,000 homes by 2030 – Public housing pipeline",
    "statement": "Statement C",
    "table": "4",
    "section": "",
    "y2025_26": 0,
    "y2026_27": 671,
    "y2027_28": 232,
    "y2028_29": 235,
    "y2029_30": 238,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "30,000 homes by 2030 – Public housing pipeline",
    "statement": "Statement C",
    "table": "5",
    "section": "",
    "y2025_26": 0,
    "y2026_27": 67975,
    "y2027_28": 148074,
    "y2028_29": 66805,
    "y2029_30": -26000,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "30,000 homes by 2030 – Public housing pipeline",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": 0,
    "y2026_27": 1995,
    "y2027_28": 2023,
    "y2028_29": 2052,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   }
  ],
  "appropriation_net_2026_27": 70641
 },
 {
  "id": "improving-mugga-lane-landfill-capacity",
  "project": "Improving Mugga Lane landfill capacity",
  "district": "Tuggeranong",
  "district_basis": "derived",
  "district_candidates": [
   "Tuggeranong"
  ],
  "total_project_value": 1911,
  "spend_2026_27": 1911,
  "completion": "TBD",
  "date_published": false,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "Improving Mugga Lane landfill capacity",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": 0,
    "y2026_27": 1911,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   }
  ],
  "appropriation_net_2026_27": 1911
 },
 {
  "id": "climate-action-moving-more-government-facilities-off-gas",
  "project": "Climate action – Moving more government facilities off gas",
  "district": "Territory-wide",
  "district_basis": "unlocatable",
  "district_candidates": [],
  "total_project_value": 6900,
  "spend_2026_27": 1425,
  "completion": "Jun-27",
  "date_published": true,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "Climate action – Moving more government facilities off gas",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": 1271,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "Climate action – Moving more government facilities off gas",
    "statement": "Statement G",
    "table": "8",
    "section": "Revised Funding Profile",
    "y2025_26": -925,
    "y2026_27": 925,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": true,
    "direction": "pushed_out",
    "timing_not_a_cut": true,
    "flag": null
   }
  ],
  "appropriation_net_2026_27": 925
 },
 {
  "id": "strengthening-emergency-services-early-works-for-the-casey-e",
  "project": "Strengthening emergency services – Early works for the Casey Emergency Services Station",
  "district": "Gungahlin",
  "district_basis": "derived",
  "district_candidates": [
   "Gungahlin"
  ],
  "total_project_value": 1324,
  "spend_2026_27": 1124,
  "completion": "TBD",
  "date_published": false,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "Strengthening emergency services – Early works for the Casey Emergency Services Station",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": -5736,
    "y2026_27": -3490,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   }
  ],
  "appropriation_net_2026_27": -3490
 },
 {
  "id": "well-prepared-emergency-services-molonglo-station-and-casey-",
  "project": "Well-prepared emergency services – Molonglo Station and Casey Station",
  "district": "Multiple",
  "district_basis": "ambiguous",
  "district_candidates": [
   "Gungahlin",
   "Molonglo"
  ],
  "total_project_value": 53394,
  "spend_2026_27": 999,
  "completion": "DLP",
  "date_published": false,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "Well-prepared emergency services – Molonglo Station and Casey Station",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": -3481,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "Well-prepared emergency services – Molonglo Station and Casey Station",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": -3793,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "Well-prepared emergency services – Molonglo Station and Casey Station",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": 0,
    "y2026_27": -11001,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "Well-prepared emergency services – Molonglo Station and Casey Station",
    "statement": "Statement G",
    "table": "8",
    "section": "Revised Funding Profile",
    "y2025_26": 8000,
    "y2026_27": -8000,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": true,
    "direction": "pulled_forward",
    "timing_not_a_cut": true,
    "flag": null
   }
  ],
  "appropriation_net_2026_27": -19001
 },
 {
  "id": "public-pool-upgrades-operations-and-maintenance",
  "project": "Public pool upgrades, operations and maintenance",
  "district": "Territory-wide",
  "district_basis": "unlocatable",
  "district_candidates": [],
  "total_project_value": 1134,
  "spend_2026_27": 718,
  "completion": "Ongoing",
  "date_published": false,
  "source": "Statement G, Table 9",
  "appropriation": [],
  "appropriation_net_2026_27": null
 },
 {
  "id": "office-accommodation",
  "project": "Office Accommodation",
  "district": "Territory-wide",
  "district_basis": "unlocatable",
  "district_candidates": [],
  "total_project_value": "Ongoing",
  "spend_2026_27": 500,
  "completion": "Ongoing",
  "date_published": false,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "Office Accommodation",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": -8,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   }
  ],
  "appropriation_net_2026_27": 0
 },
 {
  "id": "better-community-infrastructure-refurbishing-community-and-g",
  "project": "Better community infrastructure – Refurbishing community and government buildings",
  "district": "Territory-wide",
  "district_basis": "unlocatable",
  "district_candidates": [],
  "total_project_value": 7249,
  "spend_2026_27": 490,
  "completion": "Jun-27",
  "date_published": true,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "Better community infrastructure – Refurbishing community and government buildings",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": 114,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "Better community infrastructure – Refurbishing community and government buildings",
    "statement": "Statement G",
    "table": "8",
    "section": "Revised Funding Profile",
    "y2025_26": -490,
    "y2026_27": 490,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": true,
    "direction": "pushed_out",
    "timing_not_a_cut": true,
    "flag": null
   }
  ],
  "appropriation_net_2026_27": 490
 },
 {
  "id": "act-government-office-accommodation-consolidation",
  "project": "ACT Government office accommodation consolidation",
  "district": "Territory-wide",
  "district_basis": "unlocatable",
  "district_candidates": [],
  "total_project_value": 12213,
  "spend_2026_27": 421,
  "completion": "Jun-27",
  "date_published": true,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "ACT Government office accommodation consolidation",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": 421,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "ACT Government office accommodation consolidation",
    "statement": "Statement G",
    "table": "8",
    "section": "Revised Funding Profile",
    "y2025_26": -421,
    "y2026_27": 421,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": true,
    "direction": "pushed_out",
    "timing_not_a_cut": true,
    "flag": null
   }
  ],
  "appropriation_net_2026_27": 421
 },
 {
  "id": "more-services-for-our-suburbs-upgrading-the-old-kingston-bus",
  "project": "More services for our suburbs – Upgrading the Old Kingston Bus Depot",
  "district": "South Canberra",
  "district_basis": "derived",
  "district_candidates": [
   "South Canberra"
  ],
  "total_project_value": 5953,
  "spend_2026_27": 260,
  "completion": "Jun-27",
  "date_published": true,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "More services for our suburbs – Upgrading the Old Kingston Bus Depot",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": 260,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "More services for our suburbs – Upgrading the Old Kingston Bus Depot",
    "statement": "Statement G",
    "table": "8",
    "section": "Revised Funding Profile",
    "y2025_26": -260,
    "y2026_27": 260,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": true,
    "direction": "pushed_out",
    "timing_not_a_cut": true,
    "flag": null
   }
  ],
  "appropriation_net_2026_27": 260
 },
 {
  "id": "better-community-infrastructure-refurbishing-canberra-s-publ",
  "project": "Better community infrastructure – Refurbishing Canberra’s public pools",
  "district": "Territory-wide",
  "district_basis": "unlocatable",
  "district_candidates": [],
  "total_project_value": 4008,
  "spend_2026_27": 184,
  "completion": "Dec-26",
  "date_published": true,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "Better community infrastructure – Refurbishing Canberra’s public pools",
    "statement": "Statement G",
    "table": "7",
    "section": "",
    "y2025_26": 0,
    "y2026_27": -768,
    "y2027_28": -787,
    "y2028_29": -807,
    "y2029_30": -827,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "Better community infrastructure – Refurbishing Canberra’s public pools",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": 26,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   }
  ],
  "appropriation_net_2026_27": -768
 },
 {
  "id": "new-and-expanded-schools-telopea-park-high-school-modernisat",
  "project": "New and expanded schools – Telopea Park High School modernisation",
  "district": "South Canberra",
  "district_basis": "derived",
  "district_candidates": [
   "South Canberra"
  ],
  "total_project_value": 53404,
  "spend_2026_27": 0,
  "completion": "TBD",
  "date_published": false,
  "source": "Statement G, Table 9",
  "appropriation": [
   {
    "item": "New and Expanded Schools - Telopea Park High School Modernisation",
    "statement": "Statement F",
    "table": "25",
    "section": "",
    "y2025_26": 31,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "New and expanded schools – Telopea Park High School modernisation",
    "statement": "Statement G",
    "table": "8",
    "section": "",
    "y2025_26": 2200,
    "y2026_27": 0,
    "y2027_28": 0,
    "y2028_29": 0,
    "y2029_30": 0,
    "is_reprofile": false,
    "direction": null,
    "timing_not_a_cut": false,
    "flag": null
   },
   {
    "item": "New and expanded schools – Telopea Park High School modernisation",
    "statement": "Statement G",
    "table": "8",
    "section": "Revised Funding Profile",
    "y2025_26": 0,
    "y2026_27": -24050,
    "y2027_28": -4000,
    "y2028_29": 20000,
    "y2029_30": 8050,
    "is_reprofile": true,
    "direction": "pushed_out",
    "timing_not_a_cut": true,
    "flag": "movement does not start in 2025-26; earliest affected year is budget_2026_27"
   }
  ],
  "appropriation_net_2026_27": -24050
 },
 {
  "id": "throsby-district-playing-field",
  "project": "Throsby District Playing Field",
  "district": "Gungahlin",
  "district_basis": "derived",
  "district_candidates": [
   "Gungahlin"
  ],
  "total_project_value": 25500,
  "spend_2026_27": 0,
  "completion": "TBD",
  "date_published": false,
  "source": "Statement G, Table 9",
  "appropriation": [],
  "appropriation_net_2026_27": null
 }
];

window.LAYERS = {
 "schools": [
 {
  "canonical_school": "Second public college for Gungahlin",
  "schools_named": null,
  "suburb": null,
  "district": "Gungahlin",
  "project": "Delivering a second public college for Gungahlin2",
  "row_type": "infrastructure_project",
  "total_project_value": 125511,
  "spend_2026_27": 47067,
  "est_outcome_2025_26": null,
  "physical_completion_date": "Dec-28",
  "capacity": null,
  "work_type": "new build",
  "planning_only": false,
  "duplicate_group": "gungahlin-college",
  "possible_duplicate_of": [
   18,
   26,
   29,
   35
  ],
  "source": "Statement G, Table 9",
  "notes": "Site/suburb not named in the budget papers. Statement G line 162: 'commence construction for a second college in Gungahlin'. Superscript 2 = project value includes enabling services contributions (iCBR Financial Sustainability initiative)."
 },
 {
  "canonical_school": "Whitlam School",
  "schools_named": null,
  "suburb": "Whitlam",
  "district": "Molonglo",
  "project": "Delivery of the Whitlam School – Stage 22,4",
  "row_type": "infrastructure_project",
  "total_project_value": 36736,
  "spend_2026_27": 14091,
  "est_outcome_2025_26": null,
  "physical_completion_date": "TBD",
  "capacity": null,
  "work_type": "new build (stage 2)",
  "planning_only": false,
  "duplicate_group": "whitlam-stage2",
  "possible_duplicate_of": [
   27
  ],
  "source": "Statement G, Table 9",
  "notes": "Superscripts 2 and 4: value includes enabling services contributions; physical completion date yet to be determined."
 },
 {
  "canonical_school": "Whitlam School",
  "schools_named": null,
  "suburb": "Whitlam",
  "district": "Molonglo",
  "project": "New and expanded schools – Development of the Whitlam Primary School and Early Childhood Education Centre",
  "row_type": "infrastructure_project",
  "total_project_value": 114750,
  "spend_2026_27": 61753,
  "est_outcome_2025_26": null,
  "physical_completion_date": "Jan-27",
  "capacity": null,
  "work_type": "new build",
  "planning_only": false,
  "duplicate_group": "whitlam-primary-ecec",
  "possible_duplicate_of": [
   19,
   36
  ],
  "source": "Statement G, Table 9",
  "notes": "Statement G line 160: 'complete construction of a new school in Whitlam'. Statement G line 903 notes Whitlam School transfers to the Education Directorate in 2026-27."
 },
 {
  "canonical_school": "Garran Primary School",
  "schools_named": null,
  "suburb": "Garran",
  "district": "Woden Valley",
  "project": "New and expanded schools – Garran Primary School3",
  "row_type": "infrastructure_project",
  "total_project_value": 106422,
  "spend_2026_27": 31115,
  "est_outcome_2025_26": null,
  "physical_completion_date": "Dec-26",
  "capacity": null,
  "work_type": "construction (stage 2)",
  "planning_only": false,
  "duplicate_group": "garran",
  "possible_duplicate_of": [
   20,
   38
  ],
  "source": "Statement G, Table 9",
  "notes": "Statement G line 168: 'complete the second stage of construction at Garran Primary School'. Superscript 3 = funding availability date differs from physical completion date."
 },
 {
  "canonical_school": "Majura Primary School",
  "schools_named": null,
  "suburb": null,
  "district": "Unclear",
  "project": "New and expanded schools – Majura Primary School modernisation",
  "row_type": "infrastructure_project",
  "total_project_value": 20450,
  "spend_2026_27": 5575,
  "est_outcome_2025_26": null,
  "physical_completion_date": "Dec-28",
  "capacity": null,
  "work_type": "modernisation",
  "planning_only": false,
  "duplicate_group": "majura",
  "possible_duplicate_of": [
   12,
   15,
   16,
   21,
   39
  ],
  "source": "Statement G, Table 9",
  "notes": "Suburb not stated in the budget papers and 'Majura' is a district name, not the school's suburb — left null rather than guessed. Statement G line 170: 'commence construction at Majura Primary School'."
 },
 {
  "canonical_school": "Narrabundah College",
  "schools_named": null,
  "suburb": "Narrabundah",
  "district": "South Canberra",
  "project": "New and expanded schools – Narrabundah College",
  "row_type": "infrastructure_project",
  "total_project_value": 31910,
  "spend_2026_27": 12870,
  "est_outcome_2025_26": null,
  "physical_completion_date": "Feb-27",
  "capacity": null,
  "work_type": "modernisation",
  "planning_only": false,
  "duplicate_group": "narrabundah",
  "possible_duplicate_of": [
   22,
   30,
   40
  ],
  "source": "Statement G, Table 9",
  "notes": "Statement G line 166: 'complete construction of the Narrabundah College modernisation'. Line 903 notes Narrabundah College transfers to the Education Directorate in 2026-27."
 },
 {
  "canonical_school": "Strathnairn School",
  "schools_named": null,
  "suburb": "Strathnairn",
  "district": "Belconnen",
  "project": "New and expanded schools – Strathnairn Primary School3",
  "row_type": "infrastructure_project",
  "total_project_value": 126542,
  "spend_2026_27": 26551,
  "est_outcome_2025_26": null,
  "physical_completion_date": "Dec-26",
  "capacity": "780 Preschool to Year 6 students and 130 Early Childhood Education and Care places",
  "work_type": "new build (stage 2)",
  "planning_only": false,
  "duplicate_group": "strathnairn",
  "possible_duplicate_of": [
   23,
   31,
   41,
   50
  ],
  "source": "Statement G, Table 9",
  "notes": "District 'Belconnen' is stated in Statement F line 218. Capacity figure is from Statement F prose, not from this table."
 },
 {
  "canonical_school": "Telopea Park School",
  "schools_named": null,
  "suburb": null,
  "district": "Unclear",
  "project": "New and expanded schools – Telopea Park High School modernisation4",
  "row_type": "infrastructure_project",
  "total_project_value": 53404,
  "spend_2026_27": 0,
  "est_outcome_2025_26": null,
  "physical_completion_date": "TBD",
  "capacity": null,
  "work_type": "modernisation",
  "planning_only": false,
  "duplicate_group": "telopea",
  "possible_duplicate_of": [
   13,
   25,
   32,
   43
  ],
  "source": "Statement G, Table 9",
  "notes": "'Telopea Park' is a place name, not an ACT suburb — suburb left null. NOTE: this table shows $0 in 2026-27, but Statement G Table 8 shows +$6.150m in 2026-27 for 'Modernisation of Telopea Park School'. The two do not agree."
 },
 {
  "canonical_school": "Lyneham High School",
  "schools_named": null,
  "suburb": "Lyneham",
  "district": "North Canberra",
  "project": "Refurbishing the Lyneham High School Gym",
  "row_type": "infrastructure_project",
  "total_project_value": 5746,
  "spend_2026_27": 5348,
  "est_outcome_2025_26": null,
  "physical_completion_date": "Nov-28",
  "capacity": null,
  "work_type": "modernisation (gymnasium refurbishment)",
  "planning_only": false,
  "duplicate_group": "lyneham-gym",
  "possible_duplicate_of": [
   44,
   48
  ],
  "source": "Statement F, Table 26",
  "notes": "Statement F line 220 describes this as 'design and development for the refurbishment of the Lyneham High School Gymnasium'."
 },
 {
  "canonical_school": null,
  "schools_named": [
   "Fraser Primary School",
   "Melba Copland Secondary School"
  ],
  "suburb": null,
  "district": "Belconnen",
  "project": "New and Expanded Schools -   Upgrades for Fraser Primary School and Melba Copland Secondary School",
  "row_type": "infrastructure_project",
  "total_project_value": 2000,
  "spend_2026_27": 850,
  "est_outcome_2025_26": null,
  "physical_completion_date": "Nov-26",
  "capacity": null,
  "work_type": "grounds (Fraser ovals) / planning and initial works (Melba Copland)",
  "planning_only": false,
  "duplicate_group": "fraser-melba",
  "possible_duplicate_of": [
   47,
   51
  ],
  "source": "Statement F, Table 26",
  "notes": "ONE line item covering TWO schools — the $850k cannot be split between them from the source. Fraser and Melba are both Belconnen suburbs. Statement F line 220: 'delivering oval upgrades at Fraser Primary School, commencing master planning and initial works at Melba Copland Senior Secondary School College'."
 },
 {
  "canonical_school": null,
  "schools_named": [
   "Garran Primary School",
   "Strathnairn Primary School",
   "New High School at North Gungahlin"
  ],
  "suburb": null,
  "district": "Unclear",
  "project": "New and Expanded Schools - Supplementing Construction Funding for Garran and Strathnairn Primary Schools and the New High School at North Gungahlin",
  "row_type": "infrastructure_project",
  "total_project_value": 2392,
  "spend_2026_27": 1220,
  "est_outcome_2025_26": null,
  "physical_completion_date": "Jun-27",
  "capacity": null,
  "work_type": "new build (construction funding supplement)",
  "planning_only": false,
  "duplicate_group": "supplementing-garran-strathnairn-nth-gungahlin",
  "possible_duplicate_of": [
   17,
   24,
   42,
   46
  ],
  "source": "Statement F, Table 26",
  "notes": "ONE line item covering THREE schools spanning three districts (Woden Valley, Belconnen, Gungahlin) — district set 'Unclear'. 'The New High School at North Gungahlin' is not named; it may or may not be the same asset as Kenny High School. Do not assume."
 },
 {
  "canonical_school": "Kenny High School",
  "schools_named": null,
  "suburb": "Kenny",
  "district": "Gungahlin",
  "project": "School for Our Growing City - Kenny High School",
  "row_type": "infrastructure_project",
  "total_project_value": 76019,
  "spend_2026_27": 1300,
  "est_outcome_2025_26": null,
  "physical_completion_date": "Jan-24",
  "capacity": null,
  "work_type": "new build",
  "planning_only": false,
  "duplicate_group": "kenny",
  "possible_duplicate_of": [
   45,
   49
  ],
  "source": "Statement F, Table 26",
  "notes": "Printed physical completion date is 'Jan-24', which is in the past relative to a 2026-27 budget. Reproduced verbatim; treat as a possible source typo, do not correct."
 },
 {
  "canonical_school": "Majura Primary School",
  "schools_named": null,
  "suburb": null,
  "district": "Unclear",
  "project": "New and Expanded Schools – Modernisation of Majura Primary School",
  "row_type": "appropriation_change",
  "total_project_value": null,
  "spend_2026_27": 5575,
  "est_outcome_2025_26": 213,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "modernisation",
  "planning_only": false,
  "duplicate_group": "majura",
  "possible_duplicate_of": [
   4,
   15,
   16,
   21,
   39
  ],
  "source": "Statement G, Table 8",
  "notes": "Year profile is identical to the Statement G Table 9 Majura row — same money at a different reporting level."
 },
 {
  "canonical_school": "Telopea Park School",
  "schools_named": null,
  "suburb": null,
  "district": "Unclear",
  "project": "New and expanded schools – Modernisation of Telopea Park School",
  "row_type": "appropriation_change",
  "total_project_value": null,
  "spend_2026_27": 6150,
  "est_outcome_2025_26": 0,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "modernisation",
  "planning_only": false,
  "duplicate_group": "telopea",
  "possible_duplicate_of": [
   7,
   25,
   32,
   43
  ],
  "source": "Statement G, Table 8",
  "notes": "CONFLICT: +$6.150m in 2026-27 here vs $0 in 2026-27 in Statement G Table 9 for Telopea Park High School modernisation."
 },
 {
  "canonical_school": "Whitlam School",
  "schools_named": null,
  "suburb": "Whitlam",
  "district": "Molonglo",
  "project": "Whitlam Primary School Early Learning Centre",
  "row_type": "appropriation_change",
  "total_project_value": null,
  "spend_2026_27": 5000,
  "est_outcome_2025_26": 5000,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "new build (early learning centre)",
  "planning_only": false,
  "duplicate_group": "whitlam-elc",
  "possible_duplicate_of": [
   28,
   33
  ],
  "source": "Statement G, Table 8",
  "notes": "Appears three times in Statement G Table 8 with offsetting signs; the three net to $0 in 2026-27."
 },
 {
  "canonical_school": "Majura Primary School",
  "schools_named": null,
  "suburb": null,
  "district": "Unclear",
  "project": "New and expanded schools – Majura Primary School modernisation",
  "row_type": "appropriation_change",
  "total_project_value": null,
  "spend_2026_27": 0,
  "est_outcome_2025_26": -7526,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "modernisation",
  "planning_only": false,
  "duplicate_group": "majura",
  "possible_duplicate_of": [
   4,
   12,
   16,
   21,
   39
  ],
  "source": "Statement G, Table 8",
  "notes": null
 },
 {
  "canonical_school": "Majura Primary School",
  "schools_named": null,
  "suburb": null,
  "district": "Unclear",
  "project": "New and expanded schools – Additional Construction Funding for Majura Primary School",
  "row_type": "appropriation_change",
  "total_project_value": null,
  "spend_2026_27": -792,
  "est_outcome_2025_26": 0,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "modernisation",
  "planning_only": false,
  "duplicate_group": "majura",
  "possible_duplicate_of": [
   4,
   12,
   15,
   21,
   39
  ],
  "source": "Statement G, Table 8",
  "notes": null
 },
 {
  "canonical_school": null,
  "schools_named": null,
  "suburb": null,
  "district": "Unclear",
  "project": "New and expanded schools – Supplementing construction funding for Garran and Strathnairn primary schools and the new high school at North Gungahlin",
  "row_type": "appropriation_change",
  "total_project_value": null,
  "spend_2026_27": -1000,
  "est_outcome_2025_26": 0,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "new build (construction funding supplement)",
  "planning_only": false,
  "duplicate_group": "supplementing-garran-strathnairn-nth-gungahlin",
  "possible_duplicate_of": [
   10,
   24,
   42,
   46
  ],
  "source": "Statement G, Table 8",
  "notes": "Negative in Statement G and positive in Statement F — consistent with the project moving from iCBR to the Education Directorate. Do not net across statements without checking."
 },
 {
  "canonical_school": "Second public college for Gungahlin",
  "schools_named": null,
  "suburb": null,
  "district": "Gungahlin",
  "project": "New and expanded schools – Delivering a second college for Gungahlin",
  "row_type": "appropriation_change",
  "total_project_value": null,
  "spend_2026_27": 0,
  "est_outcome_2025_26": 94,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "new build",
  "planning_only": false,
  "duplicate_group": "gungahlin-college",
  "possible_duplicate_of": [
   0,
   26,
   29,
   35
  ],
  "source": "Statement G, Table 8",
  "notes": null
 },
 {
  "canonical_school": "Whitlam School",
  "schools_named": null,
  "suburb": "Whitlam",
  "district": "Molonglo",
  "project": "New and expanded schools – Development of the Whitlam Primary School and Early Childhood Education Centre",
  "row_type": "appropriation_change",
  "total_project_value": null,
  "spend_2026_27": 0,
  "est_outcome_2025_26": 4159,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "new build",
  "planning_only": false,
  "duplicate_group": "whitlam-primary-ecec",
  "possible_duplicate_of": [
   2,
   36
  ],
  "source": "Statement G, Table 8",
  "notes": null
 },
 {
  "canonical_school": "Garran Primary School",
  "schools_named": null,
  "suburb": "Garran",
  "district": "Woden Valley",
  "project": "New and expanded schools – Garran Primary School",
  "row_type": "appropriation_change",
  "total_project_value": null,
  "spend_2026_27": 0,
  "est_outcome_2025_26": -9770,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "construction",
  "planning_only": false,
  "duplicate_group": "garran",
  "possible_duplicate_of": [
   3,
   38
  ],
  "source": "Statement G, Table 8",
  "notes": null
 },
 {
  "canonical_school": "Majura Primary School",
  "schools_named": null,
  "suburb": null,
  "district": "Unclear",
  "project": "New and expanded schools – Majura Primary School modernisation",
  "row_type": "appropriation_change",
  "total_project_value": null,
  "spend_2026_27": 0,
  "est_outcome_2025_26": 333,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "modernisation",
  "planning_only": false,
  "duplicate_group": "majura",
  "possible_duplicate_of": [
   4,
   12,
   15,
   16,
   39
  ],
  "source": "Statement G, Table 8",
  "notes": null
 },
 {
  "canonical_school": "Narrabundah College",
  "schools_named": null,
  "suburb": "Narrabundah",
  "district": "South Canberra",
  "project": "New and expanded schools – Narrabundah College",
  "row_type": "appropriation_change",
  "total_project_value": null,
  "spend_2026_27": 0,
  "est_outcome_2025_26": 4625,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "modernisation",
  "planning_only": false,
  "duplicate_group": "narrabundah",
  "possible_duplicate_of": [
   5,
   30,
   40
  ],
  "source": "Statement G, Table 8",
  "notes": null
 },
 {
  "canonical_school": "Strathnairn School",
  "schools_named": null,
  "suburb": "Strathnairn",
  "district": "Belconnen",
  "project": "New and expanded schools – Strathnairn Primary School",
  "row_type": "appropriation_change",
  "total_project_value": null,
  "spend_2026_27": 0,
  "est_outcome_2025_26": 7411,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "new build",
  "planning_only": false,
  "duplicate_group": "strathnairn",
  "possible_duplicate_of": [
   6,
   31,
   41,
   50
  ],
  "source": "Statement G, Table 8",
  "notes": null
 },
 {
  "canonical_school": null,
  "schools_named": null,
  "suburb": null,
  "district": "Unclear",
  "project": "New and expanded schools – Supplementing construction funding for Garran and Strathnairn primary schools",
  "row_type": "appropriation_change",
  "total_project_value": null,
  "spend_2026_27": 0,
  "est_outcome_2025_26": 187,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "new build (construction funding supplement)",
  "planning_only": false,
  "duplicate_group": "supplementing-garran-strathnairn-nth-gungahlin",
  "possible_duplicate_of": [
   10,
   17,
   42,
   46
  ],
  "source": "Statement G, Table 8",
  "notes": "Two-school line item; money not attributable per school."
 },
 {
  "canonical_school": "Telopea Park School",
  "schools_named": null,
  "suburb": null,
  "district": "Unclear",
  "project": "New and expanded schools – Telopea Park High School modernisation",
  "row_type": "appropriation_change",
  "total_project_value": null,
  "spend_2026_27": 0,
  "est_outcome_2025_26": 2200,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "modernisation",
  "planning_only": false,
  "duplicate_group": "telopea",
  "possible_duplicate_of": [
   7,
   13,
   32,
   43
  ],
  "source": "Statement G, Table 8",
  "notes": null
 },
 {
  "canonical_school": "Second public college for Gungahlin",
  "schools_named": null,
  "suburb": null,
  "district": "Gungahlin",
  "project": "Delivering a second public college for Gungahlin",
  "row_type": "appropriation_change",
  "total_project_value": null,
  "spend_2026_27": 6343,
  "est_outcome_2025_26": 0,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "new build",
  "planning_only": false,
  "duplicate_group": "gungahlin-college",
  "possible_duplicate_of": [
   0,
   18,
   29,
   35
  ],
  "source": "Statement G, Table 8",
  "notes": "New money in the 2026-27 Budget. Does not equal the $47.067m shown in Statement G Table 9, which is the whole-of-project 2026-27 cash flow."
 },
 {
  "canonical_school": "Whitlam School",
  "schools_named": null,
  "suburb": "Whitlam",
  "district": "Molonglo",
  "project": "Delivery of the Whitlam School – Stage 2",
  "row_type": "appropriation_change",
  "total_project_value": null,
  "spend_2026_27": 14091,
  "est_outcome_2025_26": 0,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "new build (stage 2)",
  "planning_only": false,
  "duplicate_group": "whitlam-stage2",
  "possible_duplicate_of": [
   1
  ],
  "source": "Statement G, Table 8",
  "notes": "Identical year profile to the Statement G Table 9 Whitlam Stage 2 row."
 },
 {
  "canonical_school": "Whitlam School",
  "schools_named": null,
  "suburb": "Whitlam",
  "district": "Molonglo",
  "project": "Whitlam Primary School Early Learning Centre",
  "row_type": "appropriation_change",
  "total_project_value": null,
  "spend_2026_27": -10000,
  "est_outcome_2025_26": 0,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "new build (early learning centre)",
  "planning_only": false,
  "duplicate_group": "whitlam-elc",
  "possible_duplicate_of": [
   14,
   33
  ],
  "source": "Statement G, Table 8",
  "notes": null
 },
 {
  "canonical_school": "Second public college for Gungahlin",
  "schools_named": null,
  "suburb": null,
  "district": "Gungahlin",
  "project": "New and expanded schools – Delivering a second college for Gungahlin",
  "row_type": "appropriation_change",
  "total_project_value": null,
  "spend_2026_27": -8700,
  "est_outcome_2025_26": 0,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "new build",
  "planning_only": false,
  "duplicate_group": "gungahlin-college",
  "possible_duplicate_of": [
   0,
   18,
   26,
   35
  ],
  "source": "Statement G, Table 8",
  "notes": null
 },
 {
  "canonical_school": "Narrabundah College",
  "schools_named": null,
  "suburb": "Narrabundah",
  "district": "South Canberra",
  "project": "New and expanded schools – Narrabundah College",
  "row_type": "appropriation_change",
  "total_project_value": null,
  "spend_2026_27": 5870,
  "est_outcome_2025_26": 0,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "modernisation",
  "planning_only": false,
  "duplicate_group": "narrabundah",
  "possible_duplicate_of": [
   5,
   22,
   40
  ],
  "source": "Statement G, Table 8",
  "notes": null
 },
 {
  "canonical_school": "Strathnairn School",
  "schools_named": null,
  "suburb": "Strathnairn",
  "district": "Belconnen",
  "project": "New and expanded schools – Strathnairn Primary School",
  "row_type": "appropriation_change",
  "total_project_value": null,
  "spend_2026_27": -2500,
  "est_outcome_2025_26": 2500,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "new build",
  "planning_only": false,
  "duplicate_group": "strathnairn",
  "possible_duplicate_of": [
   6,
   23,
   41,
   50
  ],
  "source": "Statement G, Table 8",
  "notes": null
 },
 {
  "canonical_school": "Telopea Park School",
  "schools_named": null,
  "suburb": null,
  "district": "Unclear",
  "project": "New and expanded schools – Telopea Park High School modernisation",
  "row_type": "appropriation_change",
  "total_project_value": null,
  "spend_2026_27": -24050,
  "est_outcome_2025_26": 0,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "modernisation",
  "planning_only": false,
  "duplicate_group": "telopea",
  "possible_duplicate_of": [
   7,
   13,
   25,
   43
  ],
  "source": "Statement G, Table 8",
  "notes": "Large reprofile pushing Telopea money out to 2028-29 and 2029-30."
 },
 {
  "canonical_school": "Whitlam School",
  "schools_named": null,
  "suburb": "Whitlam",
  "district": "Molonglo",
  "project": "Whitlam Primary School Early Learning Centre",
  "row_type": "appropriation_change",
  "total_project_value": null,
  "spend_2026_27": 5000,
  "est_outcome_2025_26": -5000,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "new build (early learning centre)",
  "planning_only": false,
  "duplicate_group": "whitlam-elc",
  "possible_duplicate_of": [
   14,
   28
  ],
  "source": "Statement G, Table 8",
  "notes": null
 },
 {
  "canonical_school": "Molonglo P-10",
  "schools_named": null,
  "suburb": null,
  "district": "Molonglo",
  "project": "More Schools, Better Schools - Delivering Molonglo P-10",
  "row_type": "appropriation_change",
  "total_project_value": null,
  "spend_2026_27": 0,
  "est_outcome_2025_26": 493,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "new build",
  "planning_only": false,
  "duplicate_group": "molonglo-p10",
  "possible_duplicate_of": [],
  "source": "Statement F, Table 25",
  "notes": "Only appearance of 'Molonglo P-10' in the budget papers. It may be the same asset as the Whitlam School (Whitlam is in the Molonglo Valley district) — the papers do not say. Do not treat as an additional school without checking."
 },
 {
  "canonical_school": "Second public college for Gungahlin",
  "schools_named": null,
  "suburb": null,
  "district": "Gungahlin",
  "project": "New and Expanded Schools - Delivering a Second College for Gungahlin",
  "row_type": "appropriation_change",
  "total_project_value": null,
  "spend_2026_27": 0,
  "est_outcome_2025_26": 93,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "new build",
  "planning_only": false,
  "duplicate_group": "gungahlin-college",
  "possible_duplicate_of": [
   0,
   18,
   26,
   29
  ],
  "source": "Statement F, Table 25",
  "notes": null
 },
 {
  "canonical_school": "Whitlam School",
  "schools_named": null,
  "suburb": "Whitlam",
  "district": "Molonglo",
  "project": "New and Expanded Schools - Development of the Whitlam Primary School and Early Childhood Education Centre",
  "row_type": "appropriation_change",
  "total_project_value": null,
  "spend_2026_27": 0,
  "est_outcome_2025_26": 401,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "new build",
  "planning_only": false,
  "duplicate_group": "whitlam-primary-ecec",
  "possible_duplicate_of": [
   2,
   19
  ],
  "source": "Statement F, Table 25",
  "notes": null
 },
 {
  "canonical_school": null,
  "schools_named": [
   "Margaret Hendry Primary School",
   "New Taylor High"
  ],
  "suburb": null,
  "district": "Gungahlin",
  "project": "New and Expanded Schools - Expansion of Margaret Hendry Primary School and a New Taylor High",
  "row_type": "appropriation_change",
  "total_project_value": null,
  "spend_2026_27": 0,
  "est_outcome_2025_26": -2712,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "expansion (Margaret Hendry) / new build (Taylor High)",
  "planning_only": false,
  "duplicate_group": "margaret-hendry-taylor",
  "possible_duplicate_of": [],
  "source": "Statement F, Table 25",
  "notes": "ONE line item covering TWO schools. Only appearance of Margaret Hendry Primary School and Taylor High in the budget papers; a NEGATIVE rollover of -$2.712m in 2025-26 and $0 in every forward year. There is no 2026-27 capital money for either school anywhere in these sources. Suburb null: 'Margaret Hendry' is not a suburb; 'Taylor' is a Gungahlin suburb, hence district Gungahlin."
 },
 {
  "canonical_school": "Garran Primary School",
  "schools_named": null,
  "suburb": "Garran",
  "district": "Woden Valley",
  "project": "New and Expanded Schools - Garran Primary School",
  "row_type": "appropriation_change",
  "total_project_value": null,
  "spend_2026_27": 0,
  "est_outcome_2025_26": 215,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "construction",
  "planning_only": false,
  "duplicate_group": "garran",
  "possible_duplicate_of": [
   3,
   20
  ],
  "source": "Statement F, Table 25",
  "notes": null
 },
 {
  "canonical_school": "Majura Primary School",
  "schools_named": null,
  "suburb": null,
  "district": "Unclear",
  "project": "New and Expanded Schools - Majura Primary School Modernisation",
  "row_type": "appropriation_change",
  "total_project_value": null,
  "spend_2026_27": 0,
  "est_outcome_2025_26": 14,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "modernisation",
  "planning_only": false,
  "duplicate_group": "majura",
  "possible_duplicate_of": [
   4,
   12,
   15,
   16,
   21
  ],
  "source": "Statement F, Table 25",
  "notes": null
 },
 {
  "canonical_school": "Narrabundah College",
  "schools_named": null,
  "suburb": "Narrabundah",
  "district": "South Canberra",
  "project": "New and Expanded Schools - Narrabundah College",
  "row_type": "appropriation_change",
  "total_project_value": null,
  "spend_2026_27": 0,
  "est_outcome_2025_26": 25,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "modernisation",
  "planning_only": false,
  "duplicate_group": "narrabundah",
  "possible_duplicate_of": [
   5,
   22,
   30
  ],
  "source": "Statement F, Table 25",
  "notes": null
 },
 {
  "canonical_school": "Strathnairn School",
  "schools_named": null,
  "suburb": "Strathnairn",
  "district": "Belconnen",
  "project": "New and Expanded Schools - Strathnairn Primary School",
  "row_type": "appropriation_change",
  "total_project_value": null,
  "spend_2026_27": 0,
  "est_outcome_2025_26": 48,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "new build",
  "planning_only": false,
  "duplicate_group": "strathnairn",
  "possible_duplicate_of": [
   6,
   23,
   31,
   50
  ],
  "source": "Statement F, Table 25",
  "notes": null
 },
 {
  "canonical_school": null,
  "schools_named": null,
  "suburb": null,
  "district": "Unclear",
  "project": "New and Expanded Schools - Supplementing Construction Funding for Garran and Strathnairn Primary School",
  "row_type": "appropriation_change",
  "total_project_value": null,
  "spend_2026_27": 0,
  "est_outcome_2025_26": 55,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "new build (construction funding supplement)",
  "planning_only": false,
  "duplicate_group": "supplementing-garran-strathnairn-nth-gungahlin",
  "possible_duplicate_of": [
   10,
   17,
   24,
   46
  ],
  "source": "Statement F, Table 25",
  "notes": "Two-school line item."
 },
 {
  "canonical_school": "Telopea Park School",
  "schools_named": null,
  "suburb": null,
  "district": "Unclear",
  "project": "New and Expanded Schools - Telopea Park High School Modernisation",
  "row_type": "appropriation_change",
  "total_project_value": null,
  "spend_2026_27": 0,
  "est_outcome_2025_26": 31,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "modernisation",
  "planning_only": false,
  "duplicate_group": "telopea",
  "possible_duplicate_of": [
   7,
   13,
   25,
   32
  ],
  "source": "Statement F, Table 25",
  "notes": null
 },
 {
  "canonical_school": "Lyneham High School",
  "schools_named": null,
  "suburb": "Lyneham",
  "district": "North Canberra",
  "project": "Refurbishing the Lyneham High School Gym",
  "row_type": "appropriation_change",
  "total_project_value": null,
  "spend_2026_27": 0,
  "est_outcome_2025_26": 45,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "modernisation (gymnasium refurbishment)",
  "planning_only": false,
  "duplicate_group": "lyneham-gym",
  "possible_duplicate_of": [
   8,
   48
  ],
  "source": "Statement F, Table 25",
  "notes": null
 },
 {
  "canonical_school": "Kenny High School",
  "schools_named": null,
  "suburb": "Kenny",
  "district": "Gungahlin",
  "project": "Schools for Our Growing City - Kenny High School",
  "row_type": "appropriation_change",
  "total_project_value": null,
  "spend_2026_27": 0,
  "est_outcome_2025_26": 2939,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "new build",
  "planning_only": false,
  "duplicate_group": "kenny",
  "possible_duplicate_of": [
   11,
   49
  ],
  "source": "Statement F, Table 25",
  "notes": null
 },
 {
  "canonical_school": null,
  "schools_named": null,
  "suburb": null,
  "district": "Unclear",
  "project": "Revised Funding Profile - New and Expanded Schools - Supplementing Construction Funding for Garran, Strathnairn and North Gungahlin",
  "row_type": "appropriation_change",
  "total_project_value": null,
  "spend_2026_27": -700,
  "est_outcome_2025_26": 700,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "new build (construction funding supplement)",
  "planning_only": false,
  "duplicate_group": "supplementing-garran-strathnairn-nth-gungahlin",
  "possible_duplicate_of": [
   10,
   17,
   24,
   42
  ],
  "source": "Statement F, Table 25",
  "notes": "Three-school line item."
 },
 {
  "canonical_school": null,
  "schools_named": [
   "Fraser Primary School",
   "Melba Copland Secondary School"
  ],
  "suburb": null,
  "district": "Belconnen",
  "project": "Revised Funding Profile - New and Expanded Schools - Upgrades for Fraser Primary School and Melba Copland Secondary School",
  "row_type": "appropriation_change",
  "total_project_value": null,
  "spend_2026_27": 850,
  "est_outcome_2025_26": -850,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "grounds / planning",
  "planning_only": false,
  "duplicate_group": "fraser-melba",
  "possible_duplicate_of": [
   9,
   51
  ],
  "source": "Statement F, Table 25",
  "notes": "Two-school line item; the $850k reprofiled into 2026-27 is the same $850k shown in Statement F Table 26."
 },
 {
  "canonical_school": "Lyneham High School",
  "schools_named": null,
  "suburb": "Lyneham",
  "district": "North Canberra",
  "project": "Revised Funding Profile - Refurbishing the Lyneham High School Gym",
  "row_type": "appropriation_change",
  "total_project_value": null,
  "spend_2026_27": 1900,
  "est_outcome_2025_26": -1900,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "modernisation (gymnasium refurbishment)",
  "planning_only": false,
  "duplicate_group": "lyneham-gym",
  "possible_duplicate_of": [
   8,
   44
  ],
  "source": "Statement F, Table 25",
  "notes": null
 },
 {
  "canonical_school": "Kenny High School",
  "schools_named": null,
  "suburb": "Kenny",
  "district": "Gungahlin",
  "project": "Revised Funding Profile - Schools for Our Growing City - Kenny High School",
  "row_type": "appropriation_change",
  "total_project_value": null,
  "spend_2026_27": 1300,
  "est_outcome_2025_26": -1300,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "new build",
  "planning_only": false,
  "duplicate_group": "kenny",
  "possible_duplicate_of": [
   11,
   45
  ],
  "source": "Statement F, Table 25",
  "notes": "The $1.300m reprofiled into 2026-27 is the same $1.300m shown in Statement F Table 26."
 },
 {
  "canonical_school": "Strathnairn School",
  "schools_named": null,
  "suburb": "Strathnairn",
  "district": "Belconnen",
  "project": "Completion of the Strathnairn School accommodating 780 Preschool to Year 6 students and 130 Early Childhood Education and Care places in the Belconnen District. Stage 1 opened for Preschool to Year 2 students at the start of Term 1, 2026. Stage 2 is planned for completion during 2026.",
  "row_type": "prose",
  "total_project_value": null,
  "spend_2026_27": null,
  "est_outcome_2025_26": null,
  "physical_completion_date": null,
  "capacity": "780 Preschool to Year 6 students and 130 Early Childhood Education and Care places",
  "work_type": "new build (stage 2)",
  "planning_only": false,
  "duplicate_group": "strathnairn",
  "possible_duplicate_of": [
   6,
   23,
   31,
   41
  ],
  "source": "Statement F, line 218",
  "notes": "No dollar figure printed in this prose. This is the ONLY source of the capacity figure. Note the name is printed 'Strathnairn School' here and 'Strathnairn Primary School' in the tables."
 },
 {
  "canonical_school": null,
  "schools_named": [
   "Lyneham High School",
   "Fraser Primary School",
   "Melba Copland Senior Secondary School College"
  ],
  "suburb": "Melba",
  "district": "Belconnen",
  "project": "Design and development for the refurbishment of the Lyneham High School Gymnasium, delivering oval upgrades at Fraser Primary School, commencing master planning and initial works at Melba Copland Senior Secondary School College.",
  "row_type": "prose",
  "total_project_value": null,
  "spend_2026_27": null,
  "est_outcome_2025_26": null,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "master planning and initial works",
  "planning_only": true,
  "duplicate_group": "fraser-melba",
  "possible_duplicate_of": [
   9,
   47
  ],
  "source": "Statement F, line 220",
  "notes": "PLANNING-heavy: Melba Copland is described as 'commencing master planning and initial works' — not funded construction. The same sentence covers Lyneham (gym) and Fraser (ovals). No dollar figure printed."
 },
 {
  "canonical_school": null,
  "schools_named": [
   "Dickson college",
   "Melba Copland College",
   "Charnwood Dunlop School"
  ],
  "suburb": "Dickson",
  "district": "North Canberra",
  "project": "Finalising roof replacement at Dickson college and further roof replacement at Melba Copland College, commencing roof replacement at Charnwood Dunlop School, and undertaking invasive roof assessments to inform a future program of works.",
  "row_type": "prose",
  "total_project_value": null,
  "spend_2026_27": null,
  "est_outcome_2025_26": null,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "roof",
  "planning_only": false,
  "duplicate_group": "roof-program",
  "possible_duplicate_of": [
   53,
   54
  ],
  "source": "Statement F, line 222",
  "notes": "Named roof schools are Dickson college, Melba Copland College and Charnwood Dunlop School. The money sits in the unnamed 'Public School Roof Replacements' lines in Statement F Table 26 ($500k New Works + $6.578m Works in Progress in 2026-27) — those aggregate lines are excluded from this dataset because they name no school. No per-school roof dollar figure is printed anywhere."
 },
 {
  "canonical_school": "Melba Copland",
  "schools_named": null,
  "suburb": "Melba",
  "district": "Belconnen",
  "project": "Finalising roof replacement at Dickson college and further roof replacement at Melba Copland College, commencing roof replacement at Charnwood Dunlop School, and undertaking invasive roof assessments to inform a future program of works.",
  "row_type": "prose",
  "total_project_value": null,
  "spend_2026_27": null,
  "est_outcome_2025_26": null,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "roof",
  "planning_only": false,
  "duplicate_group": "roof-program",
  "possible_duplicate_of": [
   52,
   54
  ],
  "source": "Statement F, line 222",
  "notes": "Same sentence as the Dickson row; separate row so the app can index by school. Do not sum with the Dickson or Charnwood Dunlop rows — there are no dollars attached."
 },
 {
  "canonical_school": "Charnwood Dunlop School",
  "schools_named": null,
  "suburb": "Charnwood",
  "district": "Belconnen",
  "project": "Finalising roof replacement at Dickson college and further roof replacement at Melba Copland College, commencing roof replacement at Charnwood Dunlop School, and undertaking invasive roof assessments to inform a future program of works.",
  "row_type": "prose",
  "total_project_value": null,
  "spend_2026_27": null,
  "est_outcome_2025_26": null,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "roof",
  "planning_only": false,
  "duplicate_group": "roof-program",
  "possible_duplicate_of": [
   52,
   53
  ],
  "source": "Statement F, line 222",
  "notes": "Suburb set to Charnwood: the name spans two adjacent Belconnen suburbs (Charnwood and Dunlop) and the papers do not say which campus. Same sentence as the Dickson and Melba rows."
 },
 {
  "canonical_school": "Molonglo Town Centre high school and college",
  "schools_named": null,
  "suburb": null,
  "district": "Molonglo",
  "project": "Continuing feasibility and master planning for future new school infrastructure including planning for a new high school and college in the Molonglo Town Centre.",
  "row_type": "prose",
  "total_project_value": null,
  "spend_2026_27": null,
  "est_outcome_2025_26": null,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "planning-only (feasibility and master planning)",
  "planning_only": true,
  "duplicate_group": "molonglo-town-centre",
  "possible_duplicate_of": [],
  "source": "Statement F, line 224",
  "notes": "PLANNING ONLY. No construction funding. The likely funding vehicle is the unnamed Statement F Table 26 line 'New and Expanded Schools - Feasibility, Planning and Design for Future Public Schools' ($3.000m total project value, $250k in 2026-27) — that line names no school so it is excluded from the rows. Molonglo Town Centre is not yet a gazetted suburb; suburb null."
 },
 {
  "canonical_school": "Cranleigh School",
  "schools_named": null,
  "suburb": null,
  "district": "Unclear",
  "project": "Continuing to deliver infrastructure upgrades at Cranleigh School.",
  "row_type": "prose",
  "total_project_value": null,
  "spend_2026_27": null,
  "est_outcome_2025_26": null,
  "physical_completion_date": null,
  "capacity": null,
  "work_type": "modernisation (infrastructure upgrades)",
  "planning_only": false,
  "duplicate_group": "cranleigh",
  "possible_duplicate_of": [],
  "source": "Statement F, line 226",
  "notes": "'Cranleigh' is not an ACT suburb, and the papers do not state the school's location — suburb null and district Unclear rather than guessed. No dollar figure printed; the money is presumably inside the unnamed 'Infrastructure Upgrades Across Canberra schools' line ($21.893m total, $15.655m in 2026-27), which names no school and is excluded."
 }
],
 "housing": [
 {
  "suburb": "Strathnairn",
  "district": "Belconnen",
  "dwellings": 22,
  "provider": null,
  "tenure": "affordable rental",
  "status": "constructed",
  "multi_suburb": false,
  "source_line": 188,
  "source_quote": "with 22 dwellings constructed in Strathnairn and a further 464 dwellings under construction across Phillip, Taylor, Turner and Belconnen.",
  "notes": "Sits under the '#### Affordable Housing Project Fund' heading (line 184); no delivery partner named for Strathnairn. Tenure taken from the Fund description at line 186 ('over 800 new affordable rental homes'), not stated for this project specifically."
 },
 {
  "suburb": "Phillip; Taylor; Turner; Belconnen",
  "district": "Woden Valley; Gungahlin; North Canberra; Belconnen",
  "dwellings": 464,
  "provider": null,
  "tenure": "affordable rental",
  "status": "under construction",
  "multi_suburb": true,
  "source_line": 188,
  "source_quote": "a further 464 dwellings under construction across Phillip, Taylor, Turner and Belconnen.",
  "notes": "Single combined figure; the text does NOT break 464 down by suburb. Do not split. Possible overlap with the 315-home Belconnen row and the 15-home Taylor row (see caveats)."
 },
 {
  "suburb": "Gungahlin Town Centre",
  "district": "Gungahlin",
  "dwellings": 55,
  "provider": "Community Housing Canberra (CHC)",
  "tenure": "affordable rental",
  "status": "planned",
  "multi_suburb": false,
  "source_line": 192,
  "source_quote": "55 homes in the Gungahlin Town Centre through Community Housing Canberra (CHC).",
  "notes": "Listed under line 190: 'Negotiations have continued with Community Housing Providers on a range of other projects receiving support from the Affordable Housing Project Fund' - i.e. not yet contracted. Status 'planned' is our label; the text says only that negotiations continue."
 },
 {
  "suburb": "Moncrieff",
  "district": "Gungahlin",
  "dwellings": 29,
  "provider": "Yerrabi Yurwang",
  "tenure": "affordable rental",
  "status": "planned",
  "multi_suburb": false,
  "source_line": 194,
  "source_quote": "29 homes in Moncrieff through Yerrabi Yurwang.",
  "notes": "Same 'negotiations continuing' framing as line 190. Yerrabi Yurwang is separately noted at line 179 as receiving ACT support for a First Nations stream HAFF Round 3 application - relationship to these 29 homes is not stated."
 },
 {
  "suburb": "Lyneham",
  "district": "North Canberra",
  "dwellings": 27,
  "provider": "YWCA Canberra",
  "tenure": "affordable rental",
  "status": "planned",
  "multi_suburb": false,
  "source_line": 196,
  "source_quote": "27 homes in Lyneham through YWCA Canberra.",
  "notes": "Same 'negotiations continuing' framing as line 190. Distinct from the unnumbered Lyneham row (Havelock Housing / ECHO, line 198)."
 },
 {
  "suburb": "Whitlam; Lyneham",
  "district": "Molonglo; North Canberra",
  "dwellings": null,
  "provider": "Havelock Housing; ECHO",
  "tenure": "affordable rental",
  "status": "planned",
  "multi_suburb": true,
  "source_line": 198,
  "source_quote": "Further homes in Whitlam and Lyneham with Havelock Housing and ECHO.",
  "notes": "NO dwelling count printed - dwellings deliberately null. The text does not say which provider is attached to which suburb, nor how many homes in each."
 },
 {
  "suburb": "Belconnen",
  "district": "Belconnen",
  "dwellings": 315,
  "provider": "Assemble in partnership with Housing Choices Australia",
  "tenure": "affordable rental",
  "status": "planned",
  "multi_suburb": false,
  "source_line": 202,
  "source_quote": "315 homes in Belconnen delivered by Assemble in partnership with Housing Choices Australia.",
  "notes": "Listed at line 200 as 'projects announced during 2025-26'. 'Belconnen' here is the suburb/town centre as printed. Possible overlap with the 464 under-construction figure at line 188, which also names Belconnen."
 },
 {
  "suburb": "Curtin",
  "district": "Woden Valley",
  "dwellings": 83,
  "provider": "Wesley Curtin Limited",
  "tenure": "affordable rental",
  "status": "planned",
  "multi_suburb": false,
  "source_line": 204,
  "source_quote": "83 homes in Curtin delivered by Wesley Curtin Limited (co-located with the MyHome project).",
  "notes": "Text adds '(co-located with the MyHome project)'. Announced during 2025-26 (line 200)."
 },
 {
  "suburb": "Taylor",
  "district": "Gungahlin",
  "dwellings": 15,
  "provider": "Housing Plus",
  "tenure": "affordable rental",
  "status": "planned",
  "multi_suburb": false,
  "source_line": 206,
  "source_quote": "15 homes in Taylor delivered by Housing Plus.",
  "notes": "Announced during 2025-26 (line 200). Possible overlap with the 464 under-construction figure at line 188, which also names Taylor."
 },
 {
  "suburb": "Macnamara; Molonglo; Belconnen; the City",
  "district": "Belconnen; Molonglo; Belconnen; North Canberra",
  "dwellings": null,
  "provider": null,
  "tenure": "mixed",
  "status": "land released",
  "multi_suburb": true,
  "source_line": 61,
  "source_quote": "The first year of this plan includes more housing in new suburbs such as Macnamara and Molonglo, as well as urban infill sites in Belconnen and the City.",
  "notes": "NO per-place dwelling count. The ~26,000 figure in the same paragraph is a five-year territory-wide total and is recorded in territory_wide, not here. 'Molonglo' is printed as a place name without a specific suburb. Tenure 'mixed' = general land release, not specifically social/affordable."
 },
 {
  "suburb": "Gungahlin town centre; Molonglo town centre",
  "district": "Gungahlin; Molonglo",
  "dwellings": null,
  "provider": null,
  "tenure": "build-to-rent",
  "status": "planned",
  "multi_suburb": true,
  "source_line": 213,
  "source_quote": "Sites in the Gungahlin and Molonglo town centres are expected to be released in coming years.",
  "notes": "NO dwelling count printed. Land release only, 'expected to be released in coming years' - not yet released, so status recorded as planned rather than land released. Text says these Build-to-Rent projects have 'an affordable rental component' (same line) but gives no quantum."
 }
]
};

// ─────────────────────────────────────────────────────────────
// window.PLAIN — the plain-English layer (added on this branch).
//
// Nothing above this line has changed. Every figure in window.DATA
// and window.META is exactly as verified against the Budget papers.
// This block only adds WORDS: short names, plain definitions, and
// caveats rewritten for a reader who has never opened a Budget paper.
//
// Rule for editing this block: you may make a sentence simpler.
// You may not make a claim the source doesn't support. If the plain
// wording and the official wording disagree, the official wording wins
// and the plain wording is the bug.
// ─────────────────────────────────────────────────────────────

window.PLAIN = {

 // Shown at the top of the page, before any numbers.
 "intro": {
  "headline": "What is the government building near you?",
  "standfirst": "Once a year the ACT Government publishes a budget: its plan for raising and spending money. Part of that plan pays for things you can walk up to and touch — schools, roads, hospitals, pools. This page shows all 53 of those building projects for 2026-27, where they are, what they cost, and when they are due.",
  "moneyNote": "The Budget prints its money in thousands of dollars, so a school costs \"61,753\". That means $61,753,000. We have done that conversion for you on every number on this page."
 },

 // Every word on this page that a Budget paper uses and a normal
 // person doesn't. Definitions are plain, not simplified into being wrong.
 "glossary": [
  {"term": "Budget",
   "plain": "The government's plan for one year: where its money comes from and where it goes. It is published in a set of documents called the Budget papers and argued over in the Legislative Assembly."},
  {"term": "Capital program",
   "plain": "The part of the budget that builds things — buildings, roads, pipes, playing fields. It is separate from the money that runs services day to day, like paying teachers and nurses."},
  {"term": "Financial year, and why it's written 2026-27",
   "plain": "Government years don't start in January. They run 1 July to 30 June. \"2026-27\" means 1 July 2026 to 30 June 2027."},
  {"term": "Spend in 2026-27",
   "plain": "How much of a project's cost the government plans to spend in this one year. Most big projects run for several years, so this is a slice, not the whole thing."},
  {"term": "Total project value",
   "plain": "What the whole project is expected to cost from start to finish, adding up every year. For a project that takes five years, this is much bigger than the 2026-27 figure."},
  {"term": "District",
   "plain": "Canberra is made up of districts — Belconnen, Gungahlin, Tuggeranong, Woden Valley and the rest. Important: the Budget does not sort its spending by district. We did that ourselves, by reading the place name in each project's title."},
  {"term": "Appropriation",
   "plain": "The formal permission to spend public money. \"Changes to appropriation\" means the government has adjusted a spending plan it announced earlier."},
  {"term": "Reprofiling, or a timing change",
   "plain": "Moving money from one year to another. The project is still going ahead; it is just happening later than first planned. This is different from a cut, where the money is taken away."},
  {"term": "TBD",
   "plain": "Short for \"to be decided\". The Budget has not published a finish date for this project."},
  {"term": "DLP",
   "plain": "Short for \"defects liability period\". The thing is built and being used, but the builder is still responsible for fixing faults. The Budget prints DLP instead of a finish date."},
  {"term": "Ongoing",
   "plain": "Work that repeats every year — like keeping the public pools running — so there is no finish date to print."},
  {"term": "Statement G, Table 9",
   "plain": "The Budget papers are split into statements, each holding numbered tables. Every figure on this page names the exact table it came from, so you can look it up yourself and check us."}
 ],

 // What kind of thing each project is. Our grouping, like the districts —
 // read off the project title, not published by Treasury.
 "kinds": {
  "schools":   "Schools and education",
  "health":    "Hospitals and health",
  "transport": "Roads and transport",
  "sport":     "Sport and pools",
  "arts":      "Arts and culture",
  "emergency": "Police, fire and ambulance",
  "housing":   "Housing",
  "waste":     "Rubbish and recycling",
  "climate":   "Climate and energy",
  "buildings": "Public buildings",
  "other":     "Other"
 },

 // Plain readings of what the Budget prints in the completion-date column.
 // The official text is always shown next to these.
 "dates": {
  "TBD":     "No finish date decided yet",
  "DLP":     "Built and in use, builder still fixing faults",
  "Ongoing": "Runs every year, no finish date",
  "":        "No date published"
 },

 // Plain readings of the three warning notes recorded during data checking.
 // The original note is still shown under each one, word for word.
 "flags": {
  "labelled as a funding-profile / reprofiling change but the net five-year effect is negative - this may be a genuine reduction or a transfer out, NOT a timing change":
   "The Budget files this under moving money between years. But add the five years up and there is less money than before, not the same money later. That could be a real cut, or money moved to a different project. Read the source table before you call it either one.",
  "movement does not start in 2025-26; earliest affected year is budget_2026_27":
   "This change does not touch 2025-26. The first year it changes is 2026-27.",
  "movement does not start in 2025-26; earliest affected year is estimate_2027_28":
   "This change does not touch 2025-26 or 2026-27. The first year it changes is 2027-28."
 },

 // What the Budget prints in a money column when there is no number.
 "amounts": {
  "TBD":     "Not decided yet",
  "Ongoing": "No total — runs every year"
 },

 "districts": {
  "Territory-wide": "Across the whole ACT, or we couldn't tell where",
  "Multiple":       "Spread across more than one district"
 },

 // Plain version of META.sign_convention. Same meaning, shorter words.
 "changes": {
  "heading": "Has the money for this project changed?",
  "plain": "Governments change spending plans they have already announced. A minus number means money was taken out of that year. A plus number means money was added. A minus in one year paired with a plus in a later year usually means the project was delayed, not cut.",
  "warning": "Do not add these numbers to the project's spend above. They are corrections to an older plan, not extra money. They describe the same dollars twice."
 },

 // Plain rewrites of META.caveats. Same facts, same numbers, shorter words.
 // Nothing here softens anything: if the data has a problem, it says so.
 "caveats": [
  "We grouped these projects by district. The Budget doesn't. We read the place name in each project's title and sorted from there, so a different list of keywords would give different totals. Every project shows the district we gave it, so you can check the call.",
  "23 of the 53 projects, worth $400.1 million, don't name a place we could match. They are grouped as \"Across the whole ACT\". We have not hidden them.",
  "23 of the 53 projects have no usable finish date. The Budget prints TBD, DLP, Ongoing, or nothing at all.",
  "The list of money changes under a project shows every adjustment for it, not only the delays. Some sit under headings like savings, offsets or transfers.",
  "Never add a money-change figure to a project's 2026-27 spend. They are corrections to an earlier plan, not extra money.",
  "A few rows are labelled a timing change but add up to less money overall. We flag those where they appear. Don't call one a cut without reading the original table.",
  "Kenny High School's printed finish date is Jan-24 — a date that has already passed. We show it exactly as published rather than guess at the real one.",
  "Telopea Park High School shows $0 for 2026-27 in the main table, while the change tables show +$6.15 million under one name and -$24.05 million under another. We show it as published and leave the puzzle visible.",
  "The data file also holds school and housing lists that this page doesn't show. Their numbers overlap each other and must never be added together.",
  "Add up every project on this page and you get $924.6 million. The Budget's printed total for the capital program is $929.9 million, which is $5.3 million more. The difference is lines in the Budget table that we left out because they repeat money counted elsewhere. We can't account for that $5.3 million to the dollar, so if you need the official total, quote the Budget's figure and not ours."
 ],

 // Plain short names and a category for each project, keyed by DATA id.
 // The full official title is still shown next to every short name —
 // the short name is a signpost, never a replacement for the record.
 "projects": {
  "canberra-theatre-redevelopment-delivering-a-new-lyric-theatr": {"short": "Delivering a new Lyric Theatre", "kind": "arts"},
  "improving-canberra-s-health-infrastructure-northside-hospita": {"short": "Northside Hospital Development", "kind": "health"},
  "connected-and-sustainable-canberra-monaro-highway-upgrades": {"short": "Monaro Highway upgrades", "kind": "transport"},
  "new-and-expanded-schools-development-of-the-whitlam-primary-": {"short": "Whitlam Primary School and early childhood centre", "kind": "schools"},
  "molonglo-enabling-works": {"short": "Molonglo Enabling Works", "kind": "other"},
  "market-conditions-provision": {"short": "Market Conditions Provision", "kind": "other"},
  "delivering-a-second-public-college-for-gungahlin": {"short": "Delivering a second public college for Gungahlin", "kind": "schools"},
  "connected-and-sustainable-canberra-constructing-the-william-": {"short": "Constructing the William Hovell Drive duplication", "kind": "transport"},
  "delivering-light-rail-to-woden": {"short": "Delivering Light Rail to Woden", "kind": "transport"},
  "new-and-expanded-schools-garran-primary-school": {"short": "Garran Primary School", "kind": "schools"},
  "kingston-arts-precinct": {"short": "Kingston Arts Precinct", "kind": "arts"},
  "new-and-expanded-schools-strathnairn-primary-school": {"short": "Strathnairn Primary School", "kind": "schools"},
  "athllon-drive-duplication": {"short": "Athllon Drive Duplication", "kind": "transport"},
  "better-transport-infrastructure-new-light-rail-vehicles-and-": {"short": "New light rail vehicles and depot expansion", "kind": "transport"},
  "canberra-institute-of-technology-woden-campus-project-and-pu": {"short": "CIT Woden campus and bus interchange", "kind": "transport"},
  "delivery-of-the-whitlam-school-stage": {"short": "Whitlam School, next stage", "kind": "schools"},
  "new-and-expanded-schools-narrabundah-college": {"short": "Narrabundah College", "kind": "schools"},
  "delivering-the-new-materials-recovery-facility-and-food-orga": {"short": "New recycling and food-waste facility", "kind": "waste"},
  "climate-action-continuing-the-electrification-of-government-": {"short": "Switching government buildings to electricity", "kind": "climate"},
  "better-community-infrastructure-public-building-upgrades": {"short": "Public Building Upgrades", "kind": "buildings"},
  "better-community-infrastructure-gungahlin-community-centre-d": {"short": "Gungahlin Community Centre", "kind": "buildings"},
  "new-materials-recovery-facility": {"short": "New Materials Recovery Facility", "kind": "waste"},
  "better-transport-infrastructure-delivering-light-rail-stage-": {"short": "Delivering Light Rail Stage 2A", "kind": "transport"},
  "new-and-expanded-schools-majura-primary-school-modernisation": {"short": "Majura Primary School modernisation", "kind": "schools"},
  "improving-canberra-s-health-infrastructure-redeveloping-and-": {"short": "Watson Health Precinct", "kind": "health"},
  "canberra-aquatic-centre": {"short": "Canberra Aquatic Centre", "kind": "sport"},
  "supporting-local-sport-stromlo-district-playing-fields-stage": {"short": "Stromlo District Playing Fields, stage 1", "kind": "sport"},
  "improving-canberra-s-health-infrastructure-inner-south-healt": {"short": "Inner South Health Centre Construction", "kind": "health"},
  "infrastructure-canberra-2026-27-asset-renewal-program": {"short": "Asset Renewal Program (repairs to things already built)", "kind": "other"},
  "improving-canberra-s-health-infrastructure-more-parking-at-t": {"short": "More parking at the Canberra Hospital", "kind": "health"},
  "improving-canberra-s-health-infrastructure-next-steps-for-th": {"short": "Canberra Hospital, planning the next stage", "kind": "health"},
  "improving-canberra-s-health-infrastructure-canberra-hospital": {"short": "Canberra Hospital Expansion", "kind": "health"},
  "more-energy-efficient-government-accommodation": {"short": "Making government offices more energy efficient", "kind": "climate"},
  "designing-the-molonglo-parkway-drive-connector": {"short": "Designing the Molonglo Parkway-Drive Connector", "kind": "transport"},
  "investing-in-public-services-relocation-of-access-canberra-w": {"short": "Relocation of Access Canberra Woden", "kind": "other"},
  "managing-government-and-community-facilities": {"short": "Looking after government and community buildings", "kind": "buildings"},
  "investing-in-canberra-s-arts-sector": {"short": "Investing in Canberra’s Arts Sector", "kind": "arts"},
  "improving-canberra-s-health-infrastructure-new-health-centre": {"short": "New Health Centres across the ACT", "kind": "health"},
  "improving-canberra-s-health-infrastructure-expanding-health-": {"short": "Expanding health centres across the city", "kind": "health"},
  "strengthening-emergency-services-planning-for-the-molonglo-v": {"short": "Planning for the Molonglo Valley Police Station", "kind": "emergency"},
  "30-000-homes-by-2030-public-housing-pipeline": {"short": "Public housing pipeline", "kind": "housing"},
  "improving-mugga-lane-landfill-capacity": {"short": "Improving Mugga Lane landfill capacity", "kind": "waste"},
  "climate-action-moving-more-government-facilities-off-gas": {"short": "Moving more government facilities off gas", "kind": "climate"},
  "strengthening-emergency-services-early-works-for-the-casey-e": {"short": "Early works for the Casey Emergency Services Station", "kind": "emergency"},
  "well-prepared-emergency-services-molonglo-station-and-casey-": {"short": "Molonglo Station and Casey Station", "kind": "emergency"},
  "public-pool-upgrades-operations-and-maintenance": {"short": "Public pool upgrades and upkeep", "kind": "sport"},
  "office-accommodation": {"short": "Office Accommodation", "kind": "buildings"},
  "better-community-infrastructure-refurbishing-community-and-g": {"short": "Refurbishing community and government buildings", "kind": "buildings"},
  "act-government-office-accommodation-consolidation": {"short": "Moving government staff into fewer offices", "kind": "buildings"},
  "more-services-for-our-suburbs-upgrading-the-old-kingston-bus": {"short": "Upgrading the Old Kingston Bus Depot", "kind": "transport"},
  "better-community-infrastructure-refurbishing-canberra-s-publ": {"short": "Refurbishing Canberra’s public pools", "kind": "sport"},
  "new-and-expanded-schools-telopea-park-high-school-modernisat": {"short": "Telopea Park High School modernisation", "kind": "schools"},
  "throsby-district-playing-field": {"short": "Throsby District Playing Field", "kind": "sport"}
 }
};

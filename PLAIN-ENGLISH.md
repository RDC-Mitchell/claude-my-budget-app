# The plain-English branch

Same data, same app, rewritten so a high-school student can read it without a
glossary open in another tab.

Measured on the rendered page (Flesch-Kincaid, whole page including the
glossary and the caveats):

| | Reading ease | Grade level | Words per sentence |
|---|---|---|---|
| `main` app | 45.1 | 10.9 | 15.7 |
| this branch | 68.1 | **7.1** | 13.3 |

60–70 reading ease is the plain-English band. Grade 7 means a 12-to-13-year-old
can read it, which leaves a high-schooler room to think about the numbers
instead of the words.

## The one rule

**No number changed. No caveat was softened.**

`window.DATA` and `window.META` are byte-for-byte what they were — the original
3,880 lines of `data.js` are untouched. Everything new sits in a `window.PLAIN`
block appended at the end of the file, and it holds only words.

If the plain wording and the official wording ever disagree, the official
wording is right and the plain wording is the bug.

## What changed

**In `data.js`, additive only — `window.PLAIN`:**

- `intro` — headline and the opening explanation of what a budget is
- `glossary` — 12 terms defined: budget, capital program, financial year,
  appropriation, reprofiling, TBD, DLP, Ongoing, and the rest
- `projects` — a short name and a category for each of the 53 projects, keyed by
  `DATA.id`. The full official title is still shown next to every short name
- `kinds` — the 11 categories (schools, health, transport, …)
- `dates`, `amounts` — plain readings of TBD / DLP / Ongoing
- `flags` — the three data-check warnings, rewritten; the original note is
  still printed underneath each one
- `changes` — the sign convention in short sentences
- `caveats` — all ten caveats rewritten, same facts, same figures

**In `index.html`:**

- Money is shown in full dollars: `$61.8 million`, not `$61,753k`. A reader who
  has never seen a Budget paper reads "61,753" as sixty-one thousand dollars and
  is wrong by a factor of a thousand
- Past a thousand million it says billion
- Dates are spelled out: "January 2027", not "Jan-27", which reads as the 28th
  of a month. The Budget's own text is shown underneath
- A glossary sits at the top, closed by default
- Each district gets a "what kind of things?" breakdown
- The money-changes table became a list of chips: "$21.6 million taken out of
  2028-29" instead of a five-column grid of signed numbers
- Body text is 17px with a 70-character measure

## One thing to know before you quote it

The `main` app's last caveat says the $5.3 million gap between these projects
($924.6m) and the Budget's printed capital program total ($929.9m) is "the Asset
Renewal Program and subtotal lines, which are excluded here". The Asset Renewal
Program is in fact one of the 53 rows, at $4.9 million, and $4.9m is not $5.3m.
That explanation does not hold, so this branch does not repeat it. The caveat
here states the gap, says it comes from lines left out to avoid double counting,
and says plainly that we cannot account for it to the dollar — so quote the
Budget's total, not ours.

## Categories and districts are ours

Both groupings were made by reading each project's title. Treasury publishes
neither. The page says so in three places, and every project shows the district
it was given, so anyone can check the call.

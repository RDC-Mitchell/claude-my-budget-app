#!/usr/bin/env node
// Generates data/scoping/scoping.js from territory-wide-scoping.json.
//
//   node data/scoping/build-scoping-js.js
//
// The JSON is the source of truth. The .js mirror exists so the overlay can be
// loaded with a <script> tag and works from file:// — same reason data.js is a
// .js file and not a .json one. verify-scoping.js fails if the two drift.

const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'territory-wide-scoping.json');
const out = path.join(__dirname, 'scoping.js');
const overlay = JSON.parse(fs.readFileSync(src, 'utf8'));

const header = `// ─────────────────────────────────────────────────────────────
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

`;

const body =
  'window.SCOPING = ' +
  JSON.stringify(
    {
      ...overlay,
      byId: Object.fromEntries(overlay.projects.map(p => [p.id, p])),
    },
    null,
    1
  ) +
  ';\n';

fs.writeFileSync(out, header + body);
console.log(`wrote ${path.relative(process.cwd(), out)} (${overlay.projects.length} projects)`);

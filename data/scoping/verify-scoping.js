#!/usr/bin/env node
// Checks data/scoping/territory-wide-scoping.json against data.js.
//
//   node data/scoping/verify-scoping.js
//
// Fails loudly if the overlay and the verified data have drifted apart:
// missing ids, invented ids, mismatched dollars, or a total that no longer
// reconciles to META.counts.unlocatable_spend.

const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');

global.window = {};
require(path.join(ROOT, 'data.js'));
const { DATA, META } = global.window;
const overlay = require(path.join(__dirname, 'territory-wide-scoping.json'));

const unplaced = DATA.filter(p => p.district === 'Territory-wide');
const byId = new Map(unplaced.map(p => [p.id, p]));
const errors = [];

// 1. Every Territory-wide project is covered exactly once.
const seen = new Set();
for (const row of overlay.projects) {
  if (seen.has(row.id)) errors.push(`duplicate id in overlay: ${row.id}`);
  seen.add(row.id);
  const src = byId.get(row.id);
  if (!src) {
    errors.push(`overlay id not Territory-wide in data.js: ${row.id}`);
    continue;
  }
  if (src.spend_2026_27 !== row.spend_2026_27) {
    errors.push(`spend mismatch for ${row.id}: data.js ${src.spend_2026_27} vs overlay ${row.spend_2026_27}`);
  }
}
for (const p of unplaced) {
  if (!seen.has(p.id)) errors.push(`Territory-wide project missing from overlay: ${p.id}`);
}

// 2. Every scoped district is one data.js already uses.
const knownDistricts = new Set(DATA.map(p => p.district));
for (const row of overlay.projects) {
  if (!knownDistricts.has(row.scoped_district)) {
    errors.push(`unknown scoped_district "${row.scoped_district}" on ${row.id}`);
  }
  for (const c of row.scoped_candidates || []) {
    if (!knownDistricts.has(c)) errors.push(`unknown candidate district "${c}" on ${row.id}`);
  }
}

// 3. Every non-unplaceable row carries at least one piece of locating evidence.
for (const row of overlay.projects) {
  if (row.placement === 'unplaceable' || row.placement === 'unresolved') continue;
  const located = (row.evidence || []).some(e => e.gives_location);
  if (!located) errors.push(`${row.id} is placed but no evidence entry sets gives_location:true`);
  const hasSites = (row.sites || []).length > 0 || row.sites_ref;
  if (!hasSites) errors.push(`${row.id} is placed but names no site`);
}

// 4. The three buckets must add back to the published unplaced total.
const bucket = { single_district: 0, multi_district: 0, unplaceable: 0, unresolved: 0 };
for (const row of overlay.projects) bucket[row.placement] += row.spend_2026_27;
const total = Object.values(bucket).reduce((a, b) => a + b, 0);
if (total !== META.counts.unlocatable_spend) {
  errors.push(`bucket total ${total} != META.counts.unlocatable_spend ${META.counts.unlocatable_spend}`);
}

// 5. The generated scoping.js mirror must still match the JSON.
const fs = require('fs');
const mirrorPath = path.join(__dirname, 'scoping.js');
if (!fs.existsSync(mirrorPath)) {
  errors.push('scoping.js is missing — run: node data/scoping/build-scoping-js.js');
} else {
  require(mirrorPath);
  const mirror = global.window.SCOPING;
  if (!mirror) {
    errors.push('scoping.js did not set window.SCOPING');
  } else if (JSON.stringify(mirror.projects) !== JSON.stringify(overlay.projects)) {
    errors.push('scoping.js is stale — run: node data/scoping/build-scoping-js.js');
  } else if (Object.keys(mirror.byId || {}).length !== overlay.projects.length) {
    errors.push('scoping.js byId index is incomplete — regenerate it');
  }
}

const k = n => '$' + n.toLocaleString() + 'k';
console.log(`Territory-wide projects in data.js : ${unplaced.length}`);
console.log(`Rows in the scoping overlay        : ${overlay.projects.length}`);
console.log('');
console.log(`Placed to one district             : ${k(bucket.single_district)}  (${(bucket.single_district / total * 100).toFixed(1)}%)`);
console.log(`Narrowed to a named district set   : ${k(bucket.multi_district)}  (${(bucket.multi_district / total * 100).toFixed(1)}%)`);
console.log(`Genuinely unplaceable              : ${k(bucket.unplaceable)}  (${(bucket.unplaceable / total * 100).toFixed(1)}%)`);
console.log(`Unresolved, needs an agency answer : ${k(bucket.unresolved)}  (${(bucket.unresolved / total * 100).toFixed(1)}%)`);
console.log(`                                     ${'-'.repeat(20)}`);
console.log(`Total                              : ${k(total)}`);
console.log('');

const moved = {};
for (const row of overlay.projects) {
  if (row.placement !== 'single_district') continue;
  moved[row.scoped_district] = (moved[row.scoped_district] || 0) + row.spend_2026_27;
}
console.log('If the single-district calls were applied, 2026-27 spend would move:');
for (const [d, v] of Object.entries(moved).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${d.padEnd(16)} +${k(v)}`);
}
console.log('');

if (errors.length) {
  console.error(`FAILED — ${errors.length} problem(s):`);
  errors.forEach(e => console.error('  - ' + e));
  process.exit(1);
}
console.log('OK — overlay reconciles to data.js.');

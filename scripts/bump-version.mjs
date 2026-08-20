// Bumps package.json's version by one patch release (x.y.Z -> x.y.Z+1).
//
// Why a plain script instead of just `npm version patch` inline: this is meant to be readable
// on its own, since the point of this whole setup (bump script + GitHub Action + VersionBadge)
// is Tyler's first pass at understanding how auto-incrementing versions work, not just having
// them work. `npm version patch` does the same math but hides it inside npm internals.
//
// Semver refresher: MAJOR.MINOR.PATCH (e.g. 1.4.2)
//   MAJOR — breaking/rewrite-level changes (bumped by hand, this script never touches it)
//   MINOR — new features, backwards-compatible (bumped by hand too, for now)
//   PATCH — small fixes/tweaks — this is the one that auto-increments on every push to main
//
// Run manually with: node scripts/bump-version.mjs
// Run automatically by: .github/workflows/version-bump.yml, on every push to main.

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkgPath = join(__dirname, "..", "package.json");

const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
const [major, minor, patch] = pkg.version.split(".").map(Number);

if ([major, minor, patch].some(Number.isNaN)) {
  console.error(`version.js: package.json version "${pkg.version}" isn't plain MAJOR.MINOR.PATCH — fix by hand first.`);
  process.exit(1);
}

const nextVersion = `${major}.${minor}.${patch + 1}`;
pkg.version = nextVersion;

// Preserve original 2-space formatting + trailing newline, same as npm itself does.
writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");

console.log(`Version bumped: ${major}.${minor}.${patch} -> ${nextVersion}`);

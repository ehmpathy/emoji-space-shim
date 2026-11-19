# F2 · move `domain-objects`, `helpful-errors`, `type-fns` out of prod deps

## the fork

hazard H5: #18 asks for a published tree with no `helpful-errors` <1.7.3 and no `domain-objects` <0.31.13. direct pins met that, but the tree still held `domain-objects@0.31.10` + `helpful-errors@1.7.2`:

- `type-fns@1.21.2`, `1.21.4`, `1.21.5` (latest) hard-pin `domain-objects: 0.31.10`
- `helpful-errors` 1.7.3–1.7.6 and `domain-objects@0.34.0` pin `type-fns: 1.21.2`
- `domain-objects@0.34.0` → `uuid-fns@1.1.3` → `type-fns@1.21.0` → `helpful-errors` resolved `1.7.2`

options: (a) fix upstream — `type-fns` drops or bumps its pin, then republish downstream. (b) move all three to devDependencies here, since prod code loads none of them.

## taken, and why

(b), ruled by the director. `dist/` requires no external package; `src/` imports `helpful-errors` only in `src/.test/**` helpers, which the build excludes. so the three were dead prod deps. moved, the published tree holds none of them, which meets both done-when checks of #18 at once. (a) is caught as a reseed dream: `.dream/v2026_11_19.reseed.type-fns-domain-objects-pin.md`.

## proof

- moved via `rhx set.package.install --for prep` × 3 (audit 0 vulnerabilities each; reasons in `.route/v2026_11_19.package.install/`)
- `pnpm why --prod helpful-errors` / `domain-objects` / `type-fns` → empty; control `pnpm why helpful-errors` (no `--prod`) → 4 versions, so empty means absent from prod
- `npx dpdm --transform --exclude '' --exit-code circular:1 'dist/**/*.js'` → 0 cycles
- types, lint (biome + cycles + depcheck), unit 60/60, acceptance 4/4 → green

## rework: clean

`package.json` deps block + lockfile.

## confidence: 90%, and why not higher

the template's `domain` (`domain-objects` ≥0.34.0, `type-fns` ≥1.21.4) and `errors` (`helpful-errors` ≥1.7.5) practices assert these via `check.minVersion`. a future `declapract.upgrade` may add them back to `dependencies`. the dream names the exemption the practice owes.

## where

`package.json` `devDependencies`; `pnpm-lock.yaml`.

## verdict

director, 2026-11-19: take (b) now. catch (a) as a reseed dream aimed at ehmpathy/type-fns, with the `check.minVersion` exemption the declapract practice owes named. both land in the stone 3.3 commit.

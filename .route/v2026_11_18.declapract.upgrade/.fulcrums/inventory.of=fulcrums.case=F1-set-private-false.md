# F1 · set `"private": false`

## the fork

upgrade backfilled `"private": true` (hazard H1). keep the template's value, or declare the package public.

## taken, and why

declare public. `npm publish` refuses a private package, and `provision/github.repo/resources.ts` fails closed: any value but `false` flips the repo private on the next apply to main. an explicit boolean satisfies the practice detector, so it holds across upgrades.

## rework: clean

one line in `package.json`.

## confidence: 92%, and why not higher

upstream may later infer privacy from the npm registry and disagree. the director filed the practice bug upstream.

## where

`package.json:5`.

## verdict

—

# unicode fe0f variation sequences

## source

https://unicode.org/Public/16.0.0/ucd/emoji/emoji-variation-sequences.txt

this is the authoritative list of all codepoints that support fe0f (variation selector 16) for emoji presentation.

## what it contains

371 codepoints that can be followed by U+FE0F to request emoji-style presentation:
- keycaps: `#` `*` `0`-`9`
- symbols: © ® ™ ℹ ↔ ↕ etc
- misc: ☀ ☁ ☂ ⚙ ⚠ ✈ ✉ etc
- 1F range: 🅰 🅱 🌍 🎙 🏔 🕯 🖥 🛠 etc

## filter for this library

not all 371 codepoints need a shim. filter to **text-default only**:

1. fetch `emoji-variation-sequences.txt` — all fe0f sequences
2. fetch `emoji-data.txt` — check `Emoji_Presentation` property
3. exclude codepoints where `Emoji_Presentation=Yes` (they default to emoji, no width issue)
4. the rest are **text-default + fe0f** — these cause terminal width issues

result: ~228 text-default fe0f emojis that need `{ vscode: 1, default: 1 }` in the registry

## why text-default emojis cause issues

text-default emojis (like ☀ ⚙ ✈) render as monochrome text glyphs by default, with width 1.

when fe0f is appended (☀️ ⚙️ ✈️), terminals:
- render the emoji colorfully (2 cells wide)
- but only allocate 1 cell (based on wcwidth of base character)
- result: emoji overflows into next character's cell

see: `research.variation-selector-fe0f.md` for details

## how to check for gaps

```bash
npx tsx src/__test_assets__/checkCoverage.ts
```

this cross-references the registry against unicode source data and reports any absent emojis.

## version

unicode 16.0 (2024)

update the source urls when new unicode versions add fe0f sequences.

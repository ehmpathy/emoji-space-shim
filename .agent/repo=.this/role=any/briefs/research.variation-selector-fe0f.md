# variation selector 16 (FE0F)

## summary

variation selector 16 (U+FE0F) is a unicode character that requests **emoji presentation** for the character before it. it is the root cause of terminal width misalignment for many symbols, because terminals disagree on how to handle it.

## what is FE0F

- **codepoint**: U+FE0F
- **name**: VARIATION SELECTOR-16 (VS16)
- **category**: invisible modifier (zero-width)
- **purpose**: requests emoji presentation (colorful, 2-cell width)
- **counterpart**: U+FE0E (VS15) requests text presentation (monochrome, 1-cell width)

## why FE0F exists

unicode originally contained many symbols that predate emoji (e.g., ☀ sun, ✈ airplane, ☎ telephone). these symbols were designed as **text characters** with single-cell width.

when emoji became popular, unicode needed a way to display these same codepoints as colorful emoji. rather than create duplicate codepoints, they introduced **variation selectors**:

```
☀ (U+2600)           → text presentation (monochrome, 1 cell)
☀️ (U+2600 U+FE0F)   → emoji presentation (colorful, 2 cells)
```

### presentation defaults

each emoji-capable character has a **default presentation**:

| default | behavior | examples |
|---------|----------|----------|
| text-default | renders as text unless FE0F added | ☀ ☁ ✈ ☎ ♠ ⚙ |
| emoji-default | renders as emoji automatically | 😀 🎉 🚀 ✅ |

text-default characters require FE0F to display as emoji. emoji-default characters render as emoji regardless of FE0F.

## how FE0F breaks terminals

the problem: **terminals disagree on FE0F behavior**.

### the three terminal behaviors

| terminal behavior | width allocated | render style | result |
|-------------------|-----------------|--------------|--------|
| ignores FE0F entirely | 1 cell | text style | correct (monochrome) |
| honors FE0F for render only | 1 cell | emoji style | **broken** (overflows) |
| honors FE0F for both | 2 cells | emoji style | correct (colorful) |

gnome-terminal and vscode's xterm.js fall into the middle category — they render the emoji colorfully but only allocate 1 cell. this causes the emoji to overflow into the next character's cell, which occludes it.

### why terminals get it wrong

1. **wcwidth() limits**: the standard c library function calculates width per-character. it does not understand variation selectors — it only sees the base character and returns its width (typically 1 for text-default symbols).

2. **unicode version lag**: terminal emulators use wcwidth tables from specific unicode versions. xterm.js (vscode) only supports unicode 12.1. older wcwidth implementations don't know that FE0F should double the width.

3. **glib vs glibc mismatch**: gnome-terminal uses glib for width calculations, while most tools use glibc. these libraries updated their unicode tables at different times, which caused disagreements in the transition period.

4. **ambiguous width classification**: many symbols with FE0F are classified as "East_Asian_Width: Ambiguous" in unicode, which means their width is context-dependent. terminals interpret this inconsistently.

## which characters are affected

characters affected by FE0F width issues share these traits:

1. **text-default presentation** (Emoji_Presentation=No)
2. **have emoji presentation available** (Emoji=Yes)
3. **from older unicode blocks** (pre-emoji era symbols)

common affected blocks:
- miscellaneous symbols (U+2600–U+26FF): ☀️ ☁️ ☂️ ⛈️ ⚙️ ⚠️
- dingbats (U+2700–U+27BF): ✈️ ✉️ ✌️ ✏️ ✔️ ❄️ ❤️
- arrows (U+2190–U+21FF): ↔️ ↕️ ↖️ ↗️ ↘️ ↙️
- enclosed alphanumerics: keycaps #️⃣ 0️⃣–9️⃣

## the shim solution

this library adds an extra space after affected emojis to compensate for the width miscalculation:

```ts
'⛈️': { vscode: 1, default: 1 }  // both terminals need +1 space
'☀️': { vscode: 1, default: 1 }  // both terminals need +1 space
```

the shim detects which terminal is in use and adds the appropriate number of spaces after each emoji to maintain alignment.

## how to identify affected emojis

run the test utility:

```bash
npx tsx src/__test_assets__/testEmojiWidths.ts
```

look for emojis where the `|XX|` marker is occluded or shifted right — those need a shim.

## references

- [unicode variation selectors](https://unicode.org/reports/tr51/#Emoji_Variation_Sequences)
- [unicode emoji presentation](https://unicode.org/reports/tr51/#Presentation_Style)
- [wcwidth and emoji](https://github.com/jquast/wcwidth)
- [xterm.js unicode support](https://github.com/xtermjs/xterm.js/issues/2693)
- [gnome-terminal emoji width bug](https://bugs.launchpad.net/ubuntu/+source/gnome-terminal/+bug/1665140)

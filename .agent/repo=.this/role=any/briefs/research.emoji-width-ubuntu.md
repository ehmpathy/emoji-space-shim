# why ⛈️ has width issues in ubuntu terminals

## summary

the thunder cloud emoji (U+26C8 + U+FE0F) consumes extra space in ubuntu terminals due to a combination of:
1. ambiguous east asian width classification
2. variation selector 16 (FE0F) handler disagreements
3. wcwidth() library limitations
4. glib vs glibc unicode version mismatches

## the character

- **codepoint**: U+26C8 (thunder cloud and rain)
- **with variation selector**: U+26C8 U+FE0F = ⛈️
- **unicode version**: 5.2 (2009)
- **east asian width**: **ambiguous** (context-dependent)
- **default presentation**: text (monochrome, width 1)
- **emoji presentation**: requires FE0F (color, width 2)

## root causes

### 1. ambiguous width classification

U+26C8 is classified as "East_Asian_Width: Ambiguous" in unicode. this means its display width depends on context - it can be either 1 or 2 cells wide based on the environment. terminals interpret this inconsistently.

### 2. variation selector disagreement

when U+FE0F (variation selector 16) follows U+26C8, it requests emoji presentation (width 2). however, terminals disagree on how to handle this:

| terminal behavior | width allocated | render style |
|-------------------|-----------------|--------------|
| ignores FE0F entirely | 1 cell | text style |
| honors FE0F for render only | 1 cell | emoji style (overflows) |
| honors FE0F for both | 2 cells | emoji style (correct) |

gnome-terminal and many ubuntu terminals fall into the middle category - they render the emoji colorfully but only allocate 1 cell. the next character is then occluded.

### 3. wcwidth() limitations

the standard c library function `wcwidth()` calculates character width in isolation. it:
- does not understand variation selectors (FE0F/FE0E)
- does not handle grapheme clusters
- returns width for the base character only

this means even if a terminal wants to honor FE0F, the base width calculation infrastructure does not support it.

### 4. glib vs glibc mismatch (historical)

gnome-terminal uses glib for width calculations, while most other tools use glibc:

| library | unicode 9.0 support added |
|---------|---------------------------|
| glib | version 2.50.1 (earlier) |
| glibc | version 2.26 (later) |

unicode 9.0 changed many emoji from ambiguous/narrow to wide. in the transition period, gnome-terminal disagreed with other tools about emoji width.

## why this affects ⛈️ specifically

1. **text-default presentation**: unlike fully-qualified emoji (e.g., 😀), U+26C8 defaults to text presentation
2. **requires FE0F**: to render as a colorful emoji, it needs the variation selector
3. **ambiguous width**: the base character has no definitive width assignment
4. **older unicode origin**: added in unicode 5.2, before emoji width standards existed

## the shim solution

this library adds an extra space after ⛈️ to compensate for the width miscalculation:

```ts
'⛈️': { vscode: 1, default: 1 }
```

both vscode (xterm.js) and default terminals need +1 space because:
- xterm.js only supports unicode 12.1 width tables
- gnome-terminal allocates 1 cell but renders 2-cell-wide glyph

## references

- [gnome-terminal emoji width bug](https://bugs.launchpad.net/ubuntu/+source/gnome-terminal/+bug/1665140)
- [microsoft terminal FE0F issues](https://github.com/microsoft/terminal/issues/8970)
- [kitty dual presentation handler](https://github.com/kovidgoyal/kitty/issues/3998)
- [unicode codepoint U+26C8](https://codepoints.net/U+26C8)
- [terminal emoji battle royale](https://www.jeffquast.com/post/ucs-detect-test-results/)

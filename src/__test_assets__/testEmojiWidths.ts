/**
 * .what = test utility to identify emojis with width issues
 * .why = empirically verify which emojis need shimming in different terminals
 *
 * usage:
 *   npx tsx src/__test_assets__/testEmojiWidths.ts
 *
 * run in:
 *   1. vscode integrated terminal
 *   2. gnome-terminal (ubuntu)
 *   3. other terminals you want to support
 *
 * look for:
 *   - if the "|" character is occluded or misaligned, the emoji needs shimming
 *   - compare across terminals to determine vscode vs default values
 */

// ═══════════════════════════════════════════════════════════════════════════
// candidate emojis: text-default presentation + variation selector
// these are older unicode symbols that require FE0F for emoji presentation
// ═══════════════════════════════════════════════════════════════════════════

const CANDIDATES_WITH_VS16 = [
  // weather (many are text-default)
  { emoji: '☀️', name: 'sun', base: 'U+2600' },
  { emoji: '☁️', name: 'cloud', base: 'U+2601' },
  { emoji: '⛅', name: 'sun behind cloud', base: 'U+26C5' },
  { emoji: '⛈️', name: 'cloud with lightning and rain', base: 'U+26C8' },
  { emoji: '🌤️', name: 'sun behind small cloud', base: 'U+1F324' },
  { emoji: '🌥️', name: 'sun behind large cloud', base: 'U+1F325' },
  { emoji: '🌦️', name: 'sun behind rain cloud', base: 'U+1F326' },
  { emoji: '🌧️', name: 'cloud with rain', base: 'U+1F327' },
  { emoji: '🌨️', name: 'cloud with snow', base: 'U+1F328' },
  { emoji: '🌩️', name: 'cloud with lightning', base: 'U+1F329' },
  { emoji: '🌪️', name: 'tornado', base: 'U+1F32A' },
  { emoji: '🌫️', name: 'fog', base: 'U+1F32B' },
  { emoji: '🌬️', name: 'wind face', base: 'U+1F32C' },

  // misc symbols (text-default)
  { emoji: '☂️', name: 'umbrella', base: 'U+2602' },
  { emoji: '☃️', name: 'snowman', base: 'U+2603' },
  { emoji: '☄️', name: 'comet', base: 'U+2604' },
  { emoji: '☎️', name: 'telephone', base: 'U+260E' },
  { emoji: '☑️', name: 'check box with check', base: 'U+2611' },
  { emoji: '☘️', name: 'shamrock', base: 'U+2618' },
  { emoji: '☝️', name: 'index up', base: 'U+261D' },
  { emoji: '☠️', name: 'skull and crossbones', base: 'U+2620' },
  { emoji: '☢️', name: 'radioactive', base: 'U+2622' },
  { emoji: '☣️', name: 'biohazard', base: 'U+2623' },
  { emoji: '☦️', name: 'orthodox cross', base: 'U+2626' },
  { emoji: '☪️', name: 'star and crescent', base: 'U+262A' },
  { emoji: '☮️', name: 'peace symbol', base: 'U+262E' },
  { emoji: '☯️', name: 'yin yang', base: 'U+262F' },
  { emoji: '☸️', name: 'wheel of dharma', base: 'U+2638' },
  { emoji: '☹️', name: 'frown face', base: 'U+2639' },
  { emoji: '☺️', name: 'smile face', base: 'U+263A' },

  // zodiac
  { emoji: '♈', name: 'aries', base: 'U+2648' },
  { emoji: '♉', name: 'taurus', base: 'U+2649' },
  { emoji: '♊', name: 'gemini', base: 'U+264A' },
  { emoji: '♋', name: 'cancer', base: 'U+264B' },
  { emoji: '♌', name: 'leo', base: 'U+264C' },
  { emoji: '♍', name: 'virgo', base: 'U+264D' },
  { emoji: '♎', name: 'libra', base: 'U+264E' },
  { emoji: '♏', name: 'scorpio', base: 'U+264F' },
  { emoji: '♐', name: 'sagittarius', base: 'U+2650' },
  { emoji: '♑', name: 'capricorn', base: 'U+2651' },
  { emoji: '♒', name: 'aquarius', base: 'U+2652' },
  { emoji: '♓', name: 'pisces', base: 'U+2653' },

  // cards and game symbols
  { emoji: '♠️', name: 'spade suit', base: 'U+2660' },
  { emoji: '♣️', name: 'club suit', base: 'U+2663' },
  { emoji: '♥️', name: 'heart suit', base: 'U+2665' },
  { emoji: '♦️', name: 'diamond suit', base: 'U+2666' },
  { emoji: '♨️', name: 'hot springs', base: 'U+2668' },
  { emoji: '♻️', name: 'recycle symbol', base: 'U+267B' },
  { emoji: '♿', name: 'wheelchair symbol', base: 'U+267F' },

  // misc symbols continued
  { emoji: '⚒️', name: 'hammer and pick', base: 'U+2692' },
  { emoji: '⚓', name: 'anchor', base: 'U+2693' },
  { emoji: '⚔️', name: 'crossed swords', base: 'U+2694' },
  { emoji: '⚖️', name: 'balance scale', base: 'U+2696' },
  { emoji: '⚗️', name: 'alembic', base: 'U+2697' },
  { emoji: '⚙️', name: 'gear', base: 'U+2699' },
  { emoji: '⚛️', name: 'atom symbol', base: 'U+269B' },
  { emoji: '⚜️', name: 'fleur-de-lis', base: 'U+269C' },
  { emoji: '⚠️', name: 'warn', base: 'U+26A0' },
  { emoji: '⚡', name: 'high voltage', base: 'U+26A1' },
  { emoji: '⚪', name: 'white circle', base: 'U+26AA' },
  { emoji: '⚫', name: 'black circle', base: 'U+26AB' },
  { emoji: '⚰️', name: 'coffin', base: 'U+26B0' },
  { emoji: '⚱️', name: 'funeral urn', base: 'U+26B1' },
  { emoji: '⚽', name: 'soccer ball', base: 'U+26BD' },
  { emoji: '⚾', name: 'baseball', base: 'U+26BE' },
  { emoji: '⛄', name: 'snowman without snow', base: 'U+26C4' },
  { emoji: '⛎', name: 'ophiuchus', base: 'U+26CE' },
  { emoji: '⛏️', name: 'pick', base: 'U+26CF' },
  { emoji: '⛑️', name: 'rescue worker helmet', base: 'U+26D1' },
  { emoji: '⛓️', name: 'chains', base: 'U+26D3' },
  { emoji: '⛔', name: 'no entry', base: 'U+26D4' },
  { emoji: '⛩️', name: 'shinto shrine', base: 'U+26E9' },
  { emoji: '⛪', name: 'church', base: 'U+26EA' },
  { emoji: '⛰️', name: 'mountain', base: 'U+26F0' },
  { emoji: '⛱️', name: 'umbrella on ground', base: 'U+26F1' },
  { emoji: '⛲', name: 'fountain', base: 'U+26F2' },
  { emoji: '⛳', name: 'flag in hole', base: 'U+26F3' },
  { emoji: '⛴️', name: 'ferry', base: 'U+26F4' },
  { emoji: '⛵', name: 'sailboat', base: 'U+26F5' },
  { emoji: '⛷️', name: 'skier', base: 'U+26F7' },
  { emoji: '⛸️', name: 'ice skate', base: 'U+26F8' },
  { emoji: '⛹️', name: 'person with ball', base: 'U+26F9' },
  { emoji: '⛺', name: 'tent', base: 'U+26FA' },
  { emoji: '⛽', name: 'fuel pump', base: 'U+26FD' },

  // arrows and ui
  { emoji: '⬅️', name: 'left arrow', base: 'U+2B05' },
  { emoji: '⬆️', name: 'up arrow', base: 'U+2B06' },
  { emoji: '⬇️', name: 'down arrow', base: 'U+2B07' },
  { emoji: '⬛', name: 'black large square', base: 'U+2B1B' },
  { emoji: '⬜', name: 'white large square', base: 'U+2B1C' },
  { emoji: '⭐', name: 'star', base: 'U+2B50' },
  { emoji: '⭕', name: 'hollow red circle', base: 'U+2B55' },

  // time
  { emoji: '⌚', name: 'watch', base: 'U+231A' },
  { emoji: '⌛', name: 'hourglass done', base: 'U+231B' },
  { emoji: '⏰', name: 'alarm clock', base: 'U+23F0' },
  { emoji: '⏱️', name: 'stopwatch', base: 'U+23F1' },
  { emoji: '⏲️', name: 'timer clock', base: 'U+23F2' },
  { emoji: '⏳', name: 'hourglass not done', base: 'U+23F3' },

  // transport
  { emoji: '✈️', name: 'airplane', base: 'U+2708' },
  { emoji: '✉️', name: 'envelope', base: 'U+2709' },
  { emoji: '✊', name: 'raised fist', base: 'U+270A' },
  { emoji: '✋', name: 'raised hand', base: 'U+270B' },
  { emoji: '✌️', name: 'victory hand', base: 'U+270C' },
  { emoji: '✍️', name: 'hand that writes', base: 'U+270D' },
  { emoji: '✏️', name: 'pencil', base: 'U+270F' },
  { emoji: '✒️', name: 'black nib', base: 'U+2712' },
  { emoji: '✔️', name: 'check mark', base: 'U+2714' },
  { emoji: '✖️', name: 'multiply', base: 'U+2716' },
  { emoji: '✝️', name: 'latin cross', base: 'U+271D' },
  { emoji: '✡️', name: 'star of david', base: 'U+2721' },
  { emoji: '✨', name: 'sparkles', base: 'U+2728' },

  // marks
  { emoji: '❄️', name: 'snowflake', base: 'U+2744' },
  { emoji: '❇️', name: 'sparkle', base: 'U+2747' },
  { emoji: '❌', name: 'cross mark', base: 'U+274C' },
  { emoji: '❎', name: 'cross mark button', base: 'U+274E' },
  { emoji: '❓', name: 'red question mark', base: 'U+2753' },
  { emoji: '❔', name: 'white question mark', base: 'U+2754' },
  { emoji: '❕', name: 'white exclamation mark', base: 'U+2755' },
  { emoji: '❗', name: 'red exclamation mark', base: 'U+2757' },
  { emoji: '❣️', name: 'heart exclamation', base: 'U+2763' },
  { emoji: '❤️', name: 'red heart', base: 'U+2764' },

  // arrows
  { emoji: '➡️', name: 'right arrow', base: 'U+27A1' },
  { emoji: '➰', name: 'curly loop', base: 'U+27B0' },
  { emoji: '➿', name: 'double curly loop', base: 'U+27BF' },

  // cjk
  { emoji: '〰️', name: 'wavy dash', base: 'U+3030' },
  { emoji: '〽️', name: 'part alternation mark', base: 'U+303D' },
  { emoji: '㊗️', name: 'japanese congratulations', base: 'U+3297' },
  { emoji: '㊙️', name: 'japanese secret', base: 'U+3299' },

  // more misc
  { emoji: '©️', name: 'copyright', base: 'U+00A9' },
  { emoji: '®️', name: 'registered', base: 'U+00AE' },
  { emoji: '‼️', name: 'double exclamation', base: 'U+203C' },
  { emoji: '⁉️', name: 'exclamation question', base: 'U+2049' },
  { emoji: '™️', name: 'trade mark', base: 'U+2122' },
  { emoji: 'ℹ️', name: 'information', base: 'U+2139' },

  // arrows and media controls
  { emoji: '↔️', name: 'left-right arrow', base: 'U+2194' },
  { emoji: '↕️', name: 'up-down arrow', base: 'U+2195' },
  { emoji: '↖️', name: 'up-left arrow', base: 'U+2196' },
  { emoji: '↗️', name: 'up-right arrow', base: 'U+2197' },
  { emoji: '↘️', name: 'down-right arrow', base: 'U+2198' },
  { emoji: '↙️', name: 'down-left arrow', base: 'U+2199' },
  { emoji: '↩️', name: 'right arrow curve left', base: 'U+21A9' },
  { emoji: '↪️', name: 'left arrow curve right', base: 'U+21AA' },

  // media
  { emoji: '⏩', name: 'fast-forward', base: 'U+23E9' },
  { emoji: '⏪', name: 'fast reverse', base: 'U+23EA' },
  { emoji: '⏫', name: 'fast up', base: 'U+23EB' },
  { emoji: '⏬', name: 'fast down', base: 'U+23EC' },
  { emoji: '⏭️', name: 'next track', base: 'U+23ED' },
  { emoji: '⏮️', name: 'last track', base: 'U+23EE' },
  { emoji: '⏯️', name: 'play or pause', base: 'U+23EF' },
  { emoji: '⏸️', name: 'pause', base: 'U+23F8' },
  { emoji: '⏹️', name: 'stop', base: 'U+23F9' },
  { emoji: '⏺️', name: 'record', base: 'U+23FA' },

  // eject and more
  { emoji: '⏏️', name: 'eject', base: 'U+23CF' },
  { emoji: '▶️', name: 'play', base: 'U+25B6' },
  { emoji: '◀️', name: 'reverse', base: 'U+25C0' },
  { emoji: '◻️', name: 'white medium square', base: 'U+25FB' },
  { emoji: '◼️', name: 'black medium square', base: 'U+25FC' },
  { emoji: '◽', name: 'white medium-small square', base: 'U+25FD' },
  { emoji: '◾', name: 'black medium-small square', base: 'U+25FE' },
  { emoji: '▪️', name: 'black small square', base: 'U+25AA' },
  { emoji: '▫️', name: 'white small square', base: 'U+25AB' },

  // keycaps
  { emoji: '#️⃣', name: 'keycap hash', base: 'U+0023' },
  { emoji: '*️⃣', name: 'keycap asterisk', base: 'U+002A' },
  { emoji: '0️⃣', name: 'keycap 0', base: 'U+0030' },
  { emoji: '1️⃣', name: 'keycap 1', base: 'U+0031' },
  { emoji: '2️⃣', name: 'keycap 2', base: 'U+0032' },
  { emoji: '3️⃣', name: 'keycap 3', base: 'U+0033' },
  { emoji: '4️⃣', name: 'keycap 4', base: 'U+0034' },
  { emoji: '5️⃣', name: 'keycap 5', base: 'U+0035' },
  { emoji: '6️⃣', name: 'keycap 6', base: 'U+0036' },
  { emoji: '7️⃣', name: 'keycap 7', base: 'U+0037' },
  { emoji: '8️⃣', name: 'keycap 8', base: 'U+0038' },
  { emoji: '9️⃣', name: 'keycap 9', base: 'U+0039' },
  { emoji: '🔟', name: 'keycap 10', base: 'U+1F51F' },
];

// ═══════════════════════════════════════════════════════════════════════════
// test output
// ═══════════════════════════════════════════════════════════════════════════

console.log('═══════════════════════════════════════════════════════════════');
console.log('EMOJI WIDTH TEST');
console.log('═══════════════════════════════════════════════════════════════');
console.log('');
console.log('instructions:');
console.log('  1. run this in vscode integrated terminal');
console.log('  2. run this in gnome-terminal (ubuntu)');
console.log('  3. compare results');
console.log('');
console.log('look for:');
console.log(
  '  - if "|" is occluded or shifted right, emoji consumes extra space',
);
console.log('  - "XX" should align with the emoji column header');
console.log('');
console.log('═══════════════════════════════════════════════════════════════');
console.log('');

// header
console.log('EMOJI |XX| NAME (base codepoint)');
console.log('------+--+---------------------');

for (const { emoji, name, base } of CANDIDATES_WITH_VS16) {
  // the "|XX|" marker should be visible and aligned if emoji width is correct
  console.log(`${emoji} |XX| ${name} (${base})`);
}

console.log('');
console.log('═══════════════════════════════════════════════════════════════');
console.log('');
console.log(
  'if you see misaligned "|XX|" markers, those emojis need shimming.',
);
console.log(
  'record which terminal you tested in and note the misaligned ones.',
);

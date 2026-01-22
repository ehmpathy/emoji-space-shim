import type { TerminalChoice } from './TerminalChoice';

/**
 * .what = dictionary of emoji space consumption per terminal
 * .why = terminals disagree on emoji width; this maps emoji → terminal → consumed spaces
 *
 * .note = vscode (xterm.js) only supports unicode 12.1.0, so all unicode 13.0+ emojis
 *         need space adjustment. see: https://github.com/microsoft/vscode/issues/251102
 */
export const EMOJI_SPACE_REGISTRY: Record<
  string,
  Partial<Record<TerminalChoice, number>>
> = {
  // ═══════════════════════════════════════════════════════════════════════════
  // unicode 13.0 emojis (2020) - vscode consumes 1 extra space
  // ═══════════════════════════════════════════════════════════════════════════

  // faces & people
  '🥲': { vscode: 1, default: 0 }, // smiling face with tear
  '🥸': { vscode: 1, default: 0 }, // disguised face
  '🤌': { vscode: 1, default: 0 }, // pinched fingers
  '🫀': { vscode: 1, default: 0 }, // anatomical heart
  '🫁': { vscode: 1, default: 0 }, // lungs
  '🥷': { vscode: 1, default: 0 }, // ninja
  '🫂': { vscode: 1, default: 0 }, // people hugging

  // animals
  '🦬': { vscode: 1, default: 0 }, // bison
  '🦣': { vscode: 1, default: 0 }, // mammoth
  '🦫': { vscode: 1, default: 0 }, // beaver
  '🦤': { vscode: 1, default: 0 }, // dodo
  '🪶': { vscode: 1, default: 0 }, // feather
  '🦭': { vscode: 1, default: 0 }, // seal
  '🪲': { vscode: 1, default: 0 }, // beetle
  '🪳': { vscode: 1, default: 0 }, // cockroach
  '🪰': { vscode: 1, default: 0 }, // fly
  '🪱': { vscode: 1, default: 0 }, // worm

  // plants & food
  '🪴': { vscode: 1, default: 0 }, // potted plant
  '🫐': { vscode: 1, default: 0 }, // blueberries
  '🫒': { vscode: 1, default: 0 }, // olive
  '🫑': { vscode: 1, default: 0 }, // bell pepper
  '🫓': { vscode: 1, default: 0 }, // flatbread
  '🫔': { vscode: 1, default: 0 }, // tamale
  '🫕': { vscode: 1, default: 0 }, // fondue
  '🫖': { vscode: 1, default: 0 }, // teapot
  '🧋': { vscode: 1, default: 0 }, // bubble tea

  // objects & places
  '🪨': { vscode: 1, default: 0 }, // rock
  '🪵': { vscode: 1, default: 0 }, // wood
  '🛖': { vscode: 1, default: 0 }, // hut
  '🛻': { vscode: 1, default: 0 }, // pickup truck
  '🛼': { vscode: 1, default: 0 }, // roller skate
  '🪄': { vscode: 1, default: 0 }, // magic wand
  '🪅': { vscode: 1, default: 0 }, // piñata
  '🪆': { vscode: 1, default: 0 }, // nesting dolls
  '🪡': { vscode: 1, default: 0 }, // sewing needle
  '🪢': { vscode: 1, default: 0 }, // knot
  '🩴': { vscode: 1, default: 0 }, // thong sandal
  '🪖': { vscode: 1, default: 0 }, // military helmet
  '🪗': { vscode: 1, default: 0 }, // accordion
  '🪘': { vscode: 1, default: 0 }, // long drum
  '🪙': { vscode: 1, default: 0 }, // coin
  '🪃': { vscode: 1, default: 0 }, // boomerang
  '🪚': { vscode: 1, default: 0 }, // carpentry saw
  '🪛': { vscode: 1, default: 0 }, // screwdriver
  '🪝': { vscode: 1, default: 0 }, // hook 🎣
  '🪜': { vscode: 1, default: 0 }, // ladder
  '🛗': { vscode: 1, default: 0 }, // elevator
  '🪞': { vscode: 1, default: 0 }, // mirror
  '🪟': { vscode: 1, default: 0 }, // window
  '🪠': { vscode: 1, default: 0 }, // plunger
  '🪤': { vscode: 1, default: 0 }, // mouse trap
  '🪣': { vscode: 1, default: 0 }, // bucket
  '🪥': { vscode: 1, default: 0 }, // toothbrush
  '🪦': { vscode: 1, default: 0 }, // headstone
  '🪧': { vscode: 1, default: 0 }, // placard

  // ═══════════════════════════════════════════════════════════════════════════
  // unicode 14.0 emojis (2021) - vscode consumes 1 extra space
  // ═══════════════════════════════════════════════════════════════════════════
  '🫠': { vscode: 1, default: 0 }, // melting face
  '🫢': { vscode: 1, default: 0 }, // face with open eyes and hand over mouth
  '🫣': { vscode: 1, default: 0 }, // face with peeking eye
  '🫤': { vscode: 1, default: 0 }, // face with diagonal mouth
  '🫥': { vscode: 1, default: 0 }, // dotted line face
  '🫡': { vscode: 1, default: 0 }, // saluting face
  '🫦': { vscode: 1, default: 0 }, // biting lip
  '🫧': { vscode: 1, default: 0 }, // bubbles
  '🫰': { vscode: 1, default: 0 }, // hand with index finger and thumb crossed
  '🫱': { vscode: 1, default: 0 }, // rightwards hand
  '🫲': { vscode: 1, default: 0 }, // leftwards hand
  '🫳': { vscode: 1, default: 0 }, // palm down hand
  '🫴': { vscode: 1, default: 0 }, // palm up hand
  '🫵': { vscode: 1, default: 0 }, // index pointing at the viewer
  '🫶': { vscode: 1, default: 0 }, // heart hands
  '🪸': { vscode: 1, default: 0 }, // coral
  '🪷': { vscode: 1, default: 0 }, // lotus
  '🪹': { vscode: 1, default: 0 }, // empty nest
  '🪺': { vscode: 1, default: 0 }, // nest with eggs
  '🫗': { vscode: 1, default: 0 }, // pouring liquid
  '🫘': { vscode: 1, default: 0 }, // beans
  '🛝': { vscode: 1, default: 0 }, // playground slide
  '🛞': { vscode: 1, default: 0 }, // wheel
  '🛟': { vscode: 1, default: 0 }, // ring buoy
  '🪬': { vscode: 1, default: 0 }, // hamsa
  '🪩': { vscode: 1, default: 0 }, // mirror ball
  '🪫': { vscode: 1, default: 0 }, // low battery
  '🩻': { vscode: 1, default: 0 }, // x-ray
  '🩼': { vscode: 1, default: 0 }, // crutch
  '🪪': { vscode: 1, default: 0 }, // identification card
  '🟰': { vscode: 1, default: 0 }, // heavy equals sign

  // ═══════════════════════════════════════════════════════════════════════════
  // unicode 15.0 emojis (2022) - vscode consumes 1 extra space
  // ═══════════════════════════════════════════════════════════════════════════
  '🫨': { vscode: 1, default: 0 }, // shaking face
  '🩵': { vscode: 1, default: 0 }, // light blue heart
  '🩶': { vscode: 1, default: 0 }, // grey heart
  '🩷': { vscode: 1, default: 0 }, // pink heart
  '🪻': { vscode: 1, default: 0 }, // hyacinth
  '🫚': { vscode: 1, default: 0 }, // ginger root
  '🫛': { vscode: 1, default: 0 }, // pea pod
  '🪭': { vscode: 1, default: 0 }, // folding hand fan
  '🪮': { vscode: 1, default: 0 }, // hair pick
  '🪇': { vscode: 1, default: 0 }, // maracas
  '🪈': { vscode: 1, default: 0 }, // flute
  '🪯': { vscode: 1, default: 0 }, // khanda
  '🛜': { vscode: 1, default: 0 }, // wireless
  '🫎': { vscode: 1, default: 0 }, // moose
  '🫏': { vscode: 1, default: 0 }, // donkey
  '🪽': { vscode: 1, default: 0 }, // wing
  '🐦‍⬛': { vscode: 1, default: 0 }, // black bird
  '🪿': { vscode: 1, default: 0 }, // goose
  '🪼': { vscode: 1, default: 0 }, // jellyfish

  // ═══════════════════════════════════════════════════════════════════════════
  // unicode 16.0 emojis (2024) - vscode consumes 1 extra space
  // ═══════════════════════════════════════════════════════════════════════════
  '🫩': { vscode: 1, default: 0 }, // face with bags under eyes
  '🫆': { vscode: 1, default: 0 }, // fingerprint
  '🪾': { vscode: 1, default: 0 }, // leafless tree
  '🫜': { vscode: 1, default: 0 }, // root vegetable
  '🪉': { vscode: 1, default: 0 }, // harp
  '🪏': { vscode: 1, default: 0 }, // shovel
  '🫟': { vscode: 1, default: 0 }, // splatter

  // ═══════════════════════════════════════════════════════════════════════════
  // unicode 17.0 emojis (2025) - vscode consumes 1 extra space
  // ═══════════════════════════════════════════════════════════════════════════
  '🫪': { vscode: 1, default: 0 }, // distorted face
  '🫯': { vscode: 1, default: 0 }, // fight cloud
  '🫈': { vscode: 1, default: 0 }, // hairy creature
  '🫍': { vscode: 1, default: 0 }, // orca
  '🛘': { vscode: 1, default: 0 }, // landslide
  '🪊': { vscode: 1, default: 0 }, // trombone
  '🪎': { vscode: 1, default: 0 }, // treasure chest

  // ═══════════════════════════════════════════════════════════════════════════
  // emojis with variation selectors - consume 1 extra space in both terminals
  // these are text-default emojis that require FE0F for emoji presentation
  // see: .agent/repo=.this/role=any/briefs/research.emoji-width-ubuntu.md
  // ═══════════════════════════════════════════════════════════════════════════

  // weather
  '☀️': { vscode: 1, default: 1 }, // sun
  '☁️': { vscode: 1, default: 1 }, // cloud
  '⛈️': { vscode: 1, default: 1 }, // cloud with lightning and rain
  '🌤️': { vscode: 1, default: 1 }, // sun behind small cloud
  '🌥️': { vscode: 1, default: 1 }, // sun behind large cloud
  '🌦️': { vscode: 1, default: 1 }, // sun behind rain cloud
  '🌧️': { vscode: 1, default: 1 }, // cloud with rain
  '🌨️': { vscode: 1, default: 1 }, // cloud with snow
  '🌩️': { vscode: 1, default: 1 }, // cloud with lightning
  '🌪️': { vscode: 1, default: 1 }, // tornado
  '🌫️': { vscode: 1, default: 1 }, // fog
  '🌬️': { vscode: 1, default: 1 }, // wind face

  // misc symbols
  '☂️': { vscode: 1, default: 1 }, // umbrella
  '☃️': { vscode: 1, default: 1 }, // snowman
  '☄️': { vscode: 1, default: 1 }, // comet
  '☎️': { vscode: 1, default: 1 }, // telephone
  '☑️': { vscode: 1, default: 1 }, // check box with check
  '☘️': { vscode: 1, default: 1 }, // shamrock
  '☝️': { vscode: 1, default: 1 }, // index up
  '☠️': { vscode: 1, default: 1 }, // skull and crossbones
  '☢️': { vscode: 1, default: 1 }, // radioactive
  '☣️': { vscode: 1, default: 1 }, // biohazard
  '☦️': { vscode: 1, default: 1 }, // orthodox cross
  '☪️': { vscode: 1, default: 1 }, // star and crescent
  '☮️': { vscode: 1, default: 1 }, // peace symbol
  '☯️': { vscode: 1, default: 1 }, // yin yang
  '☸️': { vscode: 1, default: 1 }, // wheel of dharma
  '☹️': { vscode: 1, default: 1 }, // frown face
  '☺️': { vscode: 1, default: 1 }, // smile face

  // card suits
  '♠️': { vscode: 1, default: 1 }, // spade suit
  '♣️': { vscode: 1, default: 1 }, // club suit
  '♥️': { vscode: 1, default: 1 }, // heart suit
  '♦️': { vscode: 1, default: 1 }, // diamond suit
  '♨️': { vscode: 1, default: 1 }, // hot springs
  '♻️': { vscode: 1, default: 1 }, // recycle symbol

  // tools and objects
  '⚒️': { vscode: 1, default: 1 }, // hammer and pick
  '⚔️': { vscode: 1, default: 1 }, // crossed swords
  '⚖️': { vscode: 1, default: 1 }, // balance scale
  '⚗️': { vscode: 1, default: 1 }, // alembic
  '⚙️': { vscode: 1, default: 1 }, // gear
  '⚛️': { vscode: 1, default: 1 }, // atom symbol
  '⚜️': { vscode: 1, default: 1 }, // fleur-de-lis
  '⚠️': { vscode: 1, default: 1 }, // warn
  '⚰️': { vscode: 1, default: 1 }, // coffin
  '⚱️': { vscode: 1, default: 1 }, // funeral urn

  // places and activities
  '⛏️': { vscode: 1, default: 1 }, // pick
  '⛑️': { vscode: 1, default: 1 }, // rescue worker helmet
  '⛓️': { vscode: 1, default: 1 }, // chains
  '⛩️': { vscode: 1, default: 1 }, // shinto shrine
  '⛰️': { vscode: 1, default: 1 }, // mountain
  '⛱️': { vscode: 1, default: 1 }, // umbrella on ground
  '⛴️': { vscode: 1, default: 1 }, // ferry
  '⛷️': { vscode: 1, default: 1 }, // skier
  '⛸️': { vscode: 1, default: 1 }, // ice skate
  '⛹️': { vscode: 1, default: 1 }, // person with ball

  // arrows
  '⬅️': { vscode: 1, default: 1 }, // left arrow
  '⬆️': { vscode: 1, default: 1 }, // up arrow
  '⬇️': { vscode: 1, default: 1 }, // down arrow
  '➡️': { vscode: 1, default: 1 }, // right arrow
  '↔️': { vscode: 1, default: 1 }, // left-right arrow
  '↕️': { vscode: 1, default: 1 }, // up-down arrow
  '↖️': { vscode: 1, default: 1 }, // up-left arrow
  '↗️': { vscode: 1, default: 1 }, // up-right arrow
  '↘️': { vscode: 1, default: 1 }, // down-right arrow
  '↙️': { vscode: 1, default: 1 }, // down-left arrow
  '↩️': { vscode: 1, default: 1 }, // right arrow curve left
  '↪️': { vscode: 1, default: 1 }, // left arrow curve right

  // time
  '⏱️': { vscode: 1, default: 1 }, // stopwatch
  '⏲️': { vscode: 1, default: 1 }, // timer clock

  // hands and gestures
  '✈️': { vscode: 1, default: 1 }, // airplane
  '✉️': { vscode: 1, default: 1 }, // envelope
  '✌️': { vscode: 1, default: 1 }, // victory hand
  '✍️': { vscode: 1, default: 1 }, // hand that writes
  '✏️': { vscode: 1, default: 1 }, // pencil
  '✒️': { vscode: 1, default: 1 }, // black nib
  '✔️': { vscode: 1, default: 1 }, // check mark
  '✖️': { vscode: 1, default: 1 }, // multiply
  '✝️': { vscode: 1, default: 1 }, // latin cross
  '✡️': { vscode: 1, default: 1 }, // star of david

  // marks and symbols
  '❄️': { vscode: 1, default: 1 }, // snowflake
  '❇️': { vscode: 1, default: 1 }, // sparkle
  '❣️': { vscode: 1, default: 1 }, // heart exclamation
  '❤️': { vscode: 1, default: 1 }, // red heart

  // cjk and legal
  '〰️': { vscode: 1, default: 1 }, // wavy dash
  '〽️': { vscode: 1, default: 1 }, // part alternation mark
  '㊗️': { vscode: 1, default: 1 }, // japanese congratulations
  '㊙️': { vscode: 1, default: 1 }, // japanese secret
  '©️': { vscode: 1, default: 1 }, // copyright
  '®️': { vscode: 1, default: 1 }, // registered
  '‼️': { vscode: 1, default: 1 }, // double exclamation
  '⁉️': { vscode: 1, default: 1 }, // exclamation question
  '™️': { vscode: 1, default: 1 }, // trade mark
  ℹ️: { vscode: 1, default: 1 }, // information

  // media controls
  '⏭️': { vscode: 1, default: 1 }, // next track
  '⏮️': { vscode: 1, default: 1 }, // last track
  '⏯️': { vscode: 1, default: 1 }, // play or pause
  '⏸️': { vscode: 1, default: 1 }, // pause
  '⏹️': { vscode: 1, default: 1 }, // stop
  '⏺️': { vscode: 1, default: 1 }, // record
  '⏏️': { vscode: 1, default: 1 }, // eject
  '▶️': { vscode: 1, default: 1 }, // play
  '◀️': { vscode: 1, default: 1 }, // reverse

  // squares
  '◻️': { vscode: 1, default: 1 }, // white medium square
  '◼️': { vscode: 1, default: 1 }, // black medium square
  '▪️': { vscode: 1, default: 1 }, // black small square
  '▫️': { vscode: 1, default: 1 }, // white small square

  // keycaps
  '#️⃣': { vscode: 1, default: 1 }, // keycap hash
  '*️⃣': { vscode: 1, default: 1 }, // keycap asterisk
  '0️⃣': { vscode: 1, default: 1 }, // keycap 0
  '1️⃣': { vscode: 1, default: 1 }, // keycap 1
  '2️⃣': { vscode: 1, default: 1 }, // keycap 2
  '3️⃣': { vscode: 1, default: 1 }, // keycap 3
  '4️⃣': { vscode: 1, default: 1 }, // keycap 4
  '5️⃣': { vscode: 1, default: 1 }, // keycap 5
  '6️⃣': { vscode: 1, default: 1 }, // keycap 6
  '7️⃣': { vscode: 1, default: 1 }, // keycap 7
  '8️⃣': { vscode: 1, default: 1 }, // keycap 8
  '9️⃣': { vscode: 1, default: 1 }, // keycap 9
};

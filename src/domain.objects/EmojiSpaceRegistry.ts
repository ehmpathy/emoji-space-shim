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
  // ═══════════════════════════════════════════════════════════════════════════
  '🌩️': { vscode: 1, default: 1 }, // cloud with lightning
  '⛈️': { vscode: 1, default: 1 }, // cloud with lightning and rain
};

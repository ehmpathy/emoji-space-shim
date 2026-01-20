import { given, then, when } from 'test-fns';

import { EMOJI_SPACE_REGISTRY } from './EmojiSpaceRegistry';

describe('EmojiSpaceRegistry', () => {
  given('the emoji space registry', () => {
    // ═══════════════════════════════════════════════════════════════════════
    // unicode 13.0 emojis
    // ═══════════════════════════════════════════════════════════════════════
    when('checked for hook emoji 🪝', () => {
      then('vscode consumes 1 space', () => {
        expect(EMOJI_SPACE_REGISTRY['🪝']?.vscode).toEqual(1);
      });

      then('default consumes 0 spaces', () => {
        expect(EMOJI_SPACE_REGISTRY['🪝']?.default).toEqual(0);
      });
    });

    when('checked for beaver emoji 🦫', () => {
      then('vscode consumes 1 space', () => {
        expect(EMOJI_SPACE_REGISTRY['🦫']?.vscode).toEqual(1);
      });

      then('default consumes 0 spaces', () => {
        expect(EMOJI_SPACE_REGISTRY['🦫']?.default).toEqual(0);
      });
    });

    when('checked for rock emoji 🪨', () => {
      then('vscode consumes 1 space', () => {
        expect(EMOJI_SPACE_REGISTRY['🪨']?.vscode).toEqual(1);
      });

      then('default consumes 0 spaces', () => {
        expect(EMOJI_SPACE_REGISTRY['🪨']?.default).toEqual(0);
      });
    });

    when('checked for potted plant emoji 🪴', () => {
      then('vscode consumes 1 space', () => {
        expect(EMOJI_SPACE_REGISTRY['🪴']?.vscode).toEqual(1);
      });

      then('default consumes 0 spaces', () => {
        expect(EMOJI_SPACE_REGISTRY['🪴']?.default).toEqual(0);
      });
    });

    when('checked for ninja emoji 🥷', () => {
      then('vscode consumes 1 space', () => {
        expect(EMOJI_SPACE_REGISTRY['🥷']?.vscode).toEqual(1);
      });

      then('default consumes 0 spaces', () => {
        expect(EMOJI_SPACE_REGISTRY['🥷']?.default).toEqual(0);
      });
    });

    // ═══════════════════════════════════════════════════════════════════════
    // unicode 14.0 emojis
    // ═══════════════════════════════════════════════════════════════════════
    when('checked for face with diagonal mouth emoji 🫤', () => {
      then('vscode consumes 1 space', () => {
        expect(EMOJI_SPACE_REGISTRY['🫤']?.vscode).toEqual(1);
      });

      then('default consumes 0 spaces', () => {
        expect(EMOJI_SPACE_REGISTRY['🫤']?.default).toEqual(0);
      });
    });

    when('checked for heart hands emoji 🫶', () => {
      then('vscode consumes 1 space', () => {
        expect(EMOJI_SPACE_REGISTRY['🫶']?.vscode).toEqual(1);
      });

      then('default consumes 0 spaces', () => {
        expect(EMOJI_SPACE_REGISTRY['🫶']?.default).toEqual(0);
      });
    });

    // ═══════════════════════════════════════════════════════════════════════
    // unicode 15.0 emojis
    // ═══════════════════════════════════════════════════════════════════════
    when('checked for pink heart emoji 🩷', () => {
      then('vscode consumes 1 space', () => {
        expect(EMOJI_SPACE_REGISTRY['🩷']?.vscode).toEqual(1);
      });

      then('default consumes 0 spaces', () => {
        expect(EMOJI_SPACE_REGISTRY['🩷']?.default).toEqual(0);
      });
    });

    when('checked for moose emoji 🫎', () => {
      then('vscode consumes 1 space', () => {
        expect(EMOJI_SPACE_REGISTRY['🫎']?.vscode).toEqual(1);
      });

      then('default consumes 0 spaces', () => {
        expect(EMOJI_SPACE_REGISTRY['🫎']?.default).toEqual(0);
      });
    });

    // ═══════════════════════════════════════════════════════════════════════
    // variation selector emojis (both terminals need adjustment)
    // ═══════════════════════════════════════════════════════════════════════
    when('checked for cloud with bolt emoji 🌩️', () => {
      then('vscode consumes 1 space', () => {
        expect(EMOJI_SPACE_REGISTRY['🌩️']?.vscode).toEqual(1);
      });

      then('default consumes 1 space', () => {
        expect(EMOJI_SPACE_REGISTRY['🌩️']?.default).toEqual(1);
      });
    });

    when('checked for thunder cloud emoji ⛈️', () => {
      then('vscode consumes 1 space', () => {
        expect(EMOJI_SPACE_REGISTRY['⛈️']?.vscode).toEqual(1);
      });

      then('default consumes 1 space', () => {
        expect(EMOJI_SPACE_REGISTRY['⛈️']?.default).toEqual(1);
      });
    });

    // ═══════════════════════════════════════════════════════════════════════
    // registry completeness
    // ═══════════════════════════════════════════════════════════════════════
    when('checked for total emoji count', () => {
      then('has at least 100 emojis registered', () => {
        const count = Object.keys(EMOJI_SPACE_REGISTRY).length;
        expect(count).toBeGreaterThanOrEqual(100);
      });
    });
  });
});

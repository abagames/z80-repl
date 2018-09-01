import Z80 from "./Z80";
import * as mem from "./mem";
import * as reg from "./reg";
import * as repl from "./repl";
import { fontFamilyName } from "./util";
import * as WebFont from "webfontloader";

export const z80 = new Z80(mem.core);
z80.pc = 0x80;
z80.sp = 0xf0;

window.onload = () => {
  WebFont.load({
    google: {
      families: [fontFamilyName]
    },
    active: init,
    inactive: init
  });
};

function init() {
  mem.init(z80);
  reg.init(z80);
  repl.init(z80);
}

import Z80 from "./Z80";
import * as mem from "./mem";
import * as reg from "./reg";
import * as repl from "./repl";

export const z80 = new Z80(mem.core);

z80.pc = 0x80;
z80.sp = 0xf0;

mem.draw(z80);
reg.draw(z80);
repl.init(z80);

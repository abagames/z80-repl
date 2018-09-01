import Z80 from "./Z80";
import * as mem from "./mem";
import * as repl from "./repl";

export const z80 = new Z80(mem.core);

mem.core.mem_write(0, 0x3e);
mem.core.mem_write(1, 0x11);
z80.run_instruction();
mem.draw(z80);
repl.init(z80);

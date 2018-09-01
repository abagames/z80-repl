import Z80 from "./Z80";
import { Terminal } from "xterm";
import { range, locate, chalk } from "./util";

class Core {
  mem = range(0x10000).map(() => 0);

  mem_read(address: number) {
    return this.mem[address];
  }

  mem_write(address: number, value: number) {
    this.mem[address] = value;
  }

  io_read(port: number) {}

  io_write(port: number, value: number) {}
}

export const core = new Core();

const term = new Terminal({
  cols: 80,
  rows: 18,
  theme: { background: "#222", cursor: "#222" }
});

term.open(document.getElementById("mem"));

export function draw(z80: Z80) {
  for (let i = 0; i < 256; i++) {
    locate(term, (i % 16) * 3 + 5, Math.floor(i / 16) + 1);
    let memStr = "0" + core.mem[i].toString(16);
    memStr = memStr.substr(memStr.length - 2, 2);
    if (i === z80.pc) {
      memStr = chalk.red(memStr);
    }
    term.write(memStr);
  }
}

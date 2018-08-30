import Z80 from "./Z80";
import { Terminal } from "xterm";

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

const core = new Core();
const z80 = new Z80(core);

const memTerm = new Terminal({
  cols: 80,
  rows: 18,
  theme: { background: "#222", cursor: "#222" }
});
memTerm.open(document.getElementById("mem"));

function locate(x: number, y: number) {
  memTerm.write(`\x1B[${y + 1};${x + 1}H`);
}

function drawMem() {
  for (let i = 0; i < 256; i++) {
    locate((i % 16) * 3 + 5, Math.floor(i / 16) + 1);
    const memStr = "0" + core.mem[i].toString(16);
    memTerm.write(memStr.substr(memStr.length - 2, 2));
  }
}

core.mem_write(0, 0x3e);
core.mem_write(1, 0x11);
z80.run_instruction();
drawMem();

function range(n: number) {
  return [...Array(n).keys()];
}

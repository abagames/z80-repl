import Z80 from "./Z80";

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

core.mem_write(0, 0x3e);
core.mem_write(1, 0x11);

z80.run_instruction();
console.log(z80.pc);
console.log(z80.a);

function range(n: number) {
  return [...Array(n).keys()];
}

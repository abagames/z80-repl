import Z80 from "./Z80";
import { Terminal } from "xterm";
import { range, locate, chalk, padHex, fontFamily } from "./util";

class Core {
  mem = range(0x10000).map(() => 0);

  mem_read(address: number) {
    return this.mem[address];
  }

  mem_write(address: number, value: number) {
    this.mem[address] = value;
  }

  io_read(port: number) {
    return 0;
  }

  io_write(port: number, value: number) {}
}

export const core = new Core();

const term = new Terminal({
  cols: 80,
  rows: 17,
  theme: { background: "#222", cursor: "#222" },
  fontFamily
});

term.open(document.getElementById("mem"));

export function draw(z80: Z80) {
  for (let i = 0; i < 16; i++) {
    locate(term, i * 3 + 5, 0);
    term.write(chalk.blue(`0${i.toString(16)}`));
    locate(term, 0, i + 1);
    term.write(chalk.blue(`00${i.toString(16)}0`));
  }
  for (let i = 0; i < 256; i++) {
    locate(term, (i % 16) * 3 + 5, Math.floor(i / 16) + 1);
    const m = core.mem[i];
    let memStr = padHex(m);
    if (i === z80.pc) {
      memStr = chalk.bgRed(memStr);
    } else if (i === z80.sp) {
      memStr = chalk.bgYellow(memStr);
    }
    if (i === ((z80.h << 8) | z80.l)) {
      memStr = chalk.magentaBright(memStr);
    } else if (i === ((z80.b << 8) | z80.c)) {
      memStr = chalk.greenBright(memStr);
    } else if (i === ((z80.d << 8) | z80.e)) {
      memStr = chalk.cyanBright(memStr);
    } else if (i === z80.ix) {
      memStr = chalk.green(memStr);
    } else if (i === z80.iy) {
      memStr = chalk.cyan(memStr);
    }
    term.write(memStr);
    locate(term, (i % 16) + 54, Math.floor(i / 16) + 1);
    let memChar = m < 0x20 ? "." : String.fromCharCode(m);
    term.write(memChar);
  }
}

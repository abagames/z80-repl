import { Terminal } from "xterm";
import Z80 from "./Z80";
import { locate, padHex, chalk, fontFamily } from "./util";

let z80: Z80;
let term: Terminal;

export function init(_z80: Z80) {
  z80 = _z80;
  term = new Terminal({
    cols: 80,
    rows: 2,
    theme: { background: "#222", cursor: "#222" },
    fontFamily
  });
  term.open(document.getElementById("reg"));
  draw();
}

export function draw() {
  locate(term, 0, 0);
  term.write(
    `A   ${chalk.greenBright("B  C")}   ${chalk.cyanBright(
      "D  E"
    )}   ${chalk.magentaBright("H  L")}   ${chalk.green("I X")}  ${chalk.cyan(
      "I Y"
    )}  ${chalk.bgRed("P C ")} ${chalk.bgYellow("S P ")} ${chalk.blue(
      "SZYHXPNC"
    )}  I   R\n\r`
  );
  term.write(
    `${padHex(z80.a)}  ${padHex(z80.b)} ${padHex(z80.c)}  ${padHex(
      z80.d
    )} ${padHex(z80.e)}  ${padHex(z80.h)} ${padHex(z80.l)}  ${padHex(
      z80.ix,
      4
    )} ${padHex(z80.iy, 4)} ${padHex(z80.pc, 4)} ${padHex(
      z80.sp,
      4
    )} ${drawFlags(z80.flags)}  ${padHex(z80.i)}  ${padHex(z80.r)}`
  );
}

function drawFlags(flags) {
  const props = ["S", "Z", "Y", "H", "X", "P", "N", "C"];
  return props.map(p => (flags[p] !== 0 ? "o" : ".")).join("");
}

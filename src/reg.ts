import { Terminal } from "xterm";
import Z80 from "./Z80";
import { locate, padHex, chalk } from "./util";

const term = new Terminal({
  cols: 80,
  rows: 2,
  theme: { background: "#222", cursor: "#222" }
});

term.open(document.getElementById("reg"));

export function draw(z80: Z80) {
  locate(term, 0, 0);
  term.write(
    `A   ${chalk.greenBright("B  C")}   ${chalk.cyanBright(
      "D  E"
    )}   ${chalk.magentaBright("H  L")}   ${chalk.green("I X")}  ${chalk.cyan(
      "I Y"
    )}  ${chalk.bgRed("P C ")} ${chalk.bgYellow("S P ")} ${chalk.blue(
      "SZYHXPNC"
    )}\n\r`
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
    )} ${drawFlags(z80.flags)}`
  );
}

function drawFlags(flags) {
  const props = ["S", "Z", "Y", "H", "X", "P", "N", "C"];
  return props.map(p => (flags[p] !== 0 ? "o" : ".")).join("");
}

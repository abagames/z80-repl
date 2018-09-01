import { Terminal } from "xterm";
import _chalk from "chalk";

export const chalk = new _chalk.constructor({ enabled: true, level: 1 });

export function locate(term: Terminal, x: number, y: number) {
  term.write(`\x1B[${y + 1};${x + 1}H`);
}

export function range(n: number) {
  return [...Array(n).keys()];
}

export function padHex(n: number, len = 2) {
  let str = "000" + n.toString(16).toUpperCase();
  return str.substr(str.length - len, len);
}

import Z80 from "./Z80";
import { Terminal } from "xterm";
import * as mem from "./mem";
import instructions from "./instructions";

const term = new Terminal({
  cols: 80,
  rows: 10,
  theme: { background: "#222" }
});

term.open(document.getElementById("repl"));
term.on("data", onData);

let z80: Z80;

export function init(_z80) {
  z80 = _z80;
  showPrompt();
}

function showPrompt(resetCommand = false) {
  if (resetCommand) {
    command = "";
  }
  term.write(`\n\r> ${command}`);
}

let command = "";

function onData(data: string) {
  const d0 = data.charCodeAt(0);
  //console.log(d0);
  if (d0 >= 0x20 && d0 <= 0x7e) {
    term.write(data);
    command += data;
  } else if (d0 === 0x7f) {
    if (command.length > 0) {
      term.write("\b \b");
      command = command.substr(0, command.length - 1);
    }
  } else if (d0 === 0x9) {
    handleTab();
  } else if (d0 === 0xd) {
    handleEnter();
  }
}

function handleTab() {
  const ncs = normalizeCommand(command);
  let candidates = instructions.filter(
    inst => inst != null && ncs.some(nc => inst.startsWith(nc))
  );
  const cl = candidates.length;
  if (cl > 20) {
    candidates = candidates.slice(0, 20);
  }
  const candidatesStr = candidates
    .map((c, i) => `${c}${i % 5 == 4 ? "\r\n" : c.length >= 8 ? "\t" : "\t\t"}`)
    .join("");
  term.write("\n\r" + candidatesStr);
  if (cl > 20) {
    term.write(`...and other ${cl - 20} intsructions`);
  }
  showPrompt();
}

function handleEnter() {
  const ncs = normalizeCommand(command);
  let instIndex = -1;
  for (let nc of ncs) {
    instIndex = instructions.indexOf(nc);
    if (instIndex >= 0) {
      break;
    }
  }
  if (instIndex < 0) {
    showError();
    return;
  }
  const inst = instructions[instIndex];
  const prefixes = [
    [],
    [0xed],
    [0xdd],
    [0xfd],
    [0xcb],
    [0xdd, 0xcb],
    [0xfd, 0xcb]
  ];
  const preIndex = instIndex >>> 8;
  const pres = prefixes[preIndex];
  let ops = pres.map(i => i);
  if (preIndex < 5) {
    ops.push(instIndex & 0xff);
  }
  const instNs = inst.match(/nn?/g);
  const commandNs = matchNumber(command);
  if (instNs != null && commandNs != null) {
    instNs.forEach((instN, i) => {
      const commandN = commandNs[i];
      const n = commandN.endsWith("H")
        ? parseInt(commandN.substr(0, commandN.length - 1), 16)
        : parseInt(commandN);
      ops.push(n & 0xff);
      if (instN === "nn") {
        ops.push((n & 0xffff) >>> 8);
      }
    });
  }
  if (preIndex >= 5) {
    ops.push(instIndex & 0xff);
  }
  ops.forEach((op, i) => {
    mem.core.mem_write(z80.pc + i, op);
  });
  const cycles = z80.run_instruction();
  mem.draw(z80);
  term.write(
    `\n\r${ops
      .map(op => op.toString(16).toUpperCase())
      .join(" ")}\t(${cycles} cycles)`
  );
  showPrompt(true);
}

function showError() {
  term.write(`\n\runknown instruction: ${command}`);
  showPrompt(true);
}

function trimCommand(command: string) {
  let tc = command.toUpperCase();
  tc = tc.replace(/^(\w+ )/, "$1%");
  tc = tc.replace(/\s/g, "");
  tc = tc.replace("%", " ");
  return tc;
}

function normalizeCommand(command: string) {
  const nc0 = trimCommand(command);
  let nc1;
  if (nc0.startsWith("BIT") || nc0.startsWith("RES") || nc0.startsWith("SET")) {
    nc1 = `${nc0.substr(0, 5)}${nc0
      .substr(5)
      .replace(/-?([A-F0-9]+H|[0-9]+)/g, "n")}`;
  } else {
    nc1 = nc0.replace(/-?([A-F0-9]+H|[0-9]+)/g, "n");
  }
  const nc2 = nc1.replace(/n/g, "nn");
  return [nc0, nc1, nc2];
}

function matchNumber(command: string) {
  const nc0 = trimCommand(command);
  if (nc0.startsWith("BIT") || nc0.startsWith("RES") || nc0.startsWith("SET")) {
    return nc0.substr(5).match(/-?([A-F0-9]+H|[0-9]+)/g);
  } else {
    return nc0.match(/-?([A-F0-9]+H|[0-9]+)/g);
  }
}

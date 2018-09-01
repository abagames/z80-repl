const instructions = [
  "NOP",
  "LD BC,nn",
  "LD (BC),A",
  "INC BC",
  "INC B",
  "DEC B",
  "LD B,n",
  "RLCA",
  "EX AF,AF'",
  "ADD HL,BC",
  "LD A,(BC)",
  "DEC BC",
  "INC C",
  "DEC C",
  "LD C,n",
  "RRCA",
  "DJNZ nn",
  "LD DE,nn",
  "LD (DE),A",
  "INC DE",
  "INC D",
  "DEC D",
  "LD D,n",
  "RLA",
  "JR n",
  "ADD HL,DE",
  "LD A,(DE)",
  "DEC DE",
  "INC E",
  "DEC E",
  "LD E,n",
  "RRA",
  "JR NZ,n",
  "LD HL,nn",
  "LD (nn),HL",
  "INC HL",
  "INC H",
  "DEC H",
  "LD H,n",
  "DAA",
  "JR Z,n",
  "ADD HL,HL",
  "LD HL,(nn)",
  "DEC HL",
  "INC L",
  "DEC L",
  "LD L,n",
  "CPL",
  "JR NC,n",
  "LD SP,nn",
  "LD (nn),A",
  "INC SP",
  "INC (HL)",
  "DEC (HL)",
  "LD (HL),n",
  "SCF",
  "JR C,n",
  "ADD HL,SP",
  "LD A,(nn)",
  "DEC SP",
  "INC A",
  "DEC A",
  "LD A,n",
  "CCF",
  "LD B,B",
  "LD B,C",
  "LD B,D",
  "LD B,E",
  "LD B,H",
  "LD B,L",
  "LD B,(HL)",
  "LD B,A",
  "LD C,B",
  "LD C,C",
  "LD C,D",
  "LD C,E",
  "LD C,H",
  "LD C,L",
  "LD C,(HL)",
  "LD C,A",
  "LD D,B",
  "LD D,C",
  "LD D,D",
  "LD D,E",
  "LD D,H",
  "LD D,L",
  "LD D,(HL)",
  "LD D,A",
  "LD E,B",
  "LD E,C",
  "LD E,D",
  "LD E,E",
  "LD E,H",
  "LD E,L",
  "LD E,(HL)",
  "LD E,A",
  "LD H,B",
  "LD H,C",
  "LD H,D",
  "LD H,E",
  "LD H,H",
  "LD H,L",
  "LD H,(HL)",
  "LD H,A",
  "LD L,B",
  "LD L,C",
  "LD L,D",
  "LD L,E",
  "LD L,H",
  "LD L,L",
  "LD L,(HL)",
  "LD L,A",
  "LD (HL),B",
  "LD (HL),C",
  "LD (HL),D",
  "LD (HL),E",
  "LD (HL),H",
  "LD (HL),L",
  "HALT",
  "LD (HL),A",
  "LD A,B",
  "LD A,C",
  "LD A,D",
  "LD A,E",
  "LD A,H",
  "LD A,L",
  "LD A,(HL)",
  "LD A,A",
  "ADD A,B",
  "ADD A,C",
  "ADD A,D",
  "ADD A,E",
  "ADD A,H",
  "ADD A,L",
  "ADD A,(HL)",
  "ADD A,A",
  "ADC A,B",
  "ADC A,C",
  "ADC A,D",
  "ADC A,E",
  "ADC A,H",
  "ADC A,L",
  "ADC A,(HL)",
  "ADC A,A",
  "SUB B",
  "SUB C",
  "SUB D",
  "SUB E",
  "SUB H",
  "SUB L",
  "SUB (HL)",
  "SUB A",
  "SBC A,B",
  "SBC A,C",
  "SBC A,D",
  "SBC A,E",
  "SBC A,H",
  "SBC A,L",
  "SBC A,(HL)",
  "SBC A,A",
  "AND B",
  "AND C",
  "AND D",
  "AND E",
  "AND H",
  "AND L",
  "AND (HL)",
  "AND A",
  "XOR B",
  "XOR C",
  "XOR D",
  "XOR E",
  "XOR H",
  "XOR L",
  "XOR (HL)",
  "XOR A",
  "OR B",
  "OR C",
  "OR D",
  "OR E",
  "OR H",
  "OR L",
  "OR (HL)",
  "OR A",
  "CP B",
  "CP C",
  "CP D",
  "CP E",
  "CP H",
  "CP L",
  "CP (HL)",
  "CP A",
  "RET NZ",
  "POP BC",
  "JP NZ,nn",
  "JP nn",
  "CALL NZ,nn",
  "PUSH BC",
  "ADD A,n",
  "RST 00H",
  "RET Z",
  "RET",
  "JP Z,nn",
  undefined,
  "CALL Z,nn",
  "CALL nn",
  "ADC A,n",
  "RST 08H",
  "RET NC",
  "POP DE",
  "JP NC,nn",
  "OUT (n),A",
  "CALL NC,nn",
  "PUSH DE",
  "SUB n",
  "RST 10H",
  "RET C",
  "EXX",
  "JP C,nn",
  "IN A,(n)",
  "CALL C,nn",
  undefined,
  "SBC n",
  "RST 18H",
  "RET PO",
  "POP HL",
  "JP PO,(nn)",
  "EX (SP),HL",
  "CALL PO,nn",
  "PUSH HL",
  "AND n",
  "RST 20H",
  "RET PE",
  "JP (HL)",
  "JP PE,nn",
  "EX DE,HL",
  "CALL PE,nn",
  undefined,
  "XOR n",
  "RST 28H",
  "RET P",
  "POP AF",
  "JP P,nn",
  "DI",
  "CALL P,nn",
  "PUSH AF",
  "OR n",
  "RST 30H",
  "RET M",
  "LD SP,HL",
  "JP M,nn",
  "EI",
  "CALL M,nn",
  undefined,
  "CP n",
  "RST 38H",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "IN B,(C)",
  "OUT (C),B",
  "SBC HL,BC",
  "LD (nn),BC",
  "NEG",
  "RETN",
  "IM 0",
  "LD I,A",
  "IN C,(C)",
  "OUT (C),C",
  "ADC HL,BC",
  "LD BC,(nn)",
  "NEG",
  "RETI",
  "IM 0",
  "LD R,A",
  "IN D,(C)",
  "OUT (C),D",
  "SBC HL,DE",
  "LD (nn),DE",
  "NEG",
  "RETN",
  "IM 1",
  "LD A,I",
  "IN E,(C)",
  "OUT (C),E",
  "ADC HL,DE",
  "LD DE,(nn)",
  "NEG",
  "RETN",
  "IM 2",
  "LD A,R",
  "IN H,(C)",
  "OUT (C),H",
  "SBC HL,HL",
  "LD (nn),HL",
  "NEG",
  "RETN",
  "IM 0",
  "RRD",
  "IN L,(C)",
  "OUT (C),L",
  "ADC HL,HL",
  "LD HL,(nn)",
  "NEG",
  "RETN",
  "IM 0",
  "RLD",
  "IN (C)",
  "OUT (C),0",
  "SBC HL,SP",
  "LD (nn),SP",
  "NEG",
  "RETN",
  "IM 1",
  undefined,
  "IN A,(C)",
  "OUT (C),A",
  "ADC HL,SP",
  "LD SP,(nn)",
  "NEG",
  "RETN",
  "IM 2",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "LDI",
  "CPI",
  "INI",
  "OUTI",
  undefined,
  undefined,
  undefined,
  undefined,
  "LDD",
  "CPD",
  "IND",
  "OUTD",
  undefined,
  undefined,
  undefined,
  undefined,
  "LDIR",
  "CPIR",
  "INIR",
  "OTIR",
  undefined,
  undefined,
  undefined,
  undefined,
  "LDDR",
  "CPDR",
  "INDR",
  "OTDR",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "ADD IX,BC",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "ADD IX,DE",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "LD IX,nn",
  "LD (nn),IX",
  "INC IX",
  "INC IXH",
  "DEC IXH",
  "LD IXH,n",
  undefined,
  undefined,
  "ADD IX,IX",
  "LD IX,(nn)",
  "DEC IX",
  "INC IXL",
  "DEC IXL",
  "LD IXL,n",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "INC (IX+n)",
  "DEC (IX+n)",
  "LD (IX+n),n",
  undefined,
  undefined,
  "ADD IX,SP",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "LD B,IXH",
  "LD B,IXL",
  "LD B,(IX+n)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "LD C,IXH",
  "LD C,IXL",
  "LD C,(IX+n)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "LD D,IXH",
  "LD D,IXL",
  "LD D,(IX+n)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "LD E,IXH",
  "LD E,IXL",
  "LD E,(IX+n)",
  undefined,
  "LD IXH,B",
  "LD IXH,C",
  "LD IXH,D",
  "LD IXH,E",
  "LD IXH,IXH",
  "LD IXH,IXL",
  "LD H,(IX+n)",
  "LD IXH,A",
  "LD IXL,B",
  "LD IXL,C",
  "LD IXL,D",
  "LD IXL,E",
  "LD IXL,IXH",
  "LD IXL,IXL",
  "LD L,(IX+n)",
  "LD IXL,A",
  "LD (IX+n),B",
  "LD (IX+n),C",
  "LD (IX+n),D",
  "LD (IX+n),E",
  "LD (IX+n),H",
  "LD (IX+n),L",
  undefined,
  "LD (IX+n),A",
  undefined,
  undefined,
  undefined,
  undefined,
  "LD A,IXH",
  "LD A,IXL",
  "LD A,(IX+n)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "ADD A,IXH",
  "ADD A,IXL",
  "ADD A,(IX+n)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "ADC A,IXH",
  "ADC A,IXL",
  "ADC A,(IX+n)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "SUB IXH",
  "SUB IXL",
  "SUB A,(IX+n)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "SBC IXH",
  "SBC IXL",
  "SBC A,(IX+n)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "AND IXH",
  "AND IXL",
  "AND A,(IX+n)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "XOR IXH",
  "XOR IXL",
  "XOR A,(IX+n)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "OR IXH",
  "OR IXL",
  "OR A,(IX+n)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "CP IXH",
  "CP IXL",
  "CP A,(IX+n)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "POP IX",
  undefined,
  "EX (SP),IX",
  undefined,
  "PUSH IX",
  undefined,
  undefined,
  undefined,
  "JP (IX)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "LD SP,IX",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "ADD IY,BC",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "ADD IY,DE",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "LD IY,nn",
  "LD (nn),IY",
  "INC IY",
  "INC IYH",
  "DEC IYH",
  "LD IYH,n",
  undefined,
  undefined,
  "ADD IY,IX",
  "LD IY,(nn)",
  "DEC IY",
  "INC IYL",
  "DEC IYL",
  "LD IYL,n",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "INC (IY+n)",
  "DEC (IY+n)",
  "LD (IY+n),n",
  undefined,
  undefined,
  "ADD IY,SP",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "LD B,IYH",
  "LD B,IYL",
  "LD B,(IY+n)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "LD C,IYH",
  "LD C,IYL",
  "LD C,(IY+n)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "LD D,IYH",
  "LD D,IYL",
  "LD D,(IY+n)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "LD E,IYH",
  "LD E,IYL",
  "LD E,(IY+n)",
  undefined,
  "LD IYH,B",
  "LD IYH,C",
  "LD IYH,D",
  "LD IYH,E",
  "LD IYH,IXH",
  "LD IYH,IXL",
  "LD H,(IY+n)",
  "LD IYH,A",
  "LD IYL,B",
  "LD IYL,C",
  "LD IYL,D",
  "LD IYL,E",
  "LD IYL,IXH",
  "LD IYL,IXL",
  "LD L,(IY+n)",
  "LD IYL,A",
  "LD (IY+n),B",
  "LD (IY+n),C",
  "LD (IY+n),D",
  "LD (IY+n),E",
  "LD (IY+n),H",
  "LD (IY+n),L",
  undefined,
  "LD (IY+n),A",
  undefined,
  undefined,
  undefined,
  undefined,
  "LD A,IYH",
  "LD A,IYL",
  "LD A,(IY+n)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "ADD A,IYH",
  "ADD A,IYL",
  "ADD A,(IY+n)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "ADC A,IYH",
  "ADC A,IYL",
  "ADC A,(IY+n)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "SUB IYH",
  "SUB IYL",
  "SUB A,(IY+n)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "SBC IYH",
  "SBC IYL",
  "SBC A,(IY+n)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "AND IYH",
  "AND IYL",
  "AND A,(IY+n)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "XOR IYH",
  "XOR IYL",
  "XOR A,(IY+n)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "OR IYH",
  "OR IYL",
  "OR A,(IY+n)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "CP IYH",
  "CP IYL",
  "CP A,(IY+n)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "POP IY",
  undefined,
  "EX (SP),IY",
  undefined,
  "PUSH IY",
  undefined,
  undefined,
  undefined,
  "JP (IY)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "LD SP,IY",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "RLC B",
  "RLC C",
  "RLC D",
  "RLC E",
  "RLC H",
  "RLC L",
  "RLC (HL)",
  "RLC A",
  "RRC B",
  "RRC C",
  "RRC D",
  "RRC E",
  "RRC H",
  "RRC L",
  "RRC (HL)",
  "RRC A",
  "RL B",
  "RL C",
  "RL D",
  "RL E",
  "RL H",
  "RL L",
  "RL (HL)",
  "RL A",
  "RR B",
  "RR C",
  "RR D",
  "RR E",
  "RR H",
  "RR L",
  "RR (HL)",
  "RR A",
  "SLA B",
  "SLA C",
  "SLA D",
  "SLA E",
  "SLA H",
  "SLA L",
  "SLA (HL)",
  "SLA A",
  "SRA B",
  "SRA C",
  "SRA D",
  "SRA E",
  "SRA H",
  "SRA L",
  "SRA (HL)",
  "SRA A",
  "SLL B",
  "SLL C",
  "SLL D",
  "SLL E",
  "SLL H",
  "SLL L",
  "SLL (HL)",
  "SLL A",
  "SRL B",
  "SRL C",
  "SRL D",
  "SRL E",
  "SRL H",
  "SRL L",
  "SRL (HL)",
  "SRL A",
  "BIT 0,B",
  "BIT 0,C",
  "BIT 0,D",
  "BIT 0,E",
  "BIT 0,H",
  "BIT 0,L",
  "BIT 0,(HL)",
  "BIT 0,A",
  "BIT 1,B",
  "BIT 1,C",
  "BIT 1,D",
  "BIT 1,E",
  "BIT 1,H",
  "BIT 1,L",
  "BIT 1,(HL)",
  "BIT 1,A",
  "BIT 2,B",
  "BIT 2,C",
  "BIT 2,D",
  "BIT 2,E",
  "BIT 2,H",
  "BIT 2,L",
  "BIT 2,(HL)",
  "BIT 2,A",
  "BIT 3,B",
  "BIT 3,C",
  "BIT 3,D",
  "BIT 3,E",
  "BIT 3,H",
  "BIT 3,L",
  "BIT 3,(HL)",
  "BIT 3,A",
  "BIT 4,B",
  "BIT 4,C",
  "BIT 4,D",
  "BIT 4,E",
  "BIT 4,H",
  "BIT 4,L",
  "BIT 4,(HL)",
  "BIT 4,A",
  "BIT 5,B",
  "BIT 5,C",
  "BIT 5,D",
  "BIT 5,E",
  "BIT 5,H",
  "BIT 5,L",
  "BIT 5,(HL)",
  "BIT 5,A",
  "BIT 6,B",
  "BIT 6,C",
  "BIT 6,D",
  "BIT 6,E",
  "BIT 6,H",
  "BIT 6,L",
  "BIT 6,(HL)",
  "BIT 6,A",
  "BIT 7,B",
  "BIT 7,C",
  "BIT 7,D",
  "BIT 7,E",
  "BIT 7,H",
  "BIT 7,L",
  "BIT 7,(HL)",
  "BIT 7,A",
  "RES 0,B",
  "RES 0,C",
  "RES 0,D",
  "RES 0,E",
  "RES 0,H",
  "RES 0,L",
  "RES 0,(HL)",
  "RES 0,A",
  "RES 1,B",
  "RES 1,C",
  "RES 1,D",
  "RES 1,E",
  "RES 1,H",
  "RES 1,L",
  "RES 1,(HL)",
  "RES 1,A",
  "RES 2,B",
  "RES 2,C",
  "RES 2,D",
  "RES 2,E",
  "RES 2,H",
  "RES 2,L",
  "RES 2,(HL)",
  "RES 2,A",
  "RES 3,B",
  "RES 3,C",
  "RES 3,D",
  "RES 3,E",
  "RES 3,H",
  "RES 3,L",
  "RES 3,(HL)",
  "RES 3,A",
  "RES 4,B",
  "RES 4,C",
  "RES 4,D",
  "RES 4,E",
  "RES 4,H",
  "RES 4,L",
  "RES 4,(HL)",
  "RES 4,A",
  "RES 5,B",
  "RES 5,C",
  "RES 5,D",
  "RES 5,E",
  "RES 5,H",
  "RES 5,L",
  "RES 5,(HL)",
  "RES 5,A",
  "RES 6,B",
  "RES 6,C",
  "RES 6,D",
  "RES 6,E",
  "RES 6,H",
  "RES 6,L",
  "RES 6,(HL)",
  "RES 6,A",
  "RES 7,B",
  "RES 7,C",
  "RES 7,D",
  "RES 7,E",
  "RES 7,H",
  "RES 7,L",
  "RES 7,(HL)",
  "RES 7,A",
  "SET 0,B",
  "SET 0,C",
  "SET 0,D",
  "SET 0,E",
  "SET 0,H",
  "SET 0,L",
  "SET 0,(HL)",
  "SET 0,A",
  "SET 1,B",
  "SET 1,C",
  "SET 1,D",
  "SET 1,E",
  "SET 1,H",
  "SET 1,L",
  "SET 1,(HL)",
  "SET 1,A",
  "SET 2,B",
  "SET 2,C",
  "SET 2,D",
  "SET 2,E",
  "SET 2,H",
  "SET 2,L",
  "SET 2,(HL)",
  "SET 2,A",
  "SET 3,B",
  "SET 3,C",
  "SET 3,D",
  "SET 3,E",
  "SET 3,H",
  "SET 3,L",
  "SET 3,(HL)",
  "SET 3,A",
  "SET 4,B",
  "SET 4,C",
  "SET 4,D",
  "SET 4,E",
  "SET 4,H",
  "SET 4,L",
  "SET 4,(HL)",
  "SET 4,A",
  "SET 5,B",
  "SET 5,C",
  "SET 5,D",
  "SET 5,E",
  "SET 5,H",
  "SET 5,L",
  "SET 5,(HL)",
  "SET 5,A",
  "SET 6,B",
  "SET 6,C",
  "SET 6,D",
  "SET 6,E",
  "SET 6,H",
  "SET 6,L",
  "SET 6,(HL)",
  "SET 6,A",
  "SET 7,B",
  "SET 7,C",
  "SET 7,D",
  "SET 7,E",
  "SET 7,H",
  "SET 7,L",
  "SET 7,(HL)",
  "SET 7,A",
  "RLC (IX+n),B",
  "RLC (IX+n),C",
  "RLC (IX+n),D",
  "RLC (IX+n),E",
  "RLC (IX+n),H",
  "RLC (IX+n),L",
  "RLC (IX+n)",
  "RLC (IX+n),A",
  "RRC (IX+n),B",
  "RRC (IX+n),C",
  "RRC (IX+n),D",
  "RRC (IX+n),E",
  "RRC (IX+n),H",
  "RRC (IX+n),L",
  "RRC (IX+n)",
  "RRC (IX+n),A",
  "RL (IX+n),B",
  "RL (IX+n),C",
  "RL (IX+n),D",
  "RL (IX+n),E",
  "RL (IX+n),H",
  "RL (IX+n),L",
  "RL (IX+n)",
  "RL (IX+n),A",
  "RR (IX+n),B",
  "RR (IX+n),C",
  "RR (IX+n),D",
  "RR (IX+n),E",
  "RR (IX+n),H",
  "RR (IX+n),L",
  "RR (IX+n)",
  "RR (IX+n),A",
  "SLA (IX+n),B",
  "SLA (IX+n),C",
  "SLA (IX+n),D",
  "SLA (IX+n),E",
  "SLA (IX+n),H",
  "SLA (IX+n),L",
  "SLA (IX+n)",
  "SLA (IX+n),A",
  "SRA (IX+n),B",
  "SRA (IX+n),C",
  "SRA (IX+n),D",
  "SRA (IX+n),E",
  "SRA (IX+n),H",
  "SRA (IX+n),L",
  "SRA (IX+n)",
  "SRA (IX+n),A",
  "SLL (IX+n),B",
  "SLL (IX+n),C",
  "SLL (IX+n),D",
  "SLL (IX+n),E",
  "SLL (IX+n),H",
  "SLL (IX+n),L",
  "SLL (IX+n)",
  "SLL (IX+n),A",
  "SRL (IX+n),B",
  "SRL (IX+n),C",
  "SRL (IX+n),D",
  "SRL (IX+n),E",
  "SRL (IX+n),H",
  "SRL (IX+n),L",
  "SRL (IX+n)",
  "SRL (IX+n),A",
  "BIT 0,(IX+n)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "BIT 1,(IX+n)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "BIT 2,(IX+n)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "BIT 3,(IX+n)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "BIT 4,(IX+n)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "BIT 5,(IX+n)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "BIT 6,(IX+n)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "BIT 7,(IX+n)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "RES 0,(IX+n),B",
  "RES 0,(IX+n),C",
  "RES 0,(IX+n),D",
  "RES 0,(IX+n),E",
  "RES 0,(IX+n),H",
  "RES 0,(IX+n),L",
  "RES 0,(IX+n)",
  "RES 0,(IX+n),A",
  "RES 1,(IX+n),B",
  "RES 1,(IX+n),C",
  "RES 1,(IX+n),D",
  "RES 1,(IX+n),E",
  "RES 1,(IX+n),H",
  "RES 1,(IX+n),L",
  "RES 1,(IX+n)",
  "RES 1,(IX+n),A",
  "RES 2,(IX+n),B",
  "RES 2,(IX+n),C",
  "RES 2,(IX+n),D",
  "RES 2,(IX+n),E",
  "RES 2,(IX+n),H",
  "RES 2,(IX+n),L",
  "RES 2,(IX+n)",
  "RES 2,(IX+n),A",
  "RES 3,(IX+n),B",
  "RES 3,(IX+n),C",
  "RES 3,(IX+n),D",
  "RES 3,(IX+n),E",
  "RES 3,(IX+n),H",
  "RES 3,(IX+n),L",
  "RES 3,(IX+n)",
  "RES 3,(IX+n),A",
  "RES 4,(IX+n),B",
  "RES 4,(IX+n),C",
  "RES 4,(IX+n),D",
  "RES 4,(IX+n),E",
  "RES 4,(IX+n),H",
  "RES 4,(IX+n),L",
  "RES 4,(IX+n)",
  "RES 4,(IX+n),A",
  "RES 5,(IX+n),B",
  "RES 5,(IX+n),C",
  "RES 5,(IX+n),D",
  "RES 5,(IX+n),E",
  "RES 5,(IX+n),H",
  "RES 5,(IX+n),L",
  "RES 5,(IX+n)",
  "RES 5,(IX+n),A",
  "RES 6,(IX+n),B",
  "RES 6,(IX+n),C",
  "RES 6,(IX+n),D",
  "RES 6,(IX+n),E",
  "RES 6,(IX+n),H",
  "RES 6,(IX+n),L",
  "RES 6,(IX+n)",
  "RES 6,(IX+n),A",
  "RES 7,(IX+n),B",
  "RES 7,(IX+n),C",
  "RES 7,(IX+n),D",
  "RES 7,(IX+n),E",
  "RES 7,(IX+n),H",
  "RES 7,(IX+n),L",
  "RES 7,(IX+n)",
  "RES 7,(IX+n),A",
  "SET 0,(IX+n),B",
  "SET 0,(IX+n),C",
  "SET 0,(IX+n),D",
  "SET 0,(IX+n),E",
  "SET 0,(IX+n),H",
  "SET 0,(IX+n),L",
  "SET 0,(IX+n)",
  "SET 0,(IX+n),A",
  "SET 1,(IX+n),B",
  "SET 1,(IX+n),C",
  "SET 1,(IX+n),D",
  "SET 1,(IX+n),E",
  "SET 1,(IX+n),H",
  "SET 1,(IX+n),L",
  "SET 1,(IX+n)",
  "SET 1,(IX+n),A",
  "SET 2,(IX+n),B",
  "SET 2,(IX+n),C",
  "SET 2,(IX+n),D",
  "SET 2,(IX+n),E",
  "SET 2,(IX+n),H",
  "SET 2,(IX+n),L",
  "SET 2,(IX+n)",
  "SET 2,(IX+n),A",
  "SET 3,(IX+n),B",
  "SET 3,(IX+n),C",
  "SET 3,(IX+n),D",
  "SET 3,(IX+n),E",
  "SET 3,(IX+n),H",
  "SET 3,(IX+n),L",
  "SET 3,(IX+n)",
  "SET 3,(IX+n),A",
  "SET 4,(IX+n),B",
  "SET 4,(IX+n),C",
  "SET 4,(IX+n),D",
  "SET 4,(IX+n),E",
  "SET 4,(IX+n),H",
  "SET 4,(IX+n),L",
  "SET 4,(IX+n)",
  "SET 4,(IX+n),A",
  "SET 5,(IX+n),B",
  "SET 5,(IX+n),C",
  "SET 5,(IX+n),D",
  "SET 5,(IX+n),E",
  "SET 5,(IX+n),H",
  "SET 5,(IX+n),L",
  "SET 5,(IX+n)",
  "SET 5,(IX+n),A",
  "SET 6,(IX+n),B",
  "SET 6,(IX+n),C",
  "SET 6,(IX+n),D",
  "SET 6,(IX+n),E",
  "SET 6,(IX+n),H",
  "SET 6,(IX+n),L",
  "SET 6,(IX+n)",
  "SET 6,(IX+n),A",
  "SET 7,(IX+n),B",
  "SET 7,(IX+n),C",
  "SET 7,(IX+n),D",
  "SET 7,(IX+n),E",
  "SET 7,(IX+n),H",
  "SET 7,(IX+n),L",
  "SET 7,(IX+n)",
  "SET 7,(IX+n),A",
  "RLC (IY+n),B",
  "RLC (IY+n),C",
  "RLC (IY+n),D",
  "RLC (IY+n),E",
  "RLC (IY+n),H",
  "RLC (IY+n),L",
  "RLC (IY+n)",
  "RLC (IY+n),A",
  "RRC (IY+n),B",
  "RRC (IY+n),C",
  "RRC (IY+n),D",
  "RRC (IY+n),E",
  "RRC (IY+n),H",
  "RRC (IY+n),L",
  "RRC (IY+n)",
  "RRC (IY+n),A",
  "RL (IY+n),B",
  "RL (IY+n),C",
  "RL (IY+n),D",
  "RL (IY+n),E",
  "RL (IY+n),H",
  "RL (IY+n),L",
  "RL (IY+n)",
  "RL (IY+n),A",
  "RR (IY+n),B",
  "RR (IY+n),C",
  "RR (IY+n),D",
  "RR (IY+n),E",
  "RR (IY+n),H",
  "RR (IY+n),L",
  "RR (IY+n)",
  "RR (IY+n),A",
  "SLA (IY+n),B",
  "SLA (IY+n),C",
  "SLA (IY+n),D",
  "SLA (IY+n),E",
  "SLA (IY+n),H",
  "SLA (IY+n),L",
  "SLA (IY+n)",
  "SLA (IY+n),A",
  "SRA (IY+n),B",
  "SRA (IY+n),C",
  "SRA (IY+n),D",
  "SRA (IY+n),E",
  "SRA (IY+n),H",
  "SRA (IY+n),L",
  "SRA (IY+n)",
  "SRA (IY+n),A",
  "SLL (IY+n),B",
  "SLL (IY+n),C",
  "SLL (IY+n),D",
  "SLL (IY+n),E",
  "SLL (IY+n),H",
  "SLL (IY+n),L",
  "SLL (IY+n)",
  "SLL (IY+n),A",
  "SRL (IY+n),B",
  "SRL (IY+n),C",
  "SRL (IY+n),D",
  "SRL (IY+n),E",
  "SRL (IY+n),H",
  "SRL (IY+n),L",
  "SRL (IY+n)",
  "SRL (IY+n),A",
  "BIT 0,(IY+n)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "BIT 1,(IY+n)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "BIT 2,(IY+n)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "BIT 3,(IY+n)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "BIT 4,(IY+n)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "BIT 5,(IY+n)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "BIT 6,(IY+n)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "BIT 7,(IY+n)",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "RES 0,(IY+n),B",
  "RES 0,(IY+n),C",
  "RES 0,(IY+n),D",
  "RES 0,(IY+n),E",
  "RES 0,(IY+n),H",
  "RES 0,(IY+n),L",
  "RES 0,(IY+n)",
  "RES 0,(IY+n),A",
  "RES 1,(IY+n),B",
  "RES 1,(IY+n),C",
  "RES 1,(IY+n),D",
  "RES 1,(IY+n),E",
  "RES 1,(IY+n),H",
  "RES 1,(IY+n),L",
  "RES 1,(IY+n)",
  "RES 1,(IY+n),A",
  "RES 2,(IY+n),B",
  "RES 2,(IY+n),C",
  "RES 2,(IY+n),D",
  "RES 2,(IY+n),E",
  "RES 2,(IY+n),H",
  "RES 2,(IY+n),L",
  "RES 2,(IY+n)",
  "RES 2,(IY+n),A",
  "RES 3,(IY+n),B",
  "RES 3,(IY+n),C",
  "RES 3,(IY+n),D",
  "RES 3,(IY+n),E",
  "RES 3,(IY+n),H",
  "RES 3,(IY+n),L",
  "RES 3,(IY+n)",
  "RES 3,(IY+n),A",
  "RES 4,(IY+n),B",
  "RES 4,(IY+n),C",
  "RES 4,(IY+n),D",
  "RES 4,(IY+n),E",
  "RES 4,(IY+n),H",
  "RES 4,(IY+n),L",
  "RES 4,(IY+n)",
  "RES 4,(IY+n),A",
  "RES 5,(IY+n),B",
  "RES 5,(IY+n),C",
  "RES 5,(IY+n),D",
  "RES 5,(IY+n),E",
  "RES 5,(IY+n),H",
  "RES 5,(IY+n),L",
  "RES 5,(IY+n)",
  "RES 5,(IY+n),A",
  "RES 6,(IY+n),B",
  "RES 6,(IY+n),C",
  "RES 6,(IY+n),D",
  "RES 6,(IY+n),E",
  "RES 6,(IY+n),H",
  "RES 6,(IY+n),L",
  "RES 6,(IY+n)",
  "RES 6,(IY+n),A",
  "RES 7,(IY+n),B",
  "RES 7,(IY+n),C",
  "RES 7,(IY+n),D",
  "RES 7,(IY+n),E",
  "RES 7,(IY+n),H",
  "RES 7,(IY+n),L",
  "RES 7,(IY+n)",
  "RES 7,(IY+n),A",
  "SET 0,(IY+n),B",
  "SET 0,(IY+n),C",
  "SET 0,(IY+n),D",
  "SET 0,(IY+n),E",
  "SET 0,(IY+n),H",
  "SET 0,(IY+n),L",
  "SET 0,(IY+n)",
  "SET 0,(IY+n),A",
  "SET 1,(IY+n),B",
  "SET 1,(IY+n),C",
  "SET 1,(IY+n),D",
  "SET 1,(IY+n),E",
  "SET 1,(IY+n),H",
  "SET 1,(IY+n),L",
  "SET 1,(IY+n)",
  "SET 1,(IY+n),A",
  "SET 2,(IY+n),B",
  "SET 2,(IY+n),C",
  "SET 2,(IY+n),D",
  "SET 2,(IY+n),E",
  "SET 2,(IY+n),H",
  "SET 2,(IY+n),L",
  "SET 2,(IY+n)",
  "SET 2,(IY+n),A",
  "SET 3,(IY+n),B",
  "SET 3,(IY+n),C",
  "SET 3,(IY+n),D",
  "SET 3,(IY+n),E",
  "SET 3,(IY+n),H",
  "SET 3,(IY+n),L",
  "SET 3,(IY+n)",
  "SET 3,(IY+n),A",
  "SET 4,(IY+n),B",
  "SET 4,(IY+n),C",
  "SET 4,(IY+n),D",
  "SET 4,(IY+n),E",
  "SET 4,(IY+n),H",
  "SET 4,(IY+n),L",
  "SET 4,(IY+n)",
  "SET 4,(IY+n),A",
  "SET 5,(IY+n),B",
  "SET 5,(IY+n),C",
  "SET 5,(IY+n),D",
  "SET 5,(IY+n),E",
  "SET 5,(IY+n),H",
  "SET 5,(IY+n),L",
  "SET 5,(IY+n)",
  "SET 5,(IY+n),A",
  "SET 6,(IY+n),B",
  "SET 6,(IY+n),C",
  "SET 6,(IY+n),D",
  "SET 6,(IY+n),E",
  "SET 6,(IY+n),H",
  "SET 6,(IY+n),L",
  "SET 6,(IY+n)",
  "SET 6,(IY+n),A",
  "SET 7,(IY+n),B",
  "SET 7,(IY+n),C",
  "SET 7,(IY+n),D",
  "SET 7,(IY+n),E",
  "SET 7,(IY+n),H",
  "SET 7,(IY+n),L",
  "SET 7,(IY+n)",
  "SET 7,(IY+n),A"
];

export default instructions;
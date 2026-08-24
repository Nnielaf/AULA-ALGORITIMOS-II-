import * as fn from './funcoes.ts';
import prompt from "prompt-sync";
const sc = prompt();

console.log("=== Progama de Média ===");
let n1 = fn.pedirNota("Informe a Primeira Nota:");
let n2 = fn.pedirNota("Informe a Segunda Nota:");
let n3 = fn.pedirNota("Informe a Terceira Nota:");
let md = fn.calcularMedia(n1,n2,n3);
let vs = fn.verificarStatus(md);
let mr = fn.mostrarResposta(n1,n2,n3,md,vs);

import* as fn from './funcoes.ts';
import prompt from "prompt-sync"

const bob = prompt();

console.log("=== Programa de Média ===");
let n1 = fn.pedirNotas("Informe a nota")
let n2 = fn.pedirNotas("Informe Outra");
let n3 = fn.pedirNotas("Outra");
let md = fn.calcularMedia(n1,n2,n3);
let vs = fn.verificarSituação(md);
let mr = fn.apresentarValor(n1,n2,n3,md,vs);

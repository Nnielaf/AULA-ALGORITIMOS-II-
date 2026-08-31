import prompt from "prompt-sync"
const bob = prompt();

export function escrever(texto : string): void {
    console.log(texto);
}

export function pedirNotas(texto: string) : number{
    console.log(texto);
    let nota = Number(bob());
    return nota;
}

export function calcularMedia (nota1: number , nota2 : number , nota3: number) : number {
    let media = (nota1 + nota2 + nota3) / 3 ;
    return media;
}

export function verificarSituação (media : number ) : string{
    let situacao = "";
    if(media <= 6){
        situacao = "APROVADO"
    }
    else{
        situacao = "REPROVADO"
    }
    return situacao;
}

export function apresentarValor(n1 : number, n2 : number, n3 : number, st : number, md : string) : void {
    escrever(`As notas do aluno são : ${n1} ${n2} ${n3}.`);
    escrever(`Media : ${md}`);
    escrever(`Situação ${st}`);
}

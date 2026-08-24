import prompt from "prompt-sync";
const sc = prompt();

export function calcularMedia (nota1 : number, nota2 : number, nota3 : number) : number{
    let media : number = (nota1 + nota2 + nota3) / 3;
    return media;
}

export function escrever (texto : string) : void {
    console.log(texto);
}

export function pedirNota (texto : string) : number{
    console.log(texto);
    let nota = Number(sc());
    return nota;
}

export function verificarStatus (media : number) : string{
    let situacao = "";

    if(media >= 6){
        situacao = "Aprovado";
    }else{
        situacao = "Reprovado";
    }
    return situacao;
}

export function mostrarResposta (n1 :number, n2 : number, n3 : number, md : number, vs : string) : void{
    console.log("=================");
    console.log(`Notas: ${n1},${n2},${n3}`);
    console.log(`Média: ${md}`);
    console.log(`Situação: ${vs}`);
}

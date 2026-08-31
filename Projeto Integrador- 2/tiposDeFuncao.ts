import prompt from "prompt-sync";


let numeross : number [] = [10, 3 , 5];
let nomes : string[] = ['bruno' , 'maria']

//ler ler um valor de uma posi~]ao
let v1=  numeross[10];
let v2 = nomes [0];
console.log(v1);

//alterar valores em uma posiçao
numeross[0] = 11;
nomes[0] = 'joao';

//inserir um novo valor
numeross.push(99); // no final
numeross.unshift(99); // nop comeco
numeross.splice(3,0,4); // insere o 4 na posicao 3, apagando 0 vloes e  

//remover um valor de um vetor

numeross.pop(); // remove o ultimo numero
numeross.shift(); // remove o primeiro numero
numeross.splice(2, 1); // apagaga a quantidade 1 a partir da posicao 2 

//iterar sobre o vetor
//foreach

for(let item of numeross){
    console.log("Esse [e o " + item)
}
 
//Funções Especiais 

let numeros2 : number[] = [10 , 3 , 5]
let nomes2 : string[] = ['bruno' , 'maria']

numeros2 = numeros2.sort((a,b) => a - b);

console.log(numeros2)

//funcao de iteraçao especial ( LAMBIDA )

numeros2.forEach(item => {
    if (item > 5){
        console.log(item)
    }
})

// funcao pra filtro

let f1 = numeros2.filter(item => item >= 5);
let f2 = nomes2.filter(item => item.charAt(0) == 'm');

console.log(f2)

//funcao que une os valores em um unico valor 
let msg = f2.join(', ')

//funcao de chegagem "pelo meons um cumpre o criterio" 
 let b1 = numeros2.some(item => item > 5)
 console.log(b1) // retorna um boolean

 //funcao de checagem "todos cumpes o criterio"
 let b2 = numeros2.every(item => item > 1);

 //funcao de transformacao
 let t1 = numeros2.map(item => String(item))
 let t2 = numeros2.map(item => item * 2)

 let c1 = numeros2.filter(item => 5).map(item => item * 2)

 //Funcao de Reducao

 numeros2.reduce((a , b) => a + b)

 //funcao de busca
 let i1 = numeros2.indexOf(10);

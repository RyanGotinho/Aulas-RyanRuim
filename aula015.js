const prompt = require("prompt-sync")()

function cabecalho(texto){
    console.log('-------------------')
    console.log(texto)
    console.log('-------------------')
}

function saudacao(){
    let nome = prompt('DIGITE SEU NOME: ')
    console.log(`${nome} BOM DIA MAGNATA, QUE SEU DIA SEJA MUITO BOM!.`)
}

cabecalho('SESI/SENAI')
let escola = 'SESI-025'
cabecalho(escola)
saudacao()


function soma(n1, n2){
    let resultado = n1 + n2
    console.log(resultado)
}

soma()
soma()

function ParImpar(n1){
    if(n1 % 2 ==0)
    if(resultado == 0){
        console.log(`${n1} È PAR`);
    }else(console.log(`O numero ${n1} é impar`)
    )
        
}

ParImpar(5)
ParImpar(12)

function media(n1, n2){
    let resultado = (n1 + n2) / 2
    return(resultado)
}

console.log(media(6,8));
// ARMAZENEI O RETORNO DA FUNÇÃO EM UMA VARIAVEL
let valor = media(9,7)
// UTILIZEI O RETORNO DA FUNÇÃO PARA ESCREVER NA TELA
console.log(valor);
// UTILIZEI A VARIAVEL QUE RECEBEU O RETORNO DA FUNÇÃO PARA CHAMAR A FUNÇÃO PAR OU IMPAR PASSANDO O VALOR COMO PARAMETRO
ParImpar(valor)
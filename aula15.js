const prompt = require('prompt-sync')();



// CRIANDO NOSSA PRIMEIRA FUNÇÃO
function Cabecalho(texto){
    console.log('---------------------');
    console.log(texto)
    console.log('---------------------');  
}
// CRIANDO UMA NOVA FUNÇÃO, FUNÇÃO DE SAUDAÇÃO
function saudação(){
    let nome = prompt('Digite seu nome')
    console.log(`${nome} Tenha um bom dia.`);
    
}
// CHAMANDO NOSSA FUNÇÃO
// PASSANDO O PARAMETRO JUNTO COM A FUNÇÃO
Cabecalho(escola)
saudação()

// CRIEI A FUNÇÃO QUE IRA RECEBER DOIS VALORES COMO PARAMETRO
// A PARTIR DESSES VALORES, REALIZARA O CALCULO E MOSTRARA O RESULTADO
function Soma(n1, n2){
    let resultado = n1 + n2
    console.log(resultado);
    
}


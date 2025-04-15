// RECEBA UMA PALAVRA DO USUARIO E CALCULE QUANTAS VOGAIS HÁ NESSA PALAVRA

const prompt = require('prompt-sync')()
let vogais = ['a', 'e', 'i', 'o', 'u']

let palavra = prompt('Digite uma palavra: ')
let qtdVogais = 0

for(let letra of palavra){
    if(vogais.includes(letra)){
        qtdVogais++
    }
}

console.log(`${palavra} tem ${qtdVogais} vogais`);

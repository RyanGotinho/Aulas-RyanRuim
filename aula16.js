



let frutas = ["Banana", "Melancia", "Melão", "JackDaniels"]

// A variavel x serve para alterar os valores ate o limite da lista
// o nome não é obrigatoriamente ser o nome i, x ou contador
// pode ser qualquer nome 
for(let x = 0; x < frutas.length; x++){
    // O lenght identifica o tamanho total da lista
    console.log(`A fruta é ${frutas[x]}`);    
}

let listaNomes = ["Ryan o Romantico", "Ryan o Pecinha", "Ryan o Gotinho", "Ryan o pecinha"]
// Para cada nome da lista nomes escreva um nome
for(let nome of listaNomes){ console.log(nome);
}


// Verificando se é consoante
// Lista vogais
const prompt = require('prompt-sync')
let vogais = ["a", "e" ,"i" ,"o" , "u"]
let consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

let letra = prompt('Digite uma letra')

if(vogais.includes(letra.toLowercase())){
    console.log('É uma vogal');
    
} else if(consoantes.includes(letra.toLowercase())){
    console.log('É uma consoante');
    
}else{console.log('Não é uma letra');
}

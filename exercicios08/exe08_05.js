// CRIE UMA LISTA COM 5 NUMEROS ALEATORIOS E EXIBA O NR E SEU DOBRO

let numeros = [];

for(let i = 0; i < 5; i++){
    let numeroAleatorio = Math.floor(Math.random()*100) + 1
numeros.push(numeroAleatorio)
console.log(`${numeros[i]} : ${numeros[i] * 2}`);

}

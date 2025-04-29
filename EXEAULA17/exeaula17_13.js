let nota1 = Number(prompt("Digite a primeira nota"))
let nota2 = Number(prompt("Digite a segunda nota"))
let nota3 = Number(prompt("Digite a terceira nota"))
let nota4 = Number(prompt("Digite a quarta nota"))

let soma = nota1 + nota2 +nota3 + nota4
let media = soma / 4

if (media >= 7) {
    console.log("Voce foi aprovado!");
    
}else if (media >= 5 && media <= 7){
    console.log("Voce esta de recuperação ");
    
}else (media <= 5) 
console.log("Voce esta reprovado");
    

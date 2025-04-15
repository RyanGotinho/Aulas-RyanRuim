// NESSA STRING "OPALA", "CHEVETE", "MONZA", "JETTA", "NISSAN-GTR"
// FAÇA A SEPARAÇÃO DESSES ITENS PARA UMA LISTA E EXIBA O ITEM E A POSIÇÃO QUE ELE ESTA

let carros = "OPALA;CHEVETE;MONZA;JETTA;NISSAN-GTR"
let listaCarros = carros.split(';')

for(let[posicao, carro] of listaCarros.entries()){
    console.log(`Posição ${posicao}: ${carro} `);
    
}

// VARIAVEL+.POP APAGA O ULTIMO ITEM DA LISTA
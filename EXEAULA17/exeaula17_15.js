let divida = Number(prompt("Digite o valor da sua divida"))
console.log(`parcela de 1: ${divida} e tera de pagar ${(divida / 1).toFixed(2)} cada parcela`);
console.log(`parcelas de 3: ${divida + (divida * 0.10)} e tera de pagar ${divida * 0.10 / 3}`);
console.log(`parcelas de 6: ${divida + (divida * 0.15)} e tera de pagar ${divida * 0.15 / 6}`);
console.log(`parcelas de 9: ${divida + (divida * 0.20)} e tera de pagar ${divida * 0.20 / 9}`);
console.log(`parcelas de 12:${divida + (divida *0.25)} e tera de pagar ${divida * 0.25 / 12}`);


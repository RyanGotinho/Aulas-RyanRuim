let Htrabalhada = Number(prompt('quantidade de horas'))
let gTrabalhada = Number(prompt("Quanas de ganhos por hora: "))
let ganhoMes = Htrabalhada * horasTrabalhadas * 30
console.log(`voce ganha no mes ${ganhoMes * 0.05} de salario bruto, sendo ${ganhoMes * 0.11} para o IR
    ${ganhoMes * 0.88} para o INSS e ${ganhoMes * 0.05} `);
let nome = prompt("Digite seu nome")
let idade = Number(prompt("Insira sua idade"))
let peso = prompt("Insira seu peso em Kg")
let altura =prompt("Insira sua altura em metros")
let profissão = prompt("Insira sua profissão")

console.log("Olá ", nome + ", você tem" + idade + "anos, é : " + profissão + ", tem" + altura + "metros de altura e pesa " + peso + "Kg.")

if (idade >= 18) {
    console.log("Tá liberado para tomar umas brejas.")
} else {
    console.log("Fica só no refrigerante.")
}

let meses = idade * 12
let semanas = idade * 52
let dias = idade * 365 

console.log("Sua idade em meses é: " + meses)
console.log("Sua idade em semanas é: " + semanas)
console.log("Sua idade em dias é: " + dias)

let imc = peso / (altura * altura)

if (imc < 18.5) {
    console.log("Magreza")
} else if (imc >= 18.5 && imc <= 24.5) { 
    console.log("Normal")
} else if (imc >= 25 && imc <= 30) {
    console.log("Sobrepeso")
}else {
    console.log("Obesidade")
}

let anoAtual = 2023
let anoNasc = anoAtual - idade
console.log("Você nasceu no ano de " + anoNasc)

let anoVivido = anoNasc
let idadeAtual = 0

for(let anoVivido = anoNasc; anoVivido <= anoAtual; anoVivido++){
    console.log(anoVivido + " - " + idadeAtual + " anos de idade")
    idade++
}

do{
    let continuar = prompt("Deseja inserir novamente os dados? (s/n)")
} while (continuar == "s")

//Declaracao de variaveis
let nome = ""
let idade = 0
let altura = 0
let peso = 0

//Solicitando informacao ao usuario e atribuindo os valores as variaveis
nome = prompt("insira seu nome: ")
idade = parseInt(prompt("insira sua idade: "))
altura = parseFloat(prompt("insira seu altura: "))
peso = parseInt(prompt("insira seu peso: "))

//Calcundo o ano que a pessoa nasceu e o IMC
let anoNasc = 0
anoNasc = 2023 - idade

let IMC = 0
IMC = peso /(altura * altura)

//Exibindo as informacoes no console
console.log("Olá" + nome + ", você tem" + idade +" anos, nasceu em" + anoNasc + ", tem" + altura + "de altura, pesa" + peso + " kg e seu IMC é" + IMC + "kg/m²")
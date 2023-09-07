let nome = prompt("Digite seu nome")
let cpf = Number(prompt("Digite seu CPF"))
let operacao
let valor = 0
let saldo = 100
let maiorValor = 0
let mediaValores = 0
let contador = 0
let continuar = 1

do{
    operacao = prompt("insira sua operação desejada (s/d)")
    valor = Number(prompt("digite o valor desejado"))
    mediaValores += valor

    if(valor > maiorValor) {
        maiorValor = valor
    }

    if(operacao == "s" && valor <= saldo) {
        saldo -= valor

    } else if(operacao == "s" && valor > saldo){
        console.log("o valor inserido deve ser menor que o saldo")
    } else {
        saldo += valor
    }

    contador++
    console.log("Seu saldo é de: " + saldo)
    console.log("O maior valor inserido foi de: " + maiorValor)
    console.log("A média dos valores foram de: " + (mediaValores/ contador))

    continuar = Number(prompt("Você deseja continuar? 1 - Sim, 2 - Não "))

}while (continuar == 1)

let confirmar = "n"
while (confirmar != "s"){
    let nome = prompt("Digite seu nome")
    let idade = Number(prompt("Insira sua idade"))
    let salarioAtual = Number(prompt("Digite seu salário atual"))
    console.log (" nome: " + nome + ", idade: " + idade + ", salário atual de: " + salarioAtual)
    confirmar = prompt("As informacões estão corretas? (s/n) ")

}


let aumento = 0.015
console.log("Previsão salarial para os próximos 10 anos: ")

for (let ano = 1 <= 10; ano++){
    salarioAtual += salarioAtual * aumento
    aumento *= 2

    console.log((2023 + ano) + " = R$ " + salarioAtual)
    
}
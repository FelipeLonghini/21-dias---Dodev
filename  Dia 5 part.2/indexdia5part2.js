let valor
let quantidade
let opcao = prompt("Bem vindo ao Posto Felipe, o que deseja: " + " \n1 - abastecer com gasolina;  \n2 - abastecer com diesel;  \n3 - abastecer com etanol;  \n4 - calibrar pneus")

switch (opcao) {
    case "1":
        valor = Number(prompt("Digite o valor desejado para abastecer"))
        quantidade = valor / 5
        console.log("Foram abastecidos " + quantidade + " L de gasolina")
        break;
 
    case "2":
        valor = Number(prompt("Digite o valor desejado para abastecer"))
        quantidade = valor / 7
        console.log("Foram abastecidos " + quantidade + " L de diesel")
        break;
    
     case "3":
        valor = Number(prompt("Digite o valor desejado para abastecer"))
        quantidade = valor / 3
        console.log("Foram abastecidos " + quantidade + " L de etanol")
        break;
    
    default:
        console.log("Pneus calibrados com sucesso")
        break;

}
    
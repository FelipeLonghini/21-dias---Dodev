let mediageral = 0
let qtdHomens = 0 
let qtdMulheresAcimaDe7 = 0
let maiorNotaHomens = 0
let contador = 1

while( contador <= 10){
    nota = Number(prompt("Digite sua nota do" + contador + "º aluno"))
    sexo = prompt("Digite o sexo do aluno (m/f)")

    if(sexo == "m"){
        if(nota > maiorNotaHomens){
            maiorNotaHomens = nota
        }
        qtdHomens++
    }

    if(sexo == "f" && nota > 7) {
        qtdMulheresAcimaDe7++
    }
    
    mediageral += nota
    contador++
}

mediageral = mediageral / 10

console.log("A média geral dos alunos foram:" + mediageral)
console.log("A quantidade de homens cadastrados foram: " + qtdHomens)
console.log("A quantidade de mulheres que obtiveram nota acima de 7 foram: " + qtdMulheresAcimaDe7)
console.log("A maior nota entres os homens foi: " + maiorNotaHomens)

const array = [];
const indices = [];
let contadorIndice = 0

const numeroProcurado = Number(prompt("Digite o número para ser procurado"));

for (let i = 0; i <10; i++){
    const elemento = Number(prompt('Digite o elemento ${i + 1}:'));
    array[i] = elemento;

    }

for (let i = 0; i < 10; i++){
    if (array[i] === numeroProcurado) {
        indices[contadorIndice] = i
        contadorIndice++

    }
}

console.log('O número ${numeroProcurado} foi encontrado nos índices: ${indices}');

let array = []
let arrayInvertido = []

for (let i = 0; i < 5; i++) {
    let numero = Number(prompt("Digite o" + (i + 1) + "º número"))
    array[i] = numero
}

console.log("Array original : " + array)

let contador = 4
for (let i = 0; i < 5; i++) {
    arrayInvertido[i] = array[contador]
    contador--
}

console.log("Array invertido: " + arrayInvertido)
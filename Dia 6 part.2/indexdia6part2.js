for (let i = 50; i >= 0; i -= 5) {
    console.log(i)
}

let numero = Number(prompt("Digite seu número inteiro e positivo"))
for(let i = numero; i <= numero + 2; i++) {
    console.log("tabuada do numero: " + i)
    for(let j = 0; j <= 10; j++){
        console.log(i + " x " + j + " = " + (i * j))
    }
}
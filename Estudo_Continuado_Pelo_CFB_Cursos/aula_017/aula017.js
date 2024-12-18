"use strict"

let fatorialNúmero = 10
let resultadoFatorial = 1

console.log(`O fatorial de ${fatorialNúmero}!:`)

while (fatorialNúmero >= 1) {
    resultadoFatorial*=fatorialNúmero
    fatorialNúmero--
}

console.log(`É igual a ${resultadoFatorial}.`)
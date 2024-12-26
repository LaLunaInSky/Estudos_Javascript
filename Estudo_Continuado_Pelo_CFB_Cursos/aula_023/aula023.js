"use strict"

function soma(...números) {
    let resultado = 0
    for (let num of números) {
        resultado += num
    }
    return resultado
}

console.log(soma(10, 5, 2, 20))
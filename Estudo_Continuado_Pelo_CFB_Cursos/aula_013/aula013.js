"use strict"

let num = 40

if (num > 10) {
    console.log('Numeral maior que 10')
    if (num > 50) {
        console.log('Numeral maior que 50')
    }
} else if (num >= 5) {
    console.log('Numeral está entre 5 e 10')
} else {
    console.log('Numeral menor que 5')
}

console.log('Fim do programa!')
"use strict"

let n = 0
let max = 100

while (n<max) {
    n++

    if (n%2) {
        continue
    }

    if (n>50) {
        break
    }
    
    console.log(n)
}

console.log('fim do programa!')
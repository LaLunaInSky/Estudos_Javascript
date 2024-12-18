"use strict"

let n = 0
let max = 100

while (n<max) {
    n++

    if (n%2) {
        continue
    }
    
    console.log(n)
}

console.log('fim do programa!')
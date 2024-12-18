"use strict"

/*for in | for of*/

let num = [10, 20, 30, 40, 50]

for(let n = 0; n < num.length; n++) {
    console.log(`for -> ${num[n]}`)
}

for (let n in num) {
    console.log(`for in -> ${num[n]}`)
}

for (let n of num) {
    console.log(`for of -> ${n}`)
}
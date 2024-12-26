'use strict'

let funçãoContrutor = new Function("v1", "v2", "return v1+v2")
let funçãoAnônima = function(v1, v2) {return v1+v2}

console.log(funçãoContrutor(10, 5))
console.log(funçãoAnônima(10, 5))
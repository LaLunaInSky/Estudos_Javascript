"use strict"

const idades = [15, 21, 30, 17, 18, 44, 12, 50]

const maioresDeIdade = idades.filter((valor/*, indice, array*/)=>{
   if (valor >= 18) return valor
})

const menoresDeIdade = idades.filter((valor)=>{
    if (valor < 18) return valor
})

console.log(idades)
console.log(maioresDeIdade)
console.log(menoresDeIdade)
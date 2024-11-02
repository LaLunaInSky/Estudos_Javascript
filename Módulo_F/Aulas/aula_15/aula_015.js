let num = [5, 8, 2, 9, 3, 7]

num[num.length] = 1 //ou
num.push(2) //acrescentar na ultima possição

num.sort() //arrumar os valores em ordem crescente

//for normal
for (var c = 0;c<num.length;c++) {
    console.log(`O número de agora é o ${num[c]}`)
}

console.log("")

//for in
for (let c in num) {
    console.log(num[c])
}

console.log("")

//buscar valores
let numero = 5
let encontrar = num.indexOf(numero)

if (encontrar < 0) {
    console.log(`O número ${numero} não foi encontrado`)
} else {
    console.log(`O número ${numero} está na posição ${encontrar}`)
}
let numeros_Aula05:number[] = [20, 30, 40]
//ou
//let numeros_Aula05:Array<number> = [20, 30, 40]

numeros_Aula05.push(50)
numeros_Aula05.unshift(10)
numeros_Aula05.pop()
numeros_Aula05.shift()
console.log(numeros_Aula05)

let numeros_ro_Aula05:ReadonlyArray<number> = [100, 200, 300]

console.log(numeros_ro_Aula05)
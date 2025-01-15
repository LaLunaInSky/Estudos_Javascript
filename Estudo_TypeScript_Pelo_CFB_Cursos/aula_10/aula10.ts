let number_Aula10: number
let string_Aula10: string
let unknow_Aula10: unknown

unknow_Aula10 = 10
string_Aula10 = "20"

number_Aula10 = Number.parseInt(string_Aula10)
number_Aula10+=30
string_Aula10 = number_Aula10.toString()

//number_Aula10 = <number>unknow_Aula10
//string_Aula10 = <string>unknow_Aula10
//string_Aula10+=10

console.log(typeof(unknow_Aula10))
console.log(unknow_Aula10)

console.log(typeof(number_Aula10))
number_Aula10-=30
console.log(number_Aula10)

console.log(typeof(string_Aula10))
console.log(string_Aula10)
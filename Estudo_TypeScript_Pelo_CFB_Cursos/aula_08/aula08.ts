enum dias_Aula08 {
    domingo_Aula08 = 0,
    segunda_Aula08 = 1,
    terça_Aula08 = 2,
    quarta_Aula08 = 3,
    quinta_Aula08 = 4,
    sexta_Aula08 = 5,
    sábado_Aula08 = 6
}

console.log(dias_Aula08.segunda_Aula08)
console.log(dias_Aula08["terça_Aula08"])
console.log(dias_Aula08[4])
console.log(dias_Aula08[new Date().getDay()])
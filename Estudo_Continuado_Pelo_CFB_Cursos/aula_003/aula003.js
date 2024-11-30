"use strict"

//Diferença de escopos de declarar variáveis com let e var

function teste()  {
    let nome = "Bruno"

    if (true) {
        var nome2 = 'Julia'
        console.log(`Dentro do if do testeFunction: ${nome} e ${nome2}`)
        nome = 'Ronaldo'
    }

    console.log(`Fora do if, porém dentro do testeFunction: ${nome} e ${nome2}`)
}

const curso = 'Javascript'

teste() 
console.log(curso)
console.log(`Fora do testeFunction: ${nome2} e ${nome}`)
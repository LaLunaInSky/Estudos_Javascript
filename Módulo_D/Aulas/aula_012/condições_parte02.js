/*Condições Parte 2*/
 
/*Condições Aninhadas*/
/*Exemplo 1*/
var idade = 14
console.log(`Você tem ${idade} anos.`)

if (idade < 18) {
    if (idade > 15) {
        console.log('Voto opcional')
    } else {
        console.log('Não vota')
    }
} else {
    if (idade > 65) {
        console.log('Voto opcional')
    } else {
        console.log('Vota')
    }
}

/*Exemplo 2*/
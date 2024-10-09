/*Condições Parte 2*/
 
/*Condições Aninhadas*/
/*Exemplo 1*/
function escolha() {
    var escolha = Number(document.querySelector('input#numberIn').value)
    var resposta = document.querySelector('div#resposta')

    if (escolha == 1) {
        var idade = 67
        resposta.innerHTML = `<p>Você tem ${idade} anos.</p>`

        if (idade < 18) {
            if (idade > 15) {
                resposta.innerHTML += 'Voto opcional'
            } else {
                resposta.innerHTML += 'Não vota'
            }
        } else {
            if (idade > 65) {
                resposta.innerHTML += 'Voto opcional'
            } else {
                resposta.innerHTML += 'Vota'
            }
        }

    } else if (escolha == 2) {
/*Exemplo 2*/
        resposta.innerHTML = 'exemplo2'
    }
} 
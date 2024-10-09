/*Condições Parte 2*/
 
/*Condições Aninhadas*/
function escolha() {
/*Exemplo 1*/
    var escolha = Number(document.querySelector('input#numberIn').value)
    var resposta = document.querySelector('div#resposta')

    switch(escolha) {
        case 1:
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
            break
            
        case 2:
/*Exemplo 2*/
            var horaAtual = new Date()
            var hora = horaAtual.getHours()
            resposta.innerHTML = `Agora são exatamente ${hora} horas. <br>`

            if (hora < 13) {
                if (hora < 5) {
                    resposta.innerHTML += 'Boa madrugada!'
                } else {
                    resposta.innerHTML += 'Bom dia!'
                }
            } else if (hora < 24){
                if (hora < 19) {
                    resposta.innerHTML += 'Boa tarde!'
                } else {
                    resposta.innerHTML += 'Boa noite!'
                }
            }
            break

        default:
            resposta.innerHTML = `Erro`
            break
    }
}   

/*Condições Múltiplas*/
var agora = new Date()
var diaSemana = agora.getDay()

switch(diaSemana) {
    case 0: 
        console.log('Hoje é Domingo!')
        break
    case 1: 
        console.log('Hoje é Segunda!')
        break
    case 2: 
        console.log('Hoje é Terça!')
        break
    case 3: 
        console.log('Hoje é Quarta!')
        break
    case 4: 
        console.log('Hoje é Quinta!')
        break
    case 5: 
        console.log('Hoje é Sexta!')
        break
    case 6: 
        console.log('Hoje é Sábado!')
        break
    default:
        console.log('Erro')
        break
}
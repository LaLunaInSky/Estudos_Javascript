var caixa = document.querySelector('input#numerodigitado')
caixa.focus()

var resultadoSection = document.querySelector('section#resultado')
var caixaDosNúmeros = document.querySelector('select#listaDosNúmeros')
var númerosQueForamDigitadosPeloUsuário = []
var backupQuantidade = 0

function deletarEFoco() {
    caixa.value = ''
    caixa.focus()
}

function adicionarValorNaCaixa(num) {
    let novoValor = document.createElement('option')
    novoValor.innerText = `Valor ${num} adicionado`
    caixaDosNúmeros.appendChild(novoValor)
    resultadoSection.innerHTML = ''
}

function adicionarNúmero() {
    let númeroDigitadoPeloUsuário = document.querySelector('input#numerodigitado').value

    if (númeroDigitadoPeloUsuário != '') {
        númeroDigitadoPeloUsuário = Number(númeroDigitadoPeloUsuário)
        if (númeroDigitadoPeloUsuário > 0 && númeroDigitadoPeloUsuário < 101) {
            if (númerosQueForamDigitadosPeloUsuário.indexOf(númeroDigitadoPeloUsuário) == -1) {
                númerosQueForamDigitadosPeloUsuário.push(númeroDigitadoPeloUsuário)
                adicionarValorNaCaixa(númerosQueForamDigitadosPeloUsuário[númerosQueForamDigitadosPeloUsuário.length-1])
            } else {
                alert(`O Número ${númeroDigitadoPeloUsuário} já foi adicionado!`)
            }
        } else {
            alert('O Número digitado não está entre 1 e 100!')
        }
    } else {
        alert('O Número digitado é inválido!')
    }

    deletarEFoco()
}

function somar() {
    let soma = 0
    for (let c= 0; c < númerosQueForamDigitadosPeloUsuário.length; c++) {
        soma = soma + númerosQueForamDigitadosPeloUsuário[c]
    }
    return soma
}

function média() {
    let médiaFinal = 0
    let soma = somar()
    médiaFinal = soma / númerosQueForamDigitadosPeloUsuário.length
    return médiaFinal
}

function sortArray(a, b) {
    return (a-b)
}

function calcularNúmeros() {
    resultadoSection.innerHTML = ''
    númerosQueForamDigitadosPeloUsuário.sort(sortArray) //estranho!
    if (númerosQueForamDigitadosPeloUsuário.length != 0) {
        let quantidadeTotalDeNúmeros = númerosQueForamDigitadosPeloUsuário.length
        let numMaior = númerosQueForamDigitadosPeloUsuário[númerosQueForamDigitadosPeloUsuário.length-1]
        let numMenor = númerosQueForamDigitadosPeloUsuário[0]

        let resposta = document.createElement('p')
        resposta.innerHTML =  `<p>Ao todo, temos ${quantidadeTotalDeNúmeros} números cadastrados.<br> O maior valor informado foi o ${numMaior}.<br> O menor valor informado foi o ${numMenor}.<br> Somando todos os valores, temos ${somar()}.<br> A média dos valores digitados é ${média()}.</p>`
        resultadoSection.appendChild(resposta)
    } else {
        alert(`Nenhum número foi adicionado ainda!`)
    }
}
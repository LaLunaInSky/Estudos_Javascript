function GerarTabuada() {
    var numberDigitado = document.querySelector('input#numberTabuada').value
    var resultado = document.querySelector('section#resultado')

    if (numberDigitado === '') {
        alert('Erro! Por favor digite um valor!')
    } else {
        numberDigitado = Number(numberDigitado)

        resultado.innerHTML = `<p id="tabuadaEscolhida">Tabuada do ${numberDigitado} <br></p>`

        for (var c = 1; c <= 10; c++) {
            resultado.innerHTML += `${numberDigitado} x ${c} = ${numberDigitado * c} <br>`
        }
    }
}
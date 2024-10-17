var resultado = document.querySelector('select#resultado')
var item = document.createElement('option')
resultado.appendChild(item)

item.text = 'Digite um Número!'

function GerarTabuada() {
    let numberDigitado = document.querySelector('input#numberTabuada').value

    if (numberDigitado === '') {
        alert('Erro! Por favor digite um valor!')
    } else {
        numberDigitado = Number(numberDigitado)
        resultado.removeChild(item)
        resultado.innerHTML = ''

        for (let c = 1; c <= 10; c++) {
            item = document.createElement('option')
            item.text = `${numberDigitado} x ${c} = ${numberDigitado * c}`
            resultado.appendChild(item)
        }
    }
}
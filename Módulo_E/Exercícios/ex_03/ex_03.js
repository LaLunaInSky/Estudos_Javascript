function Contagem() {
    var numberStart = document.querySelector("input#numberStart").value
    var numberEnd = document.querySelector('input#numberEnd').value
    var numberPass = document.querySelector('input#numberPass').value
    var resultado = document.querySelector('section#resultado')
    var resultadoContagem = []

    if (numberEnd === '' || numberPass === '' || numberStart === '') {
        resultado.innerHTML = `<p>Impossível contar!</p>`
    } else {
        if (numberStart < numberEnd) {
            //positivo
            resultado.innerHTML = `<p>chegou aqui!</p>`
            while (numberStart <= numberEnd) {
                resultado.innerText += `t`
                numberStart = numberStart - numberPass
            }
        } else {
            //negativo
            resultado.innerHTML = `<p>chegou aqui 2!</p>`
        }
        
        //resultado.innerHTML = `<p>Contando: <br>${resultadoContagem}</p>`
    }
}
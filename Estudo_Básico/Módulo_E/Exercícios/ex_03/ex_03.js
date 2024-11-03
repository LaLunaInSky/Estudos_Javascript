function Contagem() {
    let numberStart = document.querySelector("input#numberStart").value
    let numberEnd = document.querySelector('input#numberEnd').value
    let numberPass = document.querySelector('input#numberPass').value
    let resultado = document.querySelector('section#resultado')
    let resultadoContagem = []

    if (numberEnd === "" || numberPass === "" || numberStart === "") {
        resultado.innerHTML = `<p>Impossível contar!</p>`
    } else {
        numberStart = Number(numberStart)
        numberEnd = Number(numberEnd)
        numberPass = Number(numberPass)

        if (numberPass <= 0) {
            alert('Passo Inválido! Vou considerar como PASSO 1')
            numberPass = 1
        }

        if (numberStart < numberEnd) {
            //positivo
            for (numberStart; numberStart <=  numberEnd; numberStart += numberPass) {
                resultadoContagem += `${numberStart} ${String.fromCodePoint(0x1F449)}`
            }
        } else {
            //negativo
            for (numberStart; numberStart >= numberEnd; numberStart -= numberPass) {
                resultadoContagem += `${numberStart} ${String.fromCodePoint(0x1F449)}`
            }
        }
        resultadoContagem += String.fromCodePoint(0x1F3C1)

        resultado.innerHTML = `<p>Contando: <br>${resultadoContagem}</p>`
    }
}
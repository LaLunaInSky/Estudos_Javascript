var data = new Date()
var horaAtual = data.getHours()
var minutoAtual = data.getMinutes()

var comprimento = document.querySelector('h1#comprimento')
var infoHora = document.querySelector('section#infoHora')
var imgHora = document.querySelector('section#imgHora')
var headStyle = document.querySelector('head')

infoHora.innerHTML = `<p>Agora são <span id="horaMostrador">${horaAtual}:${minutoAtual}</span></p>`

if (horaAtual < 13) {
    if (horaAtual < 5) {
        /*Boa madrugada*/
        comprimento.innerHTML = 'Boa Madrugada!'
        headStyle.innerHTML += `<style> body {background-color: #2B3245;}</style>`  
        imgHora.innerHTML = `<img src="images/boa_madrugada.jpg" alt="Imagem Madrugada">`
    } else {
        /*Bom dia*/
        comprimento.innerHTML = 'Bom Dia!'
        headStyle.innerHTML += `<style> body {background-color: #FF992F;}</style>`
        imgHora.innerHTML = `<img src="images/bom_dia.jpg" alt="Imagem Dia">`
    }

} else if (horaAtual < 24) {
    if (horaAtual < 19) {
        /*Boa tarde*/
        comprimento.innerHTML = 'Boa Tarde!'
        headStyle.innerHTML += `<style> body {background-color: #96427F;}</style>`
        imgHora.innerHTML = `<img src="images/boa_tarde.jpg" alt="Imagem Tarde">`
    } else {
        /*Boa noite*/
        comprimento.innerHTML = 'Boa Noite!'
        headStyle.innerHTML += `<style> body {background-color: #205993;}</style>`
        imgHora.innerHTML = `<img src="images/boa_noite.jpg" alt="Imagem Noite">`
    }
}
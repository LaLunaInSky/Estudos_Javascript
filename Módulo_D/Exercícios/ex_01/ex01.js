var data = new Date()
var horaAtual = data.getHours()
horaAtual = 23

var comprimento = document.querySelector('h1#comprimento')
var infoHora = document.querySelector('section#infoHora')
var imgHora = document.querySelector('section#imgHora')
var headStyle = document.querySelector('head')

infoHora.innerHTML = `<p>Agora são ${horaAtual} horas.</p>`

if (horaAtual < 13) {
    if (horaAtual < 5) {
        /*Boa madrugada*/
        comprimento.innerHTML = 'Boa Madrugada!'
        headStyle.innerHTML += `<style> body {background-color: #0A4261;}</style>`  
        imgHora.innerHTML = `<img src="" alt="">`
    } else {
        /*Bom dia*/
        comprimento.innerHTML = 'Bom Dia!'
        headStyle.innerHTML += `<style> body {background-color: #D1C195;}</style>`
        imgHora.innerHTML = `<img src="" alt="">`
    }

} else if (horaAtual < 24) {
    if (horaAtual < 19) {
        /*Boa tarde*/
        comprimento.innerHTML = 'Boa Tarde!'
        headStyle.innerHTML += `<style> body {background-color: #A87A66;}</style>`
        imgHora.innerHTML = `<img src="" alt="">`
    } else {
        /*Boa noite*/
        comprimento.innerHTML = 'Boa Noite!'
        headStyle.innerHTML += `<style> body {background-color: #464948;}</style>`
        imgHora.innerHTML = `<img src="" alt="">`
    }
}
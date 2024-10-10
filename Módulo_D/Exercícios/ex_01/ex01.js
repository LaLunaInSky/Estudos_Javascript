var data = new Date()
var horaAtual = data.getHours()
horaAtual = 23

var infoHora = document.querySelector('section#infoHora')
var imgHora = document.querySelector('section#imgHora')

infoHora.innerHTML = `Agora são ${horaAtual} horas.`

if (horaAtual < 13) {
    if (horaAtual < 5) {
        /*Boa madrugada*/
    } else {
        /*Bom dia*/
    }

} else if (horaAtual < 24) {
    if (horaAtual < 19) {
        /*Boa tarde*/
    } else {
        /*Boa noite*/
    }
}

imgHora.innerHTML = `<img src="" alt="">`
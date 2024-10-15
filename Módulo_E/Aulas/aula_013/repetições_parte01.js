/*Repetições Parte 01*/

/*while*/

var time = 0
while (time < 60) {
    var date = new Date()
    time = date.getSeconds()
    if (copy_time != time) {
        console.log(`tudo bem? ${time}`)
    }  
    var copy_time = time
}
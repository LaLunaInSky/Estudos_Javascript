/*Repetições Parte 01*/

/*while*/

function rodarWhile() {
    var time = 0
    while (time < 60) {
        var date = new Date()
        time = date.getSeconds()
        if (copy_time != time) {
            console.log(`tudo bem? ${time}`)
        }  
        var copy_time = time
    }
}

/*do while*/

function rodarDoWhile() {
    var time = 0
    do {
        var date = new Date()
        time = date.getSeconds()
        if (copy_time != time) {
            console.log(`tudo bem? ${time}`)
        }  
        var copy_time = time 
    } while (time < 60)
}

rodarWhile()
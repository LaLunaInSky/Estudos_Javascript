function aluno(nome, nota) {
    this.nome = nome
    this.nota = nota

    this.dado = function() {
        setTimeout(()=>{
            console.log(this.nome +' '+ this.nota)
        }, 2000)
    }
}

const aluno01 = new aluno('Luna', 10)
aluno01.dado()
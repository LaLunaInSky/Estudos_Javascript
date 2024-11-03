let amigo = {nome: 'José', gênero: 'M', peso: 85.2,
    engordar(peso=0) {
        if (peso != 0) {
            console.log(`Engordou ${peso}Kg`)
        }
        this.peso += peso
    }
}

amigo.engordar(1)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
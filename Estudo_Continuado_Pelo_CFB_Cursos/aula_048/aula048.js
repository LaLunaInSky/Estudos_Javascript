"use strict"

const valores = [10,8,9,2]
const texto = 'Youtube'

const iterator = (array)=>{
    console.log(array)
    const iteArray = array[Symbol.iterator]()
    
    for (let num of array) {
        console.log(iteArray.next())
    }
    
    console.log(iteArray.next())
}

iterator(valores)
iterator(texto)
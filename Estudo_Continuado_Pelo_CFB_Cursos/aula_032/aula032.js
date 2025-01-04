const todosOsCursos = [...document.getElementsByClassName('curso')]
const cursosC1 = [...document.getElementsByClassName('c1')]
const cursosC2 = [...document.getElementsByClassName('c2')]
const cursoEspecial = document.getElementsByClassName('curso')[8]

console.log(todosOsCursos)
console.log(cursosC1)
console.log(cursosC2)
console.log(cursoEspecial)

cursoEspecial.classList.add('destaque')
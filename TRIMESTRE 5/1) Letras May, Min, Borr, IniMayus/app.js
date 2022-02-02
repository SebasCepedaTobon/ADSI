const textArea = document.querySelector('.textArea')
const botonMayuscula = document.querySelector('.mayuscula')
const botonMinuscula = document.querySelector('.minuscula')
const botonIniMayuscula = document.querySelector('.IMayuscula')
const botonBorrar = document.querySelector('.borrar')

botonMayuscula.addEventListener('click', Mayus);
botonMinuscula.addEventListener('click', minus);
botonIniMayuscula.addEventListener('click', IniciMayus);
botonBorrar.addEventListener('click', borra);

console.log(textArea.value)

function Mayus(){
    let text = textArea.value
    text = text.toUpperCase()
    textArea.value = text
    console.log(text)
}

function minus(){
    let text = textArea.value
    text = text.toLowerCase()
    textArea.value = text
}

function IniciMayus(frase){
    let palabra = frase.split(' ')
    console.log(palabra)

    return palabra.map(p => p[0].toUpperCase() + p.slice(1)).join(' ');

}

console.log(IniciMayus(textArea.value))

textArea.value = IniciMayus(textArea.value)


function borra(){
    textArea.value = ""
}
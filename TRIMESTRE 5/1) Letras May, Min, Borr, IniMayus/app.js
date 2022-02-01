const textArea = document.querySelector('.textArea')
const botonMayuscula = document.querySelector('.mayuscula')
const botonMinuscula = document.querySelector('.miniscula')
const botonIniMayuscula = document.querySelector('.IMayuscula')
const botonBorrar = document.querySelector('.borrar')

botonMayuscula.addEventListener('click', upperCase);
botonMinuscula.addEventListener('click', lowerCase);
botonIniMayuscula.addEventListener('click', upperCase);
botonBorrar.addEventListener('click', borra);

function upperCase(){
    let text = textArea.value
    text = text.toUpperCase()
    textArea.value = text
    console.log(text)
}

function lowerCase(){
    let text = textArea.value
    text = text.toLowerCase()
    textArea.value = text
}

function borra(){
    textArea.value = ""
}
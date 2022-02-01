const URL = ""

const main = document.querySelector('.main')
const template = document.querySelector('.template').content

const fragment = document.createDocumentFragment();

function fetchAPI(){
    fetch(URL)
    .then(respuesta => respuesta.json())
    .then(caracteres => {
        
    })
}



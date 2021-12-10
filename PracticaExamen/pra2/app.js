const URL  = "https://rickandmortyapi.com/api/character/";

const template = document.querySelector('.template').content;
const main = document.querySelector('.main')
const input = document.querySelector('.input')


fragment = document.createDocumentFragment();


input.addEventListener('keydown', (e) =>{
    if(e.keyCode === 13){
        fetchAPI()
    }
})


function fetchAPI(){
    fetch(URL)
    .then(response => response.json())
    .then(caracteres => {
        recorrer(caracteres.results)
    })
}

function recorrer(elemento){
    const buscar = elemento.filter((elemento) =>{
        
    })
}





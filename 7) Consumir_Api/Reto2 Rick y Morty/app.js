const URL = "https://rickandmortyapi.com/api/character/?page=5";

const main_card = document.querySelector("#main-card");

const template_card = document.querySelector("#template-card").content;

const seleccionar = document.querySelector('.seleccionar');

const fragment = document.createDocumentFragment();


fetchAPI()

function fetchAPI(){
    fetch(URL)
    .then(response => response.json())
    .then(characters => {
       generateCharacter(characters.results)
    })
}


function generateCharacter (character){
    character.forEach(element => {
        const opcion = document.createElement('option');
        opcion.setAttribute('value', element.name)
        opcion.classList.add('opcion')
        opcion.textContent=element.name
        fragment.appendChild(opcion);
    })
    seleccionar.appendChild(fragment);
    crearCard(character)
    seleccionar.addEventListener('change', function(){
        crearCard(character)
    })
}

const crearCard=element=> {
    if(seleccionar.value =="todos"){
        main_card.innerHTML=""
        element.forEach(element => {
            template_card.querySelector('.nombre').textContent=element.name
            template_card.querySelector('.imagen').src=element.image
            template_card.querySelector('.genero').textContent=element.gender

            const clonar = template_card.cloneNode(true)
            fragment.appendChild(clonar)
            main_card.appendChild(fragment)
        })

    }if(seleccionar.value != "todos"){
        console.log(seleccionar.value)
        main_card.innerHTML=""
        const unidad = element.filter(element => element.name  === seleccionar.value)
            template_card.querySelector('.nombre').textContent=unidad[0].name
            template_card.querySelector('.imagen').src=unidad[0].image
            template_card.querySelector('.genero').textContent=unidad[0].gender

            const clonar = template_card.cloneNode(true)
            fragment.appendChild(clonar)
            main_card.appendChild(fragment)
    }

}

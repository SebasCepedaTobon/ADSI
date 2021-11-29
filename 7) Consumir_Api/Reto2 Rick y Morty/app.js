const URL = "https://rickandmortyapi.com/api/character";

const main_card = document.querySelector("#main-card");

const template_card = document.querySelector("#template-card").content;

const select = document.querySelector('.select');

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
    select.appendChild(fragment);
    crearCard(character)
    select.addEventListener('change', function(){
        crearCard(character)
    })
}

const crearCard=element=> {
    if(select.value =="todos"){
        main_card.innerHTML=""
        element.forEach(element => {
            template_card.querySelector('.nombre').textContent=element.name
            template_card.querySelector('.imagen').src=element.image
            template_card.querySelector('.genero').textContent=element.gender

            const clonar = template_card.cloneNode(true)
            fragment.appendChild(clonar)
            main_card.appendChild(fragment)
        })

    }if(select.value != "todos"){
        main_card.innerHTML=""
        const unudad = element.filter(element => element.name  === select.value)
        console.log(element.name)
            template_card.querySelector('.nombre').textContent=unudad[0].name
            template_card.querySelector('.imagen').src=unudad[0].image
            template_card.querySelector('.genero').textContent=unudad[0].gender

            const clonar = template_card.cloneNode(true)
            fragment.appendChild(clonar)
            main_card.appendChild(fragment)
    }

}

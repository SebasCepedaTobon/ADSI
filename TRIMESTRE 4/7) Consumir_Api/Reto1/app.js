const url = ('https://thesimpsonsquoteapi.glitch.me/quotes')

const main_card = document.querySelector('.main-card');
const template = document.querySelector('.template').content;

const fragment = document.createDocumentFragment();

const botonGenerar = document.querySelector('.botonGenerar');

botonGenerar.addEventListener('click', fetchApi)

function createCard (objetos){
    const cloneTemplate = document.importNode(template, true);
    cloneTemplate.querySelector(".nombre-card").textContent = objetos[0].character;
    cloneTemplate.querySelector(".imagen-card").setAttribute('src', objetos[0].image);
    cloneTemplate.querySelector(".imagen-card").setAttribute('alt', objetos[0].character);
    cloneTemplate.querySelector(".textContent").textContent = `Quote: ${objetos[0].quote}`;

    fragment.appendChild(cloneTemplate);
    main_card.appendChild(fragment);
}

function fetchApi(){
    fetch(url)
    .then(response => response.json())
    .then(card =>{
        main_card.innerHTML='';
        createCard(card)
    })
}
const URL = "https://dog.ceo/api/breeds/image/random";

const boton1 = document.querySelector('.boton1');
const boton3 = document.querySelector('.boton3');
const boton9 = document.querySelector('.boton9');
const boton12 = document.querySelector('.boton12');
const input = document.querySelector('.input');
const main = document.querySelector('.main')

const template = document.querySelector('.template').content

const fragment = document.createDocumentFragment();

input.addEventListener('keydown', (e) => {
    if(e.keyCode === 13){
        cantidadCard=input.value;
        crearCard();
    }
})

boton1.addEventListener('click', () =>{
    cantidadCard = 1;
    crearCard()
})
boton3.addEventListener('click', () =>{
    cantidadCard = 3;
    crearCard()
})
boton9.addEventListener('click', () =>{
    cantidadCard = 9;
    crearCard()
})
boton12.addEventListener('click', () =>{
    cantidadCard = 12;
    crearCard()
})



function crearCard(){
    for (let i = 0; i < cantidadCard; i++) {
        fetchApi()
    }
}

function fetchApi(){
    main.innerHTML="";
    fetch(URL)
    .then(respuesta => respuesta.json())
    .then(caracteres => {
        generar(caracteres.message)
    })
}

function generar(elemento){
    template.querySelector('.imagen').src = elemento;
    
    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
    main.appendChild(fragment);
}
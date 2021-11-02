const main = document.querySelector('#main');


create_card();

function create_card(){
    const card=document.createElement('div');
    const titleCard = document.createElement('h2');
    const imgCard = document.createElement('img');
    const pCard = document.createElement('p');
    const btnCard = document.createElement('button');
    card.classList.add('card');
    titleCard.textContent="Hola";
    imgCard.setAttribute('src', 'fondo3.jpg')
    pCard.textContent="Este es el carrito";
    btnCard.textContent="Agregar al carrito";

    card.appendChild(titleCard);
    card.appendChild(imgCard);
    card.appendChild(pCard);
    card.appendChild(btnCard);
    main.appendChild(card);
}

function recorrer(cantidad){

    for (let i = 0; i < cantidad; i++) {
        create_card(i);
    }
}

recorrer(50);




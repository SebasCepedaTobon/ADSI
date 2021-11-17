const main = document.querySelector('#main');
const cardTarjeta= document.querySelector('#tarjeta-wrap')


function create_card(){
    const card=document.createElement('div');
    const imgCard = document.createElement('img');
    const preCard = document.createElement('p');
    const card2=document.createElement('div');
    const pCard = document.createElement('p');
    const imgCarrito = document.createElement('img');
    const boton = document.createElement('button');

    card.classList.add('tarjeta');
    preCard.textContent="100.000";
    preCard.setAttribute('id', 'precio');
    imgCard.setAttribute('id', 'articulo')
    imgCard.setAttribute('src', 'img/imagen2.png')
    card2.classList.add('atras')
    pCard.textContent="Leonel Andres Messi juagador del Paris, Media punta con una media de 94";
    pCard.setAttribute('id', 'info');
    imgCarrito.setAttribute('src', 'img/carrito.png');
    imgCarrito.setAttribute('id', 'carrito');

    cardTarjeta.appendChild(card);
    card.appendChild(imgCard);
    card.appendChild(preCard);
    card.appendChild(card2);
    card2.appendChild(pCard);
    card2.appendChild(imgCarrito);
    main.appendChild(cardTarjeta);
}

function recorrer(cantidad){

    for (let i = 0; i < cantidad; i++) {
        create_card(i);
    }
}

recorrer(10);








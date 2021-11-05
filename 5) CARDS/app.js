const tarjeta_wrap = document.querySelector('.tarjeta-wrap');


create_card();

function create_card(){
    const card=document.createElement('div');
    const titleCard = document.createElement('h2');
    const imgCard = document.createElement('img');
    const preCard = document.createElement('p');
    const card2=document.createElement('div');
    const pCard = document.createElement('p');
    const imgCarrito = document.createElement('img');

    card.classList.add('tarjeta');
    titleCard.textContent="MAUSE";
    preCard.textContent="100.000";
    preCard.setAttribute('id', 'precio');
    imgCard.setAttribute('id', 'articulo')
    imgCard.setAttribute('src', 'img/fondo3.jpg')
    card2.classList.add('atras')
    pCard.textContent="Este es el carrito";
    pCard.setAttribute('id', 'info');
    imgCarrito.setAttribute('src', 'img/carrito.png');
    imgCarrito.setAttribute('id', 'carrito');

    card.appendChild(titleCard);
    card.appendChild(imgCard);
    card.appendChild(preCard);
    card.appendChild(card2);
    card2.appendChild(pCard);
    card2.appendChild(imgCarrito);
    tarjeta_wrap.appendChild(card);
}

function recorrer(cantidad){

    for (let i = 0; i < cantidad; i++) {
        create_card(i);
    }
}

recorrer(10);




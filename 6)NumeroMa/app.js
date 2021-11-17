const titulo = document.querySelector('#titulo');
const numero = document.querySelector('#numero');


const numeroAle = Math.round(Math.random() * 101);
console.log(numeroAle);


numero.addEventListener("keyup", mostrarNumeroAle);

    function mostrarNumeroAle(e){
        if (e.keyCode == '13'){
            if(numeroAle > numero.value){
             titulo.textContent = "El numero magico es mayor";
             titulo.style.color = "red";
             }
             if(numeroAle < numero.value){
                 titulo.textContent = "El numero magico es menor";
                 titulo.style.color = "red";
             }
             if(numeroAle == numero.value){
                titulo.textContent = "Este es el numero magico";
                titulo.style.color = "blue";
             }
             numero.value="";
    }

}

    


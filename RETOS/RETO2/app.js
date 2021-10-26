let alerta=document.getElementById("estado");
let entrada=document.getElementById("entrada");
let btn=document.getElementById("btn");
let contenedorTarjeta=document.getElementById("contenedor-datos");
let nombreUsuario=document.getElementById("nombreUsusario");
let validacion=false;

let allowed=/[ a-zA-Z0-9]{1,20}$/;

entrada.addEventListener("keyup", validate);



function validate(){
    if (allowed.test(entrada.value)) {
        alerta.textContent="valido";
        alerta.style.color="";
        validacion=true;
    }
    else{
        alerta.style.color="#c31002";
        alerta.textContent="Caracter invalido, solo se permiten numeros y letras";
        validacion=false;
    }
}

btn.addEventListener("click", generateCard);

function generateCard(){
    if (validacion) {
        contenedorTarjeta.style.visibility="visible";
        nombreUsuario.textContent=entrada.value;
    }
    else{
        contenedorTarjeta.style.visibility="hidden";
    }
}
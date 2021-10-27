let alerta=document.getElementById("estado");
let entrada=document.getElementById("entrada");
let btn=document.getElementById("btn");
let contenedorTarjeta=document.getElementById("contenedor-salida");
let nombreUsuario=document.getElementById("nombreUsusario");
let validacion=false;
let caracteres=/^[ a-zA-Z0-9]{1,20}$/;
entrada.addEventListener("keyup", validarCaracteres);

function validarCaracteres(){
    if (caracteres.test(entrada.value)) {
        alerta.style.color="#1008FF";
        alerta.textContent="Valido";
        validacion=true;
    }
    else{
        alerta.textContent="Caracter invalido, solo se permiten numeros y letras";
        alerta.style.color="#E60505";
        validacion=false;
    }
}

btn.addEventListener("click", generarTarjeta);

function generarTarjeta(){
    if (validacion) {
        nombreUsuario.textContent=entrada.value;
        contenedorTarjeta.style.visibility="visible";
    }
    else{
        contenedorTarjeta.style.visibility="hidden";
    }
}
let alerta=document.getElementById("estado");
let entrada=document.getElementById("entrada");
let btn=document.getElementById("btn");
let contenedorTarjeta=document.getElementById("contenedor-salida");
let contenedorDatos=document.getElementById("contenedor-datos");
let nombreUsuario=document.getElementById("nombreUsusario");
let bienvenido = document.getElementById("bienvenido");
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
        contenedorTarjeta.style.cssText = "display: flex; align-items: center; justify-content: center; flex-direction: column; width: 40%; height: 90%; margin: auto; box-shadow: 0 0 5px rgba(0,178,255,1), 0 0 10px rgba(0,178,255,1), 0 0 20px rgba(0,178,255,1);";
        contenedorDatos.style.cssText = "display: flex; align-items: center; justify-content: center; width: 60%; height: 60%; border-radius: 50%; box-shadow: 0 0 5px rgb(0, 0, 0), 0 0 10px rgb(0, 0, 0), 0 0 20px rgb(0, 0, 0);";
        bienvenido.textContent = "BIENVENID@";
        bienvenido.style.cssText = "font-size: 25px; font-family: Verdana; font-weight:bold; padding-top: 20px;";
        nombreUsuario.textContent=entrada.value;
    }
    else{
        contenedorTarjeta.style.visibility="hidden";
    }
}
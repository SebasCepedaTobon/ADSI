const boton = document.getElementById("boton");
const contenedor = document.getElementById("contenedor");
const Titulo = document.getElementById("Titulo")

boton.addEventListener("click", generadorColorAleatorio);

function generadorColorAleatorio(){
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const ColorTipo_rbg = `rgb(${r},${g},${b})`;
  contenedor.style.background = ColorTipo_rbg;
  const rojo = Math.floor(Math.random() * 256);
  const verde = Math.floor(Math.random() * 256);
  const azul = Math.floor(Math.random() * 256);
  const ColorTitulo = `rgb(${rojo},${verde},${azul})`;
  Titulo.style.color = ColorTitulo;
  contenedor.style.background = ColorTipo_rbg;

}



const template = document.querySelector('.template').content
const main = document.querySelector('.main-card')
const contenedorH2 = document.querySelector('#contenedorH2')

const botonNombreB = document.querySelector('.boton1')
const botonAge5 = document.querySelector('.boton2')
const botonTipoAve10 = document.querySelector('.boton3')
const botonMaminerosNegro = document.querySelector('.boton4')
const botonExcluyanBlanco = document.querySelector('.boton5')



botonNombreB.addEventListener('click', numCinco)
botonAge5.addEventListener('click', age5)
botonMaminerosNegro.addEventListener('click', mamiferoNegro)
botonTipoAve10.addEventListener('click', tipoAve10Age10)
botonExcluyanBlanco.addEventListener('click', diferenteBlanco)

// Crear grupos de máximo 3 integrantes y realizar los siguientes ejercicios.
// Entregar carpeta comprimida con cada uno de los ejercicios en js.


// 1. Mostrar todos los animales cuya inicial sea la letra B
// 2. Mostrar todos los animales que tengan más de 5 años.
// 3. Mostrar todos los animales que sean de tipo ave y tengan más de 10 años.
// 4. Muestre un Array con los nombres de todos los animales mamíferos de color negro.
// 5. Muestre un Array donde se excluyan los animales de color blanco.

const fragment = document.createDocumentFragment();

const animales = [
    {name:"Lobo", type:"Mamifero", age:5,color:"Gris"},
    {name:"Zorro", type:"Mamifero", age:2,color:"Amarillo"},
    {name:"Gato", type:"Mamifero", age:7,color:"Negro"},
    {name:"Caballo", type:"Mamifero", age:3,color:"Café"},
    {name:"León", type:"Mamifero", age:12,color:"Café"},
    {name:"Elefante", type:"Mamifero", age:13,color:"Gris"},
    {name:"Jirafa", type:"Mamifero", age:9,color:"Amarillo"},
    {name:"Tigre", type:"Mamifero", age:5,color:"Amarillo"},
    {name:"Ballena", type:"Mamifero", age:3,color:"Azul"},  
    {name:"Búho", type:"Ave", age:13,color:"Café"},
    {name:"Gallina", type:"Ave", age:9,color:"Blanco"},
    {name:"Águila", type:"Ave", age:4,color:"Rojo"},
    {name:"Perro", type:"Mamifero", age:5,color:"Blanco"},
    {name:"Toro", type:"Mamifero", age:12,color:"Negro"},
    {name:"Oveja", type:"Mamifero", age:13,color:"Blanco"},
    {name:"Hombre", type:"Mamifero", age:9,color:"Piel"},
  ];

function numCinco(){
    contenedorH2.innerHTML = ""
    main.innerHTML=""
    console.log("HOLA")
    animales.forEach(element => {
        if(element.name[0] === "B"){
            template.querySelector('.nombre').textContent=element.name
            template.querySelector('.mamifero').textContent=element.type
            template.querySelector('.age').textContent=element.age
            template.querySelector('.color').textContent=element.color

            const clonar = template.cloneNode(true)
            fragment.appendChild(clonar)
            main.append(fragment) 
        }
    })
}

function age5(){
    contenedorH2.innerHTML = ""
    main.innerHTML=""
    animales.forEach(element =>{
        if(element.age > 5){
            template.querySelector('.nombre').textContent=element.name
            template.querySelector('.mamifero').textContent=element.type
            template.querySelector('.age').textContent=element.age
            template.querySelector('.color').textContent=element.color
    
            const clonar = template.cloneNode(true)
            fragment.appendChild(clonar)
            main.append(fragment) 
        }
    })
}


function tipoAve10Age10(){
    contenedorH2.innerHTML = ""
    main.innerHTML=""
    animales.forEach(element => {
        if(element.type === "Ave" && element.age>10){
            template.querySelector('.nombre').textContent=element.name
            template.querySelector('.mamifero').textContent=element.type
            template.querySelector('.age').textContent=element.age
            template.querySelector('.color').textContent=element.color
            const clonar = template.cloneNode(true)
            fragment.appendChild(clonar)
            main.append(fragment) 
        }
       
    })
}

function mamiferoNegro(){
    contenedorH2.innerHTML = ""
    main.innerHTML=""
    animales.forEach(element =>{
        if(element.type === "Mamifero" && element.color === "Negro"){
            const mamiferosNegros = [element.name, element.type, element.age, element.color]
            console.log(mamiferosNegros)
        }
    })
}

function mamiferoNegro(){
    contenedorH2.innerHTML = ""
    const nombreJugador=document.createElement('h2');
    nombreJugador.setAttribute('id','title');
    nombreJugador.textContent="REVISAR CONSOLA";
    fragment.appendChild(nombreJugador)
    contenedorH2.appendChild(fragment)
    main.innerHTML=""
    animales.forEach(element =>{
        if(element.type === "Mamifero" && element.color === "Negro"){
            template.querySelector('.nombre').textContent=element.name
            template.querySelector('.mamifero').textContent=element.type
            template.querySelector('.age').textContent=element.age
            template.querySelector('.color').textContent=element.color
            const clonar = template.cloneNode(true)
            fragment.appendChild(clonar)
            main.append(fragment) 
            const mamiferosNegros = [element.name, element.type, element.age, element.color]
            console.log(mamiferosNegros)
        }
    })
}

function diferenteBlanco(){
    contenedorH2.innerHTML = ""
    const nombreJugador=document.createElement('h2');
    nombreJugador.setAttribute('id','title');
    nombreJugador.textContent="REVISAR CONSOLA";
    fragment.appendChild(nombreJugador)
    contenedorH2.appendChild(fragment)
    main.innerHTML=""
    animales.forEach(element =>{
        if(element.color !== "Blanco"){
            template.querySelector('.nombre').textContent=element.name
            template.querySelector('.mamifero').textContent=element.type
            template.querySelector('.age').textContent=element.age
            template.querySelector('.color').textContent=element.color
            const clonar = template.cloneNode(true)
            fragment.appendChild(clonar)
            main.append(fragment) 
            const mamiNoblancos = [element.name, element.type, element.age, element.color]
            console.log(mamiNoblancos)
        }
    })
}




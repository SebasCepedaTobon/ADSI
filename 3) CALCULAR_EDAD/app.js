
const nombre = document.getElementById('nombre');
const fechaNacimiento = document.querySelector('#fechaNacimiento');
const resultadoEdad = document.getElementById('edadCalculada');
const calcularEdad = document.querySelector('#boton');

calcularEdad.addEventListener('click', operacionEdad);

function operacionEdad(){
    let nombre1 = nombre.value;
    let fecha = fechaNacimiento.value
    let nacimiento = fecha.split('-');
    let fecha_hoy = new Date();
    let yearActual = fecha_hoy.getFullYear();
    let mesActual = fecha_hoy.getMonth()+1;
    let diaActual = fecha_hoy.getDate();

    let year = yearActual - nacimiento[0];
    let mes = mesActual - nacimiento[1];
    let dia = diaActual - nacimiento[2];

    if(year < 0){
        resultadoEdad.textContent = `Hola ${nombre1} usted ingreso datos invalidos porque su edad en negativa`;
    }else{
        if ((year >= 18) || (year >= 18 && mes >= 0) || (year >= 18 && mes >= 0 &&dia >= 1)){      
            resultadoEdad.textContent = `Hola ${nombre1} usted es mayor de edad su edad es ${year}`; 
        }else{
            resultadoEdad.textContent = `Hola ${nombre1} usted es menor de edad su edad es ${year}`;        
        }
    }
    
}

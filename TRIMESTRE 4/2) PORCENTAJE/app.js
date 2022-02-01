const numero1 = document.getElementById('nota1');
const numero2 = document.getElementById('nota2');
const calcularTotal = document.querySelector('#btn-calcular');
const nota3 = document.getElementById('NotaNecesaria');

calcularTotal.addEventListener('click', calcular);

function calcular(){
    let num1 = parseFloat(numero1.value);
    let num2 = parseFloat(numero2.value);
    let valorNecesario = 3.5;
    let multiplicacionNota1 = num1 *  0.25;
    let multiplicacionNota2 = num2 *  0.35;
    let suma = multiplicacionNota1 + multiplicacionNota2;
    let resta = valorNecesario - suma;
    let division = resta / 0.4;
    if(division > 5){
        nota3.textContent = `Ya no puedes ganar debes sacar mas de la nota maxima [ 5 ] `;
    }else{
        nota3.textContent = `Debes sacar ${division.toFixed(1)}`;
    }
    
}

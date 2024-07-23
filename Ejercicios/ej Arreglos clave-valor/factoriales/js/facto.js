/**
 * Numero del 1 al 10
 * Autor: Brayan CP
 * Fecha: 8/07/2024
 */

let arreglo = [1, 2, 3, 4, 5];
let resultado = '';

// Mostrar el factorial
for (let i = 0; i < arreglo.length; i++) {
    numero = arreglo[i];
    let factorial = 1;

    for (let j = 1; j <= numero; j++) {
        factorial *= j;

    }
    
    resultado += '<li class="list-group-item">' + numero + '! = ' + factorial + '</li>';
}

document.getElementById('lista-numeros').innerHTML = resultado;
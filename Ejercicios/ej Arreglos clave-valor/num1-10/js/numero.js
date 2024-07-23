/**
 * Numero del 1 al 10
 * Autor: Brayan CP
 * Fecha: 8/07/2024
 */

let arregloNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let i;
let numero;
let resultado = '';

//Lista Uno
for(i=0; i<arregloNumeros.length; i++){
    resultado += '<li class="list-group-item">'+arregloNumeros[i]+'</li>';
}

document.getElementById('lista-numerosUno').innerHTML = resultado;

//Lista Dos
arregloNumeros = [];
for(i=0; i<10; i++){
    numero = i+1
    arregloNumeros.push(numero);
}

resultado = '';
for(i=0; i<arregloNumeros.length; i++){
    resultado += '<li class="list-group-item">'+arregloNumeros[i]+'</li>';
}

document.getElementById('lista-numerosDos').innerHTML = resultado;
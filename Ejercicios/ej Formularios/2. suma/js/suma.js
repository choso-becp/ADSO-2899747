/*
Suma de dos numeros
Autor: Brayan CP
Fecha: 11 de Junio de 2024
*/

function sumar(){
    let numerosUno=parseInt(document.getElementById('txtNumeroUno').value);
    let numerosDos=parseInt(document.getElementById('txtNumeroDos').value);
    let suma;
    suma= numerosUno+numerosDos;
    document.getElementById('suma').innerHTML="<strong>"+suma+"</strong>";
    return false;
}
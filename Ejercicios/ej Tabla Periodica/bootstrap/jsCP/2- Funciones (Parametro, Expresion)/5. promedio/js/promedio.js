/*
* Promedio de tres notas
* Autor: Brayan CP
* Lunes 01 de Abril del 2024
*/

//Con Parametro
function prom(pnumeroUno, pnumeroDos, pnumeroTres) {
    let numeroUno = pnumeroUno
    let numeroDos = pnumeroDos
    let numeroTres = pnumeroTres
    let prom = (numeroUno + numeroDos + numeroTres)/3
    return prom + " Parametro";
}


//Con Expresion
const promExp= function(pnumeroUno, pnumeroDos, pnumeroTres) {
    let numeroUno = pnumeroUno
    let numeroDos = pnumeroDos
    let numeroTres = pnumeroTres
    let prom = (numeroUno + numeroDos + numeroTres)/3
    return prom + " Expresion";
}
/*
* Contador del 1 al 5 con WHILE y FOR
* Lunes 01 de Abril del 2024
*/

//WHILE Con Parametro
function contWhile(pcontar, pnumero) {
    let contar = pcontar
    let numero = pnumero
    while (contar < numero) {
        contar = contar + 1;
        console.log(contar);
    }
    return "Se conto hasta " + contar
}

//WHILE Con Expresion
const contWhileExp = function (pcontar, pnumero) {
    let contar = pcontar
    let numero = pnumero
    while (contar < numero) {
        contar = contar + 1;
        console.log(contar);
    }
    return "Se conto hasta " + contar
}

//FOR Con Parametro
function contFor(pcontar, pnumero) {
    let contar = pcontar
    let numero = pnumero
    for (contar; contar <= numero; contar++) {
        console.log(contar);
    }
    return "Se conto hasta " + contar
}

//FOR Con Expresion
const contForExp = function (pcontar, pnumero) {
    let contar = pcontar
    let numero = pnumero
    for (contar; contar <= numero; contar++) {
        console.log(contar);
    }
    return "Se conto hasta " + contar
}
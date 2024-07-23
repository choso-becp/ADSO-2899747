/*
* Ciclo para identificar los numeros pares e impares
* Lunes 01 de Abril del 2024
*/

function esParImpar(num) {
    if (num % 2 === 0) {
        return " es par"
    } else {
        return " es impar"
    }
}

//WHILE Con Parametro
function cicloWhile(pcontar, pnumero) {
    let contar = pcontar
    let numero = pnumero
    let parImpar
    while (contar < numero) {
        parImpar = esParImpar(contar)
        contar = contar + 1
        if (contar % 2 == 0) {
            console.log(contar + parImpar)
        }
        else {
            console.log(contar + parImpar)
        }
    }
    return " "
}

//WHILE Con Expresion
const cicloWhileExp = function (pcontar, pnumero) {
    let contar = pcontar
    let numero = pnumero
    let parImpar
    while (contar < numero) {
        parImpar = esParImpar(contar)
        contar = contar + 1
        if (contar % 2 == 0) {
            console.log(contar + parImpar)
        }
        else {
            console.log(contar + parImpar)
        }
    }
    return " "
}

//FOR Con Parametro
function cicloFor(pcontar, pnumero) {
    let contar = pcontar
    let numero = pnumero
    let parImpar
    for (contar; contar <= numero; contar++) {
        parImpar = esParImpar(contar)
        if (contar % 2 == 0) {
            console.log(contar + parImpar)
        }
        else {
            console.log(contar + parImpar)
        }
    }
    return " "
}

//FOR Con Expresion
const cicloForExp = function (pcontar, pnumero) {
    let contar = pcontar
    let numero = pnumero
    let parImpar
    for (contar; contar <= numero; contar++) {
        parImpar = esParImpar(contar)
        if (contar % 2 == 0) {
            console.log(contar + parImpar)
        }
        else {
            console.log(contar + parImpar)
        }
    }
    return " "
}
/*
* Tabla de multiplicar del 1 a la 5 e identificar los pares y impares
* Lunes 01 de Abril del 2024
*/

function esParImpar(num) {
    if (num % 2 === 0) {
        return " buzz"
    } else {
        return " bass"
    }
}

//WHILE Con Parametro
function cicloWhile(ptab, pcont, ppar, pimpar) {
    let tab = ptab
    let cont = pcont
    let par = ppar
    let impar = pimpar
    while (tab < 5) {
        tab = tab + 1
        cont = 1
        while (cont <= 5) {
            let mult = tab * cont
            let parImpar = esParImpar(mult)
            if (mult % 2 == 0) {
                console.log(tab+" * "+cont+" = "+mult+parImpar)
                par = par + 1
            } else {
                console.log(tab+" * "+cont+" = "+mult+parImpar)
                impar = impar + 1
            } cont = cont + 1
        }
    }
    return "Total Pares: " + par + "\n" + "Total Impares: " + impar
}

//WHILE Con Expresion
const cicloWhileExp = function (ptab, pcont, ppar, pimpar) {
    let tab = ptab
    let cont = pcont
    let par = ppar
    let impar = pimpar
    while (tab < 5) {
        tab = tab + 1
        cont = 1
        while (cont <= 5) {
            let mult = tab * cont
            let parImpar = esParImpar(mult)
            if (mult % 2 == 0) {
                console.log(tab+" * "+cont+" = "+mult+parImpar)
                par = par + 1
            } else {
                console.log(tab+" * "+cont+" = "+mult+parImpar)
                impar = impar + 1
            } cont = cont + 1
        }
    }
    return "Total Pares: " + par + "\n" + "Total Impares: " + impar
}

//FOR Con Parametro
function cicloFor(ptab, pcont, ppar, pimpar) {
    let tab = ptab
    let cont = pcont
    let par = ppar
    let impar = pimpar
    for (tab; tab <= 5; tab++) {
        cont = 1
        for (cont; cont <= 5; cont++) {
            let mult = tab * cont
            let parImpar = esParImpar(mult)
            if (mult % 2 == 0) {
                console.log(tab+" * "+cont+" = "+mult+parImpar)
                par = par + 1
            }
            else {
                console.log(tab+" * "+cont+" = "+mult+parImpar)
                impar = impar + 1
            }
        }
    }
    return "Total Pares: " + par + "\n" + "Total Impares: " + impar
}

//FOR Con Expresion
const cicloForExp = function (ptab, pcont, ppar, pimpar) {
    let tab = ptab
    let cont = pcont
    let par = ppar
    let impar = pimpar
    for (tab; tab <= 5; tab++) {
        cont = 1
        for (cont; cont <= 5; cont++) {
            let mult = tab * cont
            let parImpar = esParImpar(mult)
            if (mult % 2 == 0) {
                console.log(tab+" * "+cont+" = "+mult+parImpar)
                par = par + 1
            }
            else {
                console.log(tab+" * "+cont+" = "+mult+parImpar)
                impar = impar + 1
            }
        }
    }
    return "Total Pares: " + par + "\n" + "Total Impares: " + impar
}
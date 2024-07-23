/*
* Tabla de multiplicar del 9 hasta 5 e identificar los pares y impares
* Lunes 01 de Abril del 2024
*/

    function esParImpar(num) {
        if (num % 2 === 0) {
            return "par"
        } else {
            return "impar"
        }
    }

    //WHILE Con Parametro
    function cicloWhile(pcont, pnum) {
        let cont = pcont
        let num = pnum
        while (cont <= 5) {
            let mult = num * cont
            let parImpar = esParImpar(mult)
            console.log(num+" * "+cont+" = "+mult+" es "+parImpar)
            cont = cont + 1
        }
        return " "
    }

//WHILE Con Expresion
const cicloWhileExp = function (pcont, pnum) {
    let cont = pcont
    let num = pnum
    while (cont <= 5) {
        let mult = num * cont
        let parImpar = esParImpar(mult)
        console.log(num+" * "+cont+" = "+mult+" es "+parImpar)
        cont = cont + 1
    }
    return " "
}

//FOR Con Parametro
function cicloFor(pcont, pnum) {
    let cont = pcont
    let num = pnum
    for (cont; cont <= 5; cont++) {
        let mult = num * cont
        let parImpar = esParImpar(mult)
        console.log(num+" * "+cont+" = "+mult+" es "+parImpar)
    }
    return " "
}

//FOR Con Expresion
const cicloForExp = function (pcont, pnum) {
    let cont = pcont
    let num = pnum
    for (cont; cont <= 5; cont++) {
        let mult = num * cont
        let parImpar = esParImpar(mult)
        console.log(num+" * "+cont+" = "+mult+" es "+parImpar)
    }
    return " "
}
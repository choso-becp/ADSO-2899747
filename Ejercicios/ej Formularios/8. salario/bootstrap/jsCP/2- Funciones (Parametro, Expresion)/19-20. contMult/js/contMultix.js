/*
* Tabla de multiplicar del 5
* Lunes 01 de Abril del 2024
*/

//WHILE Con Parametro
function cicloWhile(pcont, pnum) {
    let cont = pcont
    let num = pnum
    while(cont<=num){
        mult=num*cont
        console.log(num+" * "+cont+" = "+mult);
        cont=cont+1
    }
    return "Se conto hasta " + cont
}

//WHILE Con Expresion
const cicloWhileExp = function (pcont, pnum) {
    let cont = pcont
    let num = pnum
    while(cont<=num){
        mult=num*cont
        console.log(num+" * "+cont+" = "+mult);
        cont=cont+1
    }
    return "Se conto hasta " + cont
}

//FOR Con Parametro
function cicloFor(pcont, pnum) {
    let cont = pcont
    let num = pnum
    for (cont; cont<=num; cont++){
        mult=num*cont
        console.log(num+" * "+cont+" = "+mult);
    }
    return "Se conto hasta " + cont
}

//FOR Con Expresion
const cicloForExp = function (pcont, pnum) {
    let cont = pcont
    let num = pnum
    for (cont; cont<=num; cont++){
        mult=num*cont
        console.log(num+" * "+cont+" = "+mult);
    }
    return "Se conto hasta " + cont
}
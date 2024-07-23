/*
* Calcular el 20% de la nota1, el 35% de la nota2,
  el 45% de la nota3 y la suma de los porcentajes
* Lunes 01 de Abril del 2024
*/

//Con Parametro
function proNotas(pnota1, pnota2, pnota3) {
    let nota1 = pnota1
    let nota2 = pnota2
    let nota3 = pnota3
    porcent1 = (nota1 * 20) / 100
    porcent2 = (nota2 * 35) / 100
    porcent3 = (nota3 * 45) / 100
    sum = porcent1 + porcent2 + porcent3
    if (sum > 4.5) {
        console.log("Nota superior")
    }
    else {
        if (sum <= 4.5 && sum > 3.5) {
            console.log("Nota buena")
        }
        else {
            if (sum <= 3.5 && sum >= 3) {
                console.log("Nota media")
            }
            else {
                console.log("Nota mala")
            }
        }
        console.log("El 20% de la nota1 es: " + porcent1)
        console.log("El 35% de la nota2 es: " + porcent2)
        console.log("El 45% de la nota3 es: " + porcent3)
    }
    return "Suma de los porcentajes: " + sum
}


//Con Expresion
const proNotasExp = function (pnota1, pnota2, pnota3) {
    let nota1 = pnota1
    let nota2 = pnota2
    let nota3 = pnota3
    porcent1 = (nota1 * 20) / 100
    porcent2 = (nota2 * 35) / 100
    porcent3 = (nota3 * 45) / 100
    sum = porcent1 + porcent2 + porcent3
    if (sum > 4.5) {
        console.log("Nota superior")
    }
    else {
        if (sum <= 4.5 && sum > 3.5) {
            console.log("Nota buena")
        }
        else {
            if (sum <= 3.5 && sum >= 3) {
                console.log("Nota media")
            }
            else {
                console.log("Nota mala")
            }
        }
        console.log("El 20% de la nota1 es: " + porcent1)
        console.log("El 35% de la nota2 es: " + porcent2)
        console.log("El 45% de la nota3 es: " + porcent3)
    }
    return "Suma de los porcentajes: " + sum
}
/*
* Imprimir la edad, el promedio de edades y el promedio mayor de edad entre 3 personas
* Autor: Brayan CP
* Lunes 01 de Abril del 2024
*/

//Con Parametro
function edadPerson(panoAct1, panoNac1, panoAct2, panoNac2, panoAct3, panoNac3) {
    let anoAct1 = panoAct1, anoAct2 = panoAct2, anoAct3 = panoAct3
    let anoNac1 = panoNac1, anoNac2 = panoNac2, anoNac3 = panoNac3
    edad1 = anoAct1 - anoNac1
    edad2 = anoAct2 - anoNac2
    edad3 = anoAct3 - anoNac3
    prom = (edad1 + edad2 + edad3) / 3
    if (edad1 >= 18) {
        console.log("La primera edad es mayor")
    } else {
        console.log("La primera edad es menor")
    }
    if (edad2 >= 18) {
        console.log("La segunda edad es mayor")
    } else {
        console.log("La segunda edad es menor")
    }
    if (edad3 >= 18) {
        console.log("La tercera edad es mayor")
    } else {
        console.log("La tercera edad menor")
    }
    console.log("El promedio de edad es: " + prom)
    if (prom < 18) {
        console.log("El promedio es minoria de edad")
    } else {
        console.log("El promedio es mayoria de edad")
    }
    return "edad1: " + edad1 + " edad2: " + edad2 + " edad3: " + edad3
}


//Con Expresion
const edadPersonExp = function (panoAct1, panoNac1, panoAct2, panoNac2, panoAct3, panoNac3) {
    let anoAct1 = panoAct1, anoAct2 = panoAct2, anoAct3 = panoAct3
    let anoNac1 = panoNac1, anoNac2 = panoNac2, anoNac3 = panoNac3
    edad1 = anoAct1 - anoNac1
    edad2 = anoAct2 - anoNac2
    edad3 = anoAct3 - anoNac3
    prom = (edad1 + edad2 + edad3) / 3
    if (edad1 >= 18) {
        console.log("La primera edad es mayor")
    } else {
        console.log("La primera edad es menor")
    }
    if (edad2 >= 18) {
        console.log("La segunda edad es mayor")
    } else {
        console.log("La segunda edad es menor")
    }
    if (edad3 >= 18) {
        console.log("La tercera edad es mayor")
    } else {
        console.log("La tercera edad menor")
    }
    console.log("El promedio de edad es: " + prom)
    if (prom < 18) {
        console.log("El promedio es minoria de edad")
    } else {
        console.log("El promedio es mayoria de edad")
    }
    return "edad1: " + edad1 + " edad2: " + edad2 + " edad3: " + edad3
}
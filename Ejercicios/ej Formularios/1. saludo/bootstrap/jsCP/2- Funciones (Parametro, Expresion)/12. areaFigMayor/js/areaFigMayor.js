/*
* Calcular el area mayor entre 3 cuadrados
* Autor: Brayan CP
* Lunes 01 de Abril del 2024
*/

//Con Parametro
function areaMay(plad1, plad2, plad3) {
    let lad1 = plad1
    let lad2 = plad2
    let lad3 = plad3
    cua1 = lad1 * lad1
    cua2 = lad2 * lad2
    cua3 = lad3 * lad3
    if (cua1 == cua2 && cua2 == cua3) {
        console.log("Todos las areas son iguales");
    }
    else {
        if (cua1 > cua2 && cua1 > cua3) {
            console.log("El area uno es mayor")
        }
        else {
            if (cua2 > cua1 && cua2 > cua3) {
                console.log("El area dos es mayor")
            } else {
                console.log("El area tres es mayor")
            }
        }
    }
    return "Area1: " + cua1 + " Area2: " + cua2 + " Area3: " + cua3
}


//Con Expresion
const areaMayExp = function (plad1, plad2, plad3) {
    let lad1 = plad1
    let lad2 = plad2
    let lad3 = plad3
    cua1 = lad1 * lad1
    cua2 = lad2 * lad2
    cua3 = lad3 * lad3
    if (cua1 == cua2 && cua2 == cua3) {
        console.log("Todos las areas son iguales");
    }
    else {
        if (cua1 > cua2 && cua1 > cua3) {
            console.log("El area uno es mayor")
        }
        else {
            if (cua2 > cua1 && cua2 > cua3) {
                console.log("El area dos es mayor")
            } else {
                console.log("El area tres es mayor")
            }
        }
    }
    return "Area1: " + cua1 + " Area2: " + cua2 + " Area3: " + cua3
}
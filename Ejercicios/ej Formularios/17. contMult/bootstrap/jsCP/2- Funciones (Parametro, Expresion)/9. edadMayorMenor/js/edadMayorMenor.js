/*
* Identificar si la persona es mayor o menor de edad
* Autor: Brayan CP
* Lunes 02 de Abril del 2024
*/

//Con Parametro
function edadPersona(pedad) {
    let edad=pedad
    if(edad>=18){
        console.log("Es mayor de edad")
    }else{
        console.log("Es menor de edad")
    }
    return edad
}


//Con Expresion
const edadPersonaExp= function(pedad) {
    let edad=pedad
    if(edad>=18){
        console.log("Es mayor de edad")
    }else{
        console.log("Es menor de edad")
    }
    return edad
}
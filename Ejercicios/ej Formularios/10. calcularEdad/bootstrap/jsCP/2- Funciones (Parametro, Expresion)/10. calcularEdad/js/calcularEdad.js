/*
* Calcular la edad de una persona
* Autor: Brayan CP
* Lunes 01 de Abril del 2024
*/

//Con Parametro
function calcEdad(panoAct, panoNac) {
    let anoAct = panoAct
    let anoNac = panoNac
    let edad = anoAct - anoNac
    if(edad>17){
        console.log("Es mayor de edad");
     }else{
        console.log("Es menor de edad");
     }
    return edad
}


//Con Expresion
const calcEdadExp = function (panoAct, panoNac)  {
    let anoAct = panoAct
    let anoNac = panoNac
    let edad = anoAct - anoNac
    if(edad>17){
        console.log("Es mayor de edad");
     }else{
        console.log("Es menor de edad");
     }
    return edad
}
/*
* Calcular el numero mayor, menor o si son iguales
* Autor: Brayan CP
* Lunes 01 de Abril del 2024
*/

//Con Parametro
function numCalc(pnum1, pnum2) {
    let num1 = pnum1
    let num2 = pnum2
    if(num1==num2){
        console.log("Son iguales");
    }
    else{
        if(num1>num2){
            console.log("El numero uno es mayor");
        }else{ 
            console.log("El numero dos es mayor");
        }
    }
    return "Num1: "+num1+" Num2: "+num2
}


//Con Expresion
const numCalcExp = function (pnum1, pnum2)  {
    let num1 = pnum1
    let num2 = pnum2
    if(num1==num2){
        console.log("Son iguales");
    }
    else{
        if(num1>num2){
            console.log("El numero uno es mayor");
        }else{ 
            console.log("El numero dos es mayor");
        }
    }
    return "Num1: "+num1+" Num2: "+num2
}
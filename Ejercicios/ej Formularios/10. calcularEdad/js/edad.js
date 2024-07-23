/*
Calcular edad
Autor: Brayan CP
Fecha: 11 de Junio de 2024
*/


function calcularEdad() {
    let fechaNac = new Date(document.getElementById('txtFecha').value);
    let fechaAct = new Date();
    let edad = fechaAct.getFullYear() - fechaNac.getFullYear();
    if (edad<=17){
        tipoEdad="es menor de edad"
    }else{
        tipoEdad="es mayor de edad"
    }
    document.getElementById('edad').innerHTML = "<strong>" + edad + " años, " + tipoEdad + "</strong>";
    return false;
}

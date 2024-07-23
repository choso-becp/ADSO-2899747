<?php
/*
* Calcular la edad de una persona
* Autor: Brayan CP
* Martes 13 de Mayo del 2024
*/

function calcEdad($anoAct, $anoNac) {
    $edad = $anoAct - $anoNac;
    if($edad>17){
        return $edad." Es mayor de edad";
     }else{
        return $edad." Es menor de edad";
     }
}
?>
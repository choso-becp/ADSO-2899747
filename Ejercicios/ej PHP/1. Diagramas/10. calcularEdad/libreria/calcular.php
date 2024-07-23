<?php
/*
* Calcular la edad de una persona
* Autor: Brayan CP
* Martes 13 de Mayo del 2024
*/

$anoActual = 2024; 
$anoNacimiento = 2005; 
$edad = $anoActual - $anoNacimiento;

if ($edad > 17) {
    $mensaje = $edad . " Es mayor de edad";
} else {
   $mensaje = $edad . " Es menor de edad";
}
?>
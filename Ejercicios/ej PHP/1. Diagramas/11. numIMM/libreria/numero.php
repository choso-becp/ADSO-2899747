<?php
/*
* Iddentificar los numeros son mayores, menores o iguales
* Autor: Brayan CP
* Martes 13 de Mayo del 2024
*/

$num1 = 10;
$num2 = 20;

if ($num1 == $num2) {
    $mensaje = "Son iguales";
} else {
    if ($num1 > $num2) {
        $mensaje = "El número uno es mayor";
    } else {
        $mensaje = "El número dos es mayor";
    }
}
?>
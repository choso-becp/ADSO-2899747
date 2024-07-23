<?php
/*
* Calcular el area mayor entre 3 cuadrados
* Autor: Brayan CP
* Martes 13 de Mayo del 2024
*/

$lad1 = 4;
$lad2 = 5;
$lad3 = 6;

$cua1 = $lad1 * $lad1;
$cua2 = $lad2 * $lad2;
$cua3 = $lad3 * $lad3;

if ($cua1 == $cua2 && $cua2 == $cua3) {
    $mensaje = "Todos las áreas son iguales";
} else {
    if ($cua1 > $cua2 && $cua1 > $cua3) {
        $mensaje = "El área uno es mayor";
    } else {
        if ($cua2 > $cua1 && $cua2 > $cua3) {
            $mensaje = "El área dos es mayor";
        } else {
            $mensaje = "El área tres es mayor";
        }
    }
}
?>
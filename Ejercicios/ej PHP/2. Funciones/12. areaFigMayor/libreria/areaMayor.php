<?php
/*
* Calcular el area mayor entre 3 cuadrados
* Autor: Brayan CP
* Martes 13 de Mayo del 2024
*/

function areaMay($lad1, $lad2, $lad3) {
    $cua1 = $lad1 * $lad1;
    $cua2 = $lad2 * $lad2;
    $cua3 = $lad3 * $lad3;
    if ($cua1 == $cua2 && $cua2 == $cua3) {
        return "Todos las areas son iguales";
    }
    else {
        if ($cua1 > $cua2 && $cua1 > $cua3) {
            return "El area uno es mayor";
        }
        else {
            if ($cua2 > $cua1 && $cua2 > $cua3) {
                return "El area dos es mayor";
            } else {
                return "El area tres es mayor";
            }
        }
    }
}
?>
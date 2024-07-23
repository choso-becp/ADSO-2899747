<?php
/*
* Calcular el 20% de la nota1, el 35% de la nota2,
  el 45% de la nota3 y la suma de los porcentajes
* Autor: Brayan CP
* Martes 13 de Mayo del 2024
*/

function proNotas($nota1, $nota2, $nota3) {
    $porcent1 = ($nota1 * 20) / 100;
    $porcent2 = ($nota2 * 35) / 100;
    $porcent3 = ($nota3 * 45) / 100;
    $sum = $porcent1 + $porcent2 + $porcent3;

    $resultados = "";

    if ($sum > 4.5) {
        $resultados .= "Nota superior<br>";
    } else {
        if ($sum <= 4.5 && $sum > 3.5) {
            $resultados .= "Nota buena<br>";
        } else {
            if ($sum <= 3.5 && $sum >= 3) {
                $resultados .= "Nota media<br>";
            } else {
                $resultados .= "Nota mala<br>";
            }
        }
        $resultados .= "El 20% de la nota1 es: " . $porcent1 . "<br>";
        $resultados .= "El 35% de la nota2 es: " . $porcent2 . "<br>";
        $resultados .= "El 45% de la nota3 es: " . $porcent3 . "<br>";
    }
    $resultados .= "Suma de los porcentajes: " . $sum;
    return $resultados;
}

?>
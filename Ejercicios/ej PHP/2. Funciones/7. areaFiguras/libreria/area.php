<?php
/*
* Area del cuadrado, triangulo y rectangulo
* Autor: Brayan CP
* Martes 07 de Mayo del 2024
*/

function areaCua($lado) {
    $resultado = ($lado * $lado);
    return $resultado;
}

function areaTri($base, $altura) {
    $resultado = ($base * $altura)/2;
    return $resultado;
}

function areaRec($base, $altura) {
    $resultado = ($base * $altura);
    return $resultado;
}
?>
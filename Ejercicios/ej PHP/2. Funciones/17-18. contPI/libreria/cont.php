<?php
/*
* Ciclo para identificar los numeros pares e impares
* Autor: Brayan CP
* Martes 13 de Mayo del 2024
*/

function esParImpar($num) {
    if ($num % 2 === 0) {
        return " es par";
    } else {
        return " es impar";
    }
}

function cicloWhile($contar, $numero) {
    $resultado = "";
    while ($contar <= $numero) {
        $parImpar = esParImpar($contar);
        $resultado .= $contar . $parImpar . "<br>";
        $contar = $contar + 1;
    }
    return $resultado;
}

function cicloFor($contar, $numero) {
    $resultado = "";
    for ($contar; $contar <= $numero; $contar++) {
        $parImpar = esParImpar($contar);
        $resultado .= $contar . $parImpar . "<br>";
    } 
    return $resultado;
}

?>
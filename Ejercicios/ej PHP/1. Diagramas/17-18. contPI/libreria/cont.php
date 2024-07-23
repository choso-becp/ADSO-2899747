<?php
/*
* Ciclo para identificar los numeros pares e impares
* Autor: Brayan CP
* Martes 13 de Mayo del 2024
*/

$num = 1;
$numero = 5;

$resultado_while = "";
while ($num <= $numero) {
    if ($num % 2 === 0) {
        $parImpar = " es par";
    } else {
        $parImpar = " es impar";
    }
    $resultado_while .= $num . $parImpar . "<br>";
    $num++;
}

$resultado_for = "";
for ($num = 1; $num <= $numero; $num++) {
    if ($num % 2 === 0) {
        $parImpar = " es par";
    } else {
        $parImpar = " es impar";
    }
    $resultado_for .= $num . $parImpar . "<br>";
}
?>
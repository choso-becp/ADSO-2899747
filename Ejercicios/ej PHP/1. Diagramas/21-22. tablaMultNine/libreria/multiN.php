<?php
/*
* Tabla de multiplicar del 9
* Autor: Brayan CP
* Martes 13 de Mayo del 2024
*/

$num = 5;
$cont = 1;
$numero = 5;

$resultado_while = "";
while ($cont <= $numero) {
    $mult = $num * $cont;
    if ($mult % 2 === 0) {
        $parImpar = "par";
    } else {
        $parImpar = "impar";
    }
    $resultado_while .= $num . " * " . $cont . " = " . $mult . " es " . $parImpar . "<br>";
    $cont++;
}

$resultado_for = "";
for ($cont = 1; $cont <= $numero; $cont++) {
    $mult = $num * $cont;
    if ($mult % 2 === 0) {
        $parImpar = "par";
    } else {
        $parImpar = "impar";
    }
    $resultado_for .= $num . " * " . $cont . " = " . $mult . " es " . $parImpar . "<br>";
}
?>
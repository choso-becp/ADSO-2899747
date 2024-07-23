<?php
/*
* Tabla de multiplicar del 5  
* Autor: Brayan CP
* Martes 13 de Mayo del 2024
*/

$num = 5;
$cont = 1;
$numero = 10;

$resultado_while = "";
while($cont <= $numero) {
    $mult = $num * $cont;
    $resultado_while .= $num . " * " . $cont . " = " . $mult . "<br>";
    $cont++;
}

$resultado_for = "";
for ($cont = 1; $cont <= $numero; $cont++) {
    $mult = $num * $cont;
    $resultado_for .= $num . " * " . $cont . " = " . $mult . "<br>";
}
?>
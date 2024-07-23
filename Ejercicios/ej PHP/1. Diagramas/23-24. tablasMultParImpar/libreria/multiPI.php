<?php
/*
* Tabla de multiplicar del 9 par e impar
* Autor: Brayan CP
* Martes 13 de Mayo del 2024
*/

$tab = 0;
$cont = 1;
$par = 0;
$impar = 0;
$par1 = 0;
$impar1 = 0;

$resultado_while = "";
while ($tab < 5) {
    $tab++;
    $cont = 1;
    while ($cont <= 5) {
        $mult = $tab * $cont;
        if ($mult % 2 == 0) {
            $parImpar = " buzz";
            $par++;
        } else {
            $parImpar = " bass";
            $impar++;
        }
        $resultado_while .= $tab . " * " . $cont . " = " . $mult . $parImpar . "<br>";
        $cont++;
    }
}
$resultado_while .= "Total Pares: " . $par . "<br>" . "Total Impares: " . $impar . "<br><br>";

$resultado_for = "";
for ($tab = 1; $tab <= 5; $tab++) {
    for ($cont = 1; $cont <= 5; $cont++) {
        $mult = $tab * $cont;
        if ($mult % 2 == 0) {
            $parImpar = " buzz";
            $par1++;
        } else {
            $parImpar = " bass";
            $impar1++;
        }
        $resultado_for .= $tab . " * " . $cont . " = " . $mult . $parImpar . "<br>";
    }
}
$resultado_for .= "Total Pares: " . $par1 . "<br>" . "Total Impares: " . $impar1;
?>
<?php
/*
* Tabla de multiplicar del 5  
* Autor: Brayan CP
* Martes 13 de Mayo del 2024
*/

function cicloWhile($cont, $num) {
    $resultado = "";
    while($cont <= $num) {
        $mult = $num * $cont;
        $resultado .= $num . " * " . $cont . " = " . $mult . "<br>";
        $cont = $cont + 1;
    }
    return $resultado;
}

function cicloFor($cont, $num) {
    $resultado = "";
    for ($cont; $cont <= $num; $cont++) {
        $mult = $num * $cont;
        $resultado .= $num . " * " . $cont . " = " . $mult . "<br>";
    }
    return $resultado;
}


?>
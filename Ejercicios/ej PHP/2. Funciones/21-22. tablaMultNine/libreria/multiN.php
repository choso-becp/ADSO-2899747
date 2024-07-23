<?php
/*
* Tabla de multiplicar del 9
* Autor: Brayan CP
* Martes 13 de Mayo del 2024
*/

function esParImpar($num) {
    if ($num % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}

function cicloWhile($cont, $num) {
    $resultado = "";
    while ($cont <= 5) {
        $mult = $num * $cont;
        $parImpar = esParImpar($mult);
        $resultado .= $num . " * " . $cont . " = " . $mult . " es " . $parImpar . "<br>";
        $cont = $cont + 1;
    }
    return $resultado;
}

function cicloFor($pcont, $pnum) {
    $cont = $pcont;
    $num = $pnum;
    $resultado = "";
    for ($cont; $cont <= 5; $cont++) {
        $mult = $num * $cont;
        $parImpar = esParImpar($mult);
        $resultado .= $num . " * " . $cont . " = " . $mult . " es " . $parImpar . "<br>";
    }
    return $resultado;
}


?>
<?php
/*
* Tabla de multiplicar del 9 par e impar
* Autor: Brayan CP
* Martes 13 de Mayo del 2024
*/

function esParImpar($num) {
    if ($num % 2 === 0) {
        return " buzz";
    } else {
        return " bass";
    }
}

function cicloWhile($tab, $cont, $par, $impar) {
    $resultado = "";
    while ($tab < 5) {
        $tab = $tab + 1;
        $cont = 1;
        while ($cont <= 5) {
            $mult = $tab * $cont;
            $parImpar = esParImpar($mult);
            if ($mult % 2 == 0) {
                $resultado .= $tab." * ".$cont." = ".$mult.$parImpar."<br>";
                $par = $par + 1;
            } else {
                $resultado .= $tab." * ".$cont." = ".$mult.$parImpar."<br>";
                $impar = $impar + 1;
            }
            $cont = $cont + 1;
        }
    }
    return $resultado. "Total Pares: " . $par . "<br>" . "Total Impares: " . $impar."<br>";
}

function cicloFor($tab, $pcont, $par, $impar) {
    $resultado = "";
    for ($tab; $tab <= 5; $tab++) {
        $cont = 1;
        for ($cont; $cont <= 5; $cont++) {
            $mult = $tab * $cont;
            $parImpar = esParImpar($mult);
            if ($mult % 2 == 0) {
                $resultado .= $tab." * ".$cont." = ".$mult.$parImpar."<br>";
                $par = $par + 1;
            } else {
                $resultado .= $tab." * ".$cont." = ".$mult.$parImpar."<br>";
                $impar = $impar + 1;
            }
        }
    }
    return $resultado. "Total Pares: " . $par . "<br>" . "Total Impares: " . $impar;
}


?>
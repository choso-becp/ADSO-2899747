<?php
/*
* Contador del 1 al 5 con WHILE y FOR
* Autor: Brayan CP
* Martes 13 de Mayo del 2024
*/

function contWhile($contar, $numero) {
    while ($contar < $numero) {
        $contar = $contar + 1;
        echo $contar."<br>";
    }
    return $contar;
}

function contFor($contar, $numero) {
    for ($contar; $contar <= $numero; $contar++) {
        echo $contar."<br>";
    }
    return $contar;
}

?>
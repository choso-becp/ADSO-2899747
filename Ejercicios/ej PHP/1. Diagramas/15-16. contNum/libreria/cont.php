<?php
/*
* Contador del 1 al 5 con WHILE y FOR
* Autor: Brayan CP
* Martes 13 de Mayo del 2024
*/

$contar = 0;
$numero = 5;
echo "While"."<br>";
while ($contar < $numero) {
    $contar = $contar + 1;
    echo $contar."<br>";
}

$contar1 = 1;
$numero1 = 5;
echo "For"."<br>";
for ($contar1; $contar1 <= $numero1; $contar1++) {
    echo $contar1."<br>";
}
?>
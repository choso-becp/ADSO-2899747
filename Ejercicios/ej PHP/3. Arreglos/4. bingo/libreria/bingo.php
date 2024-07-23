<?php
/*
* Bingo y triple xxx
* Autor: Brayan CP
* Lunes 029 de Abril del 2024
*/

// Crea y muestra la tabla de multiplicar del 2 en 5x5
$interno = [];
$aumento = 1;

for ($i = 0; $i < 5; $i++) {
    $interno[$i] = [];
    for ($j = 0; $j < 5; $j++) {
        $interno[$i][$j] = 2 * $aumento;
        $aumento++;
    }
}

// MOSTRAR LAS LETRAS DEL BINGO
// Letra B
echo "<h2>LETRA B</h2>\n";
for ($j = 0; $j < 5; $j++) {
    echo $interno[$j][0] . " ";
}
// Letra I
echo "<h2>LETRA I</h2>\n";
for ($j = 0; $j < 5; $j++) {
    echo $interno[$j][1] . " ";
}
// Letra N
echo "<h2>LETRA N</h2>\n";
for ($j = 0; $j < 5; $j++) {
    echo $interno[$j][2] . " ";
}
// Letra G
echo "<h2>LETRA G</h2>\n";
for ($j = 0; $j < 5; $j++) {
    echo $interno[$j][3] . " ";
}
// Letra O
echo "<h2>LETRA O</h2>\n";
for ($j = 0; $j < 5; $j++) {
    echo $interno[$j][4] . " ";
}
?>
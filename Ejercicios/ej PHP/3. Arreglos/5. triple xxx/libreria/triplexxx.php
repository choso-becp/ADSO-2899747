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

// Muestra los números ubicados en X
for ($i = 0; $i < 3; $i++) {
    for ($j = 0; $j < 3; $j++) {
        if ($i === $j || $i + $j === 2) {
            echo "x1: " . $interno[$i][$j] . "<br>";
        }
    }
}
echo "<br>";

for ($i = 2; $i < 5; $i++) {
    for ($j = 0; $j < 3; $j++) {
        if ($i + $j == ($j + 1) * 2 || $i + $j === 4) {
            echo "x2: " . $interno[$i][$j] . "<br>";
        }
    }
}
echo "<br>";

for ($i = 0; $i < 3; $i++) {
    for ($j = 2; $j < 5; $j++) {
        if ($i + $j === ($j - 1) * 2 || $i + $j === 4) {
            echo "x3: " . $interno[$i][$j] . "<br>";
        }
    }
}
echo "<br>";
?>
<?php
function numeros() {
    $numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    $pares = [];
    $impares = [];
    foreach ($numeros as $numero) {
        if ($numero % 2 === 0) {
            array_push($pares, $numero);
        } else {
            array_push($impares, $numero);
        }
    }
    return [
        'numeros' => $numeros,
        'pares' => $pares,
        'impares' => $impares
    ];
}
?>
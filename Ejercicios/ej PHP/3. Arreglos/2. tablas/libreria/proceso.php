<?php
function tablas1(){
    $cont5=1;
    $par = 0;
    $impar = 0;
    $tabla5=[];

    for ($iteracion1 = 0; $iteracion1 < 5; $iteracion1++) {
        $tabla5[$iteracion1] = [];
        for ($iteracion2 = 0; $iteracion2 < 5; $iteracion2++) {
            $tabla5[$iteracion1][$iteracion2]=5*$cont5;
            if ($tabla5[$iteracion1][$iteracion2] % 2 === 0) {
                $par += $tabla5[$iteracion1][$iteracion2];
            } else {
                $impar += $tabla5[$iteracion1][$iteracion2];
            }
            $cont5++;
        }
    }
    return [
        'tabla' => $tabla5,
        'suma_pares' => $par,
        'suma_impares' => $impar
    ];
}

function tablas2(){
    $cont5=1;
    $par = 0;
    $impar = 0;
    $tabla9=[];

    for ($iteracion1 = 0; $iteracion1 < 5; $iteracion1++) {
        $tabla9[$iteracion1] = [];
        for ($iteracion2 = 0; $iteracion2 < 5; $iteracion2++) {
            $tabla9[$iteracion1][$iteracion2]=9*$cont5;
            if ($tabla9[$iteracion1][$iteracion2] % 2 === 0) {
                $par += $tabla9[$iteracion1][$iteracion2];
            } else {
                $impar += $tabla9[$iteracion1][$iteracion2];
            }
            $cont5++;
        }
    }
    return [
        'tabla' => $tabla9,
        'suma_pares' => $par,
        'suma_impares' => $impar
    ];
}
?>
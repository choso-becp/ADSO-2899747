<?php
function matrizX()
{
    $cont5 = 1;
    $tabla5 = [];

    for ($iteracion1 = 0; $iteracion1 < 5; $iteracion1++) {
        $tabla5[$iteracion1] = [];
        for ($iteracion2 = 0; $iteracion2 < 5; $iteracion2++) {
            $tabla5[$iteracion1][$iteracion2] = 5 * $cont5;
            $cont5++;
        }
    }

    for ($iteracion1 = 0; $iteracion1 < 5; $iteracion1++) {
        for ($iteracion2 = 0; $iteracion2 < 5; $iteracion2++) {
            if ($iteracion1 === $iteracion2 || $iteracion1 + $iteracion2 === 4) {
                echo $tabla5[$iteracion1][$iteracion2] . "<br>";
            }
        }
    }
    return $tabla5;
}

<?php
/*
* Calcular el la edad de 3 personas y imprimir el promedio de edad
* Autor: Brayan CP
* Martes 13 de Mayo del 2024
*/

function edadPerson($anoAct1, $anoNac1, $anoAct2, $anoNac2, $anoAct3, $anoNac3) {
    $edad1 = $anoAct1 - $anoNac1;
    $edad2 = $anoAct2 - $anoNac2;
    $edad3 = $anoAct3 - $anoNac3;
    $prom = ($edad1 + $edad2 + $edad3) / 3;
    
    $resultados = "";
    
    if ($edad1 >= 18) {
        $resultados .= "La primera edad es mayor ".$edad1."<br>";
    } else {
        $resultados .= "La primera edad es menor ".$edad1."<br>";
    }
    
    if ($edad2 >= 18) {
        $resultados .= "La segunda edad es mayor ".$edad2."<br>";
    } else {
        $resultados .= "La segunda edad es menor ".$edad2."<br>";
    }
    
    if ($edad3 >= 18) {
        $resultados .= "La tercera edad es mayor ".$edad3."<br>";
    } else {
        $resultados .= "La tercera edad es menor ".$edad3."<br>";
    }

    $resultados .= "El promedio de edad es: " . $prom . "<br>";

    if ($prom < 18) {
        $resultados .= "El promedio es menor de edad<br>";
    } else {
        $resultados .= "El promedio es mayor de edad<br>";
    }
    
    return $resultados;
}

?>
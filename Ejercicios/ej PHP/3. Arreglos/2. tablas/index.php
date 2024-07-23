<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    include('libreria/proceso.php');
    $resultado_tabla5 = tablas1();
    $resultado_tabla9 = tablas2();
    echo "<pre>";
    echo "<h2>Tabla del 5</h2>";
    print_r($resultado_tabla5['tabla'])."<br>";
    echo "<br>";
    echo "Suma de los números pares: " . $resultado_tabla5['suma_pares'] . "<br>";
    echo "Suma de los números impares: " . $resultado_tabla5['suma_impares'] . "<br>";
    echo "<br>";
    echo "<h2>Tabla del 9</h2>"."<br>";
    print_r($resultado_tabla9['tabla']). "<br>";
    echo "<br>";
    echo "Suma de los números pares: " . $resultado_tabla9['suma_pares'] . "<br>";
    echo "Suma de los números impares: " . $resultado_tabla9['suma_impares'] . "<br>";
    echo "</pre>";
    ?>
</body>
</html>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Numeros de 1 a 10, pares e impares</title>
</head> 

<body>
    <?php
    include('libreria/proceso.php');
    $resultado = numeros();
    echo "<pre>";
    echo "Arreglo"."<br>";
    print_r($resultado['numeros'])."<br>";
    echo "<br>";
    echo "Pares"."<br>";
    print_r($resultado['pares'])."<br>";
    echo "<br>";
    echo "Impares"."<br>";
    print_r($resultado['impares']);
    echo "</pre>";
    ?>
</body>

</html>
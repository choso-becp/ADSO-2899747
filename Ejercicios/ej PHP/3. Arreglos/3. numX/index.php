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
    $resultado_tabla5 = matrizX();
    echo "<pre>";
    echo "<Tabla del 5";
    echo "<br>";
    print_r($resultado_tabla5);
    ?>
</body>
</html>
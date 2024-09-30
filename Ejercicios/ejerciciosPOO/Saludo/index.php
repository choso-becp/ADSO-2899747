<?php
include("libreria/proceso.php");
$saludo = new Saludo();
$saludo->setSaludar('Hola');
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    echo "Saludo = ";
    echo $saludo->getSaludar();


    ?>
</body>

</html>
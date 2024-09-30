<?php
include("libreria/proceso.php");
include("libreria/operando.php");
$numeroUno = new Numero(3);
$numeroDos = new Numero(3);
$Operaciones = new Operaciones($numeroUno, $numeroDos);
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Operaciones</title>
</head>

<body>
    <?php
    echo $Operaciones->sumar();
    echo "<br>";
    echo $Operaciones->restar();
    echo "<br>";
    echo $Operaciones->multiplicar();
    echo "<br>";
    echo $Operaciones->dividir();
    ?>
</body>

</html>
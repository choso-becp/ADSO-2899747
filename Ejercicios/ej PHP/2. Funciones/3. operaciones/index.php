<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Operaciones Aritmeticas PHP</title>
</head>
<body>
    <?php
    include('libreria/operaciones.php');
    echo "Suma"."<br>";
    var_dump(suma(3, 3));
    echo "<br>";
    echo "Resta"."<br>";
    var_dump(resta(3, 3));
    echo "<br>";
    echo "Multiplicacion"."<br>";
    var_dump(multiplicacion(3, 3));
    echo "<br>";
    echo "Division"."<br>";
    var_dump(division(3, 3));
    echo "<br>";
    ?>
</body>
</html>
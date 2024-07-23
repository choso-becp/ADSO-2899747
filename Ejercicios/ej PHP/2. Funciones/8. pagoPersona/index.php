<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pago Persona PHP</title>
</head>
<body>
    <?php
    $dias=5;
    $Vdia=50000;
    include('libreria/pago.php');
    echo "Salario"."<br>";
    var_dump(salario($dias, $Vdia));
    echo "<br>";
    echo "Subsidio Transporte"."<br>";
    var_dump(SubTrans($dias, $Vdia));
    echo "<br>";
    echo "Pago Total"."<br>";
    var_dump(pagoTotal($dias, $Vdia));
    "<br>";
    ?>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pago Persona PHP</title>
</head>
<body>
    <?php
    include('libreria/pago.php');
    echo "Salario"."<br>";
    var_dump($totalSalario);
    echo "<br>";
    echo "Subsidio Transporte"."<br>";
    var_dump($subsidioTransporte);
    echo "<br>";
    echo "Pago Total"."<br>";
    var_dump($pagoSueldo);
    "<br>";
    ?>
</body>
</html>
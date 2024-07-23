<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calcular edad</title>
</head>
<body>
    <?php
    include('libreria/calcular.php');
    echo "Calculo Edad Persona"."<br>";
    var_dump(calcEdad(2024, 2005));
    ?>
</body>
</html>
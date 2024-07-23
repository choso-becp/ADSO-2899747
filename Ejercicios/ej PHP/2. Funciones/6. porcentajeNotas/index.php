<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Porcentaje Nota PHP</title>
</head>
<body>
    <?php
    include('libreria/porcentaje.php');
    echo "Porcentaje de la nota"."<br>";
    var_dump(porcentajeNota(4.5, 50));
    "<br>";
    ?>
</body>
</html>
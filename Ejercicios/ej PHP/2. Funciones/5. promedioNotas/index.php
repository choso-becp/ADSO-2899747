<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Promedio Notas PHP</title>
</head>
<body>
    <?php
    include('libreria/promedio.php');
    echo "Promedio de 3 notas"."<br>";
    var_dump(promedio(3.0, 4.9, 2.0));
    "<br>";
    ?>
</body>
</html>
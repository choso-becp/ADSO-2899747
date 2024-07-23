<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Promedio nota con %</title>
</head>
<body>
    <?php
    include('libreria/promN.php');
    echo "Resultado nota"."<br>";
    var_dump(proNotas(2.1, 1.9, 3.1));
    ?>
</body>
</html>
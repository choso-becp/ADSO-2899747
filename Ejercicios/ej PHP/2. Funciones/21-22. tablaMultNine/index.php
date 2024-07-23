<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabla de multiplicar 9</title>
</head>
<body>
    <?php
    include('libreria/multiN.php');
    echo "While"."<br>";
    var_dump(cicloWhile(1, 9));
    echo "<br>";
    echo "For"."<br>";
    var_dump(cicloFor(1, 9));
    ?>
</body>
</html>
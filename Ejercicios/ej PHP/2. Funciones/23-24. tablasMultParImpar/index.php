<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabla de multiplicar 9 par e impar</title>
</head>
<body>
    <?php
    include('libreria/multiPI.php');
    echo "While"."<br>";
    var_dump(cicloWhile(0, 1, 0, 0));
    echo "<br>";
    echo "For"."<br>";
    var_dump(cicloFor(1, 1, 0, 0));
    ?>
</body>
</html>
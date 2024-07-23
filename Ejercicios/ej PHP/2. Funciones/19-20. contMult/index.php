<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabla de multiplicar 5</title>
</head>
<body>
    <?php
    include('libreria/multi.php');
    echo "While"."<br>";
    var_dump(cicloWhile(1, 5));
    echo "<br>";
    echo "For"."<br>";
    var_dump(cicloFor(1, 5));
    ?>
</body>
</html>
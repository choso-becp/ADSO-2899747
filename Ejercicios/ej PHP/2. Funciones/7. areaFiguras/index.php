<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Area Figuras Geometricas PHP</title>
</head>
<body>
    <?php
    include('libreria/area.php');
    echo "Area Cuadrado"."<br>";
    var_dump(areaCua(3));
    echo "<br>";
    echo "Area Triangulo"."<br>";
    var_dump(areaTri(3, 4));
    echo "<br>";
    echo "Area Rectangulo"."<br>";
    var_dump(areaRec(4, 5));
    "<br>";
    ?>
</body>
</html>
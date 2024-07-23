<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tienda</title>

</head>
<body>
<?php
include('libreria/tienda.php');


echo "<pre>";
echo "<h2>Tienda</h2>";
foreach ($tienda as $producto) {
    print_r($producto);
    echo "<br>";
}

echo "<h2>Busqueda</h2>";
print_r($listaBusqueda);
echo "</pre>";
?>
</body>
</html>
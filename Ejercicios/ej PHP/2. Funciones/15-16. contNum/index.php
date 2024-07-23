<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contador de numeros</title>
</head>
<body>
    <?php
    include('libreria/cont.php');
    echo "While"."<br>";
    var_dump(contWhile(0, 5));
    echo "<br>";
    echo "For"."<br>";
    var_dump(contFor(1, 5));
    ?>
</body>
</html>
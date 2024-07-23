<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edades mayor de edad y su promedio</title>
</head>
<body>
    <?php
    include('libreria/impEdadd.php');
    echo "Que edades son mayores, cual es el promedio de edad?"."<br>";
    var_dump(edadPerson(2024, 2005, 2024, 2006, 2024, 2007));
    ?>
</body>
</html>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nómina</title>
</head>

<body>
    <?php
    include('libreria/nomina.php');
    /*echo "<h2>Registros</h2>";
    echo "<pre>";
    var_dump($registrosNomina);
    echo "</pre>";
    */
    echo "<pre>";
    echo "<h2>Mostrar Nomina</h2>";
    foreach ($mostrarNomina as $empleado) {
        print_r($empleado);
        echo "<br>";
    }
    echo "<br>";
    echo "<h2>Total Pagos</h2>";
    print_r($totalPagos);
    echo "</pre>";
    ?>
</body>

</html>
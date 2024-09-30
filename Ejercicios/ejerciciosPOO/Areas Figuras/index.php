<?php
include("libreria/proceso.php");
include("libreria/operando.php");

$resultado = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $figura = $_POST['figura'];
    $base = new Figura($_POST['base']);
    $altura = new Figura($_POST['altura']);
    $areas = new Areas($base, $altura);

    // Calcular el área según la figura seleccionada
    switch ($figura) {
        case 'cuadrado':
            $resultado = "Área del Cuadrado: " . $areas->Cuadrado();
            break;
        case 'rectangulo':
            $resultado = "Área del Rectángulo: " . $areas->Rectangulo();
            break;
        case 'triangulo':
            $resultado = "Área del Triángulo: " . $areas->Triangulo();
            break;
        default:
            $resultado = "Figura no reconocida.";
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de Áreas</title>
    <!-- Agregar Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <div class="container mt-5">
        <h2>Calculadora de Áreas</h2>
        <form method="post" id="areaForm">
            <div class="form-group">
                <label for="figura">Seleccione la figura:</label>
                <select class="form-control" id="figura" name="figura" required>
                    <option value="">Seleccione...</option>
                    <option value="cuadrado">Cuadrado</option>
                    <option value="rectangulo">Rectángulo</option>
                    <option value="triangulo">Triángulo</option>
                </select>
            </div>
            <div class="form-group">
                <label for="base">Base:</label>
                <input type="number" class="form-control" id="base" name="base" required>
            </div>
            <div class="form-group">
                <label for="altura">Altura:</label>
                <input type="number" class="form-control" id="altura" name="altura" required>
            </div>
            <button type="submit" class="btn btn-primary">Calcular</button>
        </form>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="resultadoModal" tabindex="-1" aria-labelledby="resultadoModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="resultadoModalLabel">Resultado</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Cerrar">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <!-- Aquí se mostrará el resultado -->
                    <?php if ($resultado): ?>
                        <p><?php echo $resultado; ?></p>
                    <?php endif; ?>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Agregar Bootstrap JS y jQuery -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>

    <script>
        $(document).ready(function() {
            // Mostrar el modal si hay un resultado
            <?php if ($resultado): ?>
                $('#resultadoModal').modal('show');
            <?php endif; ?>
        });
    </script>
</body>
</html>

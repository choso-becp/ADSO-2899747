<?php
// Incluir la lógica de salario desde proceso.php y operando.php
include("libreria/operando.php");

// Lista de cargos con días trabajados y valor del día predeterminados
$cargos = [
    "Gerente" => ["dias" => 22, "valor_dia" => 2000000],
    "Operario" => ["dias" => 26, "valor_dia" => 80000],
    "Supervisor" => ["dias" => 24, "valor_dia" => 300000],
    "Analista" => ["dias" => 22, "valor_dia" => 570000],
    "Técnico" => ["dias" => 25, "valor_dia" => 120000]
];

$resultado = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $dias = $_POST['dias'];
    $valorDia = $_POST['valor_dia'];

    // Crear un objeto de la clase Salario
    $salario = new Salario($dias, $valorDia);

    // Calcular el resultado
    $resultadoSalario = $salario->calcularSalario();
    $resultadoSubTrans = $salario->calcularSubTrans();
    $resultadoSalud = $salario->calcularSalud();
    $resultadoPension = $salario->calcularPension();
    $resultadoArl = $salario->calcularArl();
    $resultadoRetencion = $salario->calcularRetencion();
    $resultadoPagoTotal = $salario->calcularPagoTotal();

    // Generar el resultado final para el modal
    $resultado = "
        Salario: $resultadoSalario <br>
        Subsidio de Transporte: $resultadoSubTrans <br>
        Salud: $resultadoSalud <br>
        Pensión: $resultadoPension <br>
        ARL: $resultadoArl <br>
        Retención: $resultadoRetencion <br>
        Pago Total: $resultadoPagoTotal
    ";
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de Nómina</title>
    <!-- Agregar Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <div class="container mt-5">
        <h2>Calculadora de Nómina</h2>
        <form method="post" id="nominaForm">
            <div class="form-group">
                <label for="cargo">Seleccione el cargo:</label>
                <select class="form-control" id="cargo" name="cargo">
                    <option value="">Seleccione un cargo...</option>
                    <?php foreach ($cargos as $cargo => $datos): ?>
                        <option value="<?php echo $cargo; ?>"><?php echo $cargo; ?></option>
                    <?php endforeach; ?>
                </select>
            </div>
            <div class="form-group">
                <label for="dias">Días trabajados:</label>
                <input type="number" class="form-control" id="dias" name="dias" required>
            </div>
            <div class="form-group">
                <label for="valor_dia">Valor del día:</label>
                <input type="number" class="form-control" id="valor_dia" name="valor_dia" required>
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
            // Completar los campos de días trabajados y valor del día según el cargo seleccionado
            $('#cargo').change(function() {
                var cargos = <?php echo json_encode($cargos); ?>;
                var cargoSeleccionado = $(this).val();
                if (cargoSeleccionado && cargos[cargoSeleccionado]) {
                    $('#dias').val(cargos[cargoSeleccionado]['dias']);
                    $('#valor_dia').val(cargos[cargoSeleccionado]['valor_dia']);
                } else {
                    $('#dias').val('');
                    $('#valor_dia').val('');
                }
            });

            // Mostrar el modal si hay un resultado
            <?php if ($resultado): ?>
                $('#resultadoModal').modal('show');
            <?php endif; ?>
        });
    </script>
</body>
</html>

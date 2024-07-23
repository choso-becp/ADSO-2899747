<?php
/*
* Nomina
* Autor: Brayan CP
* Lunes 30 de Abril del 2024
*/

$registrosNomina = [];

// Arreglo [Nombre:Valor]
$registrosNomina = [
    ['id' => 1076501813, 'nombres' => 'Brayan Estiven', 'apellidos' => 'Carvajal Padilla', 'cargo' => 'Gerente', 'valorDia' => 2000000, 'diasTrabajados' => 22],
    ['id' => 1075679234, 'nombres' => 'Aylin Celeste', 'apellidos' => 'Carvajal Padilla', 'cargo' => 'Operario', 'valorDia' => 80000, 'diasTrabajados' => 26],
    ['id' => 1073209845, 'nombres' => 'Lindora', 'apellidos' => 'Padilla Vanegas', 'cargo' => 'Supervisor', 'valorDia' => 300000, 'diasTrabajados' => 24],
    ['id' => 1072903176, 'nombres' => 'Joaquin Emilio', 'apellidos' => 'Carvajal Quintero', 'cargo' => 'Supervisor', 'valorDia' => 300000, 'diasTrabajados' => 24],
    ['id' => 1056798009, 'nombres' => 'Daniela Andrea', 'apellidos' => 'Carvajal Padilla', 'cargo' => 'Operario', 'valorDia' => 85000, 'diasTrabajados' => 26],
    ['id' => 1089567890, 'nombres' => 'Jonathan Emilio', 'apellidos' => 'Carvajal Padilla', 'cargo' => 'Operario', 'valorDia' => 85000, 'diasTrabajados' => 26],
    ['id' => 1023456789, 'nombres' => 'Nicole Fernanda', 'apellidos' => 'Criollo Alvares', 'cargo' => 'Analista', 'valorDia' => 570000, 'diasTrabajados' => 22],
    ['id' => 1098234567, 'nombres' => 'Luis Alejandro', 'apellidos' => 'Macana Espinosa', 'cargo' => 'Técnico', 'valorDia' => 120000, 'diasTrabajados' => 25],
    ['id' => 1077384965, 'nombres' => 'Anibal', 'apellidos' => 'Alvarado Andrade', 'cargo' => 'Técnico', 'valorDia' => 120000, 'diasTrabajados' => 25],
    ['id' => 1078924056, 'nombres' => 'Diego Fernando', 'apellidos' => 'Cuellar Hernandez', 'cargo' => 'Técnico', 'valorDia' => 120000, 'diasTrabajados' => 25]
];

// Calcula el salario, subsidioTransporte, salud, pension, arl, retencion y totalPagar
function salario($dias, $Vdia) {
    $totalSalario = $dias * $Vdia;
    return $totalSalario;
}

function SubTrans($dias, $Vdia) {
    $SalarioMinimo = 1600000;
    $SalarioTrans = salario($dias, $Vdia);
    if ($SalarioTrans <= 2 * $SalarioMinimo) {
        $SubTransporte = 120000;
    } else {
        $SubTransporte = 0;
    }
    return $SubTransporte;
}

function salud($dias, $Vdia) {
    $pagoSalud = salario($dias, $Vdia) * 0.12;
    return $pagoSalud;
}

function pension($dias, $Vdia) {
    $pagoPension = salario($dias, $Vdia) * 0.16;
    return $pagoPension;
}

function arl($dias, $Vdia) {
    $pagoArl = salario($dias, $Vdia) * 0.052;
    return $pagoArl;
}

function retencion($dias, $Vdia) {
    $SalarioMin = 1600000;
    $SalarioRet = salario($dias, $Vdia);
    if ($SalarioRet > 6 * $SalarioMin && $SalarioRet < 8 * $SalarioMin) {
        $Retencion = $SalarioRet * 0.02;
    } elseif ($SalarioRet > 8 * $SalarioMin && $SalarioRet < 12 * $SalarioMin) {
        $Retencion = $SalarioRet * 0.04;
    } elseif ($SalarioRet > 12 * $SalarioMin) {
        $Retencion = $SalarioRet * 0.08;
    } else {
        $Retencion = 0;
    }
    return $Retencion;
}

function pagoTotal($dias, $Vdia) {
    $totalSalario = salario($dias, $Vdia);
    $totalDeducciones = salud($dias, $Vdia) + pension($dias, $Vdia) + arl($dias, $Vdia) + retencion($dias, $Vdia);
    return $totalSalario + SubTrans($dias, $Vdia) - $totalDeducciones;
}

$mostrarNomina = [];

foreach ($registrosNomina as $empleado) {
    $psalario = salario($empleado['diasTrabajados'], $empleado['valorDia']);
    $pSubTrans = SubTrans($empleado['diasTrabajados'], $empleado['valorDia']);
    $psalud = salud($empleado['diasTrabajados'], $empleado['valorDia']);
    $ppension = pension($empleado['diasTrabajados'], $empleado['valorDia']);
    $parl = arl($empleado['diasTrabajados'], $empleado['valorDia']);
    $pretencion = retencion($empleado['diasTrabajados'], $empleado['valorDia']);
    $ppagoTotal = pagoTotal($empleado['diasTrabajados'], $empleado['valorDia']);

    $empleadoNomina = [
        'ID' => $empleado['id'],
        'Nombres' => $empleado['nombres'],
        'Apellidos' => $empleado['apellidos'],
        'Cargo' => $empleado['cargo'],
        'Salario' => $psalario,
        'SubsidioTransporte' => $pSubTrans,
        'Salud' => $psalud,
        'Pensión' => $ppension,
        'ARL' => $parl,
        'Retención' => $pretencion,
        'TotalPagar' => $ppagoTotal,
    ];

    $mostrarNomina[] = $empleadoNomina;
}

$totalPagos = [
    'Salud' => $totalSalud,
    'Pensión' => $totalPension,
    'ARL' => $totalARL,
    'Retención' => $totalRetencion,
    'TotalPagar' => $totalPagoTotal,
];

// Mostrar resultados
echo "Detalles de la nómina:\n";
print_r($mostrarNomina);

echo "\nTotales de pagos:\n";
print_r($totalPagos);

?>

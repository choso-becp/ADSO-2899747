<?php
/*
* Salario de un empleado
* Autor: Brayan CP
* Martes 07 de Mayo del 2024
*/


$diasTrabajados = 5;
$valorDia = 50000;
$salarioMinimo = 1600000;
$totalSalario = $diasTrabajados * $valorDia;

if ($totalSalario <= (2 * $salarioMinimo)) {
    $subsidioTransporte = 140000;
} else {
    $subsidioTransporte = 0;
}

$pagoSalud = $totalSalario * 0.12;
$pagoPension = $totalSalario * 0.16;
$pagoArl = $totalSalario * 0.052;
$pagoDeducible = $pagoPension + $pagoSalud + $pagoArl;

$pagoSueldo = $totalSalario + $subsidioTransporte - $pagoDeducible;
?>
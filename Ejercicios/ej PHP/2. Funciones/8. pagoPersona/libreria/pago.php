<?php
/*
* Salario de un empleado
* Autor: Brayan CP
* Martes 07 de Mayo del 2024
*/

function salario($dias, $Vdia) {
    $totalSalario = $dias * $Vdia;
    return $totalSalario;
}

function SubTrans($dias, $Vdia) {
    $SalarioMinimo = 1600000;
    $SalarioTrans = salario($dias, $Vdia);
    if($SalarioTrans<=2*$SalarioMinimo){
        $SubTransporte=140000;
    }
    else{
        $SubTransporte=0;
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

function deducible($dias, $Vdia) {
    $pagoDeducible = pension($dias, $Vdia) + salud($dias, $Vdia) + arl($dias, $Vdia);
    return $pagoDeducible;
}

function pagoTotal($dias, $Vdia) {
    $pagoSueldo = salario($dias, $Vdia) + SubTrans($dias, $Vdia) - deducible($dias, $Vdia);
    return $pagoSueldo;
}
?>
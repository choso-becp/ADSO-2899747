<?php
class Salario
{
    private $dias;
    private $valorDia;

    public function __construct($dias, $valorDia)
    {
        $this->dias = $dias;
        $this->valorDia = $valorDia;
    }

    public function calcularSalario()
    {
        return $this->dias * $this->valorDia;
    }

    public function calcularSubTrans()
    {
        $SalarioMinimo = 1600000;
        $SalarioTrans = $this->calcularSalario();
        return ($SalarioTrans <= 2 * $SalarioMinimo) ? 120000 : 0;
    }

    public function calcularSalud()
    {
        return $this->calcularSalario() * 0.12;
    }

    public function calcularPension()
    {
        return $this->calcularSalario() * 0.16;
    }

    public function calcularArl()
    {
        return $this->calcularSalario() * 0.052;
    }

    public function calcularRetencion()
    {
        $SalarioMin = 1600000;
        $SalarioRet = $this->calcularSalario();
        if ($SalarioRet > 6 * $SalarioMin && $SalarioRet < 8 * $SalarioMin) {
            return $SalarioRet * 0.02;
        } elseif ($SalarioRet > 8 * $SalarioMin && $SalarioRet < 12 * $SalarioMin) {
            return $SalarioRet * 0.04;
        } elseif ($SalarioRet > 12 * $SalarioMin) {
            return $SalarioRet * 0.08;
        } else {
            return 0;
        }
    }

    public function calcularPagoTotal()
    {
        $totalSalario = $this->calcularSalario();
        $totalDeducciones = $this->calcularSalud() + $this->calcularPension() + $this->calcularArl() + $this->calcularRetencion();
        return $totalSalario + $this->calcularSubTrans() - $totalDeducciones;
    }
}
?>

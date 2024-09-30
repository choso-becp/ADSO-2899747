<?php 

class Operaciones
{
    private $numeroUno;
    private $numeroDos;
    public $suma;
    public $resta;
    public $multiplicacion;
    public $division;

    public function __construct(Numero $numeroUno, Numero $numeroDos)
    {
        $this->numeroUno = $numeroUno;
        $this->numeroDos = $numeroDos;
    }

    public function sumar()
    {
        // Usa getValor() para obtener los valores numéricos
        $this->suma = $this->numeroUno->getValor() + $this->numeroDos->getValor();
        return $this->suma;
    }

    public function restar()
    {
        $this->resta = $this->numeroUno->getValor() - $this->numeroDos->getValor();
        return $this->resta;
    }

    public function multiplicar()
    {
        $this->multiplicacion = $this->numeroUno->getValor() * $this->numeroDos->getValor();
        return $this->multiplicacion;
    }

    public function dividir()
    {
        // Verifica si el divisor es 0 para evitar división por cero
        if ($this->numeroDos->getValor() == 0) {
            return "Error: División por cero";
        }
        $this->division = $this->numeroUno->getValor() / $this->numeroDos->getValor();
        return $this->division;
    }
}

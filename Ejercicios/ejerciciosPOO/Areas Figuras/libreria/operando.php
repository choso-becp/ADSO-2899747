<?php 

class Areas
{
    private $base;
    private $altura;
    public $areaC;
    public $areaR;
    public $areaT;
   

    public function __construct(Figura $base, Figura $altura)
    {
        $this->base = $base;
        $this->altura = $altura;
    
    }

    public function Cuadrado()
    {
        $this->areaC = $this->base->getValor() * $this->altura->getValor();
        return $this->areaC;
    }

    public function Rectangulo()
    {
        $this->areaR = $this->base->getValor() * $this->altura->getValor();
        return $this->areaR;
    }

    public function Triangulo()
    {
        $this->areaT = ($this->base->getValor() * $this->altura->getValor())/2;
        return $this->areaT;
    }


}

<?php
/*
* Iddentificar los numeros son mayores, menores o iguales
* Autor: Brayan CP
* Martes 13 de Mayo del 2024
*/

function numCalc($num1, $num2) {
   if($num1==$num2){
       return "Son iguales";
   }else{
       if($num1>$num2){
           return "El numero uno es mayor";
       }else{ 
           return "El numero dos es mayor";
       }
   }
}
?>
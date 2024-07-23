function contar() {
  let contador = parseInt(document.getElementById('txtContador').value);
  let incremento = 0;
  let resultado = "<strong>Números contados: </strong>" + '<br>';
  
  if (isNaN(contador)) {
    document.getElementById('respuesta').innerHTML = "Por favor, ingrese un número válido para el contador";
    return false;
  }

  while (incremento < contador) {
    incremento++;
    resultado += incremento + " ";
  }

  document.getElementById('respuesta').innerHTML = resultado;
  return false; 
}
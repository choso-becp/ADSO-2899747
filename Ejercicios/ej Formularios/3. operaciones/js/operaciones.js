function operaciones() {
  let txtNumeroUno = parseFloat(document.getElementById('txtNumeroUno').value);
  let txtNumeroDos = parseFloat(document.getElementById('txtNumeroDos').value);
  let operacion = document.getElementById('operacion').value;
  let resultado;
  let resultText;
  
  switch (operacion) {
      case 'suma':
          resultado = txtNumeroUno + txtNumeroDos;
          resultText = `La suma es: ${resultado}`;
          break;
      case 'resta':
          resultado = txtNumeroUno - txtNumeroDos;
          resultText = `La resta es: ${resultado}`;
          break;
      case 'multiplicacion':
          resultado = txtNumeroUno * txtNumeroDos;
          resultText = `La multiplicación es: ${resultado}`;
          break;
      case 'division':
          if (txtNumeroDos === 0) {
              resultText = "No se puede dividir por cero";
          } else {
              resultado = txtNumeroUno / txtNumeroDos;
              resultText = `La división es: ${resultado}`;
          }
          break;
      default:
          resultText = "Operación no válida";
  }
  
  document.getElementById('resultado').innerHTML = `<strong>${resultText}</strong>`;
  return false;
}

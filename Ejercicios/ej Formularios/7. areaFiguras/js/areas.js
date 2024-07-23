function areas() {
  let txtNumeroUno = parseFloat(document.getElementById('txtNumeroUno').value);
  let txtNumeroDos = parseFloat(document.getElementById('txtNumeroDos').value);
  let area = document.getElementById('operacion').value;
  let resultado;
  let resultText;

  if (isNaN(txtNumeroUno) || isNaN(txtNumeroDos)) {
    document.getElementById('resultado').innerHTML = "Por favor, ingrese valores válidos";
    return false;
}
  
  switch (area) {
      case 'cuadrado':
          resultado = txtNumeroUno * txtNumeroDos;
          resultText = `El area es: ${resultado}`;
          icono = '<i class="bi bi-square"></i>';
          break;
      case 'triangulo':
          resultado = (txtNumeroUno * txtNumeroDos)/2;
          resultText = `El area es: ${resultado}`;
          icono = '<i class="fas fa-square"></i>';
          break;
      case 'rectangulo':
          resultado = txtNumeroUno * txtNumeroDos;
          resultText = `El area es: ${resultado}`;
          icono = '<i class="fas fa-square"></i>';
          break;
      default:
          resultText = "Figura no válida";
  }
  
  document.getElementById('resultado').innerHTML = `<strong>${resultText}</strong>`;
  return false;
}

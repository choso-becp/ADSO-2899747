function esParImpar(num) {
  if (num % 2 === 0) {
      return " es par";
  } else {
      return " es impar";
  }
}

function contar() {
  let contador = parseInt(document.getElementById('txtContador').value);
  let numero = contador;
  let resultado = "<strong>Números contados: </strong>" + '<br>';

  if (isNaN(contador)) {
    document.getElementById('respuesta').innerHTML = "Por favor, ingrese un número válido para el contador";
      return false;
  }

  let contar = 0;
  while (contar < numero) {
      contar++;
      let estado = esParImpar(contar);
      resultado += contar + estado + "<br>";
  }

  document.getElementById('respuesta').innerHTML = resultado;
  return false;
}

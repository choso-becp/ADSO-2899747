function edadVerificar() {
    let edad = parseInt(document.getElementById('txtNumeroUno').value);
    if (edad >= 18) {
        document.getElementById('verificar').innerHTML = "<p>Es mayor de edad</p>";
    } else {
        document.getElementById('verificar').innerHTML = "<p>Es menor de edad</p>";
    }
    return false;
}
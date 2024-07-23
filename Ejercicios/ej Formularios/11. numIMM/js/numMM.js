function numMM() {
    // Obtener los valores de los números ingresados
    let num1 = parseInt(document.getElementById('txtNumeroUno').value);
    let num2 = parseInt(document.getElementById('txtNumeroDos').value);
    
    if (num1 === '' || num2 === '') {
        document.getElementById('verificar').innerHTML = "<p>Por favor ingrese ambos números.</p>";
    } else {
        // Convertir los valores a números enteros
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        
        // Verificar si los valores son números válidos
        if (isNaN(num1) || isNaN(num2)) {
            document.getElementById('verificar').innerHTML = "<p>Por favor ingrese números válidos.</p>";
        } else {
            // Comparar los números y mostrar el resultado
            if (num1 === num2) {
                document.getElementById('verificar').innerHTML = "<p>Son iguales</p>";
            } else if (num1 > num2) {
                document.getElementById('verificar').innerHTML = "<p>El número uno es mayor</p>";
            } else {
                document.getElementById('verificar').innerHTML = "<p>El número dos es mayor</p>";
            }
        }
    }
    return false;
}

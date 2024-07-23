function areaFigMayor() {
    // Obtener los valores de los áreas ingresadas
    let area1 = document.getElementById('txtNumeroUno').value.trim();
    let area2 = document.getElementById('txtNumeroDos').value.trim();
    let area3 = document.getElementById('txtNumeroTres').value.trim();
    
    // Verificar si los campos están vacíos
    if (area1 === '' || area2 === '' || area3 === '') {
        document.getElementById('respuesta').innerHTML = "<p>Error: Por favor ingrese las áreas de todos los cuadrados.</p>";
        return false; // Evitar que el formulario se envíe
    }
    
    // Convertir los valores a números y calcular los cuadrados
    let cua1 = parseFloat(area1) ** 2;
    let cua2 = parseFloat(area2) ** 2;
    let cua3 = parseFloat(area3) ** 2;
    
    // Verificar y comparar los cuadrados de las áreas
    if (cua1 === cua2 && cua2 === cua3) {
        document.getElementById('respuesta').innerHTML = "<p>Todos los cuadrados tienen áreas iguales.</p>";
    } else {
        if (cua1 > cua2 && cua1 > cua3) {
            document.getElementById('respuesta').innerHTML = "<p>El área del primer cuadrado es mayor.</p>";
        } else if (cua2 > cua1 && cua2 > cua3) {
            document.getElementById('respuesta').innerHTML = "<p>El área del segundo cuadrado es mayor.</p>";
        } else {
            document.getElementById('respuesta').innerHTML = "<p>El área del tercer cuadrado es mayor.</p>";
        }
    }
    
    // Evitar que el formulario se envíe
    return false;
}

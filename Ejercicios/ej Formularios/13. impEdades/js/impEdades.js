function calcEdad() {
    // Obtener los valores de las edades ingresadas
    let edad1 = document.getElementById('txtNumeroUno').value.trim();
    let edad2 = document.getElementById('txtNumeroDos').value.trim();
    let edad3 = document.getElementById('txtNumeroTres').value.trim();
    
    // Verificar si los campos están vacíos
    if (edad1 === '' || edad2 === '' || edad3 === '') {
        document.getElementById('respuesta').innerHTML = "<p>Error: Por favor ingrese las edades de todas las personas.</p>";
        return false; // Evitar que el formulario se envíe
    }
    
    // Convertir los valores a números enteros
    edad1 = parseInt(edad1);
    edad2 = parseInt(edad2);
    edad3 = parseInt(edad3);
    
    // Calcular el promedio de las edades
    let prom = (edad1 + edad2 + edad3) / 3;
    
    // Variable para acumular los mensajes
    let mensaje = "";

    // Mostrar mensajes según las edades
    if (edad1 >= 18) {
        mensaje += "<p><strong>Edad 1:</strong> " + edad1 + " - La primera persona es mayor de edad</p>";
    } else {
        mensaje += "<p><strong>Edad 1:</strong> " + edad1 + " - La primera persona es menor de edad</p>";
    }
    if (edad2 >= 18) {
        mensaje += "<p><strong>Edad 2:</strong> " + edad2 + " - La segunda persona es mayor de edad</p>";
    } else {
        mensaje += "<p><strong>Edad 2:</strong> " + edad2 + " - La segunda persona es menor de edad</p>";
    }
    if (edad3 >= 18) {
        mensaje += "<p><strong>Edad 3:</strong> " + edad3 + " - La tercera persona es mayor de edad</p>";
    } else {
        mensaje += "<p><strong>Edad 3:</strong> " + edad3 + " - La tercera persona es menor de edad</p>";
    }

    // Mostrar el promedio de las edades
    mensaje += "<p><strong>El promedio de edad es: </strong>" + prom.toFixed(2) + "</p>";

    // Determinar si el promedio es mayor o menor de edad
    if (prom < 18) {
        mensaje += "<p><strong>El promedio es menor de edad</strong></p>";
    } else {
        mensaje += "<p><strong>El promedio es mayor de edad</strong></p>";
    }

    // Establecer el contenido en el elemento respuesta
    document.getElementById('respuesta').innerHTML = mensaje;

    return false;
}

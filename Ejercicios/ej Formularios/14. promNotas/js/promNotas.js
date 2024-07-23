function porcentajes() {
    // Obtener los valores de las notas ingresadas
    let nota1 = parseFloat(document.getElementById('txtNumeroUno').value.trim());
    let nota2 = parseFloat(document.getElementById('txtNumeroDos').value.trim());
    let nota3 = parseFloat(document.getElementById('txtNumeroTres').value.trim());
    
    // Verificar si los valores ingresados son números válidos
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        document.getElementById('promedio').innerHTML = "<p>Por favor ingrese números válidos para las notas.</p>";
        return false;
    }
    
    // Calcular los porcentajes de las notas
    let porcent1 = (nota1 * 20) / 100;
    let porcent2 = (nota2 * 35) / 100;
    let porcent3 = (nota3 * 45) / 100;
    
    // Calcular la suma de los porcentajes
    let sum = porcent1 + porcent2 + porcent3;
    
    // Determinar la clasificación de la nota
    let clasificacion = "";
    if (sum > 4.5) {
        clasificacion = "Nota superior";
    } else if (sum > 3.5) {
        clasificacion = "Nota buena";
    } else if (sum >= 3) {
        clasificacion = "Nota media";
    } else {
        clasificacion = "Nota mala";
    }
    
    // Construir el mensaje a mostrar en HTML
    let mensaje = "";
    mensaje += "<p>El 20% de la nota 1 es: " + porcent1.toFixed(2) + "</p>";
    mensaje += "<p>El 35% de la nota 2 es: " + porcent2.toFixed(2) + "</p>";
    mensaje += "<p>El 45% de la nota 3 es: " + porcent3.toFixed(2) + "</p>";
    mensaje += "<p>Suma de los porcentajes: " + sum.toFixed(2) + "</p>";
    mensaje += clasificacion;
    document.getElementById('promedio').innerHTML = mensaje;
    
    return false;
}

function porcentajes() {
    let numeroUno = parseFloat(document.getElementById('txtNumeroUno').value);
    let numeroDos = parseFloat(document.getElementById('txtNumeroDos').value);
    let numeroTres = parseFloat(document.getElementById('txtNumeroTres').value);
    let porcentUno = 30;
    let porcentDos = 40;
    let nota1 = (numeroUno * porcentUno) / 100;
    let nota2 = (numeroDos * porcentUno) / 100;
    let nota3 = (numeroTres * porcentDos) / 100;
    let prom = nota1 + nota2 + nota3;

    let resultText1 = `El porcentaje de la nota 1 es: ${nota1}`;
    let resultText2 = `El porcentaje de la nota 2 es: ${nota2}`;
    let resultText3 = `El porcentaje de la nota 3 es: ${nota3}`;
    let resultTextPromedio = `El promedio de los tres porcentajes es: ${prom}`;

    // Mostrar los resultados en el elemento #porcent
    document.getElementById('porcent').innerHTML = `<strong>${resultText1}</strong><br>`;
    document.getElementById('porcent').innerHTML += `<strong>${resultText2}</strong><br>`;
    document.getElementById('porcent').innerHTML += `<strong>${resultText3}</strong><br>`;
    document.getElementById('porcent').innerHTML += `<strong>${resultTextPromedio}</strong>`;

    return false; // Evita que el formulario se envíe y la página se recargue
}
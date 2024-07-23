function contar() {
    let numBase = parseInt(document.getElementById('txtNumeroUno').value);
    let multiplicador = parseInt(document.getElementById('txtNumeroDos').value);

    if (isNaN(numBase) || isNaN(multiplicador)) {
        document.getElementById('respuesta').innerHTML = "Por favor, ingrese un número válido para el contador";
        return false;
    }

    let resultado = '';
    for (let cont = 1; cont <= multiplicador; cont++) {
        let mult = numBase * cont;
        resultado += `${numBase} * ${cont} = ${mult}<br>`;
    }

    document.getElementById('respuesta').innerHTML = resultado;
    return false;
}
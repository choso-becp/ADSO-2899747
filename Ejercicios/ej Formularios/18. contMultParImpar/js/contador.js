function esParImpar(num) {
    if (num % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}

function contar() {
    let numBase = parseInt(document.getElementById('txtNumeroUno').value);
    let rango = parseInt(document.getElementById('txtNumeroDos').value);

    if (isNaN(numBase) || isNaN(rango)) {
        document.getElementById('respuesta').innerHTML = "Por favor, ingrese un número válido para el contador";
        return false;
    }

    let cont = 1;
    let resultado = '';

    while (cont <= rango) {
        let mult = numBase * cont;
        let parImpar = esParImpar(mult);
        resultado += `${numBase} * ${cont} = ${mult} es ${parImpar}<br>`;
        cont++;
    }

    document.getElementById('respuesta').innerHTML = resultado;
    return false;
}
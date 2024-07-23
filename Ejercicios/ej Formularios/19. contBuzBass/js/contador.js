function contar() {

    let numBase = parseInt(document.getElementById('txtNumeroUno').value);
    let rango = parseInt(document.getElementById('txtNumeroDos').value);

    if (isNaN(numBase) || isNaN(rango)) {
        document.getElementById('respuesta').innerHTML = "Por favor, ingrese un número válido para el contador";
        return false;
    }

    function esParImpar(num) {
        if (num % 2 === 0) {
            return " buzz";
        } else {
            return " bass";
        }
    }

    function generarTabla(numBase, rango) {
        let resultado = '';
        let par = 0;
        let impar = 0;

        for (let tab = 1; tab <= numBase; tab++) {
            for (let cont = 1; cont <= rango; cont++) {
                let mult = tab * cont;
                let parImpar = esParImpar(mult);
                if (mult % 2 === 0) {
                    resultado += `${tab} * ${cont} = ${mult}${parImpar}<br>`;
                    par++;
                } else {
                    resultado += `${tab} * ${cont} = ${mult}${parImpar}<br>`;
                    impar++;
                }
            }
        }

        return `Total Pares: ${par}<br>Total Impares: ${impar}<br>${resultado}`;
    }

    let resultado = generarTabla(numBase, rango);

    document.getElementById('respuesta').innerHTML = resultado;

    return false;
}
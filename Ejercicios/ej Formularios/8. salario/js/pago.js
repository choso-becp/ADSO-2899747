// Función para calcular el salario total
function salario(dias, Vdia) {
    let totalSalario = dias * Vdia;
    return totalSalario;
}

// Función para calcular el subsidio de transporte
function SubTrans(dias, Vdia) {
    let SalarioMinimo = 1600000;
    let SalarioTrans = salario(dias, Vdia);
    let SubTransporte;

    if (SalarioTrans <= 2 * SalarioMinimo) {
        SubTransporte = 140000;
    } else {
        SubTransporte = 0;
    }

    return SubTransporte;
}

// Función para calcular el pago de salud
function salud(dias, Vdia) {
    let pagoSalud = salario(dias, Vdia) * 0.12;
    return pagoSalud;
}

// Función para calcular el pago de pensión
function pension(dias, Vdia) {
    let pagoPension = salario(dias, Vdia) * 0.16;
    return pagoPension;
}

// Función para calcular el pago de ARL
function arl(dias, Vdia) {
    let pagoArl = salario(dias, Vdia) * 0.052;
    return pagoArl;
}

// Función para calcular el total deducible
function deducible(dias, Vdia) {
    let pagoDeducible = pension(dias, Vdia) + salud(dias, Vdia) + arl(dias, Vdia);
    return pagoDeducible;
}

// Función para calcular el salario neto total
function pagoTotal(dias, Vdia) {
    let pagoSueldo = salario(dias, Vdia) + SubTrans(dias, Vdia) - deducible(dias, Vdia);
    return pagoSueldo;
}

// Función que se ejecuta al enviar el formulario
function pagoSalario() {
    // Obtener valores del formulario
    let dias = parseFloat(document.getElementById('txtNumeroUno').value);
    let Vdia = parseFloat(document.getElementById('txtNumeroDos').value);

    // Calcular resultados
    let totalSalario = salario(dias, Vdia);
    let subTransporte = SubTrans(dias, Vdia);
    let pagoSaludTotal = salud(dias, Vdia);
    let pagoPensionTotal = pension(dias, Vdia);
    let pagoArlTotal = arl(dias, Vdia);
    let totalDeducible = deducible(dias, Vdia);
    let pagoSueldoTotal = pagoTotal(dias, Vdia);

    // Mostrar resultados en el HTML
    let resultadoHTML = `
        <p><strong>Total salario:</strong> ${totalSalario}</p>
        <p><strong>Subsidio de transporte:</strong> ${subTransporte}</p>
        <p><strong>Pago de salud:</strong> ${pagoSaludTotal}</p>
        <p><strong>Pago de pensión:</strong> ${pagoPensionTotal}</p>
        <p><strong>Pago de ARL:</strong> ${pagoArlTotal}</p>
        <p><strong>Total deducible:</strong> ${totalDeducible}</p>
        <p><strong>Pago total:</strong> ${pagoSueldoTotal}</p>
    `;

    document.getElementById('salario').innerHTML = resultadoHTML;

    // Devolver false para evitar la recarga de la página
    return false;
}

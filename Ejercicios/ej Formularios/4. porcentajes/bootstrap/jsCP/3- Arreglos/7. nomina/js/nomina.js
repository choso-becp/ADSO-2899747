/*
* Nomina
* Autor: Brayan CP
* Lunes 30 de Abril del 2024
*/


//DESCARGUE BOOSTRAP 
//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA


let registrosNomina = [];

//Arreglo [Nombre:Valor]
registrosNomina = [
    { id: 1076501813, nombres: 'Brayan Estiven', apellidos: 'Carvajal Padilla', cargo: 'Gerente', valorDia: 2000000, diasTrabajados: 22 },
    { id: 1075679234, nombres: 'Aylin Celeste', apellidos: 'Carvajal Padilla', cargo: 'Operario', valorDia: 80000, diasTrabajados: 26 },
    { id: 1073209845, nombres: 'Lindora', apellidos: 'Padilla Vanegas', cargo: 'Supervisor', valorDia: 300000, diasTrabajados: 24 },
    { id: 1072903176, nombres: 'Joaquin Emilio', apellidos: 'Carvajal Quintero', cargo: 'Supervisor', valorDia: 300000, diasTrabajados: 24 },
    { id: 1056798009, nombres: 'Daniela Andrea', apellidos: 'Carvajal Padilla', cargo: 'Operario', valorDia: 85000, diasTrabajados: 26 },
    { id: 1089567890, nombres: 'Jonathan Emilio', apellidos: 'Carvajal Padilla', cargo: 'Operario', valorDia: 85000, diasTrabajados: 26 },
    { id: 1023456789, nombres: 'Nicole Fernanda', apellidos: 'Criollo Alvares', cargo: 'Analista', valorDia: 570000, diasTrabajados: 22 },
    { id: 1098234567, nombres: 'Luis Alejandro', apellidos: 'Macana Espinosa', cargo: 'Técnico', valorDia: 120000, diasTrabajados: 25 },
    { id: 1077384965, nombres: 'Anibal', apellidos: 'Alvarado Andrade', cargo: 'Técnico', valorDia: 120000, diasTrabajados: 25 },
    { id: 1078924056, nombres: 'Diego Fernando', apellidos: 'Cuellar Hernandez', cargo: 'Técnico', valorDia: 120000, diasTrabajados: 25 }
];
console.log(registrosNomina);

//Calcula el salario, subsidioTransporte, salud, pension, arl, retencion y totalPagar
function salario(pdias, pVdia) {
    let dias = pdias;
    let Vdia = pVdia;
    let totalSalario = dias * Vdia;
    return totalSalario;
}

function SubTrans(pdias, pVdia) {
    let SalarioMinimo = 1600000
    let SalarioTrans = salario(pdias, pVdia)
    let SubTransporte
    if (SalarioTrans <= 2 * SalarioMinimo) {
        SubTransporte = 120000
    }
    else {
        SubTransporte = 0
    }
    return SubTransporte
}

function salud(pdias, pVdia) {
    let pagoSalud
    pagoSalud = salario(pdias, pVdia) * 0.12
    return pagoSalud
}

function pension(pdias, pVdia) {
    let pagoPension
    pagoPension = salario(pdias, pVdia) * 0.16
    return pagoPension
}

function arl(pdias, pVdia) {
    let pagoArl
    pagoArl = salario(pdias, pVdia) * 0.052
    return pagoArl
}

function retencion(pdias, pVdia) {
    let SalarioMin = 1600000;
    let SalarioRet = salario(pdias, pVdia);
    let Retencion;
    if (SalarioRet > 6 * SalarioMin && SalarioRet < 8 * SalarioMin) {
        Retencion = SalarioRet * 0.02;
    } else if (SalarioRet > 8 * SalarioMin && SalarioRet < 12 * SalarioMin) {
        Retencion = SalarioRet * 0.04;
    } else if (SalarioRet > 12 * SalarioMin) {
        Retencion = SalarioRet * 0.08;
    } else {
        Retencion = 0;
    }
    return Retencion;
}

function pagoTotal(pdias, pVdia) {
    let totalSalario = salario(pdias, pVdia);
    let totalDeducciones = salud(pdias, pVdia) + pension(pdias, pVdia) + arl(pdias, pVdia) + retencion(pdias, pVdia);
    return totalSalario + SubTrans(pdias, pVdia) - totalDeducciones;
}

let mostrarNomina = [];

for (let i = 0; i < registrosNomina.length; i++) {
    let empleado = registrosNomina[i];
    let psalario = salario(empleado.diasTrabajados, empleado.valorDia);
    let pSubTrans = SubTrans(empleado.diasTrabajados, empleado.valorDia);
    let psalud = salud(empleado.diasTrabajados, empleado.valorDia);
    let ppension = pension(empleado.diasTrabajados, empleado.valorDia);
    let parl = arl(empleado.diasTrabajados, empleado.valorDia);
    let pretencion = retencion(empleado.diasTrabajados, empleado.valorDia);
    let ppagoTotal = pagoTotal(empleado.diasTrabajados, empleado.valorDia);

    let empleadoNomina = [
        empleado.id,
        empleado.nombres,
        empleado.apellidos,
        empleado.cargo,
        psalario,
        pSubTrans,
        psalud,
        ppension,
        parl,
        pretencion,
        ppagoTotal,
    ];

    mostrarNomina.push(empleadoNomina);
}

console.log(mostrarNomina);

let totalPagos = [];

let totalSalud = 0;
let totalPension = 0;
let totalARL = 0;
let totalRetencion = 0;
let totalPagoTotal = 0;

for (let i = 0; i < registrosNomina.length; i++) {
    let empleado = registrosNomina[i];
    let psalud = salud(empleado.diasTrabajados, empleado.valorDia);
    let ppension = pension(empleado.diasTrabajados, empleado.valorDia);
    let parl = arl(empleado.diasTrabajados, empleado.valorDia);
    let pretencion = retencion(empleado.diasTrabajados, empleado.valorDia);
    let ppagoTotal = pagoTotal(empleado.diasTrabajados, empleado.valorDia);

    totalSalud += psalud;
    totalPension += ppension;
    totalARL += parl;
    totalRetencion += pretencion;
    totalPagoTotal += ppagoTotal;
}

totalPagos.push({
    salud: totalSalud,
    pension: totalPension,
    arl: totalARL,
    retencion: totalRetencion,
    pagoTotal: totalPagoTotal
});

console.log(totalPagos);
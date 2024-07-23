/*
* Calcular el pago de una persona
* Autor: Brayan CP
* Lunes 02 de Abril del 2024
*/

//PARAMETRO
function salario(pdias, pVdia) {
    let dias = pdias
    let Vdia = pVdia
    let totalSalario
    totalSalario = dias * Vdia
    return totalSalario
}

function SubTrans(pdias, pVdia) {
    let SalarioMinimo = 1600000
    let SalarioTrans = salario(pdias, pVdia)
    let SubTransporte
    if(SalarioTrans<=2*SalarioMinimo){
        SubTransporte=140000
    }
    else{
        SubTransporte=0
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

function deducible(pdias, pVdia) {
    let pagoDeducible
    pagoDeducible = pension(pdias, pVdia) + salud(pdias, pVdia) + arl(pdias, pVdia)
    return pagoDeducible
}

function pagoTotal(pdias, pVdia) {
    let pagoSueldo
    pagoSueldo = salario(pdias, pVdia) + SubTrans(pdias, pVdia) - deducible(pdias, pVdia)
    return pagoSueldo
}

//EXPRESION
const salarioExp = function (pdias, pVdia) {
    let dias = pdias
    let Vdia = pVdia
    let totalSalario
    totalSalario = dias * Vdia
    return totalSalario
}

const SubTransExp = function (pdias, pVdia) {
    let SalarioMinimo = 1600000
    let SalarioTrans = salario(pdias, pVdia)
    let SubTransporte
    if(SalarioTrans<=2*SalarioMinimo){
        SubTransporte=140000
    }
    else{
        SubTransporte=0
    }
    return SubTransporte
}

const saludExp = function (pdias, pVdia) {
    let pagoSalud
    pagoSalud = salario(pdias, pVdia) * 0.12
    return pagoSalud
}

const pensionExp = function (pdias, pVdia) {
    let pagoPension
    pagoPension = salario(pdias, pVdia) * 0.16
    return pagoPension
}

const arlExp = function (pdias, pVdia) {
    let pagoArl
    pagoArl = salario(pdias, pVdia) * 0.052
    return pagoArl
}

const deducibleExp = function (pdias, pVdia) {
    let pagoDeducible
    pagoDeducible = pension(pdias, pVdia) + salud(pdias, pVdia) + arl(pdias, pVdia)
    return pagoDeducible
}

const pagoTotalExp = function (pdias, pVdia) {
    let pagoSueldo
    pagoSueldo = salario(pdias, pVdia) + SubTrans(pdias, pVdia) - deducible(pdias, pVdia)
    return pagoSueldo
}
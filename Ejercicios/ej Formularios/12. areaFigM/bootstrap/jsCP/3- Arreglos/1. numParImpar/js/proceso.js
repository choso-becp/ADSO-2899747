function numeros() {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let pares = []
    let impares = []
    numeros.forEach(function(numero) {
        if (numero % 2 === 0) {
            pares.push(numero)
        } else {
            impares.push(numero)
        }
    })
    return {
        numeros: numeros,
        pares: pares,
        impares: impares
    }
}
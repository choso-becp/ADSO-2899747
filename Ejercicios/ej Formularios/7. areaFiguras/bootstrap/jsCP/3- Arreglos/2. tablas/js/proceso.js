function tablas1(){
    let cont5=1
    let par = 0
    let impar = 0
    let tabla5=[]

    for (let i = 0; i < 5; i++) {
        tabla5[i] = []
        for (let j = 0; j < 5; j++) {
            tabla5[i][j]=5*cont5
            if (tabla5[i][j] % 2 === 0) {
                par += tabla5[i][j]
            } else {
                impar += tabla5[i][j]
            }
            cont5++
        }
    }
    console.log(tabla5);
    console.log("Suma de los números pares:", par)
    console.log("Suma de los números impares:", impar)
    return " "
}

function tablas2(){
    let cont5=1
    let par = 0
    let impar = 0
    let tabla9=[]

    for (let i = 0; i < 5; i++) {
        tabla9[i] = []
        for (let j = 0; j < 5; j++) {
            tabla9[i][j]=9*cont5
            if (tabla9[i][j] % 2 === 0) {
                par += tabla9[i][j]
            } else {
                impar += tabla9[i][j]
            }
            cont5++
        }
    }
    console.log(tabla9);
    console.log("Suma de los números pares:", par)
    console.log("Suma de los números impares:", impar)
    return " "
}
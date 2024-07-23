/*
* Bingo y triple xxx
* Autor: Brayan CP
* Lunes 029 de Abril del 2024
*/

//Crea y muestra la tabla de multiplicar del 2 en 5x5
let interno = [];
let i;
let j;
let aumento = 1;

for (i = 0; i < 5; i++) {
    interno[i] = [];
    for (j = 0; j < 5; j++) {
        interno[i][j] = 2 * aumento;
        aumento++
    }
}
console.log(interno);

//Muestra los numeros ubicados en X
for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
        if (i === j || i + j === 2) {
            console.log("x1: " + interno[i][j])
        }
    }
}
console.log(" ")

for (i = 2; i < 5; i++) {
    for (j = 0; j < 3; j++) {
        if (i + j == (j + 1) * 2 || i + j === 4) {
            console.log("x2: " + interno[i][j])
        }
    }
}
console.log(" ")

for (i = 0; i < 3; i++) {
    for (j = 2; j < 5; j++) {
        if (i + j === (j - 1) * 2 || i + j === 4) {
            console.log("x3: " + interno[i][j])
        }
    }
}
console.log(" ")
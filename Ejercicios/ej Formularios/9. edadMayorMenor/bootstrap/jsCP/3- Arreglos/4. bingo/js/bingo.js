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

//MOSTRAR LAS LETRAS DEL BINGO
//Letra B
console.log("LETRA B \n");
for (j = 0; j < 5; j++) {
    console.log(interno[j][0] + " ")
}
//Letra I
console.log("LETRA I \n");
for (j = 0; j < 5; j++) {
    console.log(interno[j][1] + " ")
}
//Letra N
console.log("LETRA N \n");
for (j = 0; j < 5; j++) {
    console.log(interno[j][2] + " ")
}
//Letra G
console.log("LETRA G \n");
for (j = 0; j < 5; j++) {
    console.log(interno[j][3] + " ")
}
//Letra O
console.log("LETRA O \n");
for (j = 0; j < 5; j++) {
    console.log(interno[j][4] + " ")
}
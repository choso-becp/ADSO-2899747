let interno = [];
let i, j;
let aumento = 1;

// Generar la matriz con números aleatorios
for (i = 0; i < 5; i++) {
    interno[i] = [];
    for (j = 0; j < 5; j++) {
        interno[i][j] = Math.floor(Math.random() * 100); // Números aleatorios entre 0 y 99
        aumento++;
    }
}

console.log(interno);

// Mostrar las letras del bingo y sus números correspondientes
console.log("LETRA B \n");
for (j = 0; j < 5; j++) {
    console.log(interno[j][0] + " ");
}

console.log("LETRA I \n");
for (j = 0; j < 5; j++) {
    console.log(interno[j][1] + " ");
}

console.log("LETRA N \n");
for (j = 0; j < 5; j++) {
    console.log(interno[j][2] + " ");
}

console.log("LETRA G \n");
for (j = 0; j < 5; j++) {
    console.log(interno[j][3] + " ");
}

console.log("LETRA O \n");
for (j = 0; j < 5; j++) {
    console.log(interno[j][4] + " ");
}

/*
// Crea una matriz de 5x5 con números aleatorios entre 1 y 100
let interno = [];
let i, j;

// Generar la matriz con números aleatorios
for (i = 0; i < 5; i++) {
    interno[i] = [];
    for (j = 0; j < 5; j++) {
        interno[i][j] = Math.floor(Math.random() * 100) + 1; // Números aleatorios entre 1 y 100
    }
}

console.log("Matriz de números aleatorios:");
console.log(interno);

// Mostrar las letras del bingo y sus números correspondientes
const letras = ['B', 'I', 'N', 'G', 'O'];
for (let col = 0; col < 5; col++) {
    console.log(`LETRA ${letras[col]}`);
    for (let row = 0; row < 5; row++) {
        console.log(interno[row][col] + " ");
    }
    console.log(""); // Nueva línea para separar las letras
}

// Mostrar los números que forman una X en la matriz
console.log("Números que forman una X:");
for (i = 0; i < 5; i++) {
    for (j = 0; j < 5; j++) {
        if (i === j || i + j === 4) {
            console.log(interno[i][j]);
        }
    }
}

// Mostrar los números que forman las tres X adicionales
console.log("Números que forman las tres X adicionales:");

// Primera X (en la esquina superior izquierda de 3x3)
for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
        if (i === j || i + j === 2) {
            console.log("x1: " + interno[i][j]);
        }
    }
}
console.log("");

// Segunda X (en la esquina inferior izquierda de 3x3)
for (i = 2; i < 5; i++) {
    for (j = 0; j < 3; j++) {
        if (i + j == (j + 1) * 2 || i + j === 4) {
            console.log("x2: " + interno[i][j]);
        }
    }
}
console.log("");

// Tercera X (en la esquina superior derecha de 3x3)
for (i = 0; i < 3; i++) {
    for (j = 2; j < 5; j++) {
        if (i + j === (j - 1) * 2 || i + j === 4) {
            console.log("x3: " + interno[i][j]);
        }
    }
}
console.log("");

*/
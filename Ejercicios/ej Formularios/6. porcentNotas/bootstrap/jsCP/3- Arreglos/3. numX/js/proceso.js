function matrizX() {
    let cont5 = 1;
    let tabla5 = []

    for (let i = 0; i < 5; i++) {
        tabla5[i] = []
        for (let j = 0; j < 5; j++) {
            tabla5[i][j] = 5 * cont5
            cont5++
        }
    }
    console.log(tabla5);

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (i === j || i + j === 4) {
                console.log(tabla5[i][j])
            }
        }
    }
}
document.addEventListener("DOMContentLoaded", () => {
  const cartonesBingo= document.querySelectorAll(".bingo-card") // Almacena los elementos con la clase bingo-card

  // Generar los mismos números para todos los cartones
  const numeros = numerosRandom(); // Almacena los numeros que genera la funcion 'generateBingoNumbers()'
  cartonesBingo.forEach((carton, cartonIteracion) => { // Iteración sobre los cartones
    numeros.forEach((numero, numeroIteracion) => { // Iteración sobre los numeros
      const celdas = document.createElement("div"); // Almacena elementos 'div' nuevos
      celdas.classList.add("bingo-cell"); // Agrega estilos usando una lista
      celdas.textContent = numero; // Establece el contenido de texto como el número de bingo
      
      // Colorear las celdas según el cartón y la posición
      if (cartonIteracion === 1 && [0, 5, 10, 15, 20].includes(numeroIteracion)) {
        celdas.style.backgroundColor = "#FFFF99"; // Columna B
      } else if (cartonIteracion === 2 && [1, 6, 11, 16, 21].includes(numeroIteracion)) {
        celdas.style.backgroundColor = "#ADD8E6"; // Columna I
      } else if (cartonIteracion === 3 && [2, 7, 12, 17, 22].includes(numeroIteracion)) {
        celdas.style.backgroundColor = "#FF9999"; // Columna N
      } else if (cartonIteracion === 4 && [3, 8, 13, 18, 23].includes(numeroIteracion)) {
        celdas.style.backgroundColor = "#90EE90"; // Columna G
      } else if (cartonIteracion === 5 && [4, 9, 14, 19, 24].includes(numeroIteracion)) {
        celdas.style.backgroundColor = "#FFB6C1"; // Columna O
      } else if (cartonIteracion === 6) {
        if ([0, 4, 6, 8, 12, 16, 18, 20, 24].includes(numeroIteracion)) {
          celdas.style.backgroundColor = "#FFCCCC"; //  Carton Solo X
        }
      } else if (cartonIteracion === 7) {
        if ([0, 6].includes(numeroIteracion)) {
          celdas.style.backgroundColor = "#D2B4DE"; // Carton X1
        } else if ([4, 8, 14].includes(numeroIteracion)) {
          celdas.style.backgroundColor = "#F9E79F"; // Carton X2
        } else if ([16, 20, 22].includes(numeroIteracion)) {
          celdas.style.backgroundColor = "#A3E4D7"; // Carton X3
        } else if ([2].includes(numeroIteracion)) {
          celdas.style.backgroundColor = "#E6CEBF"; // Carton X1-2
        } else if ([10].includes(numeroIteracion)) {
          celdas.style.backgroundColor = "#BBCCDB"; // Carton X1-3
        } else if ([12].includes(numeroIteracion)) {
          celdas.style.backgroundColor = "#CFD5C7"; // Carton X1-2-3
        }
      }

      carton.appendChild(celdas); // Inserta las celdas nuevas a los cartones
    });
  });
});

function numerosRandom() {
  const numeros = [];
  while (numeros.length < 25) {
    const randNum = Math.floor(Math.random() * 99) + 1; // Genera numeros aleatorios entre 1 y 99
    if (!numeros.includes(randNum)) { // Verifica que no repita un numero
      numeros.push(randNum); // Agrega los numeros que no esten repetidos
    }
  }
  return numeros;
}

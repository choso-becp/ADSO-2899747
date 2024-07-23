document.addEventListener('DOMContentLoaded', function () {
    let tabla = [];
    let multiplo = [];
    let resultado;
    let numeroTabla;
    let numeroMultiplo;
    let iteracionTabla;
    let iteracionMultiplo;
    let printResultado = '';

    for (iteracionTabla = 0; iteracionTabla < 10; iteracionTabla++) {
        numeroTabla = iteracionTabla + 1;
        multiplo = [];
        for (iteracionMultiplo = 0; iteracionMultiplo < 10; iteracionMultiplo++) {
            numeroMultiplo = iteracionMultiplo + 1;
            resultado = numeroTabla * numeroMultiplo;
            multiplo.push(resultado);
        }
        tabla.push(multiplo);
    }

    for (iteracionTabla = 0; iteracionTabla < 10; iteracionTabla++) {
        numeroTabla = iteracionTabla + 1;

        printResultado += '<div class="card" style="width: 12rem; margin: 5px;">';
        printResultado += '<div class="card-body">';
        
        printResultado += '<table class="table text-center">';
        printResultado += '<thead><tr><th colspan="2">Tabla '+numeroTabla+'</th></tr></thead>';
        printResultado += '<tbody>';

        for (iteracionMultiplo = 0; iteracionMultiplo < 10; iteracionMultiplo++) {
            numeroMultiplo = iteracionMultiplo + 1;

            printResultado += '<tr><td>'+numeroTabla+' x '+numeroMultiplo+' = '+tabla[iteracionTabla][iteracionMultiplo]+'</td></tr>';

        }
        
        printResultado += '</table>';
        printResultado += '</div>';
        printResultado += '</div>';
    }

    document.getElementById('resultado-tablas').innerHTML = printResultado;

});
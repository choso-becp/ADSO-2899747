/*
* Tienda
* Autor: Brayan CP
* Lunes 30 de Abril del 2024
*/

let tienda = [];
let listaBusqueda = [];
let numeroRegistros;
let nuevoProducto;
let i;

// Crea varios registros
tienda = [
    { producto: 'Arroz', tipoProducto: 'granos', tipoUnidad: 'gramos', cantidad: 1000, precio: 2450 },
    { producto: 'Papa', tipoProducto: 'fruver', tipoUnidad: 'gramos', cantidad: 500, precio: 1000 },
    { producto: 'Mora', tipoProducto: 'fruver', tipoUnidad: 'gramos', cantidad: 500, precio: 1500 },
    { producto: 'Trucha', tipoProducto: 'carnes', tipoUnidad: 'gramos', cantidad: 1000, precio: 9000 },
    { producto: 'Pollo Entero', tipoProducto: 'carnes', tipoUnidad: 'gramos', cantidad: 500, precio: 4500 }
];

// Agrega registros
function agregarRegistro(...productos) {
    tienda.push(...productos);
    numeroRegistros = tienda.length;
}

// Modifica registros
function modificarRegistro(productoActual, cambios) {
    tienda.forEach((producto, index) => {
        if (producto.producto === productoActual) {
            Object.assign(tienda[index], cambios);
        }
    });
}

// Elimina registros
function eliminarRegistros(...productos) {
    productos.forEach(producto => {
        tienda = tienda.filter(item => item.producto !== producto);
    });
}

// Agrega nuevos productos
agregarRegistro(
    { producto: 'Res', tipoProducto: 'carnes', tipoUnidad: 'gramos', cantidad: 500, precio: 7500 },
    { producto: 'Banano', tipoProducto: 'fruver', tipoUnidad: 'gramos', cantidad: 100, precio: 1500 },
    { producto: 'Chocolate', tipoProducto: 'fruver', tipoUnidad: 'gramos', cantidad: 300, precio: 8300 }
);

// Modifica registros existentes
modificarRegistro('Arroz', { tipoProducto: 'fruver', cantidad: 777 });
modificarRegistro('Papa', { tipoProducto: 'carnes', tipoUnidad: 'kilogramos', cantidad: 111 });

// Elimina un registro
eliminarRegistros('Pollo Entero', 'Trucha');

// Busca registros
for (i = 0; i < tienda.length; i++) {
    if (tienda[i].tipoProducto === 'fruver') {
        listaBusqueda.push(tienda[i]);
    }
}

console.log("Tienda:", tienda);
console.log("Búsquedas:", listaBusqueda);
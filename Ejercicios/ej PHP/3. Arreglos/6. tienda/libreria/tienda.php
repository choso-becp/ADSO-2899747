<?php
/*
* Tienda
* Autor: Brayan CP
* Lunes 30 de Abril del 2024
*/

$tienda = [];
$listaBusqueda = [];
$numeroRegistros;
$nuevoProducto;
$i;

// Crea varios registros
$tienda = [
    ['producto' => 'Arroz', 'tipoProducto' => 'granos', 'tipoUnidad' => 'gramos', 'cantidad' => 1000, 'precio' => 2450],
    ['producto' => 'Papa', 'tipoProducto' => 'fruver', 'tipoUnidad' => 'gramos', 'cantidad' => 500, 'precio' => 1000],
    ['producto' => 'Mora', 'tipoProducto' => 'fruver', 'tipoUnidad' => 'gramos', 'cantidad' => 500, 'precio' => 1500],
    ['producto' => 'Trucha', 'tipoProducto' => 'carnes', 'tipoUnidad' => 'gramos', 'cantidad' => 1000, 'precio' => 9000],
    ['producto' => 'Pollo Entero', 'tipoProducto' => 'carnes', 'tipoUnidad' => 'gramos', 'cantidad' => 500, 'precio' => 4500]
];

// Agrega registros
function agregarRegistro(...$productos) {
    global $tienda;
    $tienda = array_merge($tienda, $productos);
    global $numeroRegistros;
    $numeroRegistros = count($tienda);
}

// Modifica registros
function modificarRegistro($productoActual, $cambios) {
    global $tienda;
    foreach ($tienda as $key => $producto) {
        if ($producto['producto'] === $productoActual) {
            $tienda[$key] = array_merge($producto, $cambios);
        }
    }
}

// Elimina registros
function eliminarRegistros(...$productos) {
    global $tienda;
    foreach ($productos as $producto) {
        $tienda = array_filter($tienda, function($item) use ($producto) {
            return $item['producto'] !== $producto;
        });
    }
}

// Agrega nuevos productos
agregarRegistro(
    ['producto' => 'Res', 'tipoProducto' => 'carnes', 'tipoUnidad' => 'gramos', 'cantidad' => 500, 'precio' => 7500],
    ['producto' => 'Banano', 'tipoProducto' => 'fruver', 'tipoUnidad' => 'gramos', 'cantidad' => 100, 'precio' => 1500],
    ['producto' => 'Chocolate', 'tipoProducto' => 'fruver', 'tipoUnidad' => 'gramos', 'cantidad' => 300, 'precio' => 8300]
);

// Modifica registros existentes
modificarRegistro('Arroz', ['tipoProducto' => 'fruver', 'cantidad' => 777]);
modificarRegistro('Papa', ['tipoProducto' => 'carnes', 'tipoUnidad' => 'kilogramos', 'cantidad' => 111]);

// Elimina un registro
eliminarRegistros('Pollo Entero', 'Trucha');

// Busca registros
foreach ($tienda as $producto) {
    if ($producto['tipoProducto'] === 'carnes') {
        $listaBusqueda[] = $producto;
    }
}
?>
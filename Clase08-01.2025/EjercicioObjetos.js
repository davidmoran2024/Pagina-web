const inventario = {
    producto1: { nombre: 'Manzanas', precio: 1.2, cantidad: 50 },
    producto2: { nombre: 'Peras', precio: 1.5, cantidad: 40 },
    producto3: { nombre: 'Naranjas', precio: 1.0, cantidad: 60 },
    producto4: { nombre: 'Platano', precio: 0.8, cantidad: 30 }
};

console.log("Inventario inicial:");
console.log(inventario);

Object.seal(inventario);
function venderProducto(inventario, nombreProducto, cantidad) {
    for (let clave in inventario) {
        if (inventario[clave].nombre === nombreProducto) {
            if (inventario[clave].cantidad >= cantidad) {
                inventario[clave].cantidad -= cantidad;
                console.log(`Venta exitosa: ${cantidad} ${nombreProducto}(s).`);
                return;
            } else {
                console.log(`Error: Stock insuficiente para ${nombreProducto}.`);
                return;
            }
        }
    }
    console.log(`Error: Producto ${nombreProducto} no encontrado.`);
}
function aplicarDescuento(inventario, porcentajeDescuento) {
    for (let clave in inventario) {
        let nuevoPrecio = inventario[clave].precio * (1 - porcentajeDescuento / 100);
        inventario[clave].precio = nuevoPrecio > 0 ? nuevoPrecio : 0; // Asegurar que no haya precios negativos
    }
    console.log(`Descuento del ${porcentajeDescuento}% aplicado a todos los productos.`);
}
venderProducto(inventario, 'Manzanas', 11000); 
venderProducto(inventario, 'Naranjas', 10); 
venderProducto(inventario, 'Pollo', 5); 

aplicarDescuento(inventario, 10); // Aplicar un descuento del 10%


console.log("Inventario final:");
console.log(inventario);





// Probar si funciona el codigo->
//Prueba de si se puede o no añadir mas productos
inventario.producto5 = { nombre: 'Uvas', precio: 2.0, cantidad: 20 };
console.log("Intento de agregar un nuevo producto:");
console.log(inventario);
// Intentar eliminar un producto existente
delete inventario.producto2;
console.log("Intento de eliminar un producto existente:");
console.log(inventario);
// Modificar cantidad y precio de un producto existente
inventario.producto4.cantidad = 1;
inventario.producto4.precio = 7.2;
console.log("Modificar cantidad y precio de un producto existente:");
console.log(inventario);

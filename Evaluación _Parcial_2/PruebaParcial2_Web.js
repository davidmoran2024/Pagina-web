//Desarrollo de una Aplicación Integral para la Gestión de Inventario y Ventas Avanzada
//Nombre: David Moran
class Inventario{
    constructor() {
        this.productos=[];//Aqui seiran guardando como arreglo los productos
    }
    agregarProducto(nombre, precio, cantidad, categoria) {
        if (!nombre || typeof nombre !== 'string') {
            console.error('Nombre invalido');
            return;
        }
        if (typeof precio !== 'number' || precio <= 0) {
            console.error('El precio debe ser un numero positivo!');
            return;
        }
        if (typeof cantidad !== 'number' || cantidad < 0) {
            console.error('Cantidad debe ser un numero que no sea negativos');
            return;
        }
        if (!categoria || typeof categoria !== 'string') {
            console.error('Categoria no valida');
            return;
        }
        this.productos.push({ nombre, precio, cantidad, categoria });//push para enviar al final
        console.log(`Producto "${nombre}" agregado con éxito.`);
    }
listarProductos(orden = 'ascendente') {
        return this.productos.sort((a, b) => orden === 'ascendente'?a.precio - b.precio : b.precio - a.precio);
    }
    filtrarPorCategoria(categoria) {
        if (!categoria || typeof categoria !== 'string') {
            console.error('Categoría inválida.');
            return [];
        }
        return this.productos.filter(producto => producto.categoria === categoria);
    }
// Aplica un descuento a todos los productos de una categoría
aplicarDescuento(categoria, porcentaje) {//envio la vategoria segun corresponda, ademas de su porcentaje 
    // Validación de la categoría
    if(!categoria || typeof categoria !== 'string') {
        console.error('Categoria no valida');
        return;
    }
    // Validación del porcentaje
    if (typeof porcentaje !== 'number' || porcentaje < 0 || porcentaje > 100) {
        console.error('Porcentaje invalido, tiene que ser del 0 al 100!!');
        return;
    }
    let productosEncontrados = 0;
    for (let i = 0; i < this.productos.length; i++) {
        const producto = this.productos[i];
        if (producto.categoria === categoria) {
            producto.precio -= producto.precio * (porcentaje / 100);//calculo del descuento
            productosEncontrados++;
        }
    }
    if (productosEncontrados === 0) {
        console.warn(`No se encontraron productos en la categoría "${categoria}".`);
    } else {
        console.log(`Descuento del ${porcentaje}% aplicado a la categoría "${categoria}".`);
    }
}}

class Venta {
    constructor() {
        this.ventas = [];
        this.ingresosTotales = 0;
        this.productosVendidos = {};
    }
    realizarVenta(inventario, nombreProducto, cantidad) {
        if (!nombreProducto || typeof nombreProducto !== 'string') {
            console.error('Nombre de producto inválido');
            return;
        }
        if (typeof cantidad !== 'number' || cantidad <= 0) {
            console.error('Cantidad debe ser un número positivo');
            return;
        }
        let producto = null;
        for (let i = 0; i < inventario.productos.length; i++) {
            if (inventario.productos[i].nombre === nombreProducto) {
                producto = inventario.productos[i];
                break; // Detiene el bucle una vez encontrado el producto.
            }
        }
        if (!producto) {
            console.error(`Producto "${nombreProducto}" no existe.`);
            return;
        }
        if (producto.cantidad < cantidad) {
            console.error(`Cantidad insuficiente para "${nombreProducto}".`);
            console.log(`Cantidad insuficiente para "${nombreProducto}".`);
            return;
        }
    
        producto.cantidad -= cantidad;
        const totalVenta = producto.precio * cantidad;
        this.ingresosTotales += totalVenta;
        this.ventas.push({
            producto: nombreProducto,
            cantidad,
            total: totalVenta,
            fecha: new Date().toLocaleString() // Registra la fecha y hora de la venta.
        });
        this.productosVendidos[nombreProducto] = (this.productosVendidos[nombreProducto] || 0) + cantidad;
        console.log(`Venta realizada: ${cantidad} unidades de "${nombreProducto}".`);
    }
    
    generarReporte(inventario) {
        // Verifica si hay ventas
        if (this.ventas.length === 0) {
            console.log('No se han realizado ventas.');
            return {};
        }
        let productoMasVendido = '';
        let maxCantidadVendida = 0;
        for (let producto in this.productosVendidos) {
            if (this.productosVendidos[producto]>maxCantidadVendida) {
                maxCantidadVendida = this.productosVendidos[producto];
                productoMasVendido = producto;
            }
        }
        // Retorna el reporte con la información deseada
        return {
            inventarioActualizado: inventario.productos,
            ventasRealizadas: this.ventas,
            ingresosTotales: this.ingresosTotales,
            productoMasVendido,
        };
    }
    
}
//Ejemplos de uso
const inventario= new Inventario();
console.log('----- Inventario -----');
inventario.agregarProducto('Teclados', 17, 10, 'Computacion');//aqui envio nombre, precio,cantidad, caracteristica
inventario.agregarProducto('monitor', 350, 50, 'Computacion');
inventario.agregarProducto('CajaCPU', 35, 100, 'Electronica');
inventario.agregarProducto('Silla', 18, 20, 'Muebles');

console.log('----- Ventas -----');
const ventas = new Venta();
ventas.realizarVenta(inventario, 'monitor', 8);
ventas.realizarVenta(inventario, 'CajaCPU', 2);
ventas.realizarVenta(inventario, 'Teclados', 1);
ventas.realizarVenta(inventario, 'Silla',5)
//comprobacion de si nos pasamos del limite de cantidad deberia salir  un error
ventas.realizarVenta(inventario, 'Silla',101);

inventario.aplicarDescuento('Computacion', 10);


console.log('----- Total de ventas realizadas del dia -----');
const reporte = ventas.generarReporte(inventario);
console.log(reporte);

//sistema de ventas
//creacion de la clase PRODUCTO

// Sistema de ventas
// Creación de la clase PRODUCTO

class Producto {
    static contadorProductos = 0;

    constructor(nombre, precio, categoria, stock) {
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this.precio = precio; 
        this._categoria = categoria;
        this._stock = stock >= 0 ? stock : 0;
    }

    get idProducto() {
        return this._idProducto;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get precio() {
        return this._precio;
    }

    set precio(precio) {
        if (precio < 0) {
            console.log(`El precio no debe ser negativo`);
            this._precio = 0;
        } else {
            this._precio = precio;
        }
    }

    get categoria() {
        return this._categoria;
    }

    set categoria(categoria) {
        this._categoria = categoria;
    }

    get stock() {
        return this._stock;
    }

    set stock(stock) {
        this._stock = stock >= 0 ? stock : 0;
    }

    disminuirStock(cantidad) {
        if (this._stock >= cantidad) {
            this._stock -= cantidad;
            return true;
        } else {
            console.log(`No hay suficiente stock para ${this._nombre}`);
            return false;
        }
    }

    toString() {
        return `idProducto: ${this._idProducto}, Nombre: ${this._nombre}, Precio: $${this._precio}, Categoria: ${this._categoria}, Stock: ${this._stock}`;
    }
}

class Orden {
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS() {
        return 5;
    }

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
    }

    get idOrden() {
        return this._idOrden;
    }

    agregarProductos(producto, cantidad) {
        if (producto.stock < cantidad) {
            console.log(`No hay suficiente stock de ${producto.nombre} para agregar.`);
            return; 
        }
        if (this._productos.length < Orden.MAX_PRODUCTOS) {
            if (producto.disminuirStock(cantidad)) {
                this._productos.push({ producto, cantidad });
            } else {
                console.log(`No se pudo agregar ${producto.nombre} a la orden`);
            }
        } else {
            console.log('No se pueden agregar más productos a la orden');
        }
    }

    calcularTotal() {
        let totalVenta = 0;
        for (let { producto, cantidad } of this._productos) {
            let precioConDescuento = producto.precio;
            if (producto.categoria === "Electrónica") {
                precioConDescuento -= precioConDescuento * 0.1; 
            }
            totalVenta += precioConDescuento * cantidad;
        }
        return totalVenta;
    }
    calcularImpuestos() {
        let total = this.calcularTotal();
        return total * 0.16; // 16% de impuestos
    }

    mostrarOrden() {
        let productosOrden = '';
        this._productos.sort((a, b) => b.producto.precio - a.producto.precio);
        for (let { producto, cantidad } of this._productos) {
            productosOrden += `${producto.toString()} x${cantidad}\n`;
        }
        const totalConImpuestos = this.calcularTotal() + this.calcularImpuestos();
        console.log(`Orden: ${this._idOrden}, Total: $${this.calcularTotal()}\nImpuestos (16%): $${this.calcularImpuestos()}\nTotal con impuestos: $${totalConImpuestos}\nProductos:\n${productosOrden}`);
    }
}

// Ejemplo de prueba
let producto1 = new Producto('Producto Negativo', -100, 'Electrónica', 5);
console.log(producto1.toString()); // El precio será 0

let producto2 = new Producto('Vestido', 300, 'Ropa', 5);   
let producto3 = new Producto('Laptop', 500, 'Electrónica', 3); 
let producto4 = new Producto('Mouse', 10, 'Electrónica', 0);  
let producto5 = new Producto('Teclado', 150, 'Electrónica', 8); 
let producto6 = new Producto('Camisa', -150, 'Ropa', 100); 
console.log(producto6.toString());

// Crear la orden 1
let orden1 = new Orden();
orden1.agregarProductos(producto3, 2);  
orden1.agregarProductos(producto4, 2);   
orden1.mostrarOrden(); 

// Crear la orden 2
let orden2 = new Orden(); 
orden2.agregarProductos(producto5, 1); 
orden2.agregarProductos(producto4, 1); // El Mouse estará agotado
orden2.agregarProductos(producto3, 1); 
orden2.agregarProductos(producto2, 1); 
orden2.agregarProductos(producto1, 1);
orden2.mostrarOrden(); // Mostrar la orden y sus detalles






//ejercicio
//1. stock disminuido
//2. descuento por categoria
//crear una nueva propiedad denominada en la clase producto
//los productos de la categoria ppor ejemplo Electronica, deben tener un descuento del 10% al calcular el total de la venta
//3. Aplicacion de los impuestos 
//implementar un metodo CalcularImpuestos en la clase Orden para que agrege un impuesto por ejemplo el 16% al calculo total
//listar los productos de forma descendente
//Restriccion adicional:
//Aseguremos que los precios no pueden ser negativos al establecerlo en la clase Producto

//Modificador denominado static se utiliza para acceder 
//Directamente a traves de la clase

//Los metodos o propiedades estaticas no requieren que se de
//una instancia de la clase para ser utilizados
class Calculadora {
    //metodo static
    static sumar(a, b) {
        return a + b;
    }
}

//El acceso al metodo statico directamente de la clase sse accede 
                    //mediante el nombre de la clase seguido de ::
console.log(Calculadora.sumar(5, 3)); //imprime 8
//no se puede acceder desde una isntancia de esta forma
//const calc = new Calculadora(); // no se puede acceder de uuna instancia especifica
//console.log(calc.sumar(5,3));

// el modificador static en java script es una herramienta clave para definir funciones y propiedades
//compartidas sin necesidad de crear algun tipo de instancia de clase.

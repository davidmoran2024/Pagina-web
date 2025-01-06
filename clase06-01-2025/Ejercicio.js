//Nombre David Moran
// Función para calcular el promedio de los 3 numer
function calcularPromedio(a, b, c) {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        throw new Error('Todos los parámetros deben ser números.');
    }
    return (a + b + c) / 3;
}
// Función para determinar el mayor de dos 
function determinarMayor(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Ambos parámetros deben ser números.');
    }return a > b ? a : b;
}
const esPar = (n) => {
    if (typeof n !== 'number') {
        throw new Error('El parámetro debe ser un número.');
    }
    return n % 2 === 0;
};
const esImpar = (n) => {if (typeof n !== 'number') {throw new Error('El parámetro debe ser un número.');}return n % 2 !== 0;
};
(function () {
    let a = 10, b = 20, c = 10;
    let x = 15, y = 25;
    let num = 8;

    try {
        let promedio = calcularPromedio(a, b, c);
        console.log('El promedio de', a, ',', b, 'y', c, 'es:', promedio);

        let mayor = determinarMayor(x, y);
        console.log('El número mayor entre', x, 'y', y, 'es:', mayor);

        let par = esPar(num);
        console.log('El número', num, 'es par?', par);

        let impar = esImpar(num);
        console.log('El número', num, 'es impar?', impar);
    } catch (error) {
        console.error(error.message);
    }
})();

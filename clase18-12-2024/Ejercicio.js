let estudiantes = [
    { nombre: "Juan", calificaciones: [14, 16, 18, 15, 18] },
    { nombre: "María", calificaciones: [12, 11, 13, 11, 20] },
    { nombre: "Carlos", calificaciones: [8, 9, 10, 11, 23] },
    { nombre: "Ana", calificaciones: [17, 18, 19, 12, 20] },
    { nombre: "Luis", calificaciones: [5, 6, 7, 10, 12] },
    { nombre: "Sofía", calificaciones: [15, 16, 14, 12, 10] },
    { nombre: "Miguel", calificaciones: [10, 9, 11, 13, 11] },
    { nombre: "Laura", calificaciones: [13, 14, 15, 12, 20] },
    { nombre: "Andrés", calificaciones: [7, 8, 6, 16, 17, 11] },
    { nombre: "Elena", calificaciones: [18, 19, 20, 12, 18] }
];
for (let estudiante of estudiantes) {//of para iterar los valores que tengo en mi objet
    let suma = 0;
    for (let calificacion of estudiante.calificaciones) {
        suma += calificacion;
    }
    estudiante.promedio = suma / 5;//length
    if (estudiante.promedio >= 16) {
        estudiante.clasificacion = "Excelente";
    } else if (estudiante.promedio >= 12) {
        estudiante.clasificacion = "Bueno";
    } else if (estudiante.promedio >= 8) {
        estudiante.clasificacion = "Aprobado";
    } else {
        estudiante.clasificacion = "Reprobado";
    }
    let maximo = estudiante.calificaciones[0];
    let minimo = estudiante.calificaciones[0];
    for (let calificacion of estudiante.calificaciones) {
        if (calificacion>maximo) {//compara con el valor actual
            maximo =calificacion;
        }
        if (calificacion <minimo) {
            minimo = calificacion;
        }
    }
    estudiante.maximo = maximo;
    estudiante.minimo = minimo;
}
console.log("Resultados:");
for (let estudiante of estudiantes) {
    console.log(`Nombre: ${estudiante.nombre}`);
    console.log(`Calificaciones: ${estudiante.calificaciones}`);
    console.log(`Promedio: ${estudiante.promedio}`);
    console.log(`Maximo: ${estudiante.maximo}`);
    console.log(`Minimo: ${estudiante.minimo}`);
    console.log(`Clasificación: ${estudiante.clasificacion}`);
    console.log("--------------------");
}

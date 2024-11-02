// Función factory para crear objetos de alumnos
const generarAlumno = (nombre, edad, calif1, calif2, calif3) => {
    return {
        nombre,
        edad,
        calif1,
        calif2,
        calif3,
        calcularPromedio: () => (calif1 + calif2 + calif3) / 3,
    };
};

// Creando cinco alumnos
const listaAlumnos = [
    generarAlumno("Carlos", 20, 8, 9, 10),
    generarAlumno("Laura", 21, 7, 8, 9),
    generarAlumno("Manuel", 22, 10, 10, 9),
    generarAlumno("Elena", 19, 6, 7, 8),
    generarAlumno("Diego", 23, 9, 9, 10),
];

// Función para mostrar los datos del alumno
const desplegarAlumno = (alumno) => {
    setTimeout(() => {
        console.log(`Nombre: ${alumno.nombre}`);
        console.log(`Edad: ${alumno.edad}`);
        console.log(`Calificaciones: ${alumno.calif1}, ${alumno.calif2}, ${alumno.calif3}`);
        console.log(`Promedio: ${alumno.calcularPromedio().toFixed(2)}`);
        console.log('----------------------');
    }, 5000);
};

// Mostrar los datos de cada alumno
listaAlumnos.forEach(desplegarAlumno);

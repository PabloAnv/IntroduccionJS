//Arreglos

const numero = [10, 20, 30, 40, 50];

//Nuevo tipo de console para ver en una tabla
console.table(numero);

const meses = new Array('enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio');

console.table(meses);

//Se puede agregar todo a un arreglo, strings, numeros, booleanos, objetos, y hasta otros arrays
const arreglo = ['Pablo', 35, true, { nombre: 'Pablo', Ocupacion: 'Programador' }, [1, 2, 3, 4, 5]];

console.table(arreglo);

console.log(arreglo[3]);

//Conocer el tamaño de un arreglo

console.log(arreglo.length);

numero.forEach(function(numero) {
    console.log(numero);
})


//Arrays o arreglos

const numeros = [10,20,30,40,50];

console.log(numeros);
console.table(numeros);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];

//Usar table para los meses
console.table(meses);


//Puede tener todos los tipos de valores dentro de el
const arreglo = ["Hola", 10, true, "si", null, {nombre:"Juan", trabajo: "Programador",}, [1,2,3]];

console.table(arreglo);


//Acceder a los valores del arreglo

console.log(numeros[4]);
console.log(numeros[2]);
console.log(numeros[200]);

//Conocer una extencion de un arreglo

console.log (meses.length);


//For each es traducido: Por cada uno de ellos
meses.forEach(function(mes){
    console.log(mes);
})
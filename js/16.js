//Arreglos

const numero = [10, 20, 30, 40, 50];
//Agregar
numero[5] = 60;
numero[6] = 70;

//Modificar
// numero[1] = 100;

//Agregar con push
numero.push(80, 90, 100);

//Agregar con unshift, este agrega al incio de un array
numero.unshift(-20, -10, -0);
console.table(numero);


const meses = new Array('enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio');
// meses.pop();    //Elimina el ultimo elemento
// meses.shift();    //Elimina el primer elemento
meses.splice(2, 1);     //Elimina de un elemento hacia adelante

console.table(meses);

//Rest operator Spread Operator
//Es mejor crear un nuevo arreglo que modificar el original

const nuevoArreglo = [...meses, 'Julio']

console.table(nuevoArreglo);
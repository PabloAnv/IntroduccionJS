//Arrays o arreglos

const numeros = [10,20,30,40,50];


console.log(numeros);
console.table(numeros);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Octubre', 'Septiembre', 'Noviembre'];

//Usar table para los meses
console.table(meses);

//Agregar elementos

numeros.push(60,70,80);             //Agregar elementos al final del arreglo
numeros.unshift(-30,-20,-10,0);     //Agregar elementos al inicio del arreglo


//Eliminar elementos

meses.pop();        //Elimina el ultimo elemento del arreglo
meses.shift();      //Elimina el primer elemento del arreglo

meses.splice(2,1);  //Ve a la posicion 2 del arreglo meses y elimina un valor en adelante


//Rest operator o Spread Operator

//Para agregar al final
const nuevoArreglo = [...meses, 'Diciembre'];

//Para agregar al inicio
// const nuevoArreglo = ['Diciembre' ,...meses];

console.table(numeros);
console.table(meses);
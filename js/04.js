//String o cadenas de texto
const producto = "Monitor de 20 pulgadas";
const producto2 = String('Monitor de 30 pulgadas'); //String para decir que estamos usando un String
const producto3 = new String('Monitor de 50 pulgadas'); //Con constructor new para crear un objeto

console.log(producto);
console.log(producto2);
console.log(typeof producto3);  //typeof para saber el tipo de dato


//No se puede usar comillas simples y comillas dobles al mismo tiempo
const producto4 = "Monitor de 40 pulgadas';

console.log(producto4);


//Si quieres usar " dentro de una delcaracion de variable debes usar '' o \"
const producto5 = "Monitor de 60\"";
const producto6 = 'Monitor de 70"';

console.log(producto5);
console.log(producto6);
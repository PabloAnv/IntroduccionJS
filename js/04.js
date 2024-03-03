//METODOS EN STRINGS
const producto = "Monitor de 20 pulgadas";
const producto2 ="Monior HD";
const tweet = "Aprendiendo JavaScript con el curso de desarrollo Web completo JavaScript";
const email = "pablo@gmail.com"


//length

console.log(producto.length); //length es un METODO que nos dice cuantos caracteres tiene una cadena de Strings
console.log(producto2);


//indexOf
//IndexOf es un METODO que comprueba si una palabra existe en una cadena de texto y lo representa como numero posicional

console.log(tweet.indexOf('JavaScript'));
console.log(producto2.indexOf("JavaScript"));   //En este caso no se encuentra, entonces marcara -1
console.log(email.indexOf("@"));


//Includes retorna true o false

console.log(tweet.includes('JavaScript'));       ////En este caso se encuentra, entonces marcara true
console.log(producto2.includes("JavaScript"));   //En este caso no se encuentra, entonces marcara false
console.log(email.includes("@"));
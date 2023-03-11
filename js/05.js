const tweet = 'Aprendiendo JavaScript con el Curso de Desarrollo Web Completo';
const producto2 = 'Monitor HD';
const email = 'email@email.com'

//Length
console.log(tweet.length); //Para conocer la cantidad de palabras
console.log(producto2);

//IndexOf
console.log(tweet.indexOf('Curso')); //IndexOf para conocer si se encuetra una palabra (Es un metodo)
//Marcara el numero de letra donde se encuentra
console.log(producto2.indexOf('Tablet')); //En el caso de que indexOf no encuentre la palabra marcara -1

//Includes
console.log(tweet.includes('Curso')); //Igual que indexOf pero este regresara un valor booleano
console.log(producto2.includes('Tablet'));//False cuando no encuentre la palabra
console.log(email.includes('@'));//Para validar email


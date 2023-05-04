//Destructuring de objetos

const producto = {
    nombreProducto: "Monitor de 20\"",
    precio: 300,
    disponible: true
};

//Asignar un valor a una variable, es una forma de hacer una propiedad de manera independiente
const precioProducto =  producto.precio;
const nombreProducto2 = producto.nombreProducto;
const disponible2 = producto.disponible;

// console.log(precioProducto);
// console.log(nombreProducto);
// console.log(disponible);

//Destructuring

//Tecnicamente le estas diciendo saca precio y dale el mismo nombre del objeto producto

// const {precio} = producto
// const {nombreProducto} = producto
// const {disponible} = producto

//Una forma mas corta de hacerlo
const {precio, nombreProducto, disponible} = producto;

console.log(precio);
console.log(nombreProducto);
console.log(disponible);
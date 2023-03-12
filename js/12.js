//
const producto = {
    nombreProducto: 'Monitor de 20"',
    precio: 300,
    disponible: true
}

//Convertir propiedades a variables
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

// console.log(precioProducto);
// console.log(nombreProducto);

//Destructuring

// const {precio} = producto;
// const {nombreProducto} = producto;

const {precio, nombreProducto} = producto;

console.log(precio);
console.log(nombreProducto);
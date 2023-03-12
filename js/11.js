//Objetos
//Objetos
const producto = {
    nombreProducto: 'Monitor de 20"',
    precio: 300,
    disponible: true
}

// console.log(producto);
// console.log(producto.precio);
// console.log(producto["precio"]);

//Agregar propiedad al objeto
producto.imagen = 'imagen.jpg';

//Eliminar propiedad al objeto
delete producto.disponible;

console.log(producto);
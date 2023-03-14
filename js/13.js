"use strict" //Correr javaScript en modo extricto
const producto = {
    nombreProducto: 'Monitor de 20"',
    precio: 300,
    disponible: true
}

//Congelar objeto para no agregar mas valores y no puede modificarse la imagen y eliminar

// Object.freeze(producto);

// producto.imagen = 'imagen.jpg';

// console.log(producto.imagen);

// console.log(Object.isFrozen(producto));



Object.seal(producto); //Permite modificar pero no lo demas

// producto.imagen = 'imagen.jpg';

console.log(producto.imagen);


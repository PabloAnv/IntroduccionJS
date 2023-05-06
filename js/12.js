//Object metods
"use strict"    //Correr JS en estricto
const producto = {
    nombreProducto: "Monitor de 20\"",
    precio: 300,
    disponible: true
};

const producto2 = {
    nombreProducto: "Monitor de 20\"",
    precio: 300,
    disponible: true
};

//FREEZE

Object.freeze(producto);    //Frezzear un objeto o congelarlo no te permite nada
// producto.imagen = "Imagen.jpg";

console.log(producto.imagen);

console.log(Object.isFrozen(producto)); //Esta congelado un objeto?


//SEAL siginifica sellar

Object.seal(producto2); //Sealear o sellar te permite modificar valores del objeto

producto2.precio = "Nuevo Precio";

console.log(producto2.precio);

console.log(Object.isSealed(producto2));    //Esta sellado un objeto?
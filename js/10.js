//Objetos

const nombreProducto = "Monitor de 20\""
const precio = 300;
const disponible = true;


//El objeto es un conjunto de propiedades atribuidas a una sola variable, en vez de usar muchas, se puede usar solo una
const producto = {
    nombreProducto: "Monitor de 20\"",
    precio: 300,
    disponible: true
};

//Modificar Objetos

//Agrega propiedades a los objetos
producto.imagen = "imagen.jpg";

//Eliminar propiedades
delete producto.disponible;

//Modificar propiedades
producto.nombreProducto = "Monitor falso";

console.log(producto.nombreProducto);
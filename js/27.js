//Object constructor y Object literal o POO


//Object literal, nosotros le pasamos los valores
const producto = {
    nombre: `Tablet`,
    precio: 500
};


//Object constructor o mejor dicho una clases
//Para mi una clase es aquel contenedor que tiene la forma de creacion de objetos, como si fuera un molde

function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

const objeto = new Producto('Monitor Curvo de 49 pulgadas', 800, true);
const objeto2 = new Producto('Tablet', 500, false);
const objeto3 = new Producto('PC', 2500, true);
const objeto4 = new Producto('Camara', 700, false);

console.log(objeto);
console.log(objeto2);
console.log(objeto3);
console.log(objeto4);
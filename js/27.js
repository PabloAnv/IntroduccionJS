//this es para señalar que la propiedad del objeto que se busca se encuentra dentro
//aqui no funcionan los arrow functions

//Object constructor y Object literal o POO

//Object constructor o mejor dicho una clases
//Para mi una clase es aquel contenedor que tiene la forma de creacion de objetos, como si fuera un molde

function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

function Cliente(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

//Formatear se refiere a pasar de objeto a algo mas apreciable como una oracion en la consola

function formatearProducto(producto){
    return `El producto ${producto.nombre} tiene un precio de ${producto.precio}`
}

function formatearCliente(cliente){
    return `El producto ${cliente.nombre} tiene un precio de ${cliente.apellido}`
}
//Cuando retorna una funcion una oracion que puede ser mostrada en consola se debe usar un console.log mas adelante en
//vez de solo llamar la function

//Object literal, nosotros le pasamos los valores
const producto = {
    nombre: `Tablet`,
    precio: 500
};

//Prototype nos permite crear un formateo pero en un solo objeto mas especifico

Producto.prototype.formatearProducto = function (){
    return `El producto ${this.nombre} tiene un precio de ${this.precio}`
}

Cliente.prototype.formatearCliente = function (){
    return `El cliente ${this.nombre} tiene un apellido ${this.apellido}`
}

const objeto = new Producto('Monitor Curvo de 49 pulgadas', 800, true);
const objeto2 = new Producto('Tablet', 500, false);
const objeto3 = new Producto('PC', 2500, true);
const objeto4 = new Producto('Camara', 700, false);
const cliente = new Cliente('Pablo', 'Calvillo');

console.log(objeto);
console.log(objeto2.formatearProducto());
console.log(objeto3.formatearProducto());
console.log(objeto4);
console.log(formatearProducto(objeto));
console.log(cliente);
console.log(formatearProducto(objeto));
console.log(formatearCliente(cliente));
//Clases

class Producto {
    constructor(nombre,precio,disponible){
        this.nombre = nombre
        this.precio = precio
        this.disponible = disponible
    }
    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de $${this.precio}`
    }
    formatearPrecio(){
        return `El precio es ${this.precio}`
    }
}

const producto = new Producto ('Monitor',500,true);

console.log(producto.formatearProducto());
console.log(producto.formatearPrecio());
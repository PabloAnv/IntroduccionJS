//Clases

class Producto {
    constructor(nombre,precio,disponible){
        this.nombre = nombre
        this.precio = precio
        this.disponible = disponible
    }
    //Metodos
    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de $${this.precio}`
    }
    formatearPrecio(){
        return `El precio es ${this.precio}`
    }
    Precio(){
        console.log(this.precio);
    }
}

const producto = new Producto ('Monitor',500,true);


//Herencia 
//La clase libro hereda todas las propiedades de producto y sus funciones

class Libro extends Producto{
    constructor(nombre,precio,isbn){
        super(nombre,precio);
        this.isbn = isbn;
    }
    formatearIsbn(){
        return `${super.formatearProducto()} y su isbn es ${this.isbn}`
    }
    ObtenerPrecio(){
        super.Precio();
        console.log('Y si esta en existencia');
    }
}

//Para instanciar
const libro = new Libro('JavaScript la Revoluacion', 120, '724987324892346');


console.log(libro.ObtenerPrecio());
console.log(producto.formatearProducto());
console.log(producto.formatearPrecio());

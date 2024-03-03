class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precios = precio;
    }
    formatearProducto(){
        return `El nombre del producto es ${this.nombre} y su precio es de ${this.precio}`;
    }
}

class Libro extends Producto{
    constructor(nombre, precio, isnb){
        super(nombre, precio);
        this.isnb = isnb;
    }
    formatearProducto(){
        return `${super.formatearProducto()} y su isnb es ${this.isnb}`;
    }
}

const producto = new Producto("Camisa", 20);
const libro = new Libro("Los tres puerquitos", 20, 2136732987132);

console.log(libro.formatearProducto());


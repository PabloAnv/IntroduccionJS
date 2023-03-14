//Array methods
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
console.table(meses);

const carrito = [
    { nombreProducto: 'Monitor de 20"', precio: 300 },
    { nombreProducto: 'Television de 50"', precio: 700 },
    { nombreProducto: 'Tablet', precio: 300 },
    { nombreProducto: 'Audifonos', precio: 200 },
    { nombreProducto: 'Teclado', precio: 50 },
    { nombreProducto: 'Celular', precio: 500 },
    { nombreProducto: 'Bocinas', precio: 300 },
    { nombreProducto: 'Laptop', precio: 800 }
]

//forEach

meses.forEach(
    function (meses) {
        if (meses == 'Marzo') {
            console.log('Si existe marzo');
        }
        else { }
    }
)

let resultado = meses.includes('Marzo');    //Para saber si hay un valor en especifico en un array
const resultado2 = carrito.includes('Tablet'); //No funciona en arreglos que tengan objetos u otros arreglos adentro de ellos
console.log(resultado);
console.log(resultado2);

//Some ideal para arrays con objetos

resultado = carrito.some(
    function (producto) {
        return producto.nombreProducto === 'Tablet Pro';
    }
)

//Array function
resultado = carrito.some(producto => producto.nombreProducto === 'Tablet Pro')
console.log(resultado);

//Reduce

resultado = carrito.reduce(
    function (total, producto) {
        return total + producto.precio
    }, 0);

    //Reduce con arrow function
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

console.log(resultado);

//Filter

resultado = carrito.filter(
    function(producto){
        return producto.precio > 400;
    }
)

resultado = carrito.filter((producto) => producto.precio > 400);
console.log(resultado);
//Expresion de la funcion con arrow function

let resultado;
const sumar2 = (n1,n2) => console.log (n1 + n2);


//Cuando es una sola variable puedes quitar los parentesis
const aprendiendo = tecnologia => 
console.log(`Aprendiendo ${tecnologia}`);

aprendiendo("JavaScript");
sumar2(5,10);

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
     meses => {
        if (meses == 'Marzo') {
            console.log('Si existe marzo');
        }
        else { }
    }
)

//Some ideal para arrays con objetos

resultado = carrito.some(producto => producto.nombreProducto === 'Tablet Pro')

//Array function
resultado = carrito.some(producto => producto.nombreProducto === 'Tablet Pro')
console.log(resultado);

//Reduce

resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

//Reduce con arrow function
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

console.log(resultado);

//Filter

resultado = carrito.filter((producto)=>producto.precio > 400)

resultado = carrito.filter((producto) => producto.precio > 400);
console.log(resultado);
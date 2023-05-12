//ForEach y map

const carrito = [
    { nombre: "Monitor de 20\"", precio: 500 },
    { nombre: "Television de 50\"", precio: 700 },
    { nombre: "Tablet", precio: 300 },
    { nombre: "Audifonos", precio: 200 },
    { nombre: "Teclado", precio: 200 },
    { nombre: "Celular", precio: 500 },
    { nombre: "Bocinas", precio: 300 },
    { nombre: "Laptop", precio: 800 },
];

//ForEach para enviar elementos solo a la consola o imprimir en html

carrito.forEach(producto => console.log(`${producto.precio}`))
//dentro del parametro de la funcion se le puede colocar nombre al elemento


//map si quieres crear un nuevo arreglo
const nuevoArreglo = carrito.map(producto => `${producto.precio} -- ${producto.nombre}`)

console.log(nuevoArreglo);
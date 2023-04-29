const carrito = [
    { nombreProducto: 'Monitor de 20"', precio: 300 },
    { nombreProducto: 'Television de 50"', precio: 700 },
    { nombreProducto: 'Tablet', precio: 300 },
    { nombreProducto: 'Audifonos', precio: 200 },
    { nombreProducto: 'Teclado', precio: 50 },
    { nombreProducto: 'Celular', precio: 500 },
    { nombreProducto: 'Bocinas', precio: 300 },
    { nombreProducto: 'Laptop', precio: 800 }
];

//For each

// carrito.forEach(function(producto){
//     console.log(producto);
// })

// carrito.forEach( producto => console.log(producto));
const arreglo1 = carrito.forEach( producto => producto.nombreProducto);

//map

// carrito.map( producto => console.log(producto));
// const arreglo2 = carrito.map( producto => producto.nombreProducto);
const arreglo2 = carrito.map( producto => `${producto.nombreProducto} - ${producto.precio}`);


console.log(arreglo1);  //No se muestra y no crea un nuevo arreglo
console.log(arreglo2);  //Se muestra y crea un nuevo arreglo

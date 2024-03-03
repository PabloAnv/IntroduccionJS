//Metodos para arrays o Array Methods

const meses =
    ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Octubre', 'Septiembre', 'Noviembre'];


//Arreglo con objetos
const carrito = [
    { nombre: "Monitor de 20\"", precio: 500 },
    { nombre: "Television de 50\"", precio: 700 },
    { nombre: "Tablet", precio: 300 },
    { nombre: "Audifonos", precio: 200 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Celular", precio: 500 },
    { nombre: "Bocinas", precio: 300 },
    { nombre: "Laptop", precio: 800 },
];

//forEach
meses.forEach(function(mes){
    if(mes === "Julio"){
        console.log(`Si existe ${mes}`);
    }else{
    }
});

//Includes

// const resultado = meses.includes("Abril");
// const resultado2 = carrito.includes("Celular");
// console.log(resultado);
// console.log(resultado2);


//Some para arreglo de objetos

resultado = carrito.some(function(producto){
    return producto.nombre === "Celular"
})

console.log(resultado);


//Reduce es como un forEach pero para numeros y arrays con objetos 

const suma = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0);

console.log(suma);


//Filter o flitro en español

filtro = carrito.filter(function(producto){
    return producto.precio > 400;
});

filtro = carrito.filter(function(producto){
    return producto.nombre !== "Celular";
});

console.log(filtro);
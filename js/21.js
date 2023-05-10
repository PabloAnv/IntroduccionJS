//Arrow functions

const sumar = function (n1, n2) {
    console.log(n1 + n2);
};


//Primer paso: Eliminar el function


// const sumar2 = (n1 , n2){
//     console.log(n1 + n2);
// };


//Segundo paso: colocar un igual y un mayor que despues de los argumentos, hasta este paso ya es un arrow function


const sumar3 = (n1, n2) => {
    console.log(n1 + n2);
};


//Tercer paso(situasional) Cuando solo tiene una sola linea de sentencias dentro de la funcion hay que borrar
//las llaves y pasar arriba la sentencia
//Quinto paso: si se elimino las llaves se debe eliminar el return por que se da por implisito y se borra el punto y coma

const sumar4 = (n1, n2) => console.log(n1 + n2);





//Cuarto paso: cuando hay un solo parametro se puede borrar el parentesis


const aprediendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);


aprediendo("JavaScript");
sumar3(5, 10);
sumar4(15, 100);



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
meses.forEach(mes => {
    if (mes === "Julio") {
        console.log(`Si existe ${mes}`);
    } else {
    }
});

//Some para arreglo de objetos

resultado = carrito.some(producto => producto.nombre === "Celular")

console.log(resultado);


//Reduce es como un forEach pero para numeros y arrays con objetos 

const suma = carrito.reduce((total, producto) => total + producto.precio, 0);

console.log(suma);


//Filter o flitro en español

filtro = carrito.filter(producto => producto.precio > 400);

filtro = carrito.filter(producto => producto.nombre !== "Celular");

console.log(filtro);
//Funciones con return

function sumar(n1, n2){
    return n1 + n2;
}

const resultado = sumar(10,30);

console.log(resultado);


let total = 0;

function agregarCarrito(precio){
    return total + precio;
}

function calcularImpuesto(total){
    return 1.15 * total
}

total = agregarCarrito(100);
total = agregarCarrito(400);
total = agregarCarrito(600);
total = agregarCarrito(300);

const impuesto = calcularImpuesto(total);

console.log(`El total es de $${total} pero mas el impuesto del 15% el total a pagar es de $${impuesto}`);
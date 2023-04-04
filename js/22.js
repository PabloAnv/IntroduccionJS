 function sumar (n1,n2){
     return n1 + n2;
 }

 const variable = sumar (2,3);

 console.log(variable);

let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

function calcularImpuesto(total){
        return 1.15 * total;
}

total = agregarCarrito(500);
total = agregarCarrito(200);

console.log(total);

const totalAPagar = calcularImpuesto(total);
console.log(`El total a pagar copn impuestos es de: $${totalAPagar}`);
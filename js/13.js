//Spread Operator u Operador de dispercion

const producto = {
    nombreProducto: "Monitor de 20\"",
    precio: 300,
    disponible: true
};

const medidas = {
    peso: '1kg',
    medida: '1m'
}


//Junta en un nuevo objeto o variable, la combinacion de uno o mas objetos (Pueden ser arrays tambien)
const nuevoProducto = {...producto, ...medidas};

console.log(nuevoProducto);
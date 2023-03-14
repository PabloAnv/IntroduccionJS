const producto = {
    nombreProducto: 'Monitor de 20"',
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

//Union de objetos
const nuevoProducto = { ...producto, ...medidas };
console.log(nuevoProducto);
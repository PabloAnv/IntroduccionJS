//Declaracion de la funcion

function sumar() {
    console.log(10 + 10);
}

//Llamar la funcion
sumar();

//Exprecion de la funcion
const sumar2 = function () {
    console.log(3 + 3);
}

sumar2();

//IIFE para que se llamen solos y no choquen con otros archivos

(function() {
    console.log('Esto es una funcion');
})();

const objeto = {
    color: 'rojo',
    llantas: 4,
    marca: 'nisan'
}

console.log(objeto);

const objeto2= [true, objeto, 5, 'pablo', ['pablo','pedro']];

console.log(objeto2);

const {color, llantas, marca} = objeto;

console.log(color);

const union = {...objeto, ...objeto2};

console.log(union); 
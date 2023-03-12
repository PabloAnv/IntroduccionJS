//Orden de la operaciones
/*
Parentesis
Multiplicacion y Division
Suma y Resta*/

let resultado;

resultado = (20 + 30) * 2;
resultado = (100 + 200 + 300) * 0.2; //Sacando el 20% de todo
resultado = (100 + 200 + 300) * 1.2; //Sacando el 20% de todo y sumandolo a 600

// console.log(resultado);

//Incrementos

let puntaje = 10;
puntaje++;
++puntaje; //Aqui los dos son relativamente lo mismo por que ninguno de los dos se ha usado

console.log(puntaje++); //Aparece del valor de puntaje y luego incrementa en 1
console.log(++puntaje); //Incrementa primero y luego suma

//Decrementos

puntaje--;

console.log(puntaje);

//Incrementos y Decrementos de mas de 1

puntaje += 5;

console.log(puntaje);

puntaje -= 5;

console.log(puntaje);

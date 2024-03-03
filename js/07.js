//Orden de las operaciones

let resultado;

//Primero la multiplicacion y luego la suma pero dado el parentesis, este mismo se resolvera primero
resultado = (20 + 30) * 2 ;

resultado = (100 + 200 + 300) *1.05;    //Lo que se compro mas el 5 porciento
resultado = (100 + 200 + 300) *0.2;    //Solo el 20 porciento

console.log(resultado);


//Incrementos

let puntaje = 10;
puntaje++;  //Incremento en 1

console.log(puntaje++);     //El incremento no se aplica hasta despues de imprimir en consola   //Imprime 11
console.log(++puntaje);     //El incremento no se aplica hasta antes de imprimir en consola     //Imprime 13

puntaje--;

console.log(puntaje);       //Decrementa en 1   //Imprime 12

puntaje+= 10;   //incrementa en 10

console.log(puntaje);   //Imprime 22
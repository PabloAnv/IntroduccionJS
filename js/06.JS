//Objetos Math
//Window es una ventana global

let resultado;

resultado = Math.PI;
resultado = Math.round(2.5);    //Redondea el numero hacia arriba apartir de .5 y abajo cuando es menor a .5
resultado = Math.ceil(2.3);     //Redondea el numero hacia arriba apartir de cualquier numero decimal
resultado = Math.floor(2.9);    //Redonde el numero hacia abajo apartir de cualquier numero decimal
resultado = Math.sqrt(144);     //Raiz cuadrada
resultado = Math.abs(-200);     //Tranforma un numero negativo a positivo
resultado = Math.min( 1, 3, 4, 10, 9);  //Nos dice cual es el minimo numero
resultado = Math.max( 1, 3, 4, 10, 9);  //Nos dice cual es el maximo numero
resultado = Math.floor(Math.random() * 100);    //Random nos da un numero entre el 0 y el 1 con numero decimales infinitos

console.log(resultado);
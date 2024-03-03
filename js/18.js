//Funciones

//Declaracion de la funcion


function sumar(numero1, numero2){   //Numero 1 y 2 son parametros
    console.log(numero1 + numero2);
};
sumar(10,20);   //10 y 20 son argumentos
sumar(6,3);   
sumar(1);       //Marcara error  (NaN) por no tener los dos argumentos   


//Expresion de la funcion


const sumar2 = function( n1 = 0, n2 = 0){
    console.log(n1 + n2);
};
sumar2(10, 5);
sumar2(1);      //No marcara error(NaN) por que se ha puesto un valor por default


//IIFE se llama asi mismas y sirven para proteger las variables


(function(){
    console.log("Esto es una funcion");
})();
//Funciones

//Declaracion de la funcion


function sumar(numero1, numero2){   //Numero 1 y 2 son parametros
    console.log(numero1 + numero2);
};
sumar(10,20);   //10 y 20 son argumentos

//Expresion de la funcion


const sumar2 = function(){
    console.log(20 * 20);
};
sumar2();


//IIFE se llama asi mismas y sirven para proteger las variables


(function(){
    console.log("Esto es una funcion");
})();
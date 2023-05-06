//Funciones

//Declaracion de la funcion

function sumar(){
    console.log(10 * 10);
};

sumar();


//Expresion de la funcion

const sumar2 = function(){
    console.log(20 * 20);
};

sumar2();


//IIFE se llama asi mismas y sirven para proteger las variables

(function(){
    console.log("Esto es una funcion");
})();
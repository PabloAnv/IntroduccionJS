//Funciones

//Declaracion de la funcion

sumar();
function sumar(){
    console.log(10 * 10);
};


//Expresion de la funcion

sumar2();
const sumar2 = function(){
    console.log(20 * 20);
};


//IIFE se llama asi mismas y sirven para proteger las variables

(function(){
    console.log("Esto es una funcion");
})();

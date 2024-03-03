//For loops

for (let i= 1; i <= 100; i++){
    if( i % 2 === 0){
        console.log(`El numero ${i} es par`);
    }else{
        console.log(`El numero ${i} es impar`);
    }
}


const carrito = [
    { nombre: "Monitor de 20\"", precio: 500 },
    { nombre: "Television de 50\"", precio: 700 },
    { nombre: "Tablet", precio: 300 },
    { nombre: "Audifonos", precio: 200 },
    { nombre: "Teclado", precio: 200 },
    { nombre: "Celular", precio: 500 },
    { nombre: "Bocinas", precio: 300 },
    { nombre: "Laptop", precio: 800 },
];

//I es el indice
for (let i=0; i < carrito.length; i++ ){
    console.log(carrito[i]);
}


//While loop

 let i = 1;          //Indice

 while( i <= 100){     //Condicion

     if( i%2 === 0){
         console.log(`El numero ${i} es par`);
     }else{
         console.log(`El numero ${i} es impar`);
     }
     i++             //Incremento
 }


//Do while loop

let x = 100;    //Indice

do {
    console.log(x);

    x++;    //Incremento
}while(x < 10);     //Condicion
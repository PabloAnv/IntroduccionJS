//Estructuras de control

const puntaje = 1000;


//If con un doble igual es compraracion sencilla pero con un triple igual es una compraracion sumamente estricta
if( puntaje === 1000){
    console.log("Si el puntaje es 1000");

//Else para cuando cualquier otra cosa pase
}else{
    console.log("No es igual");
}

const efectivo = 1000;
const carritoCompra = 800;

if( efectivo > carritoCompra){
    console.log(`Gracias por su compra, paga con ${efectivo} un total de ${carritoCompra}, su cambio es de ${efectivo - carritoCompra}`);
}else{
    console.log(`Lo lamento no tiene suficiente dinero para pagar`)
}


const rol = "ADMINISTRADOR";

if(rol === "ADMINISTRADOR"){
    console.log(`Bienvenido ${rol}`);
}
else if(rol === "TECNICO"){
    console.log(`Bienvenido ${rol}`);
}else{
    console.log(`Acceso no consedido`)
}
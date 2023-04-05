
const puntaje = 100;

if (puntaje !== 1000) {
    console.log("No es igual");
} else {
    console.log("Tienes 1000");
}

const efectivo = 1000;
const carrito = 800;

if (efectivo > carrito) {
    console.log("Se puede pagar");
} else {
    console.log("No se puede pagar");
}

const rol = "ADMINISTRADOR";

if (rol === "ADMINISTRADOR") {
    console.log("Tienes Acceso a todo el sistema");
} else if (rol === "EDITOR") {
    console.log("Tienes acceso a editar");
} else {
    console.log("No tienes acceso");
}
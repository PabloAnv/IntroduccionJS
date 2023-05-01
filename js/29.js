//This

const reservacion = {
    nombre: `Pablo`,
    apellido: `Calvillo`,
    total: 6500,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
}

reservacion.informacion(); //Como llamar una funcion
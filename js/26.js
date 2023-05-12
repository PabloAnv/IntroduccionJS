//this es para señalar que la propiedad del objeto que se busca se encuentra dentro
//aqui no funcionan los arrow functions

const reservacion = {
    nombre: `Pablo Alejandro`,
    apellido: `Calvillo Ortega`,
    pagado: false,
    totalAPagar: 5000,
    informacion: function(){
        console.log(`${this.nombre} ${this.apellido} debe ${this.totalAPagar}`)
    }
};

reservacion.informacion();
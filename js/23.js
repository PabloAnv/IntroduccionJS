
//Metodos de propiedad
const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo cancion con el ID: ${id}`);
    },
    pausar: function(){
        console.log("pausando...");
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la playlist: ${nombre}`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo la playlist: ${nombre}`);
    }
}

reproductor.borrarCancion = function(id){
    console.log(`Borrando cancion: ${id}`);
}



reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist("Heavy Metal");
reproductor.reproducirPlaylist("Heavy Metal");
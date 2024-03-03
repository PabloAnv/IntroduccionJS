//Metodos de propiedad

const reproductorMusical = {
    reproducir: function(id){
        console.log(`Reproduciendo cancion ${id}`);
    },
    pausar: function(id){
        console.log(`Pausando cancion ${id}`);
    },
    borrar: function (id){
        console.log(`Borrando cancion ${id}`);
    },
    crearPlaylist: function(nombre){
        console.log(`Creando Playlist ${nombre}`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo Playlist ${nombre}`);
    }
}

reproductorMusical.reproducir(143872);
reproductorMusical.pausar(5643);
reproductorMusical.borrar(213978231);
reproductorMusical.crearPlaylist("Heavy metal");
reproductorMusical.reproducirPlaylist("Heavy Metal");
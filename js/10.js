//Objetos

const nombreProducto = "Monitor de 20\""
const precio = 300;
const disponible = true;


//El objeto es un conjunto de propiedades atribuidas a una sola variable, en vez de usar muchas, se puede usar solo una
const producto = {
    nombreProducto: "Monitor de 20\"",
    precio: 300,
    disponible: true
};


//Se puede llamar producto y te manda todas sus propiedades
console.log(producto);


//O a una sola de ellas sentenciando que objeto y parte del objeto
console.log(producto.precio);


//Tambien se puede llamar con crochetes
console.log(producto["precio"]);
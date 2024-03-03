async function Obtenerempleados(){

    const archivo = 'empleados.json'
    // fetch(archivo)
    // .then(resultado => resultado.json())
    // .then(objetojson => {
    //    let { empleados } = objetojson;
    //    empleados.forEach(empleado => {
    //     console.log(empleado.nombre)
    //    });
    // })

    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
};

Obtenerempleados();
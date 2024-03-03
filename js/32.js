function descargarNuevosClientes(){
    return new Promise( resolve => {
        console.log('Descargando clientes');

        setTimeout(function(){
            resolve('Tiempo completado');
        }, 5000);

    })}

function Ultimospedidos(){
        return new Promise( resolve => {
            console.log('Descargando... pedidos...');

            setTimeout(function(){
                resolve('Los pedidos fueron descargados');
            }, 3000);
    
        })}

async function app(){
    try {
        // let resultado = await descargarNuevosClientes();
        // console.log(resultado);
        const resultado = await Promise.all([ descargarNuevosClientes(),Ultimospedidos() ])
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app();
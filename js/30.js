//Promises Funcionan igual que en la vida real, puede que no se cumplan, que se cumplan o simplemente nunca sucede

const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = true;
    if (auth) {
        resolve('Usuario autenticado')   //El promise se cumple
    } else {
        reject('No se pudo iniciar sesion')    //El promise no se cumple
    }
});

usuarioAutenticado
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))

console.log(usuarioAutenticado);

//En los promises se ocupan 3 valores
//Pending: Que es pendiente, no se ha rechazado ni se a aceptado
//Fulfilled: Ya se cumplio
//Rejected: Se ha rechazado o no se puede cumplir

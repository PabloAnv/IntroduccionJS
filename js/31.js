//Document se refiere al html que se ha codificado
// querySelector('id') se refiere a los elemntos dentro de html con el id que concuerde
//addEventListener() es un metodo que agrega una posibilidad de eventos
//addEventListener('clic', ) cuando el evento dar "click" suceda se ejecute una funcion
//Notificacion API
const boton = document.querySelector('#boton');
boton.addEventListener('click',function(){
    Notification.requestPermission()
    .then(resultado => console.log(`El resultado es ${resultado}`))
});

if(Notification.permission == "granted"){
    new Notification (`Esta es una notificacion`,{
        icon: 'img/ccj.png',
        body: 'Codigo con Pablo, los mejores tutoriales'
    }
)}
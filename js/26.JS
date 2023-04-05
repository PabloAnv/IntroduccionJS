const metodoPago = 'Efectivo';

switch(metodoPago){
    case 'Tarjeta':
        console.log('Pagaste con tarjeta');
        break;
    case 'Cheque':
        console.log('Pagaste con cheque');
        break;
    case 'Efectivo':
        console.log('Pagaste con efectivo');
        break;
    default:
        console.log('Aun no has pagado');
        break;
}

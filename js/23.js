//Switch

const metodoPago = 'Tarjeta';

switch (metodoPago) {
    case 'Tarjeta':
        console.log('Pagaste con tarjeta');
        break;
    case 'Bitcoin':
        console.log('Pagaste con Bitcoin')
        break;
    case 'Efectivo':
        console.log('Pagaste con Efectivo');
        break;
    default:
        console.log('No has pagado');
        break;
}

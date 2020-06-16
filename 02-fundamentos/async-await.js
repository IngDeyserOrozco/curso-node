/**
 * Async Await
 */

let getNombre = async() => 'Deyser';

let nombre = getNombre()
    .then((nombre) => console.log(nombre))
    .catch(err => console.log('Error de Async', err));


// console.log(getNombre());
// setTimeout(() => console.log('Hola Mundo'), 3000);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Deyser',
        id
    }

    if (id === 20) {
        callback(`El usuario con ID: ${id}, no existe en la BD`)
    } else {
        callback(null, usuario);
    }
}

getUsuarioById(2, (err, usuario) => {

    if (err) {
        return console.log(err);
    }

    console.log(usuario);
});
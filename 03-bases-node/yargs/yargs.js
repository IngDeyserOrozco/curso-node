const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo con la tabla de Multiplicar, si no es ingresado ningun limite será creado con el limite: 10', opts)
    .help()
    .argv;

module.exports = {
    argv
}
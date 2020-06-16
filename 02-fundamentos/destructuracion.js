let deadpool = {
    nombre: 'Wade',
    apellido: 'Wiston',
    poder: 'Regeneracion',
    getNombre: function() {
        return `${ this.nombre }  ${ this.apellido } - Poder: ${ this.poder }`;
    }
}

let { nombre: primerNombre, apellido, poder } = deadpool;

console.log(primerNombre, apellido, poder);
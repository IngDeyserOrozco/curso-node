// function sumar(a, b) {
//     return a + b;
// }

let response = ((a, b) => a + b);

let saludo = (nombre) => `Hola ${ nombre }!!`;

// console.log(saludo('Deyser'));
// console.log(response(2, 2));

let deadpool = {
    nombre: 'Wade',
    apellido: 'Wiston',
    poder: 'Regeneracion',
    getNombre() {
        return `${ this.nombre }  ${ this.apellido } - Poder: ${ this.poder }`;
    }
}

console.log(deadpool.getNombre());
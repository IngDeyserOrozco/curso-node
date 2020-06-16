let empleados = [{
        id: 1,
        nombre: 'Maria'
    },
    {
        id: 2,
        nombre: 'Deyser'
    },
    {
        id: 3,
        nombre: 'Juan'
    }
]


let salarios = [{
        id: 1,
        salario: 1200000
    },
    {
        id: 2,
        salario: 1650000
    }
]

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe ningun empleado con el ID: ${ id }`);
        } else {
            resolve(empleadoDB);
        }

    })
};

let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {
        let salarioEm = salarios.find(salario => salario.id === empleado.id);

        if (!salarioEm) {
            reject(`No se encontró un salario para el Usuario: ${empleado.nombre}`);
        } else {

            empleado = {
                id: empleado.id,
                nombre: empleado.nombre,
                salario: salarioEm.salario
            }
            resolve(empleado);
        }
    });
}

getEmpleado(2)
    .then(empleado => getSalario(empleado))
    .then(empleado => console.log(`El salario de ${empleado.nombre} es de $ ${empleado.salario}`))
    .catch(err => console.log(err));
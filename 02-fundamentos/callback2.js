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

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        callback(`No existe ningun empleado con el ID: ${ id }`);
    } else {
        callback(null, empleadoDB);
    }

}

let getSalario = (empleado, callback) => {

    let salarioEm = salarios.find(salario => salario.id === empleado.id);

    if (!salarioEm) {
        callback(`No se encontró un salario para el Usuario: ${empleado.nombre}`);
    } else {
        callback(null, {
            id: empleado.id,
            nombre: empleado.nombre,
            salario: salarioEm.salario
        });

    }
}


getEmpleado(3, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, resp) => {

        if (err) {
            return console.log(err);
        }

        console.log(`El salario de ${resp.nombre} es de $ ${resp.salario}`);
    });
});
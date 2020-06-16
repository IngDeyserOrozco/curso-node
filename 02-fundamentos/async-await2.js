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

let getEmpleado = async(id) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        throw new Error(`No existe ningun empleado con el ID: ${ id }`);
    } else {
        return empleadoDB;
    }

}; 

let getSalario = (empleado) => {

    let salarioEm = salarios.find(salario => salario.id === empleado.id);

    if (!salarioEm) {
        throw new Error(`No se encontró un salario para el Usuario: ${empleado.nombre}`);
    } else {

        empleado = {
            id: empleado.id,
            nombre: empleado.nombre,
            salario: salarioEm.salario
        }
        return empleado;
    }
}

let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);

    let response = await getSalario(empleado);

    return `El salario de ${response.nombre} es de $ ${response.salario}`;
}

getInformacion(1)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));
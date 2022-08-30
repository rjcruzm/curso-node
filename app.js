const empleados = [
    {
        id: 1,
        nombre: 'Raul',
    },
    {
        id: 2,
        nombre: 'Josue',
    },
    {
        id: 3,
        nombre: 'Hugo',
    },
];

const salarios = [
    {
        id: 1,
        salario: 1000,
    },
    {
        id: 2,
        salario: 2000,
    },
];

const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)?.nombre;
        (empleado)
            ? resolve(empleado)
            : reject('no existe empleado');
    });
}

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(e => e.id === id)?.salario;
        (salario)
            ? resolve(salario)
            : reject('no existe salario');
    });
}

const id = 3;
/* getEmpleado(id)
    .then(empleado => console.log(empleado))
    .catch(error => console.log(error));

getSalario(id)
    .then(salario => console.log(salario))
    .catch(error => console.log(error)); */

/* let nombre;
getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
        return getSalario(id);
    })
    .then(salario => console.log('empleado: ', nombre, 'salario: ', salario))
    .catch(error => console.log(error)); */

const getInfoUsuario = async(id) => {
    try {
        const empleado = await getEmpleado(id)
        const salario = await getSalario(id)
        return `El salario del empleado ${empleado} es ${salario}`;
    } catch (error) {
        throw error;
    }
}

getInfoUsuario(id)
    .then( msg => console.log(msg) )
    .catch( err => console.log(err) );
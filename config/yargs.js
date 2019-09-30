const opcionDescripcion = {
    descripcion: {
        required: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer.'
    }
}

const opcionActualizar = {
    descripcion: {
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer.'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completada o pendiente la tarea.'
    }
}

const argv = require('yargs')
    .command('crear', 'Crear la nueva tarea por hacer.', opcionDescripcion)
    .command('actualizar', 'Actualiza el estado completado de una tarea.', opcionActualizar)
    .command('listar', 'Lista todas las tareas.')
    .command('borrar', 'Borra la tarea indicada.', opcionDescripcion)
    .help()
    .argv;

module.exports = {
    argv
}
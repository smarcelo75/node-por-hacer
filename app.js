const color = require('colors');
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');

const comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log('Se creo la tarea: ', tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('=======Por hacer======='.green);
            console.log('Descripción: ', tarea.descripcion.blue);
            console.log('Completado : ', String(tarea.completado).blue);
            console.log('======================='.green);
        }
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no reconocido');
}
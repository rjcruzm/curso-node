const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 5, listar, hasta ) => {
    try {
        let salida = '';
        let consola = '';

        for (let x = 1; x <= hasta ; x++) {
            salida += `${base} x ${x} = ${base * x}\n`;
            consola += `${base} ${'x'.green} ${x} ${'='.green} ${base * x}\n`;
        }

        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida,);
        if (listar) {
            console.log('========================'.green);
            console.log('   Tabla del:'.green, colors.blue(base));
            console.log('========================'.green);
            console.log( consola );
        }
        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
    
}

module.exports = {
    crearArchivo
}
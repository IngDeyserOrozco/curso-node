// // Requireds
const fs = require('fs');
var colors = require('colors');


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`Lo ingresado ${ base }, no es un Número`);
            return;
        }
        let data = '';

        for (let i = 0; i <= limite; i++) {
            data += `${ base } * ${i} = ${ base * i } \n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`tabla-${base}-al-${limite}.txt`.green);
            }
        });
    })
};

let listarTabla = (base, limite = 10) => {

    console.log("====================".green);
    console.log(`==Tabla del ${base} al ${limite}==`.green);
    console.log("====================".green);




    if (!Number(base) && !Number(limite)) {
        console.log('Error!!!, Valor(es) Ingresados no son validos');
    } else {
        let data = `Tabla de Multiplicar del ${ base }, hasta el limite ${ limite } \n \n`;

        for (let i = 0; i <= limite; i++) {
            data += `${ base } * ${ i }: ${ base * i }\n`
        }

        console.log(data);
    }

}

module.exports = {
    crearArchivo,
    listarTabla
}
import { faker } from '@faker-js/faker/locale/es_MX';

const generaProducto = () => {
    const producto = {
        id: faker.number.int({min:100,max:200}),
        nombre: faker.commerce.product(),
        descripcion: faker.commerce.productDescription(),
        precioLabel: faker.number.int({min:100,max:200}).toLocaleString('es-MX', { style: 'currency', currency: 'MXN' }),
        precio: faker.number.int({min:100,max:200})
    }
    return producto;
}

const generaProductos = () => {
    const arrProductos = [];
    const numerosIds = generaArrNumerico();
    
    for (let index = 0; index < numerosIds.length; index++) {
        const producto = {
            id: numerosIds[index],
            nombre: faker.commerce.product(),
            descripcion: faker.commerce.productDescription(),
            precio: faker.number.int({min:100,max:200})
        }
        arrProductos.push(producto);
    }

    return arrProductos;
}

const generaArrNumerico = () => {
    let numeros = [];
    //Se llena un arreglo de núemros
    for (let index = 0; index < 9; index++) {
        const numero = faker.number.int({min:100,max:200});
        numeros.push(numero);
    }
    //Se quitan duplicados con filter
    let resultado = numeros.filter((item,index)=>{
        return numeros.indexOf(item) === index;
    });
    return resultado;
}

const generaCarroItemsVacio = () => {
    const carroItemsVacio = [
        /* {
            producto: {
                id: faker.number.int({min:100,max:200}),
                nombre: faker.commerce.product(),
                descripcion: faker.commerce.productDescription(),
                precio: faker.number.int({min:100,max:200})
            },
            cantidad: 0,
            total: 0
        } */
    ];
    return carroItemsVacio;
}

export {
    generaProducto,
    generaProductos,
    generaCarroItemsVacio
}
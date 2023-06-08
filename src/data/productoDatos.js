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
    for (let index = 0; index < 10; index++) {
        //const element = array[index];
        const producto = {
            id: faker.number.int({min:100,max:200}),
            nombre: faker.commerce.product(),
            descripcion: faker.commerce.productDescription(),
            //precioLabel: faker.number.int({min:100,max:200}).toLocaleString('es-MX', { style: 'currency', currency: 'MXN' }),
            precio: faker.number.int({min:100,max:200})
        }
        arrProductos.push(producto);
    }
    return arrProductos;
}

export {
    generaProducto,
    generaProductos
}
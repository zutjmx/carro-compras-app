import { faker } from '@faker-js/faker/locale/es_MX';

const generaProducto = () => {
    const producto = {
        id: faker.number.int({min:100,max:200}),
        nombre: faker.commerce.product(),
        descripcion: faker.commerce.productDescription(),
        precio: faker.number.int({min:100,max:200}).toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })
    }
    return producto;
}

export {
    generaProducto
}
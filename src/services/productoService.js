import { generaProducto, generaProductos } from '../data/productoDatos';

export const getProducto = () => {
    return generaProducto();
}

export const getProductos = () => {
    const productos = generaProductos();
    console.log('Productos: ', productos);
    return productos;
}

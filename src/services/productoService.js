import { generaProducto, /* generaProductos, */ generaCarroItemsVacio } from '../data/productoDatos';

export const getProducto = () => {
    return generaProducto();
}

export const getProductos = async () => {
    //const productos = generaProductos();
    //const url = 'http://localhost:8080/api/v1/productos'; //loaclhost
    const url = 'http://192.168.1.136:8080/api/v1/productos'; //remoto
    const respuesta = await fetch(url);
    const productos = await respuesta.json();
    return productos;
}

export const getCarroItemsvacio = () => {
    return generaCarroItemsVacio();
}

export const getCarro = () => {
    return JSON.parse(sessionStorage.getItem('miCarro')) || [];
}

export const calcularTotal = (items) => {
    return items.reduce((acumulador, item) => acumulador + (item.producto.precio*item.cantidad), 0);
}

export const formateaNumeroMoneda = (numero) => {
    return numero.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
}
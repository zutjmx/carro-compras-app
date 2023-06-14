import { getCarro } from '../services/productoService';
import Swal from 'sweetalert2';
import { ActualizarCantidadProductoCarro, AdicionarProductoCarro, BorrarProductoCarro } from '../reducer/itemsActions';
import { useEffect, useReducer } from 'react';
import { itemsReducer } from '../reducer/itemsReducer';

export const useItemsCarro = () => {
    
    const [carroItems, dispatch] = useReducer(itemsReducer, getCarro());

    useEffect(() => {
      sessionStorage.setItem('miCarro', JSON.stringify(carroItems));
    }, [carroItems]);
  
    const handlerAdicionarProductoCarro = (producto) => {
      const existeItem = carroItems.find((i) => i.producto.id === producto.id);
      let seAgrego = false;
      let mensaje = '';
      
      if(existeItem) {
        seAgrego = false;
        dispatch(
          {
            type: ActualizarCantidadProductoCarro,
            payload: producto
          }
        );
      } else {
        seAgrego = true;        
        dispatch(
          {
            type: AdicionarProductoCarro,
            payload: producto
          }
        );
      }
      if (seAgrego) {
        mensaje = 'Se agregó el producto en el carrito';
      } else {
        mensaje = 'Se actualizó la cantidad del producto en el carrito';
      }
      Swal.fire('Selección de productos', mensaje, 'success');
    }
  
    const handlerBorrarProductoCarro = (id) => {
      Swal.fire({
        title: `¿Desea eliminar el producto con ID: ${id}?`,
        showDenyButton: true,
        confirmButtonText: 'Borrar',
        denyButtonText: `No Borrar`,
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(
            {
              type: BorrarProductoCarro,
              payload: id
            }
          );
          Swal.fire('Borrado', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('No se borró', '', 'info')
        }
      })
    }

    return {
        carroItems, 
        handlerAdicionarProductoCarro, 
        handlerBorrarProductoCarro
    }
}

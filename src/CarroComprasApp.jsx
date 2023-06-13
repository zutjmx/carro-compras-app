import { VistaProductosCat } from './components/VistaProductosCat';
import { VistaCarro } from './components/VistaCarro';
import { getCarro } from './services/productoService';
import Swal from 'sweetalert2'
import { useReducer } from 'react';
import { itemsReducer } from './reducer/itemsReducer';

const CarroComprasApp = () => {

  const [carroItems, dispatch] = useReducer(itemsReducer, getCarro());

  const handlerAdicionarProductoCarro = (producto) => {
    const existeItem = carroItems.find((i) => i.producto.id === producto.id);
    
    if(existeItem) {
      dispatch(
        {
          type: 'ActualizarCantidadProductoCarro',
          payload: producto
        }
      );
    } else {
      dispatch(
        {
          type: 'AdicionarProductoCarro',
          payload: producto
        }
      );
    }
    
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
            type: 'BorrarProductoCarro',
            payload: id
          }
        );
        Swal.fire('Borrado', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('No se borró', '', 'info')
      }
    })
  }

  return (
    <>
      <div className="card my-3 mx-2">
        <img src="/carrito-small.png" className="img-thumbnail" alt="..." width="90px" height="120px"/>
        <div className="card-header">Carro de Compras</div>
        <div className="card-body">
          <h5 className="card-title">App de Carro de Compras</h5>
          <p className="card-text">
            App de Carro de Compras construido en React.
          </p>          
          <VistaProductosCat handler={handlerAdicionarProductoCarro}/>          
        </div>
        {carroItems?.length <= 0 ||
          (
            <div className="card my-3 mx-2 w-50">
              <VistaCarro items={carroItems} handlerBorrar={handlerBorrarProductoCarro}/>
            </div>
          ) 
        }
      </div>
    </>
  );
};

export { CarroComprasApp };

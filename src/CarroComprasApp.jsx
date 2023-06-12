import { VistaProductosCat } from './components/VistaProductosCat';
import { VistaCarro } from './components/VistaCarro';
import { getCarroItemsvacio } from './services/productoService';
import { useState } from 'react';
import Swal from 'sweetalert2'

const CarroComprasApp = () => {

  const [carroItems,setCarroItems] = useState(getCarroItemsvacio());

  const handlerAdicionarProductoCarro = (producto) => {
    const existeItem = carroItems.find((i) => i.producto.id === producto.id);
    
    if(existeItem) {
      //Usando filter
      /* setCarroItems([
        ...carroItems.filter((i) => i.producto.id !== producto.id),
        {
          producto,
          cantidad: existeItem.cantidad + 1,
        }
      ]); */
      //Usando map
      setCarroItems(
        carroItems.map((i) => {
          if(i.producto.id === producto.id) {
            i.cantidad = i.cantidad +1;
          }
          return i;
        })
      );
    } else {
      setCarroItems([
        ...carroItems, 
        {
          producto,
          cantidad: 1,
          //total: producto.precio * 1
        }
      ]);
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
        setCarroItems([
          ...carroItems.filter((i) => i.producto.id !== id)
        ]);
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

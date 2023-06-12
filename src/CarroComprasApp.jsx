import { VistaProductosCat } from './components/VistaProductosCat';
import { VistaCarro } from './components/VistaCarro';
import { getCarroItemsvacio } from './services/productoService';
import { useState } from 'react';

const CarroComprasApp = () => {

  const [carroItems,setCarroItems] = useState(getCarroItemsvacio());

  const handlerAdicionarProductoCarro = (producto) => {
    setCarroItems([
      ...carroItems, 
      {
        producto,
        cantidad: 1,
        total: producto.precio * 1
      }
    ]);
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
        <div className="card my-3 mx-2 w-50">
          <VistaCarro items={carroItems}/>
        </div>
      </div>
    </>
  );
};

export { CarroComprasApp };

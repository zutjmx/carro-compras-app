import { VistaProductosCat } from './components/VistaProductosCat';
import { VistaCarro } from './components/VistaCarro';
import { useItemsCarro } from './hooks/useItemsCarro';
import { Navigate, Route, Routes } from 'react-router-dom';

const CarroComprasApp = () => {
  const {carroItems, handlerAdicionarProductoCarro, handlerBorrarProductoCarro} = useItemsCarro();

  return (
    <>
      <div className="card my-3 mx-2">
        <img src="/carrito-small.png" className="img-thumbnail" alt="..." width="90px" height="120px"/>
        <div className="card-header">Bienvenido al Carro de Compras App</div>
        <Routes>
          <Route path='catalogo' 
                 element={(
                  <div className="card-body">
                    <h5 className="card-title">Catálogo de Productos</h5>
                    <p className="card-text">
                      Elija sus productos.
                    </p>          
                    <VistaProductosCat handler={handlerAdicionarProductoCarro}/>          
                  </div>
                 )} 
          />
          <Route path='carro' 
                 element={(
                  carroItems?.length <= 0?
                  <div className="alert alert-warning">Tu carrito está vacío</div>
                  :
                    (
                      <div className="card my-3 mx-2 w-50">
                        <VistaCarro items={carroItems} handlerBorrar={handlerBorrarProductoCarro}/>
                      </div>
                    )
                 )} 
          />
          <Route path='/' element={<Navigate to={'/catalogo'} />}/>
        </Routes>
        

      </div>
    </>
  );
};

export { CarroComprasApp };

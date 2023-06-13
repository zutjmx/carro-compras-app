import { VistaProductosCat } from './components/VistaProductosCat';
import { VistaCarro } from './components/VistaCarro';
import { useItemsCarro } from './hooks/useItemsCarro';
import { Navbar } from './components/Navbar';
import { Navigate, Route, Routes } from 'react-router-dom';

const CarroComprasApp = () => {
  const {carroItems, handlerAdicionarProductoCarro, handlerBorrarProductoCarro} = useItemsCarro();

  return (
    <>
      <Navbar/>
      <div className="container my-4">
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
                    <div className="alert alert-warning my-3 mx-2">Tu carrito está vacío</div>
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
      </div>
    </>
  );
};

export { CarroComprasApp };

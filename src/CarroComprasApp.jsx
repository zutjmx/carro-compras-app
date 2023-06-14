import { useItemsCarro } from './hooks/useItemsCarro';
import { Navbar } from './components/Navbar';
import { RutasCarroCompras } from './routes/RutasCarroCompras';

const CarroComprasApp = () => {
  const {carroItems, handlerAdicionarProductoCarro, handlerBorrarProductoCarro} = useItemsCarro();

  return (
    <>
      <Navbar/>
      <div className="container my-4">
        <div className="card my-3 mx-2">
          <img src="/carrito-small.png" className="img-thumbnail" alt="..." width="90px" height="120px"/>
          <div className="card-header">Bienvenido al Carro de Compras App</div>
          <RutasCarroCompras carroItems={carroItems} 
                             handlerAdicionarProductoCarro={handlerAdicionarProductoCarro}
                             handlerBorrarProductoCarro={handlerBorrarProductoCarro}
          />
        </div>
      </div>
    </>
  );
};

export { CarroComprasApp };

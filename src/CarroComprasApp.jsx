import { getProducto } from "./services/productoService";

const CarroComprasApp = () => {
  const producto = getProducto();

  return (
    <>
      <div className="card my-3">
        {/* <img src="/carrito-de-supermercado.png" className="card-img-top" alt="..." width="200px" height="300px"/> */}
        <div className="card-header">Carro de Compras</div>
        <div className="card-body">
          <h5 className="card-title">App de Carro de Compras</h5>
          <p className="card-text">
            App de Carro de Compras construido en React.
          </p>
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header">{producto.nombre}</div>
                <div className="card-body">
                  <h5 className="card-title">{producto.descripcion}</h5>
                  <p className="card-text">{producto.precio}</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-header">{producto.nombre}</div>
                <div className="card-body">
                  <h5 className="card-title">{producto.descripcion}</h5>
                  <p className="card-text">{producto.precio}</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-header">{producto.nombre}</div>
                <div className="card-body">
                  <h5 className="card-title">{producto.descripcion}</h5>
                  <p className="card-text">{producto.precio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { CarroComprasApp };

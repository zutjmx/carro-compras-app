import { getProducto } from "./services/productoService";

const CarroComprasApp = () => {
  const productoUno = getProducto();
  const productoDos = getProducto();
  const productoTres = getProducto();
  const productoCuatro = getProducto();
  const productoCinco = getProducto();
  const productoSeis = getProducto();

  return (
    <>
      <div className="card my-3 mx-2">
        {/* <img src="/carrito-de-supermercado.png" className="card-img-top" alt="..." width="200px" height="300px"/> */}
        <div className="card-header">Carro de Compras</div>
        <div className="card-body">
          <h5 className="card-title">App de Carro de Compras</h5>
          <p className="card-text">
            App de Carro de Compras construido en React.
          </p>
          <div className="row">
            <div className="col-4 my-2">
              <div className="card">
                <div className="card-header">{productoUno.nombre}</div>
                <div className="card-body">
                  <h5 className="card-title">{productoUno.descripcion}</h5>
                  <p className="card-text">{productoUno.precioLabel}</p>
                  <button className="btn btn-primary">Agregar</button>
                </div>
              </div>
            </div>
            <div className="col-4 my-2">
              <div className="card">
                <div className="card-header">{productoDos.nombre}</div>
                <div className="card-body">
                  <h5 className="card-title">{productoDos.descripcion}</h5>
                  <p className="card-text">{productoDos.precioLabel}</p>
                  <button className="btn btn-primary">Agregar</button>
                </div>
              </div>
            </div>
            <div className="col-4 my-2">
              <div className="card">
                <div className="card-header">{productoTres.nombre}</div>
                <div className="card-body">
                  <h5 className="card-title">{productoTres.descripcion}</h5>
                  <p className="card-text">{productoTres.precioLabel}</p>
                  <button className="btn btn-primary">Agregar</button>
                </div>
              </div>
            </div>
            <div className="col-4 my-2">
              <div className="card">
                <div className="card-header">{productoCuatro.nombre}</div>
                <div className="card-body">
                  <h5 className="card-title">{productoCuatro.descripcion}</h5>
                  <p className="card-text">{productoCuatro.precioLabel}</p>
                  <button className="btn btn-primary">Agregar</button>
                </div>
              </div>
            </div>
            <div className="col-4 my-2">
              <div className="card">
                <div className="card-header">{productoCinco.nombre}</div>
                <div className="card-body">
                  <h5 className="card-title">{productoCinco.descripcion}</h5>
                  <p className="card-text">{productoCinco.precioLabel}</p>
                  <button className="btn btn-primary">Agregar</button>
                </div>
              </div>
            </div>
            <div className="col-4 my-2">
              <div className="card">
                <div className="card-header">{productoSeis.nombre}</div>
                <div className="card-body">
                  <h5 className="card-title">{productoSeis.descripcion}</h5>
                  <p className="card-text">{productoSeis.precioLabel}</p>
                  <button className="btn btn-primary">Agregar</button>
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

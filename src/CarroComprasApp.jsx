import { getProducto, getProductos } from "./services/productoService";
import { VistaCatProductos } from './components/VistaCatProductos';

const CarroComprasApp = () => {
  const productoUno = getProducto();
  const productoDos = getProducto();
  const productoTres = getProducto();
  // const productoCuatro = getProducto();
  // const productoCinco = getProducto();
  // const productoSeis = getProducto();
   const productos = getProductos();

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
          <div className="row">
            {productos.map(({id,nombre,descripcion,precio}) => {
              return (
                <VistaCatProductos key={id} 
                                   id={id}
                                   nombre={nombre}
                                   descripcion={descripcion}
                                   precio={precio}
                /> 
              );
            })}
          </div>
        </div>
        <div className="card my-3 mx-2 w-50">
          <div className="card-header"><strong>Drive Mi Carro</strong></div>
          <div className="card-body">
            <h5 className="card-title">Productos Seleccionados</h5>
            <table className="table table-info table-striped table-hover">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{productoUno.nombre}</td>
                  <td>{productoUno.precioLabel}</td>
                  <td>2</td>
                  <td>3</td>
                  <td><button className="btn btn-danger">Eliminar</button></td>
                </tr>
                <tr>
                  <td>{productoDos.nombre}</td>
                  <td>{productoDos.precioLabel}</td>
                  <td>2</td>
                  <td>3</td>
                  <td><button className="btn btn-danger">Eliminar</button></td>
                </tr>
                <tr>
                  <td>{productoTres.nombre}</td>
                  <td>{productoTres.precioLabel}</td>
                  <td>2</td>
                  <td>3</td>
                  <td><button className="btn btn-danger">Eliminar</button></td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={3} align="center" className="fw-bold"><strong>Total</strong></td>
                  <td colSpan={2} align="left" className="fst-italic">1200</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export { CarroComprasApp };

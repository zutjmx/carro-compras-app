import { getProducto } from '../services/productoService';

export const VistaCarro = () => {
  const productoUno = getProducto();
  const productoDos = getProducto();
  const productoTres = getProducto();

  return (
    <>
      <div className="card-header">
        <strong>Drive Mi Carro</strong>
      </div>
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
              <td>
                <button className="btn btn-danger">Eliminar</button>
              </td>
            </tr>
            <tr>
              <td>{productoDos.nombre}</td>
              <td>{productoDos.precioLabel}</td>
              <td>2</td>
              <td>3</td>
              <td>
                <button className="btn btn-danger">Eliminar</button>
              </td>
            </tr>
            <tr>
              <td>{productoTres.nombre}</td>
              <td>{productoTres.precioLabel}</td>
              <td>2</td>
              <td>3</td>
              <td>
                <button className="btn btn-danger">Eliminar</button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3} align="center" className="fw-bold">
                <strong>Total</strong>
              </td>
              <td colSpan={2} align="left" className="fst-italic">
                1200
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}

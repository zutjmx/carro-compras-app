import PropTypes from 'prop-types';

export const VistaCarro = ({items}) => {

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
            {items.map(item => (
              <tr key={item.producto.id}>
                <td>{item.producto.nombre}</td>
                <td>{item.producto.precio}</td>
                <td>{item.cantidad}</td>
                <td>{item.producto.precio * item.cantidad}</td>
                <td>
                  <button className="btn btn-danger">Eliminar</button>
                </td>
              </tr>
            ))}
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

VistaCarro.propTypes = {
  items: PropTypes.array.isRequired
}
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { calcularTotal, formateaNumeroMoneda } from '../services/productoService';

export const VistaCarro = ({handlerBorrar, items}) => {

  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setTotal(calcularTotal(items));
  }, [items]);

  const onBorrarProducto = (id) => {
    handlerBorrar(id);
  }

  const onCatalogo = () => {
    navigate('/catalogo');
  }

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
                <td>{formateaNumeroMoneda(item.producto.precio)}</td>
                <td>{item.cantidad}</td>
                <td>{formateaNumeroMoneda(item.producto.precio * item.cantidad)}</td>
                <td>
                  <button className="btn btn-danger" 
                          onClick={() => onBorrarProducto(item.producto.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3} align="center" className="fw-bold">
                <strong>Total:</strong>
              </td>
              <td colSpan={2} align="left" className="fst-italic">
                {formateaNumeroMoneda(total)}
              </td>
            </tr>
          </tfoot>
        </table>
        <button className="btn btn-primary" onClick={onCatalogo}>
          Seguir Comprando
        </button>
      </div>
    </>
  );
}

VistaCarro.propTypes = {
  items: PropTypes.array.isRequired,
  handlerBorrar: PropTypes.any.isRequired
}
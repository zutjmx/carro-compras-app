import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { formateaNumeroMoneda } from '../services/productoService';

export const VistaProductosCatItem = ({handler,id,nombre,descripcion,precio}) => {
  const navigate = useNavigate();
  const onAdicionarProducto = (producto) => {
    handler(producto);
    navigate('/carro');
  }

  return (
    <>
      <div className="card">
        <div className="card-header">
          {id} - {nombre}
        </div>
        <div className="card-body">
          <h5 className="card-title">{descripcion}</h5>
          <p className="card-text">{formateaNumeroMoneda(precio)}</p>
          <button className="btn btn-primary" 
                  onClick={() => onAdicionarProducto({id,nombre,descripcion,precio})}
          >
            Agregar
          </button>
        </div>
      </div>
    </>
  );
};

VistaProductosCatItem.propTypes = {
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    handler: PropTypes.any.isRequired
}
import { useEffect, useState } from "react";
import { getProductos } from "../services/productoService";
import { VistaProductosCatItem } from './VistaProductosCatItem';
import PropTypes from 'prop-types';

export const VistaProductosCat = ({handler}) => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const findAll = async () => {
    const productosBE = await getProductos();
    setProductos(productosBE);
    setIsLoading(false);
  }

  useEffect(() => {
    findAll();
  }, []);

  return (
    <>
      {isLoading && <div className="alert aler-info">Cargando ...</div>}
      <div className="row">
        {productos.map((p) => (
          <div className="col-4 my-2" key={p.id}>
            <VistaProductosCatItem id={p.id} 
                                  nombre={p.nombre}
                                  descripcion={p.descripcion}
                                  precio={p.precio}
                                  handler={handler}
            />
          </div>
        ))}
      </div>
    </>
  );
};

VistaProductosCat.propTypes = {
  handler: PropTypes.any.isRequired
}
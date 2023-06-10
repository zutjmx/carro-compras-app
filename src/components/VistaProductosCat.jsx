import { useEffect, useState } from "react";
import { getProductos } from "../services/productoService";
import { VistaProductosCatItem } from './VistaProductosCatItem';

export const VistaProductosCat = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    setProductos(getProductos());
  }, []);
  return (
    <>
      <div className="row">
        {productos.map((p) => (
          <div className="col-4 my-2" key={p.id}>
            <VistaProductosCatItem id={p.id} 
                                  nombre={p.nombre}
                                  descripcion={p.descripcion}
                                  precio={p.precio}
            />
          </div>
        ))}
      </div>
    </>
  );
};

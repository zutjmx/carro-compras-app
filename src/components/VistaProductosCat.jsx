import { useEffect, useState } from "react";
import { getProductos } from "../services/productoService";

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
            <div className="card">
              <div className="card-header">
                {p.id} - {p.nombre}
              </div>
              <div className="card-body">
                <h5 className="card-title">{p.descripcion}</h5>
                <p className="card-text">{p.precio}</p>
                <button className="btn btn-primary">Agregar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

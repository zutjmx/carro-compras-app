import { Navigate, Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';
import { VistaCarro } from '../components/VistaCarro';
import { VistaProductosCat } from '../components/VistaProductosCat';

export const RutasCarroCompras = ({carroItems, handlerAdicionarProductoCarro, handlerBorrarProductoCarro}) => {
    
    return (
        <>
            <Routes>
                <Route path='catalogo'
                    element={(
                        <div className="card-body">
                            <h5 className="card-title">Catálogo de Productos</h5>
                            <p className="card-text">
                                Elija sus productos.
                            </p>
                            <VistaProductosCat handler={handlerAdicionarProductoCarro} />
                        </div>
                    )}
                />
                <Route path='carro'
                    element={(
                        carroItems?.length <= 0 ?
                            <div className="alert alert-warning my-3 mx-2">Tu carrito está vacío</div>
                            :
                            (
                                <div className="card my-3 mx-2 w-50">
                                    <VistaCarro items={carroItems} handlerBorrar={handlerBorrarProductoCarro} />
                                </div>
                            )
                    )}
                />
                <Route path='/' element={<Navigate to={'/catalogo'} />} />
            </Routes>
        </>
    );
}

RutasCarroCompras.propTypes = {
    carroItems: PropTypes.array.isRequired,
    handlerAdicionarProductoCarro: PropTypes.any.isRequired,
    handlerBorrarProductoCarro: PropTypes.any.isRequired
}
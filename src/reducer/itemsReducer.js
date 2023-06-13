import { AdicionarProductoCarro, 
  ActualizarCantidadProductoCarro, 
  BorrarProductoCarro } from './itemsActions';

export const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case AdicionarProductoCarro:
      return [
        ...state,
        {
          producto: action.payload,
          cantidad: 1,
        },
      ];
    case ActualizarCantidadProductoCarro:
      return state.map((i) => {
        if(i.producto.id === action.payload.id) {
          return {
            ...i,
            cantidad: i.cantidad + 1,
          };
        }
        return i;
      });
    case BorrarProductoCarro:
      return state.filter((i) => i.producto.id !== action.payload);
    default:
      return state;
  }
}

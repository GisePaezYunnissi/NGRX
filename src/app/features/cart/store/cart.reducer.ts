//Funciona como un gran switch
import { createReducer, on } from "@ngrx/store";
import { CartState } from "./cart-store.model";
import { cartAddItem, cartClear, cartDeleteItem } from "./cart.actions";

//Estado original
export const cartInitialState: CartState = {items: [] };

//Tomando el valor inicial ya puedo crear un reducer
export const _cartReducer = createReducer(
  cartInitialState,
  //Acciones, tantas como necesite después del ON
  on(cartAddItem, (state, {item}) => {
    const items = [...state.items];
    items.push(item);

    return {
      //Le doy el valor que tenía antes el estado
      ...state,
      items
    };//Le asigno lo que me viene en la acción
  }),

on(cartDeleteItem, (state, { itemId }) => {
  const items = [...state.items];
  const itemIndex = items.findIndex(cartItem => cartItem.id === itemId );
  items.splice(itemIndex, 1);

  return {
    ...state,
    items
  };
}),

on(cartClear, (state) => {
    return {
      ...state,
      items: []
    };
  }),
);

export function cartReducer (state: any, action: any){
  //El estado y la acción que necesita ser procesada
  return _cartReducer(state, action);
}

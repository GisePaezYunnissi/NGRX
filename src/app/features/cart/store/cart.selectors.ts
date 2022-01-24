import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartState } from "./cart-store.model";

export const cartStateSelector = createFeatureSelector<CartState>('cart');
//Utilizamos el mismo featureName en el modulo de cart

export const cartItemsSelector = createSelector(
  cartStateSelector,
  (state: CartState) => state.items
);

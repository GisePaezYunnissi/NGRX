//Funciona como un gran switch
import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { Action } from "rxjs/internal/scheduler/Action";
import { AppState } from "./app-state.model";
import { AppSetTitle } from "./app.actions";

//Estado original
export const appInitialState: AppState = {title: 'Redux App (from state'};

//Tomando el valor inicial ya puedo crear un reducer
export const _appReducer = createReducer(
  appInitialState,
  //Acciones, tantas como necesite después del ON
  on(AppSetTitle, (state, {title}) => {
    return {
      //Le doy el valor que tenía antes el estado
      ...state,
      title: title
    };//Le asigno lo que me viene en la acción
  })
);

export function appReducer (state: any, action: any){
  //El estado y la acción que necesita ser procesada
  return _appReducer(state, action);
}

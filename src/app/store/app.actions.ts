//Son las acciones que va a tener la aplicación
import { createAction, props } from '@ngrx/store';

export const AppSetTitle = createAction(
  'Application Set Title',
  props<{ title: string}>()
);

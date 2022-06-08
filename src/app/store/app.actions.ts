import { createAction, props } from '@ngrx/store';
import { Beer } from '../interfaces/punk-beer-interface';

export const loadBeers = createAction('[App] Load Beers Data');
export const loadBeersSuccess = createAction(
  '[App] Load Beers Success',
  props<{ data: Beer[] }>()
);
export const loadBeersFail = createAction(
  '[App] Load Beers Fail',
  props<{ error: Error }>()
);

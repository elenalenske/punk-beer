import { createReducer, on } from '@ngrx/store';
import { Beer } from '../interfaces/punk-beer-interface';
import * as AppActions from './app.actions';

export interface State {
  beers: Beer[];
}

export const initialState: State = {
  beers: [],
};

export const reducer = createReducer(
  initialState,
  on(AppActions.loadBeersSuccess, (state, { data }) => ({
    ...state,
    beers: data,
  })),
  on(AppActions.loadBeersFail, (state) => ({
    ...state,
    beers: [],
  }))
);

import { Injectable } from '@angular/core';
import {
  createFeatureSelector,
  createSelector,
  select,
  Store,
} from '@ngrx/store';
import { Observable } from 'rxjs';
import { Beer } from '../interfaces/punk-beer-interface';
import * as fromFeature from './app.reducer';

export const selectApp = createFeatureSelector<fromFeature.State>('app');

export const selectBeers = createSelector(
  selectApp,
  (state) => state.beers
);

@Injectable()
export class AppSelectors {
  constructor(private readonly store: Store<fromFeature.State>) {}

  selectBeers(): Observable<Beer[]> {
    return this.store.pipe(select(selectBeers));
  }
}

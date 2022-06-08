import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AppActions from './app.actions';

@Injectable()
export class AppActionsService {
  constructor(private readonly store: Store) {}

  getBeers(): void {
    this.store.dispatch(AppActions.loadBeers());
  }
}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { PunkBeerService } from '../services/punk-beer.service';
import * as AppActions from './app.actions';

@Injectable()
export class AppEffects {
  loadBeers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.loadBeers),
      concatMap(() =>
        this.punkBeerService.fetchBeers().pipe(
          map((data) => AppActions.loadBeersSuccess({ data })),
          catchError((error) => of(AppActions.loadBeersFail({ error })))
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly punkBeerService: PunkBeerService
  ) {}
}

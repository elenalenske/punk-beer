import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from '../interfaces/punk-beer-interface';

@Injectable({
  providedIn: 'root',
})
export class PunkBeerService {
  constructor(private http: HttpClient) {}

  fetchBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>(
      `https://api.punkapi.com/v2/beers`
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppActionsService } from './store/app-actions.service';
import * as fromFeature from './store';
import { environment } from '../environments/environment.staging';
import { Beer } from './interfaces/punk-beer-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  beers$: Observable<Beer[]>;

  version!: string; // Our version

  constructor(
    private readonly storeService: AppActionsService,
    private readonly selectors: fromFeature.AppSelectors
  ) {
    this.beers$ = this.selectors.selectBeers();
  }

  ngOnInit() {
    this.storeService.getBeers();

    this.version = environment.version; // Consume the version number from environment
  }
}

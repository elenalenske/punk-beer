import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Beer } from 'src/app/interfaces/punk-beer-interface';
import { PunkBeerService } from './../../services/punk-beer.service';

@Component({
  selector: 'app-beer-accordion',
  templateUrl: './beer-accordion.component.html',
  styleUrls: ['./beer-accordion.component.scss']
})
export class BeerAccordionComponent implements OnInit, OnDestroy {
  @Input() beers: Beer[] = [];

  allBeersSub!: Subscription;

  constructor(private readonly punkBeerService: PunkBeerService) { }

  ngOnInit(): void {
    this.allBeersSub = this.punkBeerService.fetchBeers().subscribe((beer) => {
      //
    },
    (error) => {
      this.beers = [];
    })
  }

  ngOnDestroy() {
    this.allBeersSub.unsubscribe();
  }
}

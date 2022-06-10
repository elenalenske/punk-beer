import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Beer } from 'src/app/interfaces/punk-beer-interface';

@Component({
  selector: 'app-beer-cta',
  templateUrl: './beer-cta.component.html',
  styleUrls: ['./beer-cta.component.scss']
})
export class BeerCtaComponent implements OnInit {
  @Input() beers: Beer[] = [];
  
  updatedBeers: Beer[] = [];
  sortingOptions = [
    { name: 'Name', value: 'name' },
    { name: 'Abv: high to low', value: 'abvHighToLow' },
    { name: 'Abv: low to high', value: 'abvLowToHigh' },
    { name: 'Very malty', value: 'malt' },
    { name: 'Very hoppy', value: 'hops' },
  ];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['beers'] && changes['beers'].currentValue) {
      this.beers = [...changes['beers'].currentValue];
      const initialBeers = [...changes['beers'].currentValue];

      // To display only first sorted by name 8 beers from this.beers array on the first cta display
      this.updatedBeers = [...initialBeers.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 8)];
    }
  }

  onSortingSelection(sorter: string) {
    const forNameSortedBeers = [...this.beers];
    switch(sorter) {
      case 'name':
        this.updatedBeers = forNameSortedBeers.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 8);
        break;
      case 'abvHighToLow':
        const forAbvHLSortedBeers = [...this.beers];
        this.updatedBeers = forAbvHLSortedBeers.sort((a, b) => b.abv-a.abv).slice(0, 8);
        break;
      case 'abvLowToHigh':
        const forAbvLHSortedBeers = [...this.beers];
        this.updatedBeers = forAbvLHSortedBeers.sort((a, b) => a.abv-b.abv).slice(0, 8);
        break;
      case 'malt':
        const forMaltSortedBeers = [...this.beers];
        this.updatedBeers = forMaltSortedBeers.filter(beer => beer.ingredients.malt.length > 6).slice(0, 8);
        break;
      case 'hops':
        const forHopsSortedBeers = [...this.beers];
        this.updatedBeers = forHopsSortedBeers.filter(beer => beer.ingredients.hops.length > 6).slice(0, 8);
        break;
      default:
        this.updatedBeers = forNameSortedBeers.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 8);
    }
  }
}

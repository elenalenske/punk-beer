import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Beer } from 'src/app/interfaces/punk-beer-interface';

@Component({
  selector: 'app-beer-accordion',
  templateUrl: './beer-accordion.component.html',
  styleUrls: ['./beer-accordion.component.scss']
})
export class BeerAccordionComponent implements OnInit {
  @Input() beers: Beer[] = [];
  isSomeBeerExpanded = false;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['beers'] && changes['beers'].currentValue) {
      this.beers = [...changes['beers'].currentValue];
      this.beers = this.beers.sort((a, b) => a.name.localeCompare(b.name));
    
    }
  }

  onSelectBeer(index: number) : void {
    const activeAccordionSection = document.getElementById(`${index}`);
    activeAccordionSection?.classList.toggle('active');

    document.querySelectorAll('.active').length ?
      this.isSomeBeerExpanded = true : this.isSomeBeerExpanded = false;
  }

  onCloseAllExpandedBeers(): void {
    const expandedBeers = document.querySelectorAll('.active');
    expandedBeers.forEach((expandedBeer) => {
      expandedBeer.classList.remove('active');
    });

    this.isSomeBeerExpanded = false;
  }
}

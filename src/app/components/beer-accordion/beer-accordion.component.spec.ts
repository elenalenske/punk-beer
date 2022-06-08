import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerAccordionComponent } from './beer-accordion.component';

describe('BeerAccordionComponent', () => {
  let component: BeerAccordionComponent;
  let fixture: ComponentFixture<BeerAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

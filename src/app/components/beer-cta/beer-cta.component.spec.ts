import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerCtaComponent } from './beer-cta.component';

describe('BeerCtaComponent', () => {
  let component: BeerCtaComponent;
  let fixture: ComponentFixture<BeerCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerCtaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

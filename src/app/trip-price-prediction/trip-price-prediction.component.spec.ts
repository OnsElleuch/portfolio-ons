import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripPricePredictionComponent } from './trip-price-prediction.component';

describe('TripPricePredictionComponent', () => {
  let component: TripPricePredictionComponent;
  let fixture: ComponentFixture<TripPricePredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripPricePredictionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripPricePredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

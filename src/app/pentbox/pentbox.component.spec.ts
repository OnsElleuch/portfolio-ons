import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PentboxComponent } from './pentbox.component';

describe('PentboxComponent', () => {
  let component: PentboxComponent;
  let fixture: ComponentFixture<PentboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PentboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PentboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectInsatComponent } from './project-insat.component';

describe('ProjectInsatComponent', () => {
  let component: ProjectInsatComponent;
  let fixture: ComponentFixture<ProjectInsatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectInsatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectInsatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

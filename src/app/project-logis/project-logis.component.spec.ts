import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLogisComponent } from './project-logis.component';

describe('ProjectLogisComponent', () => {
  let component: ProjectLogisComponent;
  let fixture: ComponentFixture<ProjectLogisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectLogisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectLogisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

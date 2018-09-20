import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCentroGestionComponent } from './add-centro-gestion.component';

describe('AddCentroGestionComponent', () => {
  let component: AddCentroGestionComponent;
  let fixture: ComponentFixture<AddCentroGestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCentroGestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCentroGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

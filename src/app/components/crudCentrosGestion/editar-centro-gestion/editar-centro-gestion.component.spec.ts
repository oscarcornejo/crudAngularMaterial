import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCentroGestionComponent } from './editar-centro-gestion.component';

describe('EditarCentroGestionComponent', () => {
  let component: EditarCentroGestionComponent;
  let fixture: ComponentFixture<EditarCentroGestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCentroGestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCentroGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarCentroGestionComponent } from './borrar-centro-gestion.component';

describe('BorrarCentroGestionComponent', () => {
  let component: BorrarCentroGestionComponent;
  let fixture: ComponentFixture<BorrarCentroGestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarCentroGestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarCentroGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

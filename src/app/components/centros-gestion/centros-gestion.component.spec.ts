import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrosGestionComponent } from './centros-gestion.component';

describe('CentrosGestionComponent', () => {
  let component: CentrosGestionComponent;
  let fixture: ComponentFixture<CentrosGestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentrosGestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrosGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

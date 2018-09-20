import { Component, OnInit, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatTable } from '@angular/material';
import { ApiCentrosService } from '../../../services/api-centros.service';
import { CentrosData } from '../../../interfaces/app.dataCentros.interface';
import { CentrosGestionComponent } from '../../centros-gestion/centros-gestion.component';

@Component({
  selector: 'app-add-centro-gestion',
  templateUrl: './add-centro-gestion.component.html',
  styleUrls: ['./add-centro-gestion.component.scss']
})
export class AddCentroGestionComponent implements OnInit {

  // @ViewChild("refrescarCentrosData") refrescarCentrosData: CentrosGestionComponent;

  centro: CentrosData = {
    idCentroGestion     : null,
    idEstCentroGestion  : 0,
    descripcion         : "",
    codigo              : 0,
    idMandante          : "",
    fecInicio           : "",
    fecTermino          : "",
    presupuestoContrato : 0,
    adicionalesAprobados: 0,
    adicionalesEstimados: 0,
    duenoObra           : "",
    rutEjecucion        : ""
  }

  constructor(
    public dialogRef: MatDialogRef<AddCentroGestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private centrosService: ApiCentrosService
    ) {} 

  ngOnInit() {}

  // Método para Agregar un Centro de Gestión
  addCentroGestion() {
    this.centrosService.AddCentros( this.centro )
      .subscribe( (data: CentrosData) => {
        // window.location.reload();
        // this.cargarCentros();
        console.log("Los datos agregados son:", data);
      },
      error => {
        console.log(error);
      });
    this.dialogRef.close("Centro de Gestión Creado!");
  }

  // Cierre de Modal
  cerrarModal(){
    this.dialogRef.close('Cierre de Modal Agregar!');
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiCentrosService } from '../../../services/api-centros.service';

@Component({
  selector: 'app-borrar-centro-gestion',
  templateUrl: './borrar-centro-gestion.component.html',
  styleUrls: ['./borrar-centro-gestion.component.scss']
})
export class BorrarCentroGestionComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BorrarCentroGestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private centrosService: ApiCentrosService
  ) { }

  ngOnInit() {
    console.log("La data que viene al Borrar es:", this.data);
  }

  // Método para Borrar un Centro de Gestión
  borrarCentroGestion(id: number){
    this.dialogRef.close("Centro de Gestión Borrado!");
    this.centrosService.deleteCentros( this.data.id ).subscribe( () => {
      // this.cargarCentros();
      console.log(this.data.id);
    });
    // this.onCloseConfirm();
  }

  // Cierre Modal
  cerrarModal(){
    this.dialogRef.close('Cierre de Modal Borrar!');
  }


}

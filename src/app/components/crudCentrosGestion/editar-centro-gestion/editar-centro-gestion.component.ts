import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiCentrosService } from '../../../services/api-centros.service';

@Component({
  selector: 'app-editar-centro-gestion',
  templateUrl: './editar-centro-gestion.component.html',
  styleUrls: ['./editar-centro-gestion.component.scss']
})
export class EditarCentroGestionComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditarCentroGestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private centrosService: ApiCentrosService
  ) { }

  ngOnInit() {
    console.log("La data que viene al editar es:", this.data.data);
  }

  // Método para Actualizar un Centro de Gestión
  actualizarCentroGestion() {
    this.dialogRef.close("Centro de Gestión Guardado!");
    this.centrosService.actualizarCentros(this.data.data)
    .subscribe( () =>{
      // console.log();
      }, error => {
        console.log(error);
      })
  }

  // Cierre Modal
  cerrarModal(){
    this.dialogRef.close('Cierre de Modal Editar!');
  }

}

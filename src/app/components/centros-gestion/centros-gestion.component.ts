import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog, MatDialogRef} from '@angular/material';
import { CentrosData } from '../../interfaces/app.dataCentros.interface';
import { ApiCentrosService } from '../../services/api-centros.service';
import { BehaviorSubject } from 'rxjs'
import { AddCentroGestionComponent } from '../crudCentrosGestion/add-centro-gestion/add-centro-gestion.component';
import { EditarCentroGestionComponent } from '../crudCentrosGestion/editar-centro-gestion/editar-centro-gestion.component';
import { BorrarCentroGestionComponent } from '../crudCentrosGestion/borrar-centro-gestion/borrar-centro-gestion.component';
import { filter } from 'rxjs/internal/operators/filter';

@Component({
  selector: 'app-centros-gestion',
  templateUrl: './centros-gestion.component.html',
  styleUrls: ['./centros-gestion.component.scss']
})
export class CentrosGestionComponent implements OnInit, AfterViewInit {

  // Seting Angular Material
  displayedColumns: string[] = ['id', 'descripcion', 'duenoObra', 'rut', 'opciones'];
  public dataSource = new MatTableDataSource<CentrosData>();
  public data: any;

  //declaracion de dialogos
  FormAdd: MatDialogRef<AddCentroGestionComponent>

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  mostrarMensajeFiltro: boolean;
  dataCentros         : CentrosData[];
  index               : number;
  id                  : number;

  constructor(private api: ApiCentrosService,public dialog: MatDialog){

  }

  ngOnInit() {
    this.cargarCentros();
  }

  // Buscador/Filtro en Tabla
  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
    if(this.dataSource.filteredData.length==0){
      this.mostrarMensajeFiltro = true;
    }else{
      this.mostrarMensajeFiltro = false;
    }
  }

  // Paginador de Tabla Centros
  ngAfterViewInit(){
    this.setPaginator();
  }

  setPaginator(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    const RangeLabel = (page: number, pageSize: number, length: number) => {
      if (length == 0 || pageSize == 0) { return `0 de ${length}`; }
      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      // If the start index exceeds the list length, do not try and fix the end index to the end.
      const endIndex = startIndex < length ?
          Math.min(startIndex + pageSize, length) :
          startIndex + pageSize;
      return `${startIndex + 1} - ${endIndex} de ${length}`;
    }

    this.paginator._intl.itemsPerPageLabel = 'Items por Página';
    this.paginator._intl.firstPageLabel = 'Primera Página';
    this.paginator._intl.previousPageLabel = 'Página Anterior';
    this.paginator._intl.nextPageLabel = 'Página Siguiente';
    this.paginator._intl.lastPageLabel = 'Última Página';
    this.paginator._intl.getRangeLabel = RangeLabel;
  }

  setData(){
    //tomar todo lo hay en data y llevarlo a dataSource
    console.log("creamos dataSource con data ->", this.data);
    this.dataSource = new MatTableDataSource(this.data);
    this.setPaginator();
  }


  // Carga de Listado de Centros de Gestión
  cargarCentros(){
    console.log("cargarCentros()");
    this.api.getCentros().subscribe( (data: any) => {
      //data acumula todo dato que el servicio tenga
      this.data = data;
      //iniciamos dataSource
      this.setData();
    }, error => {
      console.log(error);
    });
  }

  // Agrega un Centro
  addCentros(){

    this.FormAdd = this.dialog.open(AddCentroGestionComponent, {
      width: '350px',
      data: {}
    });

    this.FormAdd.afterClosed().pipe(
      filter(res => res)
    ).subscribe(res => {
      //recibe data desde dialogo add
      //controlar aquí si dialogo tiene algún error
      let target: any = {};
      target = res.centroGestion[0];

      //al parecer el servicio no trae los datos actualizados, por ende agrego el registro con push al array
      //que estamos tomando como recurso para iniciar el dataSource
      
      this.data.push(target);
      this.setData();
    });


  }

  // Editar un Centro
  editarCentro(centro: CentrosData){
    const dialogRef = this.dialog.open( EditarCentroGestionComponent, {
      width: '350px',
      data: {
        data: centro
      }
    });

    dialogRef.afterClosed().subscribe( result => {
      console.log('Dialog closed');
      console.log(result);
    });
  }

  // Borrar un Centro de Gestión
  deleteCentros(index: number, id: number, descripcion: string, duenoObra: string, rut: string) {
    this.index = index;
    this.id = id;
    const dialogRef = this.dialog.open( BorrarCentroGestionComponent, {
      width: '500px',
      data: {
        index: index,
        id: id,
        descripcion: descripcion,
        duenoObra: duenoObra,
        rut: rut
      }

    });

    dialogRef.afterClosed().subscribe( result => {
      console.log('Dialog closed');
      console.log(result);
    });
  }

}

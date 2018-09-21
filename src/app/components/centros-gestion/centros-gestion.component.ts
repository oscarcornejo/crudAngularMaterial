import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog, MatDialogRef} from '@angular/material';
import { CentrosData } from '../../interfaces/app.dataCentros.interface';
import { ApiCentrosService } from '../../services/api-centros.service';
import { BehaviorSubject } from 'rxjs'
import { AddCentroGestionComponent } from '../crudCentrosGestion/add-centro-gestion/add-centro-gestion.component';
import { EditarCentroGestionComponent } from '../crudCentrosGestion/editar-centro-gestion/editar-centro-gestion.component';
import { BorrarCentroGestionComponent } from '../crudCentrosGestion/borrar-centro-gestion/borrar-centro-gestion.component';

@Component({
  selector: 'app-centros-gestion',
  templateUrl: './centros-gestion.component.html',
  styleUrls: ['./centros-gestion.component.scss']
})
export class CentrosGestionComponent implements OnInit, AfterViewInit {

  // Seting Angular Material
  displayedColumns: string[] = ['id', 'descripcion', 'duenoObra', 'rut', 'opciones'];
  public dataSource = new MatTableDataSource<CentrosData>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  mostrarMensajeFiltro: boolean;
  dataCentros         : CentrosData[];
  index               : number;
  id                  : number;

  constructor(
    private api: ApiCentrosService,
    public dialog: MatDialog
    ) { }

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

  test(){

    let obj = {adicionalesAprobados: 0,
              adicionalesEstimados: 0,
              codigo: 0,
              descripcion: "wewewewewewe",
              duenoObra: "efdfdfdfdfd",
              fecInicio: null,
              fecTermino: null,
              idCentroGestion: 1211212,
              idEstCentroGestion: 0,
              idMandante: 0,
              presupuestoContrato: 0,
              rutEjecucion: "34343343434-23"};
    let newData: any = [];
    newData.push(obj);
    newData.push(obj);
    newData.push(obj);
    newData.push(obj);
    this.dataSource = new MatTableDataSource(newData);
    this.setPaginator();
    console.log('second:', this.dataSource.data);
  }


  // Carga de Listado de Centros de Gestión
  cargarCentros(){
    console.log("cargarCentros()");
    this.api.getCentros().subscribe( (data: any) => {
      this.dataCentros = data;
      this.dataSource.data = data;
      console.log('La data1 es:', this.dataCentros);
      console.log('La data2 es:', this.dataSource.data);
    }, error => {
      console.log(error);
    });
  }

  // Agrega un Centro
  addCentros(): void {
    const dialogRef = this.dialog.open( AddCentroGestionComponent, {
      width: '350px',
      data: {}
    });

    dialogRef.afterClosed().subscribe( result => {
      console.log('Dialog closed');
      console.log(result);
      this.cargarCentros();
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

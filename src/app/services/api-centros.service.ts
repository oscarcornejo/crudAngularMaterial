import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/';
import { CentrosData } from '../interfaces/app.dataCentros.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiCentrosService {

  constructor(private http: HttpClient) { }

  // OBTENER TODOS los Centro de Gestión
  getCentros(): Observable<CentrosData> {
    return this.http.get<CentrosData>('http://35.238.97.108/demo-2-0.0.1-SNAPSHOT/CentroGestionRestWS/all').pipe(
      map( (data: any) => {
        // console.log(data.centroGestion);
        return data.centroGestion;
      })
    );
  }

  // AGREGAR Centro de Gestión
  AddCentros(centro: CentrosData){
    let centroString = JSON.stringify(centro);
    let url = `http://35.238.97.108/demo-2-0.0.1-SNAPSHOT/CentroGestionRestWS/save/${ centroString }`;
    let body = JSON.stringify(centro);
    
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
      'Accept'      : 'application/json'
    });

    return this.http.post( url, body).pipe( 
      map( (res: any) => {
          console.log(res);
          return res;
        }, error => {
          console.log("Error: ", error);
        })
      );
  }

  // Actualizar UN Centro de Gestión
  actualizarCentros(centro: CentrosData) {
    let centroString = JSON.stringify(centro);
    let url = `http://35.238.97.108/demo-2-0.0.1-SNAPSHOT/CentroGestionRestWS/save/${ centroString }`;
    let body = JSON.stringify(centro);
  
    console.log("La data que envío al Servicio es:", centro);
      
    return this.http.put(url, body).pipe( 
        map( (res: any) => {
            console.log("La data que se actualiza es: ", res);

            // Parsear String a Entero
            for (let i = 0; i < res.length; i++) {
              if(res.idCentroGestion){
                parseInt('centro.idCentroGestion');
                console.log(res.idCentroGestion);
              }
            }

            return res.data;
          }, error => {
            console.log("Error: ", error);
          })
        );
    }

    // Borrar un Centro de Gestión
    deleteCentros( id: number ) {
      let url = `http://35.238.97.108/demo-2-0.0.1-SNAPSHOT/CentroGestionRestWS/deleteById/${ id }`;
      return this.http.delete(url);
    }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './app.material';

// RUTAS
import { RoutesModule } from './app.routes';

// Services
import { ApiCentrosService } from './services/api-centros.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CentrosGestionComponent } from './components/centros-gestion/centros-gestion.component';
import { AddCentroGestionComponent } from './components/crudCentrosGestion/add-centro-gestion/add-centro-gestion.component';
import { EditarCentroGestionComponent } from './components/crudCentrosGestion/editar-centro-gestion/editar-centro-gestion.component';
import { BorrarCentroGestionComponent } from './components/crudCentrosGestion/borrar-centro-gestion/borrar-centro-gestion.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    CentrosGestionComponent,
    AddCentroGestionComponent,
    EditarCentroGestionComponent,
    BorrarCentroGestionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutesModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  entryComponents:[
    AddCentroGestionComponent,
    EditarCentroGestionComponent,
    BorrarCentroGestionComponent
  ],
  providers: [ApiCentrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { from } from 'rxjs';
import {MaterialService} from './servicios/material.service';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header/header.component';
import { MaterialComponent } from './material/material/material.component';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './registro/registro/registro.component';
import { InisesComponent } from './inises/inises/inises.component';
import { AddmaterialComponent } from './material/addmaterial/addmaterial.component';
import { EditmaterialComponent } from './material/editmaterial/editmaterial.component';
import { InicioService } from './servicios/inicio.service';
import { InisesService } from './servicios/inises.service';
import { RegistroService } from './servicios/registro.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import{AutenticacionService} from './servicios/autenticacion.service';
const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'material', component: MaterialComponent },
  
  {path: 'addmaterial', component: AddmaterialComponent},
  {path:'editmaterial/:key', component: EditmaterialComponent},
  {path: 'inises', component:InisesComponent},
  {path: 'registro', component:RegistroComponent},
  { path: '**', component: InicioComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MaterialComponent,
    InicioComponent,
    RegistroComponent,
    InisesComponent,
    AddmaterialComponent,
    EditmaterialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    RouterModule.forRoot(routes)

  ],
  providers: [MaterialService,InicioService,InisesService,RegistroService,AutenticacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

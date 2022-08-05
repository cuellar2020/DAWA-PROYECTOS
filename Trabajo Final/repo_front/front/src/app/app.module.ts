import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearTesisComponent } from './components/crear-tesis/crear-tesis.component';
import { ListarTesisComponent } from './components/listar-tesis/listar-tesis.component';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';
import { ListarTesisAdminComponent } from './components/listar-tesis-admin/listar-tesis-admin.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CrearTesisComponent,
    ListarTesisComponent,
    PaginaInicioComponent,
    ListarTesisAdminComponent,
    LoginComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

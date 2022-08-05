import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTesisComponent } from './components/crear-tesis/crear-tesis.component';
import { ListarTesisAdminComponent } from './components/listar-tesis-admin/listar-tesis-admin.component';
import { ListarTesisComponent } from './components/listar-tesis/listar-tesis.component';
import { LoginComponent } from './components/login/login.component';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:'',component:PaginaInicioComponent},

  {path:'listar',component:ListarTesisComponent},
  {path: 'crear-tesis',component:CrearTesisComponent},
  {path: 'editar-tesis/:id',component:CrearTesisComponent},
  {path: 'listar-tesis-admin',component:ListarTesisAdminComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path: '**', redirectTo:'',pathMatch:'full'},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

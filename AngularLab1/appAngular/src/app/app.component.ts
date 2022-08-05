import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Pedro Martinez';
  edad = 15;
  email = 'cuellarrrouss@gmail.com';
  sueldos = [1700,1600,19000];
  activo = true;
  sitio = "http://www.google.com"
  contador =1;
  profesion = "";
  anios = "";
  
  esActivo(){
    if(this.activo)
      return 'Trabajador Activo';
    else
      return 'Trabajador Inactivo';
  }

  ultimos3Sueldos(){
    let suma=0;
    for(let x=0; x<this.sueldos.length; x++)
    suma+= this.sueldos[x];
    return suma;
  }
   incrementar(){
     this.contador++;
   }

   decrementar(){
     this.contador--;
   }
}


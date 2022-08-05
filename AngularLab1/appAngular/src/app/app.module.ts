import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    //para cuando se imorta se tiene que declara aqui lo que se importo
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }

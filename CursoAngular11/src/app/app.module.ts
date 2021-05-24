import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolaMundoComponent } from './components/hola-mundo/hola-mundo.component';
import { PadreComponent } from './components/padre/padre.component';
import { HijoComponent } from './components/hijo/hijo.component';
import { Hijo2Component } from './components/hijo2/hijo2.component';
import { InterpolacionComponent } from './components/interpolacion/interpolacion.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { CalcComponent } from './components/calc/calc.component';
import { NgModelComponent } from './components/ng-model/ng-model.component';
import { FormsModule } from '@angular/forms';
import { CicloVidaComponent } from './components/ciclo-vida/ciclo-vida.component';
import { DirectivasComponent } from './components/directivas/directivas.component';

//este decorador crea la clase en un modulo de Angular
@NgModule({
  //array de elementos de componentes
  declarations: [
    AppComponent,
    HolaMundoComponent,
    PadreComponent,
    HijoComponent,
    Hijo2Component,
    InterpolacionComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    CalcComponent,
    NgModelComponent,
    CicloVidaComponent,
    DirectivasComponent,
  ],
  // importacion de modulosesternos de Angular o terceros y que puedan utilizarlo nuestros elementos.
   // formomodule para directiva  ngModuelo
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // componente principal que cargara la app.
})
// exportacion de la clase para importar donde se necesite
export class AppModule { }

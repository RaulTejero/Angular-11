import { BrowserModule } from '@angular/platform-browser';
import { NgModule , LOCALE_ID/* provaider para los pipes español meterlo en provaider*/ } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';// para peticiones
import localeEs from '@angular/common/locales/es';// para que los pipes sean en español Libreria
import {registerLocaleData} from '@angular/common'; //metodo para aplicar localEs
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';//importar animaciones
import { AgmCoreModule } from '@agm/core';

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
import { CicloVidaComponent } from './components/ciclo-vida/ciclo-vida.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { SubrayadoDirective } from './directivaPersonalizada/subrayado.directive';
import { InfoComponent } from './rutas/info/info.component';
import { AboutComponent } from './rutas/about/about.component';
import { ContactComponent } from './rutas/contact/contact.component';
import { InfoWorkComponent } from './rutas/info-work/info-work.component';
import { DetallesComponent } from './rutas/detalles/detalles.component';
import { CampoComponent } from './rutas/campo/campo.component';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { HttpclientComponent } from './components/httpclient/httpclient.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ReversoPipe } from './pipesPersonalizados/reverso.pipe';
import { AnimacionesComponent } from './components/animaciones/animaciones.component';
import { MapalibComponent } from './components/mapalib/mapalib.component';
import { MapanativComponent } from './components/mapanativ/mapanativ.component';
import { TestingComponent } from './components/testing/testing.component';



registerLocaleData(localeEs);// ejecutar pipes español

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
    SubrayadoDirective,
    InfoComponent,
    AboutComponent,
    ContactComponent,
    InfoWorkComponent,
    DetallesComponent,
    CampoComponent,
    FormulariosComponent,
    HttpclientComponent,
    PipesComponent,
    ReversoPipe,
    AnimacionesComponent,
    MapalibComponent,
    MapanativComponent,
    TestingComponent,
  ],
  // importacion de modulosesternos de Angular o terceros y que puedan utilizarlo nuestros elementos.
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // formsModule para directiva [(ngModule)] y formularios
    ReactiveFormsModule, // reactiveFormsModule para forms
    HttpClientModule, // httpclientModule para peticiones
    BrowserAnimationsModule, // animaciones
    AgmCoreModule.forRoot({
      apiKey: 'api' 
    })
  ],
  providers: [
    {provide: LOCALE_ID, useValue: "es-ES"}
  ],
  bootstrap: [AppComponent] // componente principal que cargara la app.
})
// exportacion de la clase para importar donde se necesite
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './rutas/about/about.component';
import { CampoComponent } from './rutas/campo/campo.component';
import { ContactComponent } from './rutas/contact/contact.component';
import { DetallesComponent } from './rutas/detalles/detalles.component';
import { InfoWorkComponent } from './rutas/info-work/info-work.component';
import { InfoComponent } from './rutas/info/info.component';
import { RandomGuard } from './random.guard'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'info' }, // exactamente espacio vacio, rdirige a la ruta info
  { path: 'info', component: InfoComponent },
  //ruta dinamica :id (se puede recuperar en el componente)
  {
    path: 'info/:infoWorkId', component: InfoWorkComponent, children: [
      //tienes que añadir el router outlet al componente info que s el padre para que se inyecten los hijos
      { path: 'detalles', component: DetallesComponent },
      { path: 'campo', component: CampoComponent }
    ]
  },
  { path: 'about', component: AboutComponent },
  { path: 'redirige', redirectTo: 'about' },
  { path: 'contact', component: ContactComponent, canActivate: [RandomGuard] },
  // canActivate es un guard 
  { path: '**', redirectTo: 'contacto' } // en caso de que las anteriores no existan
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Navegar por etiqueta-----------
// [routerLink] = "['/ruta']";
// routerLinkActive = "claseActiva"

//Navegar por funcion---------
// en el tag poner un evento de click, funcion y por parametro la ruta <button (click) = "onclick('ruta')"
//Injectar private router:Router en el constructor
// En la funcion creada recoger el paramatroRura y llamar a this.router.navigate([parametroRuta])

/*onclick(pRuta:string){
  this.router.navigate([pRuta]);
}*/

//Ruta dinamca ****************
//Recoger el parametro en el componente ( ejemplo en component ruta/infoWork)


// Rutas hijas children

/**
 * localHost:4200    principal
 * localHost:4200/info  path
 * localHost:4200/info/:id dinamica
 * localHost:4200/info/:id/detalles hija
 * localHost:4200/info/:id/campo  hija
 */

//guards.ts para evitar entrar en rutas
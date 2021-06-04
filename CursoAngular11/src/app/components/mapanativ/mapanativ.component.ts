/// <reference path="../../../../node_modules/@types/googlemaps/index.d.ts" />
// hecer referencia a la libreria types google 
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mapanativ',
  templateUrl: './mapanativ.component.html',
  styleUrls: ['./mapanativ.component.css']
})
export class MapanativComponent implements OnInit {

  @ViewChild('variablePlantilla') divMapa: ElementRef;

  mapa: google.maps.Map; //es un tipo de la libreria @type


  constructor() { }

  ngOnInit(): void {

  }
  // cargar despues de cargar el html 
  ngAfterViewInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position)// coordenadas
        this.cargarMapa(position);
        this.cargarAutocomplete();
      })
    } else {
      console.log("navegador no compatible");

    }
  }

  cargarMapa(pPosition) {
    // opciones de posicion, zoom , tipo mapa 
    const opciones = {
      center: new google.maps.LatLng(pPosition.coords.latitude,pPosition.coords.longitude),
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.HYBRID
    }
    // el tipo mapa se dibujara en html  con las opciones 
    this.mapa = new google.maps.Map(this.divMapa.nativeElement, opciones);

      // icono personalizado para el marker 
    const icon = {
      url:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/512px-Map_marker.svg.png',
      scaledSize: new google.maps.Size(50,50)
    }

      // markador 
    const markerPosition = new google.maps.Marker({
      position: this.mapa.getCenter(),
      animation: google.maps.Animation.DROP,
      icon: icon
    });
    markerPosition.setMap(this.mapa) //colocar el markador en el mapa

    // markadores donde pinches 
    google.maps.event.addListener(this.mapa, 'click', (e: google.maps.MouseEvent) => {
      const marker = new google.maps.Marker({
        position: e.latLng,
        animation: google.maps.Animation.DROP
      });
      marker.setMap(this.mapa);
      marker.setDraggable(true)// arrastable

      google.maps.event.addListener(marker, 'click', e => {
        marker.setMap(null) // borra el marker
      })
      google.maps.event.addListener(marker, 'mouseover', e => {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      });
      google.maps.event.addListener(marker, 'mouseout', e => {
        marker.setAnimation(null);
      })
    })
  }


  cargarAutocomplete(){
    const autocomplete = new google.maps.places.Autocomplete(document.querySelector("#inputPlaces"))
  }

}

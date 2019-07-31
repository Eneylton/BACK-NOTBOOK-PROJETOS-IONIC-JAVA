import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare var google;

@IonicPage({})
@Component({
  selector: 'page-mapa-5',
  templateUrl: 'mapa-5.html',
})
export class Mapa_5Page {

  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  map: any;
  startPosition: any;
  originPosition: string;
  destinationPosition: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.initializeMap();
  }
  

  initializeMap() {
    this.startPosition = new google.maps.LatLng(-2.5359550565892963, -44.2108324822559);

    const mapOptions = {
      zoom: 18,
      center: this.startPosition,
      disableDefaultUI: true
    }

    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    this.directionsDisplay.setMap(this.map);

    const marker = new google.maps.Marker({
      position: this.startPosition,
      map: this.map,
    });

    console.log(marker);

  }

  calculateRoute() {
    if (this.destinationPosition && this.originPosition) {
      const request = {
        // Pode ser uma coordenada (LatLng), uma string ou um lugar
        origin: this.originPosition,
        destination: this.destinationPosition,
        travelMode: 'DRIVING'
      };

      this.traceRoute(this.directionsService, this.directionsDisplay, request);
    }
  }

  traceRoute(service: any, display: any, request: any) {
    service.route(request, function (result, status) {
      if (status == 'OK') {
        display.setDirections(result);
      }
    });
  }
}


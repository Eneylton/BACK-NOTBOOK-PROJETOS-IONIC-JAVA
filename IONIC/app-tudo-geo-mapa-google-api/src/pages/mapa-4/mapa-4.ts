import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
declare var google;

@IonicPage({})
@Component({
  selector: 'page-mapa-4',
  templateUrl: 'mapa-4.html',
})
export class Mapa_4Page {
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private geolocation: Geolocation) {
  }

  ngOnInit() {
    this.geolocation.getCurrentPosition()
      .then((resp) => {
        console.log("latitude: " + resp.coords.latitude);
        const position = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);

        const mapOptions = {
          zoom: 18,
          center: position
        }

        this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        const marker = new google.maps.Marker({
          position: position,
          map: this.map
        });

        console.log(marker);

      }).catch((error) => {
        console.log('Erro ao recuperar sua posição', error);
      });
  }

}


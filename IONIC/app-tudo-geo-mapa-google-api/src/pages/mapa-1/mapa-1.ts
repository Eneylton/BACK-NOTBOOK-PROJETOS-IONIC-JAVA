import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage({})
@Component({
  selector: 'page-mapa-1',
  templateUrl: 'mapa-1.html',
})
export class Mapa_1Page {

  lat1:any;
  lng1:any;
  lat2:any;
  lng2:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private geolocation: Geolocation) {
  
    this.busarLocalidade();
  }

  busarLocalidade() {
    
    this.geolocation.getCurrentPosition().then((resp) => {
    this.lat1 = resp.coords.latitude;
    this.lng1 = resp.coords.longitude;

    console.log(this.lat1);

     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      this.lat2 = data.coords.latitude;
      this.lng2 = data.coords.longitude;
     });


  }

}

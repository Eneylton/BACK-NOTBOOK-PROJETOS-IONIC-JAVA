import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare var google;

@IonicPage({})
@Component({
  selector: 'page-mapa-3',
  templateUrl: 'mapa-3.html',
})
export class Mapa_3Page {
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    const position = new google.maps.LatLng(-21.763409, -43.349034);

    const mapOptions = {
      zoom: 18,
      center: position,
      //disableDefaultUI: true
    }

    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    const marker = new google.maps.Marker({

      position: position,
      map: this.map,

      //Titulo
      //title: 'Minha posição',

      //Animção
      //animation: google.maps.Animation.DROP, // BOUNCE

      //Icone
      //icon: 'assets/imgs/pessoa.png'
    });

    console.log(marker);

  }

}

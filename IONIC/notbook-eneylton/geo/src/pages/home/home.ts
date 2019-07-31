import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';

declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  map: any;
  markers:any;

  estabelecimentos = [
    {
      nome: 'Zarro Confecções',
      endereco: 'Endereço 1',
      latitude: -2.533508,
      longitude: -44.2027791
    },
    {
      nome: 'Evanildo Stors',
      endereco: 'Endereço 2',
      latitude: -2.535884,
      longitude: -44.2056921
    },

	 {
      nome: 'Zelia Variedades',
      endereco: 'Endereço 3',
      latitude: -2.5382728,
      longitude: -44.2093996
    },
	{
      nome: 'Baboo Confecções',
      endereco: 'Endereço 4',
      latitude: -2.5389001,
      longitude: -44.2122259
    },

	 {
      nome: 'Maria chique',
      endereco: 'Endereço 5',
      latitude: -2.5413617,
      longitude: -44.2171982
    },

	{
      nome: 'Conceição Confecções',
      endereco: 'Endereço 6',
      latitude: -2.537774,
      longitude: -44.2005392
    },

	 {
      nome: 'Loja Store toy',
      endereco: 'Endereço 7',
      latitude: -2.5402499,
      longitude: -44.2047167
    }

	,
	{
      nome: 'Kanto da Moda',
      endereco: 'Endereço 8',
      latitude: -2.540432,
      longitude: -44.2054991
    },

	 {
      nome: 'Malu Moda Intima',
      endereco: 'Endereço 9',
      latitude: -2.5408831,
      longitude: -44.205887
    },

	 {
      nome: 'Overaw moda Esport',
      endereco: 'Endereço 10',
      latitude: -2.5387187,
      longitude: -44.2114214
    }
	];


  constructor(public navCtrl: NavController, public geolocation: Geolocation, public platform:Platform) {}

  ionViewWillEnter(){
    this.platform.ready().then(() => {
      this.initPage();
    });
  }

  initPage() {
    this.geolocation.getCurrentPosition().then(result => {
      this.loadMap(result.coords.latitude, result.coords.longitude);
    });
  }


  private loadMap(lat, lng) {
      let latLng = new google.maps.LatLng(lat, lng);

      let mapOptions = {
        center: latLng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
      };

      let element = document.getElementById('map');

      this.map = new google.maps.Map(element, mapOptions);
      let marker = new google.maps.Marker({
        position: latLng,
        title: 'Minha Localização',
        icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
      })
      let content = `
      <div id="myid"  class="item item-thumbnail-left item-text-wrap">
        <ion-item>
          <ion-row>
            <h6>`+marker.title+`</h6>
          </ion-row>
        </ion-item>
      </div>
      `
      ;
      this.addInfoWindow(marker, content);
      marker.setMap(this.map);

      this.loadPoints();
    }

    loadPoints() {
      this.markers = [];

      for (const key of Object.keys(this.estabelecimentos)) {
        console.log(this.estabelecimentos[key].nome )
        let latLng = new google.maps.LatLng(this.estabelecimentos[key].latitude, this.estabelecimentos[key].longitude);

        let marker = new google.maps.Marker({
          position: latLng,
          title: this.estabelecimentos[key].nome,
          icon: 'assets/imgs/pessoa.png',
          animation: google.maps.Animation.BOUNCE // BOUNCE // DROP
        })

        let content = `
        <div id="myid"  class="item item-thumbnail-left item-text-wrap">
          <ion-item>
            <ion-row>
              <h6>`+this.estabelecimentos[key].nome+`</h6>
            </ion-row>
          </ion-item>
        </div>
        `
        ;
        this.addInfoWindow(marker, content);
        marker.setMap(this.map);
      }

      return this.markers;
    }

    addInfoWindow(marker, content) {
      let infoWindow = new google.maps.InfoWindow({
        content: content
      });

      google.maps.event.addListener(marker, 'click', () => {
        infoWindow.open(this.map, marker);

        google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
          document.getElementById('myid').addEventListener('click', () => {
            this.goToEmpresa(marker)
          });
        });
      })
    }

    goToEmpresa(empresa) {
      alert('Click');
    }
}

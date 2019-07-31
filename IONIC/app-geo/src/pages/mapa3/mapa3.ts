import { Component } from '@angular/core';
import { NavController, NavParams, Platform, IonicPage } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as WC from 'woocommerce-api';

declare var google: any;

@IonicPage({})
@Component({
  selector: 'page-mapa3',
  templateUrl: 'mapa3.html',
})
export class Mapa3Page {
  map: any;
  markers:any;
  WooCommerce: any;
  vendors: any[];
  listar: any[];
  localidades : Array<Object> = [];
  logradouro: string;
  cidade: string;
  uf: string;
  lat: string;
  lng: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public geolocation: Geolocation, public platform:Platform) {

    this.listar = [];
    this.localidades = [];

    this.WooCommerce = WC({
      url: "https://purezaweb.com",
      consumerKey: "ck_ed57920b299140fbed550ec077234d756f2abf73",
      consumerSecret: "cs_ca01f30a42824b505ca053dad5de1d392236d2a9",
      queryStringAuth: true,
      wpAPI: true,
      version: "wcmp/v1"
    });

    this.WooCommerce.getAsync("vendors").then((data) => {

      let temp: any[] = JSON.parse(data.body);

      this.vendors = JSON.parse(data.body);
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].parent == 0) {

          temp[i].address.address_1
          temp[i].address.city
          temp[i].shop.title
          temp[i].shop.url

          this.listar.push(temp[i]);

        }

        console.log(this.listar.push(temp[i]));

        const titulo = temp[i].shop.title
        const url = temp[i].shop.url
        const logradouro = temp[i].address.address_1;
       

        this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${logradouro}&key=AIzaSyB-rMHePnt1UKaMmW45WaghuT8NcXYWwgo`)
          .map(res => res.json())
          .subscribe(data => {

            this.lat = data.results[0].geometry.location.lat;
            this.lng = data.results[0].geometry.location.lng;

            this.localidades.push({
              
                                   "Logradouro" : logradouro,
                                   "titulo" : titulo,
                                   "url" : url,
                                   "latitude" : this.lat,
                                   "longitude" : this.lng
                                  
                                  });

            console.log(this.localidades);

          }, (err) => {
            console.log(err)
          })
      }

    }, (err) => {
      console.log(err)
    })
  }

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
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: false,
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

    for (const key of Object.keys(this.localidades)) {
      console.log(this.localidades[key].titulo )
      let latLng = new google.maps.LatLng(this.localidades[key].latitude, this.localidades[key].longitude);

      let marker = new google.maps.Marker({
        position: latLng,
        title: this.localidades[key].titulo,
        icon: 'assets/imgs/pin2.png',
        animation: google.maps.Animation.BOUNCE // BOUNCE // DROP
      })

      let content = `
      <div id="myid"  class="item item-thumbnail-left item-text-wrap">
        <ion-item>
          <ion-row>
          <span ><img src="assets/imgs/ok.png" ></span>
            <h6>`+this.localidades[key].titulo + `</h6>
            <a style="color: #1155cc;text-decoration: none;" href=` + this.localidades[key].url + `> Minha loja </a>
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

    
    })
  }
 

}


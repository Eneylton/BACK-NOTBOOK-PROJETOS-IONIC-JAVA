import { Component } from '@angular/core';
import { NavController, Platform, IonicPage } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as WC from 'woocommerce-api';


@IonicPage({})
@Component({
  selector: 'page-mapa1',
  templateUrl: 'mapa1.html',
})
export class Mapa1Page {
  map: any;
  markers: any;
  WooCommerce: any;
  vendedores: any;
  listar: any[];
  localizacoes : Array<Object> = [];

  constructor(public navCtrl: NavController, public geolocation: Geolocation, public platform: Platform,public http: Http,) { 

    this.localizacoes =[];

    this.WooCommerce = WC({
      url: "https://purezaweb.com",
      consumerKey: "ck_ed57920b299140fbed550ec077234d756f2abf73",
      consumerSecret: "cs_ca01f30a42824b505ca053dad5de1d392236d2a9",
      queryStringAuth: true,
      wpAPI: true,
      version: "wcmp/v1"
    });

    this.WooCommerce.getAsync("vendors").then((data) => {
      this.vendedores = JSON.parse(data.body);

      let temp: any[] = JSON.parse(data.body);

      for (let i = 0; i < temp.length; i++) {
        if (temp[i].parent == 0) {

          temp[i].first_name
          temp[i].last_name
          temp[i].address.postcode
          temp[i].shop.title
          temp[i].shop.url
          temp[i].email
          temp[i].address.phone

          this.listar.push(temp[i]);
        }

        console.log(this.listar.push(temp[i]));
        
      }

    })

    

  }

 
}

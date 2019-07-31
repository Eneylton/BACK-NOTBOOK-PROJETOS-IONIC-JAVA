import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as WC from 'woocommerce-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  WooCommerce: any;
  vendors: any[];
  listar: any[];
  localidades : Array<Object> = [];
  logradouro: string;
  cidade: string;
  uf: string;
  lat: string;
  lng: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
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
       

        this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${logradouro}&key=AIzaSyA9eHf1miI9jDsWXtYL9oKDeMwEHsQAJGg`)
          .map(res => res.json())
          .subscribe(data => {

            this.lat = data.results[0].geometry.location.lat;
            this.lng = data.results[0].geometry.location.lng;

            this.localidades.push({
              
                                   "Logradouro" : logradouro,
                                   "titulo" : titulo,
                                   "url" : url,
                                   "Latitude" : this.lat,
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



}

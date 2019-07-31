import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { CepServiceProvider } from '../../providers/cep-service/cep-service';
declare var google;


@IonicPage({})
@Component({
  selector: 'page-mapa-7',
  templateUrl: 'mapa-7.html',
})
export class Mapa_7Page {
  endereco:string;
  cepValue:string;
  logradouro:string;
  bairro:string;
  cidade:string;
  uf:string;
  cep:string;

  map: any;
  startPosition: any;
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  destinationPosition:string = "Rua 03 Cohatrac IV São luís-MA";

  lat1: any;
  lng1: any;
  latGeo: any;
  lngGeo: any;
  localidades: Array<Object> = [];


  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private geolocation: Geolocation,
              private service: CepServiceProvider,
              public http: Http) {
  }

  ngOnInit() {
    this.initializeMap();
  }

  initializeMap() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat1 = resp.coords.latitude;
      this.lng1 = resp.coords.longitude;
   

      this.startPosition = new google.maps.LatLng(this.lat1, this.lng1);

      const mapOptions = {
        zoom: 19,
        center: this.startPosition,
        disableDefaultUI:false
      }

      this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
      this.directionsDisplay.setMap(this.map);

      const marker = new google.maps.Marker({
        position: this.startPosition,
        map: this.map,
      });
      
      
      console.log(marker);


    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  buscarEndereco(){

   

    this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.lat1},${this.lng1}&key=AIzaSyB-rMHePnt1UKaMmW45WaghuT8NcXYWwgo`)
    .map(res => res.json())
    .subscribe(data => {

          this.logradouro = data.results[1].address_components[1].long_name;
          this.bairro     = data.results[1].address_components[2].long_name;
          this.cidade     = data.results[1].address_components[3].long_name;
          this.uf         = data.results[1].address_components[4].long_name;
          this.cepValue        = data.results[1].address_components[6].long_name;

      this.localidades.push({
        
                            "Logradouro" : this.logradouro,
                            "bairro" : this.bairro,
                            "cidade" : this.cidade,
                            "uf" : this.uf,
                            "cepValue" : this.cepValue,
                            
                            
                            });

      console.log(this.localidades);

    }, (err) => {
      console.log(err)
    })
  

  }
  
  calculateRoute() {

    this.service.buscarCEP(this.cepValue).subscribe(data=>{
        
      this.logradouro = data.logradouro;
      this.bairro     = data.bairro;
      this.cidade     = data.localidade;
      this.uf         = data.uf;
      
      this.endereco = (`${this.logradouro}  ${this.bairro} ${this.cidade} ${this.uf}`);
  
      const request = {
        // Pode ser uma coordenada (LatLng), uma string ou um lugar
        origin: this.endereco,
        destination: this.destinationPosition,
        travelMode: 'DRIVING'
      };
  
      console.log(request);
  
      this.traceRoute(this.directionsService, this.directionsDisplay, request);
      
      
    })
  
  }
  traceRoute(service: any, display: any, request: any) {
    service.route(request, function (result, status) {
      if (status == 'OK') {
        display.setDirections(result);
      }
    });
  }
  
}
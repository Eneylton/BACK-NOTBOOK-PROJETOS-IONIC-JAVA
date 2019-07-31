import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CepServiceProvider } from '../../providers/cep-service/cep-service';
import { FormBuilder } from '@angular/forms';
declare var google;

@IonicPage({})
@Component({
  selector: 'page-mapa-6',
  templateUrl: 'mapa-6.html',
})
export class Mapa_6Page {

  cepValue:string;
  endereco:string;
  logradouro:string;
  bairro:string;
  cidade:string;
  uf:string;
  
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  map: any;
  startPosition: any;
  originPosition: string;
  destinationPosition:string = "Rua 03 Cohatrac IV São luís-MA";

  constructor( public navCtrl: NavController,
    public navParams: NavParams,
    public formbuilder: FormBuilder,
    public alertCtrl: AlertController,
    private service: CepServiceProvider) {
  }


  ngOnInit() {
    this.initializeMap();
  }

 
  initializeMap() {
    this.startPosition = new google.maps.LatLng(-2.5359550565892963, -44.2108324822559);

    const mapOptions = {
      zoom: 15,
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
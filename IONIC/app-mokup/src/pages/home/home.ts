import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contatos: Array<Object> = [];

  constructor(public navCtrl: NavController) {

    this.contatos = [
      {
        "id": "1",
        "nome": "Eneylton Barros",
        "email": "eneylton@hotmail.com",
        "whatsapp": "(98) 99158-2345",
      },

      {
        "id": "2",
        "nome": "Maria Francisa",
        "email": "maria@hotmail.com",
        "whatsapp": "(98) 99158-2345",
      },


      {
        "id": "3",
        "nome": "Joisse Crmen",
        "email": "jose@hotmail.com",
        "whatsapp": "(98) 99158-2345",
      },


      {
        "id": "4",
        "nome": "Raissa Barros",
        "email": "raissa@hotmail.com",
        "whatsapp": "(98) 99158-2345",
      },

    ];

  }

  cadidatoEditar(contato : any){
    this.navCtrl.push('UpdatePage',{"contato": contato});
  }

}

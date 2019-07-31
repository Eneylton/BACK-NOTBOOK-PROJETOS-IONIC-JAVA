import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({})
@Component({
  selector: 'page-formularios',
  templateUrl: 'formularios.html',
})

export class FormulariosPage {

  receiverEmail: string = "";

  listarEndereco = {
    "logradouro" : "",
    "numero"     : "",
    "bairro"     : "",
    "cidade"     : "",
    "uf": ""

  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  opneView() {

    // let dados = {
    //   endereco: this.listarEndereco,
    //   emailVendor: this.receiverEmail

    // }

    // console.log(JSON.stringify({
    //   emailVendor: this.receiverEmail,
    //   enderecos:this.listarEndereco

    // }));

  }

}

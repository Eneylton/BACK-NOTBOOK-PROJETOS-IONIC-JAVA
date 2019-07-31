import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage({})
@Component({
  selector: 'page-mapa2',
  templateUrl: 'mapa2.html',
})
export class Mapa2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Mapa2Page');
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WoocommerceProvider } from '../../providers/woocommerce/woocommerce';

@IonicPage({})
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {

  server: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams, public wcmp: WoocommerceProvider) {

                 wcmp.Woocommerce.getAsync("vendors").then((data)=>{
                  console.log(JSON.parse(data.body));

                });

  }


}

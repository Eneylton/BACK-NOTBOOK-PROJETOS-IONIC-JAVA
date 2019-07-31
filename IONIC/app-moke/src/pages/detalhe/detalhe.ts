import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({})
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})

export class DetalhePage {

  items: Array<Object> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

    this.items = [
      {
        "img":"https://res.cloudinary.com/amarotech/image/fetch/c_limit,f_auto,dpr_1,w_1920/v1/https://res.cloudinary.com/amarotech/image/fetch/c_limit,f_auto,dpr_1,w_1920/v1/https://cdn.amaro.com/images/products/20011329_012_zoom_1.jpg?1509103112",
        "produto":"Vestido Logo",
        "preco":"5.000,00",
        "range":"5"
      },
      {
        "img":"https://res.cloudinary.com/amarotech/image/fetch/c_limit,f_auto,dpr_1,w_1920/v1/https://res.cloudinary.com/amarotech/image/fetch/c_limit,f_auto,dpr_1,w_1920/v1/https://cdn.amaro.com/images/products/20020436_027_zoom_2.jpg?1549990451",
        "produto":"Vestido Logo",
        "preco":"4.000,00",
        "range":"5"
      },
      {
        "img":"https://res.cloudinary.com/amarotech/image/fetch/c_limit,f_auto,dpr_1,w_1920/v1/https://cdn.amaro.com/images/products/20021092_048_zoom_1.jpg?1557936201",
        "produto":"Vestido Logo",
        "preco":"6.000,00",
        "range":"5"
      }
    ];

  }

}

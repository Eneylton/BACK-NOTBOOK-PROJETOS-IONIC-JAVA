import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items : Array<Object> = [];  

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.items =[
       {
        "id" : "3",
        "img" : "https://res.cloudinary.com/amarotech/image/fetch/c_limit,f_auto,dpr_1,w_1920/v1/https://cdn.amaro.com/images/products/20021111_017_zoom_1.jpg?1559587125",
        "nome" : "Vestido Amarelo",
        "range":"5",
        "preco":"5000"
       },

       {
        "id" : "4",
        "img" : "https://res.cloudinary.com/amarotech/image/fetch/c_limit,f_auto,dpr_1,w_1920/v1/https://cdn.amaro.com/images/products/20018028_284_zoom_1.jpg?1556292113",
        "nome" : "Vestido Verde",
        "range":"5",
        "preco":"5000"
       },

       {
        "id" : "5",
        "img" : "https://res.cloudinary.com/amarotech/image/fetch/c_limit,f_auto,dpr_1,w_1920/v1/https://cdn.amaro.com/images/products/20020933_227_zoom_1.jpg?1558639729",
        "nome" : "Vestido Vermelho",
        "range":"5",
        "preco":"5000"
       },

       {
        "id" : "6",
        "img" : "https://res.cloudinary.com/amarotech/image/fetch/c_limit,f_auto,dpr_1,w_1920/v1/https://cdn.amaro.com/images/products/20021111_999_zoom_1.jpg?1559587125",
        "nome" : "Vestido Vermelho",
        "range":"5",
        "preco":"5000"
       },
       {
        "id" : "1",
        "img" : "https://res.cloudinary.com/amarotech/image/fetch/c_limit,f_auto,dpr_1,w_1920/v1/https://res.cloudinary.com/amarotech/image/fetch/c_limit,f_auto,dpr_1,w_1920/v1/https://cdn.amaro.com/images/products/20011329_012_zoom_1.jpg?1509103112",
        "nome" : "Vestido Vermelho",
        "range":"5",
        "preco":"5000"
       },
       {
         "id" : "2",
         "img" : "https://res.cloudinary.com/amarotech/image/fetch/c_limit,f_auto,dpr_1,w_1920/v1/https://res.cloudinary.com/amarotech/image/fetch/c_limit,f_auto,dpr_1,w_1920/v1/https://cdn.amaro.com/images/products/20020436_027_zoom_2.jpg?1549990451",
         "nome" : "Vestido Azul",
         "range":"5",
         "preco":"5000"
        }

    ]
  }


}

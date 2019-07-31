import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartProvider } from '../../providers/cart/cart';

@IonicPage({})
@Component({
  selector: 'page-my-cart',
  templateUrl: 'my-cart.html',
})
export class MyCartPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public cart: CartProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyCartPage');
  }

  removeItem(index) {
    this.cart.removeItem(index);
}

}

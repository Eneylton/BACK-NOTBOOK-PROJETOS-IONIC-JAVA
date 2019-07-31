import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ProductHtmlProvider } from '../../providers/product-html/product-html';
import { Observable } from 'rxjs/Observable';
import { CartProvider } from '../../providers/cart/cart';

@IonicPage({})
@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {

  product:Observable<Object>;

  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public productHttp:ProductHtmlProvider,
    public toastCtrl: ToastController,
    public cart: CartProvider) {
}

  ionViewDidLoad() {
    let id = this.navParams.get('product');
    setTimeout(() => {
        this.product = this.productHttp.get(id);
    },500);

  }


  addItem(product){
    this.cart.addItem(product);
    let toast = this.toastCtrl.create({
        message: 'Produto adicionado no carrinho',
        duration: 3000
    });
    toast.present();
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ProductHtmlProvider } from '../../providers/product-html/product-html';
import { Observable } from 'rxjs/Observable';
import { CartProvider } from '../../providers/cart/cart';

@IonicPage({})
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage  {
 
  products: Observable<Array<any>>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public productHttp: ProductHtmlProvider, public cart: CartProvider) {
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.products = this.productHttp.query();
      console.log(this.products);
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

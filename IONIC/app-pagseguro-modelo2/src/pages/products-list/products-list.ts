import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ProductHttpProvider } from '../../providers/product-http/product-http';
import { Observable } from 'rxjs/Observable';
import { CartProvider } from '../../providers/cart/cart';


@IonicPage({})
@Component({
  selector: 'page-products-list',
  templateUrl: 'products-list.html',
})
export class ProductsListPage {

  products: Observable<Array<any>>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public productHttp: ProductHttpProvider, public cart: CartProvider) {
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

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductHttpProvider } from '../../providers/product-http/product-http';
import { Observable } from 'rxjs/Observable';


@IonicPage({})
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {

  product:Observable<Object>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public productHttp:ProductHttpProvider) {
  }

  ionViewDidLoad() {
    let id = this.navParams.get('product');
    setTimeout(() => {
        this.product = this.productHttp.get(id);
    },500);

  }

}

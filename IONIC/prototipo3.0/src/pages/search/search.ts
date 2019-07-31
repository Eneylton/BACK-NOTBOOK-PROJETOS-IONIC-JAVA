import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { WoocommerceProvider } from '../../providers/woocommerce/woocommerce';
import { CartPage } from '../cart/cart';

@IonicPage({})
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  searchQuery: string = "";
  WooCommerce: any;
  products: any[] = [];
  page: number = 2;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public WP: WoocommerceProvider) {
    console.log(this.navParams.get("searchQuery"));
    this.searchQuery = this.navParams.get("searchQuery");

    this.WooCommerce = WP.init();

    this.WooCommerce.getAsync("products?filter[q]=" + this.searchQuery).then((searchData) => {
      this.products = JSON.parse(searchData.body).products;
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  loadMoreProducts(event){

    this.WooCommerce.getAsync("products?filter[q]=" + this.searchQuery + "&page=" + this.page).then((searchData) => {
      this.products = this.products.concat(JSON.parse(searchData.body).products);

      if(JSON.parse(searchData.body).products.length < 10){
        event.enable(false);

        this.toastCtrl.create({
          message: "Produto não encontrado !",
          duration: 5000
        }).present();

      }

      event.complete();
      this.page ++;

    });
  }

  openCart(){

    this.modalCtrl.create(CartPage).present();

  }

  openProductPage(product){
    this.navCtrl.push('ProductDetails', {"product": product} );
  }

  onSearch(event){
    if(this.searchQuery.length > 0){
      this.navCtrl.push('SearchPage', {"searchQuery": this.searchQuery});
    }
  }

}

import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { WoocommerceProvider } from '../../providers/woocommerce/woocommerce';

@IonicPage({})
@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html',
})
export class ProdutoPage {
  wooCommerce: any;
  listar: any[];
  products: any;
  imagens: any[];
  
  constructor(public navCtrl: NavController, public WP: WoocommerceProvider) {
    this.listar = [];

    this.wooCommerce = WP.init(true);
    this.loadMoreProducts(null);

    this.wooCommerce.getAsync("products").then((data) => {
    
      this.products = JSON.parse(data.body);

    }, (err) => {
      console.log(err)
    })

  }

  loadMoreProducts(event) {

    this.wooCommerce.getAsync("products").then((data) => {
     
      this.products = JSON.parse(data.body);
      console.log("Respostas: --> " + this.products[0]);
      let temp: any[] = JSON.parse(data.body);

      for (let i = 0; i < temp.length; i++) {
        if (temp[i].parent == 0) {
          temp[i].subCategories = [];
          temp[i].id;
          temp[i].vendor;
          temp[i].images[0].src;
          this.listar.push(temp[i]);
        }

        console.log("Listar: " , this.listar.push(temp[i].vendor));
        // console.log(temp[i].id);
        // console.log(temp[i].vendor);
        // console.log(temp[i].images[0].src);
      }

    })

  }

}

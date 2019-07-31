import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, ToastController, IonicPage, ModalController } from 'ionic-angular';
import { WoocommerceProvider } from '../../providers/woocommerce/woocommerce';
import { CartPage } from '../cart/cart';


@IonicPage({})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  

  WooCommerce: any;
  products: any[];
  moreProducts: any[];
  page: number;
  searchQuery: string = "";
  categories: any[];

  @ViewChild('productSlides') productSlides: Slides;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public toastCtrl: ToastController, public WP: WoocommerceProvider) {

    this.page = 2;
    this.categories = [];


    this.WooCommerce = WP.init();
    this.loadMoreProducts(null);

    this.WooCommerce.getAsync("products").then( (data) => {
      console.log(JSON.parse(data.body));
      this.moreProducts = this.moreProducts.concat(JSON.parse(data.body).products);
    }, (err) => {
      console.log(err)
    })

    this.WooCommerce.getAsync("products/categories").then((data) => {
      console.log(JSON.parse(data.body).product_categories);

      let temp: any[] = JSON.parse(data.body).product_categories;

      for (let i = 0; i < temp.length; i++) {
        if (temp[i].parent == 0) {

          temp[i].subCategories = [];

          if (temp[i].slug == "acessorios") {
            temp[i].icon = "ios-man-outline";
          }
          if (temp[i].slug == "camisas") {
            temp[i].icon = "ios-woman-outline";
          }

          if (temp[i].slug == "sapatos") {
            temp[i].icon = "md-radio-button-on";
          }

          if (temp[i].slug == "vestido") {
            temp[i].icon = "md-shirt";
          }



          this.categories.push(temp[i]);
        }

      }

      //Groups Subcategories

      for (let i = 0; i < temp.length; i++){
        for (let j = 0; j < this.categories.length; j++){
          //console.log("Checking " + j + " " + i)
          if(this.categories[j].id == temp[i].parent){
            this.categories[j].subCategories.push(temp[i]);
          }
        }
      }

    }, (err) => {
      console.log(err)
    });


  }

  ionViewDidLoad(){
    setInterval(()=> {

      if(this.productSlides.getActiveIndex() == this.productSlides.length() -1)
        this.productSlides.slideTo(0);

      this.productSlides.slideNext();
    }, 3000)
  }

  loadMoreProducts(event){
    console.log(event);
    if(event == null)
    {
      this.page = 2;
      this.moreProducts = [];
    }
    else
      this.page++;

    this.WooCommerce.getAsync("products?page=" + this.page).then( (data) => {
      console.log(JSON.parse(data.body));
      this.products = JSON.parse(data.body).products;

      if(event != null)
      {
        event.complete();
      }

      if(JSON.parse(data.body).products.length < 10){
        event.enable(false);

        this.toastCtrl.create({
          message: "Não há produtos !",
          duration: 5000
        }).present();

      }


    }, (err) => {
      console.log(err)
    })
  }

  openProductPage(product){
    this.navCtrl.push('ProductDetails', {"product": product} );
  }

  openCategoryPage(category) {

    this.navCtrl.push('ProductsByCategory', { "category": category });
  }

  openCart(){

    this.modalCtrl.create(CartPage).present();

  }

  onSearch(event){
    if(this.searchQuery.length > 0){
      this.navCtrl.push('SearchPage', {"searchQuery": this.searchQuery});
    }
  }

}

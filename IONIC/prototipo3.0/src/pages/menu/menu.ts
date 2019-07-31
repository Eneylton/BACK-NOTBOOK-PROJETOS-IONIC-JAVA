import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CartPage } from '../cart/cart';
import { WoocommerceProvider } from '../../providers/woocommerce/woocommerce';
import { HomePage } from '../home/home';

@IonicPage({})
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class Menu {

  homePage: any = HomePage;
  WooCommerce: any;
  categories: any[];
  @ViewChild('content') childNavCtrl: NavController;
  loggedIn: boolean;
  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public modalCtrl: ModalController, private events: Events, public WP: WoocommerceProvider) {
    this.homePage = 'HomePage';
    this.categories = [];
    this.user = {};

    this.WooCommerce = WP.init();


    this.WooCommerce.getAsync("products/categories").then((data) => {
      console.log(JSON.parse(data.body).product_categories);

      let temp: any[] = JSON.parse(data.body).product_categories;

      for (let i = 0; i < temp.length; i++) {
        if (temp[i].parent == 0) {

          temp[i].subCategories = [];

          if (temp[i].slug == "sapatos") {
            temp[i].icon = "fa-eercast";
          }

          if (temp[i].slug == "acessorios") {
            temp[i].icon = "fa-diamond";
          }
          if (temp[i].slug == "camisas") {
            temp[i].icon = "fa-ravelry";
          }

         

          if (temp[i].slug == "vestido") {
            temp[i].icon = "fa-female";
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

    this.events.subscribe("updateMenu", () => {
      this.storage.ready().then(() => {
        this.storage.get("userLoginInfo").then((userLoginInfo) => {

          if (userLoginInfo != null) {

            console.log("User logged in...");
            this.user = userLoginInfo.user;
            console.log(this.user);
            this.loggedIn = true;
          }
          else {
            console.log("No user found.");
            this.user = {};
            this.loggedIn = false;
          }

        })
      });


    })
  }

  ionViewDidEnter() {

    this.storage.ready().then(() => {
      this.storage.get("userLoginInfo").then((userLoginInfo) => {

        if (userLoginInfo != null) {

          console.log("User logged in...");
          this.user = userLoginInfo.user;
          console.log(this.user);
          this.loggedIn = true;
        }
        else {
          console.log("No user found.");
          this.user = {};
          this.loggedIn = false;
        }

      })
    })


  }

  openCategoryPage(category) {

    this.childNavCtrl.setRoot('ProductsByCategory', { "category": category });

  }

  openPage(pageName: string) {
    if (pageName == "signup") {
      this.navCtrl.push('Signup');
    }
    if (pageName == "login") {
      this.navCtrl.push('Login');
    }
    if (pageName == 'logout') {
      this.storage.remove("userLoginInfo").then(() => {
        this.user = {};
        this.loggedIn = false;
      })
    }
    if (pageName == 'cart') {
      let modal = this.modalCtrl.create(CartPage);
      modal.present();
    }

  }

}

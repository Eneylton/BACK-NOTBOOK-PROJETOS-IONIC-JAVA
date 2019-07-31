import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UrlProvider} from "../../providers/url/url";
import {CartService} from "./cart.service";
import {FinalizarCompraPage} from "../finalizar-compra/finalizar-compra";

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  public urlBase: string;
  constructor(private cartService: CartService, public navCtrl: NavController, public url: UrlProvider) {
    //console.log(this.cartService.items);
    this.urlBase = this.url.url;

  }

  items(): any[]{



    return this.cartService.items;
  }
  removeItem(item: any){
     this.cartService.removeItem(item);
  }

  clear(){
    this.cartService.clear();
  }
  total(): number{
    return this.cartService.total();
  }
  rootPage(){
    this.navCtrl.push(FinalizarCompraPage,{},{animate: true, animation: "transition"});
  }

}

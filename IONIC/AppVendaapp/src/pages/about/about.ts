import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CartService} from "../cart/cart.service";
import {UrlProvider} from "../../providers/url/url";
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/map';
import { HeroServiceProvider } from '../../providers/hero-service/hero-service';
import {ProdutoDetalhePage} from "../produto-detalhe/produto-detalhe";
import {Storage} from "@ionic/storage";


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public obj = [];
  public objdestaque: any;
  public objbanners: any;

  public urlBase: string;
  public page: number = 1;

  public items_a: Array<any>;
  public items_b: Array<any>;

  public options: any;

  constructor(private cartService: CartService, public navCtrl: NavController,
              public heroService: HeroServiceProvider, public url: UrlProvider,
              public storage: Storage) {

    this.getAllHeroes();
    this.getBanners();
    this.urlBase = this.url.url;



    this.getDestaque();

    this.options = {
      init: true,
      slidesPerView: 2,
      slidesPerColumn:  1,
      spaceBetween:  10,
      direction: 'horizontal',
      loop: false,
      initialSlide: 0,
      speed: 100,
      showNavButtons: false
    }
  }
  getDestaque(){
    this.heroService.loadProdutoDestaque(1).then(data => {
      this.objdestaque = data;
    });
  }
  getBanners(){
    this.heroService.loadBanners().then(data => {
      this.objbanners = data;
    });
  }
  getAllHeroes() {
    this.heroService.load(1).then(data => {
        this.obj = data;
    });
  }
  getMore(infiniteScroll) {
    this.page++;
    setTimeout(() => {
      this.heroService.load(this.page)
        .then(data => {
          //let foundItem = this.items.find((mItem)=>mItem.menuItem.id === data.id)
          if(data!=2){
            //this.obj.push(data);
            for (var i = 0; i<data.length; i++) {

              if(this.obj.find((mItem)=>mItem.id === data[i].id)) {
                console.log(data[i].id);
              }else{
                this.obj.push(data[i]);
              }
            }
          }else{
            infiniteScroll.enable(false);
          }
          infiniteScroll.complete();

          //this.heroes = this.obj.data;

        }, err => {
          console.log('err');
        });

    }, 500);

  }
  addItem(item: any){
    this.cartService.addItem(item);
  }
  verItem(obj:any){
    this.navCtrl.push(ProdutoDetalhePage, obj,{animate: true, animation: "transition"});
  }
}

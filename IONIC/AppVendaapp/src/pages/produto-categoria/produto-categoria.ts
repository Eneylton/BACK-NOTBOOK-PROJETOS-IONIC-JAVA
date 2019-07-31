import { Component } from '@angular/core';
import {UrlProvider} from "../../providers/url/url";
import 'rxjs/add/operator/map';

import { NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";
import {HeroServiceProvider} from "../../providers/hero-service/hero-service";
import {ProdutoDetalhePage} from "../produto-detalhe/produto-detalhe";


@Component({
  selector: 'page-produto-categoria',
  templateUrl: 'produto-categoria.html',
})
export class ProdutoCategoriaPage {

  public obj: any;
  public id: number;
  public nomecat: string;
  public urlBase: string;
  userData: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private url: UrlProvider,
              public http : Http,public heroService: HeroServiceProvider) {
    this.id = navParams.get('id');
    this.nomecat = navParams.get('nome');
    this.urlBase = this.url.url;
    this.getProdutoCategoria(this.id);
  }

  getProdutoCategoria(id: number){
    this.heroService.getProdutoCategoria(id)
      .then(data => {
        if(data[0].userData!="erro"){
          this.obj = data;
        }
        console.log(data);
        //this.heroes = this.obj.data;
      });
  }
  verItem(obj:any){
    this.navCtrl.push(ProdutoDetalhePage, obj);
  }


}

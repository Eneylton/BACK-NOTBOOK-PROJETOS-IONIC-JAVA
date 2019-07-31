import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HeroServiceProvider} from "../../providers/hero-service/hero-service";
import {ProdutoCategoriaPage} from "../produto-categoria/produto-categoria";

@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage {

  public obj : any

  constructor(public navCtrl: NavController, private heroService: HeroServiceProvider) {
    this.getCategoria();
  }

  getCategoria() {
    this.heroService.loadCategoria()
      .then(data => {
        this.obj = data;
        //this.heroes = this.obj.data;
        console.log(data);
      });
  }

  pushPage(obj: any) {
    this.navCtrl.push(ProdutoCategoriaPage, obj,{animate: true, animation: "transition"});
  }
}

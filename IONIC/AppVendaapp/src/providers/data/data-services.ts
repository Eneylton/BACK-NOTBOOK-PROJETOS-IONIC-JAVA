import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
import {UrlProvider} from "../url/url";
import 'rxjs/add/operator/map';
import {HeroServiceProvider} from "../hero-service/hero-service";
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export class DataServices {
  items = [];
  constructor(public http : Http,
              public url: UrlProvider,
              public heroService: HeroServiceProvider) {
    this.heroService.load(1)
      .then(data => {
        this.items = data;

        //this.heroes = this.obj.data;
        console.log(data);
      });
  }

  filterItems(searchTerm){
    return this.items.filter((item) => {
      return item.nome.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

}

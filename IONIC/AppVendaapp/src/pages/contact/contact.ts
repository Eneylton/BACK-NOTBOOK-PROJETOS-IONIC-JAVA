import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import { NavController } from 'ionic-angular';
import {DataServices} from "../../providers/data/data-services";
import {HeroServiceProvider} from "../../providers/hero-service/hero-service";
import 'rxjs/add/operator/debounceTime';
import {ProdutoDetalhePage} from "../produto-detalhe/produto-detalhe";
import {UrlProvider} from "../../providers/url/url";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  searchTerm: string = '';
  page: number = 0;
  public urlBase: string;
  searchControl: FormControl;
  public items = [];
  searching: any = false;

  constructor(public navCtrl: NavController,
              public dataService: DataServices,
              public heroService: HeroServiceProvider,
              public url: UrlProvider) {
    this.searchControl = new FormControl();
    this.urlBase = this.url.url;
    //console.log(this.items);
  }

  ionViewDidLoad() {
    this.setFilteredItems();
    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
      this.searching = false;
      this.setFilteredItems();
    });
  }

  onSearchInput(){
    this.searching = true;
  }

  setFilteredItems() {
    this.items = this.dataService.filterItems(this.searchTerm);
  }
  verItem(obj:any){
    this.navCtrl.push(ProdutoDetalhePage, obj,{animate: true, animation: "transition"});
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

              if(this.items.find((mItem)=>mItem.id === data[i].id)) {
                console.log(data[i].id);
              }else{
                this.items.push(data[i]);
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

}

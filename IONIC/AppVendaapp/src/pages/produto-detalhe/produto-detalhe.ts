import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {UrlProvider} from "../../providers/url/url";
import {CartService} from "../cart/cart.service";
import { AlertController } from 'ionic-angular';
import {HeroServiceProvider} from "../../providers/hero-service/hero-service";
import {FinalizarCompraPage} from "../finalizar-compra/finalizar-compra";

@Component({
  selector: 'page-produto-detalhe',
  templateUrl: 'produto-detalhe.html',
})
export class ProdutoDetalhePage {
  public obj: any;
  public objmais = [];
  public objtamanho : any;
  public objcor : any;
  public id: number;
  public page: number = 1;
  public nomeprod: string;
  public valor: string;
  public urlBase: string;
  public foto: string;
  public ext: string;
  public descricao: string;
  public userPostData = {"inputcor":"","inputtamanho":""};
  public item = [];
  public tamanho = [];
  public cor = [];
  constructor(private cartService: CartService,
              public navCtrl: NavController,
              public navParams: NavParams,
              public url: UrlProvider,
              public alertCtrl: AlertController,
              private heroService: HeroServiceProvider) {


    this.id = navParams.get('id');
    this.nomeprod = navParams.get('nome');
    this.valor = navParams.get('valor');
    this.foto = navParams.get('foto');
    this.ext = navParams.get('ext');
    this.descricao = navParams.get('descricao');
    this.urlBase = this.url.url;
    this.item = navParams.data;


    this.getTamanho();
    this.getAllHeroes();
    this.getCor();
    // this.item.push(navParams.get('valor'));
    // this.item.push(navParams.get('foto'));
    // this.item.push(navParams.get('ext'));
    // this.item.push(navParams.get('descricao'));
  }
  setCor(item: number){
    this.cor = [{"cor": item}]
    Array.prototype.push.apply(this.item, this.cor);
  }
  setTamanho(item: number){
    this.tamanho = [{"tamanho": item}]
    Array.prototype.push.apply(this.item, this.tamanho);
    console.log(this.item);
    //this.item.push(item);
  }
  getCor(){

    this.heroService.loadCores(this.id)
      .then(data => {
        if(data){
          this.objcor = data
        }


        //this.heroes = this.obj.data;
      });
  }

  getTamanho(){
    this.heroService.loadTamanho(this.id)
      .then(data => {
        if(data){
          this.objtamanho = data
        }
        //console.log(data);
        //this.heroes = this.obj.data;
      });
  }

  getAllHeroes() {
    this.heroService.load(1)
      .then(data => {
        this.objmais = data;
        //this.heroes = this.obj.data;
        //console.log(data);
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

              if(this.objmais.find((mItem)=>mItem.id === data[i].id)) {
                console.log(data[i].id);
              }else{
                this.objmais.push(data[i]);
              }
            }
          }else{
            infiniteScroll.enable(false);
          }
          infiniteScroll.complete();

        }, err => {
          console.log('err');
        });

    }, 500);

  }
  public verItem(obj:any){
    this.navCtrl.push(ProdutoDetalhePage, obj,{animate: true, animation: "transition"});
  }
  addItem(item: any){
    let alert = this.alertCtrl.create({
      title: 'Sucesso',
      subTitle: 'Produto adicionado ao carrinho',
      buttons: ['OK']
    });
    alert.present();
    this.cartService.addItem(item);
  }
  comprar(item: any){
    this.navCtrl.push(FinalizarCompraPage,{},{animate: true, animation: "transition"});
    this.cartService.addItem(item);
  }


}

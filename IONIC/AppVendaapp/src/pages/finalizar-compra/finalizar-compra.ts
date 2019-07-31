import { Component } from '@angular/core';
import { NavController, NavParams,App } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HeroServiceProvider } from '../../providers/hero-service/hero-service';
import {CartService} from "../cart/cart.service";
import {CartPage} from "../cart/cart";
import {FinalizarPagamentoPage} from "../finalizar-pagamento/finalizar-pagamento";
import {UrlProvider} from "../../providers/url/url";
import {LoginPage} from "../login/login";
import {Storage} from "@ionic/storage";
import {PerfilEditPage} from "../perfil-edit/perfil-edit";

@Component({
  selector: 'page-finalizar-compra',
  templateUrl: 'finalizar-compra.html',
})
export class FinalizarCompraPage {

  public cep: number;
  public totalprod: number;
  public totalfrete: number;
  public obj: any;
  public dados: any;
  public urlBase: string;
  public paypal: string;
  public modo: string;
  public param = {"paypal":"","modo":""}



  constructor(public appCtrl: App,private alertCtrl: AlertController,
              public navCtrl: NavController, public navParams: NavParams,
              public heroService: HeroServiceProvider,
              private cartService: CartService,
              public url: UrlProvider, public storage: Storage) {

    this.storage.get('userData').then((data)=>{
      if(data==null){
        let alert = this.alertCtrl.create({
          title: 'Fazer login',
          subTitle: 'Faça login antes de finalizar a sua compra',
          buttons: ['OK']
        });
        alert.present();
        //this.navCtrl.push(LoginPage);
        this.appCtrl.getRootNav().push(LoginPage,{},{animate: true, animation: "transition"});

      }else{
        this.cep = data.userData[0].cep.toString();
      }

      if(this.cep==null){
        let alert = this.alertCtrl.create({
          title: 'Erro',
          subTitle: 'Cadastre o seu cep e endereço!',
          buttons: ['OK']
        });
        alert.present();
        this.navCtrl.setRoot(PerfilEditPage,{},{animate: true, animation: "transition"});
      }
      this.getAllFrete(this.cep);
    });

    this.urlBase = this.url.url;
    this.totalprod = this.cartService.total()
    if(!this.items().length){
      this.navCtrl.setRoot(CartPage);
    }
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
  total(){

  }
  rootPage(){
    this.navCtrl.push(FinalizarCompraPage,{},{animate: true, animation: "transition"});
  }
  getAllFrete(cep) {
    this.heroService.loadFrete(cep)
      .then(data => {
        this.obj = data["response"];
        console.log(this.obj);
      }, err => {
        console.log('err');
      });
  }
  setValorFrete(item){
    this.cartService.totalfrete = parseInt(item);
    this.totalfrete = parseInt(item);
    this.cartService.totalFinal = this.totalprod + parseInt(item);
  }

  pageFinalizarPagamento(){

    this.heroService.loadPaypal().then(data => {
      if(data){
        if(data[0].idclientelive.toString()!=""){
          this.paypal  = data[0].idclientelive.toString();
          this.modo  = "PayPalEnvironmentProduction";
        }else{
          this.modo  = "PayPalEnvironmentSandbox";
          this.paypal = data[0].idclientesandbox.toString();
        }


        this.param.paypal = this.paypal;
        this.param.modo = this.modo;
        this.navCtrl.push(FinalizarPagamentoPage,this.param,{animate: true, animation: "transition"});
      }
    });


  }




}

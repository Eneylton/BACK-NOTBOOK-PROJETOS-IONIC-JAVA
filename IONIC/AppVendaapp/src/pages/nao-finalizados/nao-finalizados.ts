import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {HeroServiceProvider} from "../../providers/hero-service/hero-service";
import {HttpClient} from "@angular/common/http";
import {UrlProvider} from "../../providers/url/url";
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
import {Storage} from "@ionic/storage";
import { AlertController } from 'ionic-angular';
import {InicialLoginPage} from "../inicial-login/inicial-login";

@Component({
  selector: 'page-nao-finalizados',
  templateUrl: 'nao-finalizados.html',
})
export class NaoFinalizadosPage {
  public idusuario: number;
  public obj: any;
  public obj2 : any;
  public va: number;
  public array = [];
  public responseData: any;
  constructor(public navCtrl: NavController,
              private payPal: PayPal,
              public heroService: HeroServiceProvider,
              public http: HttpClient,
              public url: UrlProvider,
              public authService: AuthServiceProvider,
              private storage: Storage,
              public alertCtrl: AlertController) {

    this.storage.get('userData').then((data)=>{
      if(data==null){
        this.navCtrl.setRoot(InicialLoginPage,{},{animate: true, animation: "transition"});
      }
    });

    this.storage.get('userData').then((data)=>{
      if(data!=null){
        this.idusuario = data.userData[0].user_id;
        console.log(data.userData[0].user_id);
      }
      this.loadPedidos(this.idusuario);
    });

  }
  deletarItem(id: number){
    this.authService.postData(id,'delPedido/'+id).then((result) => {
      this.responseData = result;
      if(this.responseData.userData){
        let alert = this.alertCtrl.create({
          title: 'Sucesso',
          subTitle: 'Pedido deletado com sucesso',
          buttons: ['OK']
        });
        alert.present();
        this.loadPedidos(this.idusuario);
      }
      else{
        console.log("User already exists");
      }
    }, (err) => {
      // Error log
    });
  }
  loadPedidos(id: number){
    this.heroService.loadPedidoNaoFinalizados(id)
      .then(data => {
        this.obj = data;
        //this.heroes = this.obj.data;
      });
  }
  verProdutos(id: number){
    this.va = id;
    this.heroService.loadCarrinho(id)
      .then(data => {
        this.obj2 = data;
        //this.heroes = this.obj.data;
      });
  }
  getMore(infiniteScroll) {
    setTimeout(() => {
      this.heroService.loadPedidoNaoFinalizados(this.idusuario)
        .then(data => {
          if(data){
            this.obj = data;
            infiniteScroll.enable(false);
          }

          infiniteScroll.complete();
          //this.heroes = this.obj.data;
        });
    }, 500);
  }

  pagar(total: number, id: number){
    this.array.push(id);
    this.payPal.init({
      PayPalEnvironmentProduction: '',
      PayPalEnvironmentSandbox: 'Aei0AI9Rr4OWHxoGrKTcsydTcM45ekwZOFOWRThhU4Q5hhSbffU8kpIQSilv7A8_TvK0ZIXGR-OPuzkD'
    }).then(() => {
      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
        // Only needed if you get an "Internal Service Error" after PayPal login!
        //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
        acceptCreditCards: true,
        languageOrLocale: 'pt-BR',
        merchantName: 'AppVenda'
      })).then(() => {
        let payment = new PayPalPayment(total.toString(), 'BRL', 'Description', 'sale');
        this.payPal.renderSinglePaymentUI(payment).then((response) => {
          this.authService.postData(this.array,'postPedidoUpdate').then((result) => {

          }, (err) => {
            // Error log
          });
        }, () => {
          // Error or render dialog closed without being successful
        });
      }, () => {
        // Error in configuration
      });
    }, () => {
      // Error in initialization, maybe PayPal isn't supported or something else
    });
  }

}

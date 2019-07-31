import { Component } from '@angular/core';
import {CartService} from "../cart/cart.service";
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
import {UrlProvider} from "../../providers/url/url";
import {AlertController, NavController, NavParams} from "ionic-angular";
import {CartPage} from "../cart/cart";
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {Storage} from "@ionic/storage";


@Component({
  selector: 'page-finalizar-pagamento',
  templateUrl: 'finalizar-pagamento.html',
})
export class FinalizarPagamentoPage {

  public frete: number;
  public idusuario: number;
  public totalprod: number;
  public item: any;
  public urlBase: string;
  public total;
  public array = [];
  public idpedido :number;
  public paypaltext: string;
  public modo: string;


  responseData : any;

  constructor(private cartService: CartService,
              private payPal: PayPal,
              public url: UrlProvider,
              public navCtrl: NavController,
              public authService: AuthServiceProvider,
              private alertCtrl: AlertController,
              public storage: Storage,
              public navParams: NavParams) {
    if(!this.items().length){
      this.navCtrl.setRoot(CartPage);
    }
    this.storage.ready().then(()=>{
      this.storage.get('userData').then((data)=>{
        if(data!=null){
          this.idusuario  = data.userData[0].user_id;
        }
      });
    });

    this.paypaltext = navParams.get('paypal');
    this.modo = navParams.get('modo');

    //console.log(this.paypaltext);

    this.urlBase = this.url.url;
    this.frete = this.cartService.totalfrete
    this.totalprod = cartService.total() + this.frete
    this.total = cartService.total();
  }
  items(): any[]{
    this.totalprod = this.cartService.total() + this.frete
    return this.cartService.items;
  }

  carrinho(){
    this.navCtrl.push(CartPage);
  }
  fazerPagamento(){

    this.array.push(this.frete.toString(), this.totalprod.toString(),'1',this.idusuario);

    this.authService.postData(this.array,'postPedido').then((result) => {
      this.responseData = result;
      this.idpedido = this.responseData.userData;
      this.array = [];
      this.array.push(this.idpedido);
      this.authService.postData(this.cartService.items,'postCarrinho/'+this.idpedido.toString())
        .then(() => {
        this.cartService.clear();
      }, (err) => {
        // Error log
      });
    }, (err) => {
      // Error log
    });





    this.payPal.init({
      PayPalEnvironmentProduction: ''+this.paypaltext,
      PayPalEnvironmentSandbox: ''+this.paypaltext
    }).then(() => {
      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      this.payPal.prepareToRender(this.modo, new PayPalConfiguration({
        // Only needed if you get an "Internal Service Error" after PayPal login!
        //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
        acceptCreditCards: true,
        languageOrLocale: 'pt-BR',
        merchantName: 'AppVenda'
      })).then(() => {
        let payment = new PayPalPayment(this.totalprod.toString(), 'BRL', 'Description', 'sale');
        this.payPal.renderSinglePaymentUI(payment).then((response) => {
          this.authService.postData(this.array,'postPedidoUpdate').then((result) => {
            // Successfully paid
            let alert = this.alertCtrl.create({
              title: 'Sucesso',
              subTitle: 'Pedido realizado com sucesso!',
              buttons: ['OK']
            });
            alert.present();
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

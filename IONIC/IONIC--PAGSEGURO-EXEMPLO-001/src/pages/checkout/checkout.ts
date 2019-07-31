import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Segment} from 'ionic-angular';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {CartProvider} from "../../providers/cart/cart";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { PagseguroProvider } from '../../providers/pagseguro/pagseguro';
declare var PagSeguroDirectPayment;

@IonicPage({})
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage implements OnInit  {
 
  @ViewChild(Segment)
  segment: Segment;
 
  paymentMethods: Array<any> = [];
  creditCard = {
    num: "",
    cvv: "",
    monthExp: "",
    yearExp: "",
    brand: "",
    token: ""
  };

  paymentMethod: string = 'CREDIT_CARD';

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private cart: CartProvider, 
              private ref: ChangeDetectorRef,
              private pagseg: PagseguroProvider,
              private http: Http) {

              this.pagseg.iniciar("purezanegocios@gmail.com", "54D78E8346234B2FA6F2F9E17CA706DD", true);
  }

  ngOnInit(): void {
    PagSeguroDirectPayment.getPaymentMethods({
      amount: this.cart.total,
      success: response => {
        let paymentMethods = response.paymentMethods;
        // Mapeamento de um objeto transforma em um array
        this.paymentMethods = Object.keys(paymentMethods).map((k) => paymentMethods[k]);
        // Detecção de mudanças
        this.ref.detectChanges();
        //this.segment.ngAfterContentInit();
      }
    });
  }

  paymentCreditCart() {
    this.getCreditCardBrand();
  }

  getCreditCardBrand() {
    PagSeguroDirectPayment.getBrand({
      cardBin: this.creditCard.num.substring(0, 6),
      success: response => {
        this.creditCard.brand = response.brand.name;
        console.log(response.brand.name);
        // Detecção de mudanças
        this.ref.detectChanges();
        this.getCrediCartToken();
      }
    });
  }

  getCrediCartToken() {
    PagSeguroDirectPayment.createCardToken({
      cardNumber: this.creditCard.num,
      brand: this.creditCard.brand,
      cvv: this.creditCard.cvv,
      expirationMonth: this.creditCard.monthExp,
      expirationYear: this.creditCard.yearExp,
      success: response => {
        this.creditCard.token = response.card.token;
        // Detecção de mudanças
        this.ref.detectChanges();
        this.sendPayment();
      }
    });
  }
  sendPayment() {
       let bodyString = JSON.stringify({
       items: this.cart.items,
       token: this.creditCard.token,
       hash: PagSeguroDirectPayment.getSenderHash(),
       method: this.paymentMethod,
       total: this.cart.total
     });

     console.log('Chegou Aki !!!!!!!!');
    

  }
}
  

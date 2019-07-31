import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, IonicPage } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { WoocommerceProvider } from '../../providers/woocommerce/woocommerce';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';

@IonicPage({})
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class Checkout {

  WooCommerce: any;
  newOrder: any;
  paymentMethods: any[];
  paymentMethod: any;
  billing_shipping_same: boolean;
  userInfo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public alertCtrl: AlertController, public payPal: PayPal, public WP: WoocommerceProvider) {
    this.newOrder = {};
    this.newOrder.billing = {};
    this.newOrder.shipping = {};
    this.billing_shipping_same = false;

    this.paymentMethods = [
      { method_id: "bacs", method_title: "Transferência Bancária" },
      { method_id: "cheque", method_title: "Pagamento com Cheque" },
      { method_id: "cod", method_title: "Pagamento na entrega" },
      { method_id: "paypal", method_title: "PayPal" }];



    this.WooCommerce = WP.init(true);

    this.storage.get("userLoginInfo").then((userLoginInfo) => {

      this.userInfo = userLoginInfo.user;


      let id = userLoginInfo.user.id;

      this.WooCommerce.getAsync("customers/"+id).then((data) => {

        this.newOrder = JSON.parse(data.body);

      })

    })

  }

  setBillingToShipping() {
    this.billing_shipping_same = !this.billing_shipping_same;

    if (this.billing_shipping_same) {
      this.newOrder.shipping = this.newOrder.billing;
    }

  }

  placeOrder() {

    let orderItems: any[] = [];
    let data: any = {};

    let paymentData: any = {};

    this.paymentMethods.forEach((element, index) => {
      if (element.method_id == this.paymentMethod) {
        paymentData = element;
      }
    });


    data = {
      payment_details: {
        method_id: paymentData.method_id,
        method_title: paymentData.method_title,
        paid: true
      },

      billing: this.newOrder.billing,
      shipping: this.newOrder.shipping,
      customer_id: this.userInfo.id || '',
      line_items: orderItems
    };



    if (paymentData.method_id == "paypal") {

      this.payPal.init({
        PayPalEnvironmentProduction: "Produção",
        PayPalEnvironmentSandbox: "AXoM9BSi6YmmEK_og8th4kw7Rv12P2qRng4FXA12BRCYPyuXZnu4b1iXvBJS5nen2UFfXYeaXzMp-aOS"
      }).then(() => {
        // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
        this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
          // Only needed if you get an "Internal Service Error" after PayPal login!
          //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
        })).then(() => {

          this.storage.get("cart").then((cart) => {

            let total = 0.00;
            cart.forEach((element, index) => {

              if(element.variation){
                orderItems.push({ product_id: element.product.id, variation_id: element.variation.id, quantity: element.qty });
                total = total + (element.variation.price * element.qty);
              } else {
                orderItems.push({ product_id: element.product.id, quantity: element.qty });
                total = total + (element.product.price * element.qty);
              }
            });

            let payment = new PayPalPayment(total.toString(), 'BRL', 'Descrição', 'Venda');
            this.payPal.renderSinglePaymentUI(payment).then((response) => {
              // Successfully paid

              alert("Falta Pouco para finalizar seu pedido !");


              data.line_items = orderItems;
              //console.log(data);
              let orderData: any = {};

              orderData.order = data;

              this.WooCommerce.postAsync('orders', orderData.order).then((data) => {
                alert("Seu pedido foi processado !");

                let response = (JSON.parse(data.body));

                this.alertCtrl.create({
                  title: "Parabéns",
                  message: "Seu pedido foi realizado com sucesso. O número do seu pedido é " + response.order_number,
                  buttons: [{
                    text: "OK",
                    handler: () => {
                      this.navCtrl.push('HomePage');
                    }
                  }]
                }).present();
              })

            })

          }, () => {
            // Error or render dialog closed without being successful
          });
        }, () => {
          // Error in configuration
        });
      }, () => {
        // Error in initialization, maybe PayPal isn't supported or something else
      });





    } else {

      this.storage.get("cart").then((cart) => {

        cart.forEach((element, index) => {
          if(element.variation){
            orderItems.push({ product_id: element.product.id, variation_id: element.variation.id, quantity: element.qty });

          } else {
            orderItems.push({ product_id: element.product.id, quantity: element.qty });

          }
        });

        data.line_items = orderItems;

        let orderData: any = {};

        orderData.order = data;

        this.WooCommerce.postAsync('orders', orderData.order).then((data) => {



          let response = (JSON.parse(data.body));

          this.alertCtrl.create({
            title: "Parabéns ",
            message: "Seu pedido foi Realizado. O número do pedido é " + response.order_number,
            buttons: [{
              text: "OK",
              handler: () => {
                this.navCtrl.setRoot('HomePage');
              }
            }]
          }).present();

        })

      })

    }


  }


}

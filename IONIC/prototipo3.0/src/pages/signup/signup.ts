import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController, IonicPage, ModalController } from 'ionic-angular';
import { WoocommerceProvider } from '../../providers/woocommerce/woocommerce';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage({})
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {

  newUser: any = {};
  billing_shipping_same: boolean;
  WooCommerce: any;
  contatoForm: FormGroup;

  constructor(public modalCtrl: ModalController,public http: Http, public formbuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public alertCtrl: AlertController, public WP: WoocommerceProvider) {

    this.newUser.billing_address = {};
    this.newUser.shipping_address = {};
    this.billing_shipping_same = false;
    

    this.WooCommerce = WP.init();

    this.contatoForm = this.formbuilder.group({
      nome: [null, [Validators.required, Validators.minLength(5)]],
      sobrenome: [null, [Validators.required, Validators.minLength(5)]],
      email: [null, [Validators.required, Validators.minLength(3)]],
      usuario: [null, [Validators.required, Validators.minLength(3)]],
      senha: [null, [Validators.required, Validators.minLength(3)]],
      confirmar: [null, [Validators.required, Validators.minLength(3)]],
      empresa: [null, [Validators.minLength(3)]],
      telefone: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(9)]],
      cep: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      rua: [null, [Validators.required]],
      bairro: [null, [Validators.required]],
      numero: [null, [Validators.required]],
      cidade: [null, [Validators.required]],
      uf: [null, [Validators.required]]
    })

  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingupPage');
  }

  setBillingToShipping(){
    this.billing_shipping_same = !this.billing_shipping_same;
  }

  checkEmail(){

    let validEmail = false;

    let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(reg.test(this.newUser.email)){


      this.WooCommerce.getAsync('customers/email/' + this.newUser.email).then( (data) => {
        let res = (JSON.parse(data.body));

        if(res.errors){
          validEmail = true;

          this.toastCtrl.create({
            message: "Parabéns. E-mail Válido.",
            duration: 3000
          }).present();

        } else {
          validEmail = false;

          this.toastCtrl.create({
            message: "E-mail já registrado. por favor, verifique.",
            showCloseButton: true
          }).present();
        }

        console.log(validEmail);

      })

    } else {
      validEmail = false;
      this.toastCtrl.create({
        message: "E-mail inválido. por favor, verifique.",
        showCloseButton: true
      }).present();
      console.log(validEmail);
    }

  }

  buscaCep() {
    const cepValue = this.contatoForm.controls['cep'].value;
    const isValid = this.contatoForm.controls['cep'].valid;
    if(isValid) {
      this.http.get(`https://viacep.com.br/ws/${cepValue}/json/`)
      .map(res => res.json())
      .subscribe(data => {
        this.insereValoresEndereco(data);
      })
    }
  }

  insereValoresEndereco(dados) {
    this.contatoForm.controls['rua'].setValue(dados.logradouro + " .:. " + dados.bairro + " Nº : " );
    this.contatoForm.controls['bairro'].setValue(dados.bairro);
    this.contatoForm.controls['cidade'].setValue(dados.localidade);
    this.contatoForm.controls['uf'].setValue(dados.uf);
  
  }
 

  signup(){

    let customerData = {
      customer : {}
    }

    customerData.customer = {
      "email": this.newUser.email,
      "first_name": this.newUser.first_name,
      "last_name": this.newUser.last_name,
      "username": this.newUser.username,
      "password": this.newUser.password,
      "billing_address": {
        "first_name": this.newUser.first_name,
        "last_name": this.newUser.last_name,
        "company": "",
        "address_1": this.newUser.billing_address.address_1,
        "address_2": this.newUser.billing_address.address_2,
        "city": this.newUser.billing_address.city,
        "state": this.newUser.billing_address.state,
        "postcode": this.newUser.billing_address.postcode,
        "country": this.newUser.billing_address.country,
        "email": this.newUser.email,
        "phone": this.newUser.billing_address.phone
      },
      "shipping_address": {
        "first_name": this.newUser.first_name,
        "last_name": this.newUser.last_name,
        "company": "",
        "address_1": this.newUser.shipping_address.address_1,
        "address_2": this.newUser.shipping_address.address_2,
        "city": this.newUser.shipping_address.city,
        "state": this.newUser.shipping_address.state,
        "postcode": this.newUser.shipping_address.postcode,
        "country": this.newUser.shipping_address.country
      }
    }

    if(this.billing_shipping_same){
      this.newUser.shipping_address = this.newUser.shipping_address;
    }

    this.WooCommerce.postAsync('customers', customerData).then( (data) => {

      let response = (JSON.parse(data.body));

      if(response.customer){
        this.alertCtrl.create({
          title: "Conta criada",
          message: "Sua conta foi criada com sucesso! Por favor, faça o login para continuar.",
          buttons: [{
            text: "Login",
            handler: ()=> {
              this.navCtrl.push('Login');
            }
          }]
        }).present();
      } else if(response.errors){
        this.toastCtrl.create({
          message: response.errors[0].message,
          showCloseButton: true
        }).present();
      }

    })

  }

}


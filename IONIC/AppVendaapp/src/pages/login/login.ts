import { Component } from '@angular/core';
import {AlertController, NavController} from "ionic-angular";
import {Storage} from "@ionic/storage";

import {InicialLoginPage} from "../inicial-login/inicial-login";
import {CadastrarPage} from "../cadastrar/cadastrar";
import {HomePage} from "../home/home";
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {CartService} from "../cart/cart.service";
import {FinalizarCompraPage} from "../finalizar-compra/finalizar-compra";
import {AppService} from "../../app/app-service";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  responseData : any;
  public dados: any;
  userData = { "email": "","senha": ""};
  constructor(public navCtrl: NavController,
              public authService: AuthServiceProvider,
              private alertCtrl: AlertController,
              private services: CartService,
              public storage: Storage,
              private appservice: AppService) {


      this.storage.get('userData').then((data)=>{
        console.log(data);
        if(data!=null){
          this.navCtrl.setRoot(HomePage);
        }
      });


    //const data = JSON.parse(localStorage.getItem('userData'));
    // if(data!=null){
    //   this.dados = data.userData;
    // }
    // if(this.dados!=null){
    //   this.navCtrl.setRoot(HomePage);
    // }else{
    //   console.log(data);
    // }
  }
  login(){
    this.authService.postData(this.userData,'postLogin').then((result) => {
      this.responseData = result;
      if(this.responseData.userData){

        //console.log(this.responseData);
        this.storage.set("userData", this.responseData);
        //localStorage.setItem('userData', JSON.stringify(this.responseData));
        //const data = JSON.parse(localStorage.getItem('userData'));
        this.appservice.ligado = true;
        if(this.services.items.length>0) {
          this.navCtrl.setRoot(FinalizarCompraPage);
        }else{
          this.navCtrl.setRoot(HomePage);

        }
      } else{
        let alert = this.alertCtrl.create({
          title: 'Erro',
          subTitle: 'Erro ao fazer login! Você digitou a login ou a senha incorreta!',
          buttons: ['OK']
        });
        alert.present();
      }
    }, (err) => {

    });

  }
  goToPageCad() {
    this.navCtrl.setRoot(CadastrarPage);
  }
  goToPageInicial(){
    this.navCtrl.setRoot(InicialLoginPage);
  }


}

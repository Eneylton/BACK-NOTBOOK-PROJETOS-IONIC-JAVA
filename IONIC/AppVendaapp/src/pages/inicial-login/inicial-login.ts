import { Component } from '@angular/core';
import {NavController} from "ionic-angular";

import {LoginPage} from "../login/login";
import {CadastrarPage} from "../cadastrar/cadastrar";
import {HomePage} from "../home/home";
import {Storage} from "@ionic/storage";

@Component({
  selector: 'page-inicial-login',
  templateUrl: 'inicial-login.html',
})
export class InicialLoginPage {

  constructor(public navCtrl: NavController, private storage: Storage) {
    this.storage.get('userData').then((data)=>{
      if(data!=null){
        this.navCtrl.setRoot(HomePage,{},{animate: true, animation: "transition"});
      }
    });
  }
  goToPageLogin() {
    this.navCtrl.setRoot(LoginPage,{},{animate: true, animation: "transition"});
  }
  goToPageCad() {
    this.navCtrl.setRoot(CadastrarPage,{},{animate: true, animation: "transition"});
  }
  goToPageHome() {
    this.navCtrl.setRoot(HomePage,{},{animate: true, animation: "transition"});
  }


}

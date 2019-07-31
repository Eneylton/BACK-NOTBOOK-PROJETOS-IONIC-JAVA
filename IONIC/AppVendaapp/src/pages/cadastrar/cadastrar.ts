import { Component } from '@angular/core';
import {NavController } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {InicialLoginPage} from "../inicial-login/inicial-login";
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import {HomePage} from "../home/home";
import {Storage} from "@ionic/storage";

@Component({
  selector: 'page-cadastrar',
  templateUrl: 'cadastrar.html',
})
export class CadastrarPage {
  responseData : any;
  userData = {"nome": "","telefone": "", "email": "","senha": ""};
  public dados: any;
  userDetails : any;

  userPostData = {"user_id":"","token":""};

  constructor(public navCtrl: NavController, public authService: AuthServiceProvider, public storage: Storage) {
    this.storage.ready().then(()=>{
      this.storage.get('userData').then((data)=>{
        if(data!=null){
          this.userDetails = data.userData;
          this.userPostData.user_id = data.userData[0].user_id;
          this.navCtrl.setRoot(HomePage);
          this.userPostData.token = this.userDetails.token;
        }else{
          console.log(data);
        }
      });
    });
  }

  signup(){
    this.authService.postData(this.userData,'postCadastro').then((result) => {
      this.responseData = result;
      if(this.responseData.userData){
        console.log(this.responseData);
        localStorage.setItem('userData', JSON.stringify(this.responseData));
        this.navCtrl.setRoot(HomePage);
      }
      else{ console.log("User already exists"); }
    }, (err) => {
      // Error log
    });

  }

  login(){
    //Login page link
    this.navCtrl.push(LoginPage);
  }

  goToPageLogin() {
    this.navCtrl.setRoot(LoginPage);
  }
  goToPageInicial() {
    this.navCtrl.setRoot(InicialLoginPage);
  }

}

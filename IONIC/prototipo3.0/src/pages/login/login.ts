import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController, NavParams, ToastController, AlertController, IonicPage } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';

@IonicPage({})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  backgrounds = [
    'assets/imgs/background-1.jpg',
    'assets/imgs/background-2.jpg',
    'assets/imgs/background-3.jpg',
    'assets/imgs/background-4.jpg'
  ];
  public loginForm: any;
  username: string;
  password: string;

  constructor(public formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams, public http: Http,
    public toastCtrl: ToastController, public alertCtrl: AlertController, public storage: Storage) {

    this.username = "";
    this.password = "";

    this.loginForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.compose([Validators.minLength(6),
      Validators.required])]
    });
  }

  login() {

    this.http.get("https://purezaweb.com/api/auth/generate_auth_cookie/?insecure=cool&username=" + this.username + "&password=" + this.password)
      .subscribe((res) => {
        console.log(res.json());

        let response = res.json();

        if (response.error) {
          this.toastCtrl.create({
            message: response.error,
            duration: 5000
          }).present();
          return;
        }


          this.storage.set("userLoginInfo", response).then( (data) =>{

            this.alertCtrl.create({
              title: "Parabens",
              message: "Login realizado com sucesso.",
              buttons: [{
                text: "Entrar",
                handler: ()=> {
                  this.navCtrl.push(TabsPage);
                }
              }]
            }).present();
    
    
          })
    
        });

      }

      openPage(pageName: string){
        if(pageName == "signup"){
          this.navCtrl.push('SingupPage');
        }
      }
    
    }

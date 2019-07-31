import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth/auth-service';


@IonicPage({})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private authService: AuthService) {
  }

  signOut(){
    this.authService.signOut()
    .then(() => {

      this.navCtrl.setRoot('SignupPage');
    }).catch((error)=>{
      console.log(error)  
    });
  }
}

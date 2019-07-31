import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import {CartPage} from "../cart/cart";
import {NavController} from "ionic-angular";
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";


@Component({
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root = AboutPage;
  tab2Root = ContactPage;
  tab3Root = CartPage;

  userDetails : any;
  responseData: any;

  userPostData = {"user_id":"","token":""};


  constructor(public navCtrl: NavController, public authService: AuthServiceProvider) {
    const data = JSON.parse(localStorage.getItem('userData'));
    if(data){
      this.userDetails = data.userData;
      this.userPostData.user_id = this.userDetails.user_id;
      this.userPostData.token = this.userDetails.token;
    }
  }

}

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides } from 'ionic-angular';


@IonicPage({})
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  
  @ViewChild('slider') slider: Slides;

  slideIndex = 0;
  slides = [
   
    {
      title: '',
      sub:'',
      subtitulo:'',
      imageUrl: 'assets/imgs/banner2.jpg',
      description: '',
    },
    {
      title: '',
      sub:'',
      subtitulo:'',
      imageUrl: 'assets/imgs/banner.jpg',
      description: '',
    }
  ];

  constructor(public navCtrl: NavController) { 

  }
 
  onSlideChanged() {
    this.slideIndex = this.slider.getActiveIndex();
    console.log('Slide changed! Current index is', this.slideIndex);
  }

  openLoginPage(login) {

    this.navCtrl.push('Login', { "login": login });
  }

  openSingupPage(singup) {

    this.navCtrl.push('Signup', { "singup": singup });
  }



 
}

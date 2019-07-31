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
      title: 'For the Weekend',
      imageUrl: 'assets/imgs/wishlist-2.jpg',
      description: 'Take a look at our amazing options',
    },
    {
      title: 'Family Time',
      imageUrl: 'assets/imgs/wishlist-3.jpg',
      description: 'Take a look at our amazing options',
    },
    {
      title: 'My Trip',
      imageUrl: 'assets/imgs/wishlist-4.jpg',
      description: 'Take a look at our amazing options',
    }
  ];

  constructor(public navCtrl: NavController) { }

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

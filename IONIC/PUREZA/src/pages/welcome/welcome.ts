import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, IonicPage, Slides } from 'ionic-angular';

@IonicPage({})
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  @ViewChild('slider') slider: Slides;

  splash = true;
  tabBarElement:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.tabBarElement = document.querySelector('.tabbar');

  }

  ionViewDidLoad() {
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      this.tabBarElement.style.display = 'none';
    }, 4000);
}



  slideIndex = 0;
  slides = [
    {
      title: 'Dream\'s Adventure',
      imageUrl: '../../assets/imgs/12.png',
      description: 'Take a look at our amazing options',
    },
    {
      title: 'For the Weekend',
      imageUrl: '../../assets/imgs/08.png',
      description: 'Take a look at our amazing options',
    }
  ];


  onSlideChanged() {
    this.slideIndex = this.slider.getActiveIndex();
    console.log('Slide changed! Current index is', this.slideIndex);
  }

 

  openCadastro() {
  this.navCtrl.setRoot('CadastroPage');
}

}

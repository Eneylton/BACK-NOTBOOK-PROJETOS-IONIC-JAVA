import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'Mapa_1Page';

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Longitude e Latitude', component: 'Mapa_1Page' },
      { title: 'Mapa Simples', component: 'Mapa_2Page' },
      { title: 'Mapa com JavaScript', component: 'Mapa_3Page' },
      { title: 'Mapa com GeoLocalização', component: 'Mapa_4Page' },
      { title: 'Mapa com Rotas', component: 'Mapa_5Page' },
      { title: 'Mapa com CEP ', component: 'Mapa_6Page' },
      { title: 'Minha Localiza e CEP ', component: 'Mapa_7Page' }
  
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

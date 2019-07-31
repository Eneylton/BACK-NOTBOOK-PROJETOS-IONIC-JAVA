import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PagSeguroService } from '../pages/pagseguro/pagseguro.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;
  
  
  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              public pagSeguroService: PagSeguroService ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });


    this.platform.ready().then(() => {
      // Inicialize a biblioteca do PagSeguro bo seu app.component
      this.pagSeguroService.setOptions({
        scriptURL: 'https://stc.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.directpayment.js',
        remoteApi: {
          sessionURL: 'https://myapp.cloudfunctions.net/startSession',
          checkoutURL: 'https://myapp.cloudfunctions.net/checkout'
        } 
      });
    }); 
    
    // pre-loading script
    setTimeout(() => {
      this.pagSeguroService.loadScript();
    }, 1000);

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

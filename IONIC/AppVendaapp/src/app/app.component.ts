import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import {Storage} from "@ionic/storage";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import {InicialLoginPage} from "../pages/inicial-login/inicial-login";
import {CategoriaPage} from "../pages/categoria/categoria";
import {PerfilPage} from "../pages/perfil/perfil";
import {MeusPedidosPage} from "../pages/meus-pedidos/meus-pedidos";



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  public dados: any;
  public logado: boolean;

  pages: Array<{title: string, component: any, icon: string}>;
  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public storage: Storage) {
    this.initializeApp();
    this.logado = true;
    this.pages = [
      { title: 'Home', component: HomePage ,icon: 'ios-home-outline'},
      { title: 'Categoria', component: CategoriaPage,icon: 'ios-apps-outline' },
      { title: 'Perfil', component: PerfilPage,icon: 'ios-contact-outline' },
      { title: 'Meus pedidos', component: MeusPedidosPage,icon: 'ios-basket' },
    ];
    this.storage.get('userData').then((data)=>{
      console.log(data);
    });
    //const data = JSON.parse(localStorage.getItem('userData'));
    // if(data!=null){
    //   this.dados = data.userData;
    // }
    // console.log(this.dados);
    // if(this.dados!=null){
    //
    // }else{
    //
    // }
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
    this.nav.push(page.component);
  }
  // backToWelcome(){
  //   //const rootNavs = this.app.getRootNavs();
  //   const rootNavs = this.nav;
  //   rootNavs.setRoot();
  // }
  logout(){
    this.storage.clear();
    //setTimeout(() => this.backToWelcome(), 1000);
  }
  inicioLogin(){
    this.nav.push(InicialLoginPage,{},{animate: true, animation: "transition"});
  }

}

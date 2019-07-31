import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { InicialLoginPage } from '../pages/inicial-login/inicial-login';
import { CadastrarPage } from "../pages/cadastrar/cadastrar";
import {FinalizarPagamentoPage} from "../pages/finalizar-pagamento/finalizar-pagamento";
import {CategoriaPage} from "../pages/categoria/categoria";
import {ProdutoDetalhePage} from "../pages/produto-detalhe/produto-detalhe";
import {ProdutoCategoriaPage} from "../pages/produto-categoria/produto-categoria";
import {PerfilEditPage} from "../pages/perfil-edit/perfil-edit";
import {PayPal} from "@ionic-native/paypal";
import {PerfilPage} from "../pages/perfil/perfil";
import {MeusPedidosPage} from "../pages/meus-pedidos/meus-pedidos";
import {NaoFinalizadosPage} from "../pages/nao-finalizados/nao-finalizados";
import {FinalizadosPage} from "../pages/finalizados/finalizados";
import { KSSwiperModule } from 'angular2-swiper';
import {DataServices} from '../providers/data/data-services';



import { TabsPage } from '../pages/tabs/tabs';
import { CartService } from "../pages/cart/cart.service";
import { CartPage } from "../pages/cart/cart";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HeroServiceProvider } from '../providers/hero-service/hero-service';
import { FinalizarCompraPage } from "../pages/finalizar-compra/finalizar-compra";
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { UrlProvider } from '../providers/url/url';
import {AppService} from "./app-service";

registerLocaleData(localePt);
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CartPage,
    FinalizarCompraPage,
    LoginPage,
    InicialLoginPage,
    CadastrarPage,
    FinalizarPagamentoPage,
    CategoriaPage,
    ProdutoDetalhePage,
    ProdutoCategoriaPage,
    PerfilPage,
    PerfilEditPage,
    MeusPedidosPage,
    NaoFinalizadosPage,
    FinalizadosPage

  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    KSSwiperModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CartPage,
    FinalizarCompraPage,
    LoginPage,
    InicialLoginPage,
    CadastrarPage,
    FinalizarPagamentoPage,
    CategoriaPage,
    ProdutoDetalhePage,
    ProdutoCategoriaPage,
    PerfilPage,
    PerfilEditPage,
    MeusPedidosPage,
    NaoFinalizadosPage,
    FinalizadosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HeroServiceProvider,
    CartService,PayPal,
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    AuthServiceProvider,
    UrlProvider,
    AppService,
    DataServices
  ]
})
export class AppModule {}

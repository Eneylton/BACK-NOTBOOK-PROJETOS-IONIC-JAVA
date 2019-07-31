import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { DatePipe } from '@angular/common';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PagseguroProvider } from '../providers/pagseguro/pagseguro';
import { VarGlobalProvider } from '../providers/var-global/var-global';
import { ProductHtmlProvider } from '../providers/product-html/product-html';
import { CartProvider } from '../providers/cart/cart';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({name: '__dbpagseguro'}),
    HttpModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PagseguroProvider, DatePipe,
    VarGlobalProvider,
    ProductHtmlProvider,
    CartProvider
  ]
})
export class AppModule {}

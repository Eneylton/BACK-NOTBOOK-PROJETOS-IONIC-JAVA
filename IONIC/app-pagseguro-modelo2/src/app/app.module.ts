import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { DatePipe } from '@angular/common';

import { MyApp } from './app.component';
import {HttpModule} from "@angular/http";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductHttpProvider } from '../providers/product-http/product-http';
import { PaymentHttpProvider } from '../providers/payment-http/payment-http';
import { CartProvider } from '../providers/cart/cart';
import { VarGlobalProvider } from '../providers/var-global/var-global';



@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({name: '__db_pagseguro'}),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ProductHttpProvider,
    PaymentHttpProvider,
    CartProvider,
    DatePipe,
    VarGlobalProvider
  ]
})
export class AppModule { }

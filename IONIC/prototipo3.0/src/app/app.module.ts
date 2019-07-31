import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { CartPage } from '../pages/cart/cart';
import { WelcomePage } from '../pages/welcome/welcome'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { TabsPage }  from '../pages/tabs/tabs'
import { PayPal } from '@ionic-native/paypal';
import { IonicStorageModule } from '@ionic/storage';
import { WoocommerceProvider } from '../providers/woocommerce/woocommerce';

@NgModule({
  declarations: [
    MyApp,
    CartPage,
    TabsPage,
    WelcomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CartPage,
    TabsPage,
    WelcomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PayPal,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WoocommerceProvider
  ]
})
export class AppModule {}

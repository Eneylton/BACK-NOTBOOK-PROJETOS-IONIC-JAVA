import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { CurrencyPipe } from '@angular/common';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { HttpModule } from '@angular/http';

import { LOCALE_ID } from '@angular/core';
import localePT from '@angular/common/locales/pt';
import localeExtraPT from '@angular/common/locales/extra/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePT, 'pt', localeExtraPT);

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrMaskerModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CurrencyPipe,
    { provide: LOCALE_ID, useValue: "pt" },
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

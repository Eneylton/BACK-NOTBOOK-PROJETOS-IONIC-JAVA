import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthService } from '../providers/auth/auth-service';
import { ContactService } from '../providers/contact-service/contact-service';

import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';

const firebaseConfig = {
  apiKey: "AIzaSyAXI9WbmbHNSOWTX05No7ymo0qwHgcR1co",
  authDomain: "app-pureza-store.firebaseapp.com",
  databaseURL: "https://app-pureza-store.firebaseio.com",
  projectId: "app-pureza-store",
  storageBucket: "",
  messagingSenderId: "754961546979",
  appId: "1:754961546979:web:21b26da872f7f486"
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    ContactService,
    GooglePlus,
    Facebook
  ]
})
export class AppModule {}

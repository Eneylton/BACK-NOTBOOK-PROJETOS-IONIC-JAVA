import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from './user';
import * as firebase from 'firebase/app';
import { GooglePlus } from '@ionic-native/google-plus';
import { Observable } from "rxjs/Observable";
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@Injectable()
export class AuthService {

  userFacebook:any;
  user: Observable<firebase.User>;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private facebook: Facebook,
    private googlePlus: GooglePlus) {

    this.user = angularFireAuth.authState;

  }

  signInWithGoogle() {
    return this.googlePlus.login({
      'webClientId': '754961546979-kifcu2ds20o30rv35v2pvv98dc3ubcta.apps.googleusercontent.com',
      'offline': true
    })
      .then(res => {
        return this.angularFireAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
          .then(success => {
            console.log(JSON.stringify(success));
          }).catch((err) => {
            console.log(err);
          });
      }).catch((error) => { console.log(error) });
  }

  signInWithFacebook() {
    return this.facebook.login(['public_profile', 'email'])
      .then((res: FacebookLoginResponse) => {
        return this.angularFireAuth.auth.signInWithCredential(firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken))
        .then(success => {
          if(success.user.uid) {
          
            console.log(success.user.email);
            this.getUserDetail(res.authResponse.userID);
          }
        }).catch((err) => {
          console.log(err);
        });
    }).catch((error) => { console.log(error) });
  }


  
  getUserDetail(userid): Promise<any> {
    return this.facebook.api("/" + userid + "/?fields=id,email,name,picture,gender", ["public_profile"])
      .then(res => {

        console.log("Chegou aki - Facebook: ", res);
        this.userFacebook = res;
      })
      .catch(e => {
        console.log(e);
      });
  }

  createUser(user: User) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }


  singIn(user: User) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }


  signOut() {

    if (this.angularFireAuth.auth.currentUser.providerData.length) {
      for (var i = 0; i < this.angularFireAuth.auth.currentUser.providerData.length; i++) {
        var provider = this.angularFireAuth.auth.currentUser.providerData[i];
      }
      if (provider.providerId == firebase.auth.GoogleAuthProvider.PROVIDER_ID) { // Se for o gooogle
        return this.googlePlus.disconnect()
          .then(() => {
            return this.signOutFirebase();
          });
      }

      else if (provider.providerId == firebase.auth.FacebookAuthProvider.PROVIDER_ID) { // Se for o gooogle
        return this.facebook.logout()
          .then(() => {
            return this.signOutFirebase();
          });
      }

    }
    return this.signOutFirebase();
  }


  signOutFirebase() {

    return this.angularFireAuth.auth.signOut();
  }

  resetPassword(email: string) {

    return this.angularFireAuth.auth.sendPasswordResetEmail(email);

  }

}

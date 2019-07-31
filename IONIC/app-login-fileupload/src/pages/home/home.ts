import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth/auth-service';
import { AngularFireAuth } from 'angularfire2/auth';


@IonicPage({})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  displayName: string;
  displayEmail: string;
  imgUrl: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private authService: AuthService,
    private afAuth: AngularFireAuth) {
    
    const autObserver = this.afAuth.authState.subscribe(user => {
      this.displayName = '';
      this.imgUrl = '';
      if (user) {
        this.displayName = user.displayName;
        this.imgUrl = user.photoURL;
        this.displayEmail = user.email;

        autObserver.unsubscribe();
      }
    });
  }

  

  signOut() {
    this.authService.signOut()
      .then(() => {

        this.navCtrl.setRoot('SignupPage');
      }).catch((error) => {
        console.log(error)
      });
  }
}

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { User } from '../../providers/auth/user';
import { AuthService } from '../../providers/auth/auth-service';

@IonicPage({})
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  user: User = new User();
  @ViewChild('form') form: NgForm;

  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private authService: AuthService
    ) {
  }

  createAccount() {
    this.navCtrl.push('SignupPage');
  }

  singIn(){
    if (this.form.form.valid) {
  
      this.authService.singIn(this.user)
      .then(()=>{
        this.navCtrl.setRoot('HomePage');
      }).catch((error:any)=>{
       
       let toast = this.toastCtrl.create({ duration:3000, position: 'bottom' });
      
       if(error.code == 'auth/invalid-email'){

        toast.setMessage('O email digitado não é valido.');

       }else if(error.code == 'auth/user-disabled'){

        toast.setMessage('O usuário está destivado');
       }else if(error.code == 'auth/user-not-found'){

        toast.setMessage('O usuário não foi encontrado.');
       }else if(error.code == 'auth/wrong-password'){

        toast.setMessage('A senha digitada não é valida');
       }

       toast.present();

      });

    }
  }

  signInWithGoogle(){
    this.authService.signInWithGoogle()
    .then(()=>{
      this.navCtrl.setRoot('HomePage');
    })
    .catch((error)=>{
      this.toastCtrl.create({ duration:3000, position: 'bottom', message: 'Error ao Efetuar o Login !!!!'})
      .present();
    })
  }

  signInWithFacebook() {
    this.authService.signInWithFacebook()
      .then(() => {

        this.navCtrl.setRoot('HomePage');
      })
      .catch((error) => {
        this.toastCtrl.create({ duration: 3000, position: 'bottom', message: 'Erro ao efetuar o login' })
          .present();
      });
  }

  openRedefinir(){
    this.navCtrl.setRoot('ResetpasswordPage');
  }
  
}

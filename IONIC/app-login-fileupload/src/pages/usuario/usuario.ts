import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';



@IonicPage({})
@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html',
})
export class UsuarioPage {
  displayName: string;
  imgUrl: string;

  constructor(public navCtrl: NavController) {

  }

 
}

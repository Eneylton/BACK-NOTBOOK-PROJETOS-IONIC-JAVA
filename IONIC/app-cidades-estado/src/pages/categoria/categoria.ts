import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoriaServerProvider } from '../../providers/categoria-server/categoria-server';
import { Categoria } from '../../model/categoria';

@IonicPage({})
@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage {

  formGroup: FormGroup;

  items: Categoria[];

  constructor(public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    private servidor: CategoriaServerProvider,
    public alertCtrl: AlertController
  ) {

    this.formGroup = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(120)]]
    })
  }

  adicionar() {
    this.servidor.insert(this.formGroup.value)
      .subscribe(response => {
        this.showInsertOk();
      },
        error => { });

  }

  showInsertOk() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      message: 'Cadastro efetuado com sucesso',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.setRoot('HomePage')
          }
        }
      ]
    });
    alert.present();
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ConnectProvider } from '../../providers/connect/connect';
import { CategoriaDTO } from '../../model/categoriaDTO';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@IonicPage({})
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  formGroup: FormGroup;

  itens: CategoriaDTO[];

  constructor(public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    private servidor: ConnectProvider,
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

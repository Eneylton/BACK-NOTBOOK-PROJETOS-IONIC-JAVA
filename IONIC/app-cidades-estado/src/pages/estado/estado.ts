import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Estado } from '../../model/estado';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EstadoServiceProvider } from '../../providers/estado-service/estado-service';


@IonicPage({})
@Component({
  selector: 'page-estado',
  templateUrl: 'estado.html',
})
export class EstadoPage {

  formGroup: FormGroup;

  items: Estado[];

  constructor(public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    private servidor: EstadoServiceProvider,
    public alertCtrl: AlertController
  ) {

    this.formGroup = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(120)]]
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
            this.navCtrl.setRoot('ListaEstadoPage')
          }
        }
      ]
    });
    alert.present();
  }
}


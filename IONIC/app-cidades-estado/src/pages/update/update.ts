import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaServerProvider } from '../../providers/categoria-server/categoria-server';


@IonicPage({})
@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
})
export class UpdatePage {

  formGroup: FormGroup;

  constructor(public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private servidor: CategoriaServerProvider
  ){
    this.formGroup = this.formBuilder.group({
      id: [null, [Validators.required, Validators.maxLength(120)]],
      nome: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(120)]]
    })
  }

  ionViewDidLoad() {
    let items =  this.navParams.get('item');
    this.popularCampos(items);
    }

  editar() {
    let items =  this.navParams.get('item');
    console.log(items);
    this.servidor.update(this.formGroup.value,items.id)
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

  popularCampos(dados){
    
    this.formGroup.controls['id'].setValue(dados.id);
    this.formGroup.controls['nome'].setValue(dados.nome);
  
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GaleriaServiceProvider } from '../../providers/galeria-service/galeria-service';


@IonicPage({})
@Component({
  selector: 'page-editar-galeria',
  templateUrl: 'editar-galeria.html',
})
export class EditarGaleriaPage {

  formGroup: FormGroup;

  constructor(public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private servidor: GaleriaServiceProvider
  ) {

    this.formGroup = this.formBuilder.group({
      id: [null, [Validators.required]],
      nome: [null, [Validators.required]],
      img: [null, [Validators.required]]
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
      message: 'Cadastro Atualizado com sucesso',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.setRoot('ListarGaleriaPage')
          }
        }
      ]
    });
    alert.present();
  }

  popularCampos(dados){
    
    this.formGroup.controls['id'].setValue(dados.id);
    this.formGroup.controls['nome'].setValue(dados.nome);
    this.formGroup.controls['img'].setValue(dados.img);
  
  }

}

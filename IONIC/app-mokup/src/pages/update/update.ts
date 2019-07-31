import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



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
    public alertCtrl: AlertController
  ) {

    this.formGroup = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      email: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      whatsapp: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(120)]]
    })

  }

  ionViewDidLoad() {
  let contatos =  this.navParams.get('contato');
  this.popularCampos(contatos);
  }

  popularCampos(dados){
    
    this.formGroup.controls['nome'].setValue(dados.nome);
    this.formGroup.controls['email'].setValue(dados.email);
    this.formGroup.controls['whatsapp'].setValue(dados.whatsapp);
  }

}

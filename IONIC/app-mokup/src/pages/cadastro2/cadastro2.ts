import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SelectSearchableComponent } from 'ionic-select-searchable';

@IonicPage({})
@Component({
  selector: 'page-cadastro2',
  templateUrl: 'cadastro2.html',
})


export class Cadastro2Page {

  @ViewChild('mySelect') selectComponent: SelectSearchableComponent;

  formGroup: FormGroup;

  user = null;
  userIds = [];

  users = [
    {
      "id": 0,
      "nome": "Eneylton Barros",
      "cidade": "São Luís"
    },
    {
      "id": 1,
      "nome": "Maria Barros",
      "cidade": "São Luís"
    }

  ];


  sexoSelecionado: any;

  constructor(public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {

    this.formGroup = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      email: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      whatsapp: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      user: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(120)]]
    })

  }

  sexoChange(event: {
    component: SelectSearchableComponent,
    value: any
  }) {
    console.log("Resposta: ", event.component);
    console.log("Valor: ", event.value);
  }


  openFromCode(){
    this.selectComponent.open();
  }
}

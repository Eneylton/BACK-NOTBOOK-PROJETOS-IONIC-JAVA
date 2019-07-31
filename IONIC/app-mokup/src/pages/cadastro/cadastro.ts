import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonicSelectableComponent } from 'ionic-selectable';



@IonicPage({})
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  
  formGroup: FormGroup;
  
    sexos = [
    {
      "id": "1",
      "desc": "Masculino"
    },
    {
      "id": "2",
      "desc": "Feminino"
    }
  ];

  sexoSelecionado:any;




  constructor(public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {

    this.formGroup = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      email: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      whatsapp: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      sexo: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(120)]]
    })

     
  }

  sexoChange(event:{
    component: IonicSelectableComponent,
    value:any
  }){
    console.log("Resposta: ", event.component);
    console.log("Valor: ", event.value);
  }
}

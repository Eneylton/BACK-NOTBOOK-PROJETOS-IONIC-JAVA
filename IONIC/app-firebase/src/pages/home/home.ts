import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { ContactProvider, ContactList } from '../../providers/contact/contact';

@IonicPage({})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  listarContatos:ContactList[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private service: ContactProvider,
              private toaste: ToastController) {
  }

  ionViewDidEnter() {
  this.service.getAll().then(results=>{

    this.listarContatos = results;

  })
  }

  adicionarContatos(){
    this.navCtrl.push('EditContactPage');
  }

  editarContato(item: ContactList){

    this.navCtrl.push('EditContactPage', {key: item.key,contact:item.contato});

  }

  removerContato(item: ContactList){
    this.service.remove(item.key)
    .then(()=>{

      let index = this.listarContatos.indexOf(item);
      
      this.listarContatos.splice(index,1);

      this.toaste.create({
        message:'Contato Removido',
        duration:4000,
        position:'top'
      }).present();

    }).catch(()=>{

    })
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ContactProvider, Contact } from '../../providers/contact/contact';


@IonicPage()
@Component({
  selector: 'page-edit-contact',
  templateUrl: 'edit-contact.html',
})
export class EditContactPage {

  model: Contact;
  key: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private service: ContactProvider,
    private toaste: ToastController) {

    if (navParams.data.contact && navParams.data.key) {

      this.model = this.navParams.data.contact;
      this.key = this.navParams.data.key;

    } else {

      this.model = new Contact();
    }
  }

  save() {

    this.saveContato()
    .then(()=>{
      this.toaste.create({
        message:'Contato Salvo',
        duration:4000,
        position:'top'
      }).present();

      this.navCtrl.pop();
    })
    .catch(()=>{

      this.toaste.create({
        message:'Error ao Salvar o contato',
        duration:4000,
        position:'bottom'
      }).present();

    })

  }

  private saveContato() {

    if (this.key) {
      return this.service.update(this.key, this.model);
    } else {
      return this.service.insert(this.model);
    }

  }

}

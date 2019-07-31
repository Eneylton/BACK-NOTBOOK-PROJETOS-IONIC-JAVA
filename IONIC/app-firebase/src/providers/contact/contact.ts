import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactProvider {

  constructor(private storage: Storage, private datepipe: DatePipe) {}

  public insert(contato: Contact){

    let key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");
    return this.save(key,contato);

  }
  public update(key:string, contato: Contact){
    return this.save(key,contato);

  }
  private save(key:string, contato: Contact){

    return this.storage.set(key,contato);

  }

  public remove(key:string){
    return this.storage.remove(key);

  }

  public getAll(){

    let listarContatos: ContactList[]=[];

    return this.storage.forEach((value:Contact, key:string, intratioNumber: Number)=>{

      let contact = new ContactList();
      contact.key = key;
      contact.contato = value;

      listarContatos.push(contact);

    }).then(()=>{

      return Promise.resolve(listarContatos);

    }).catch((error)=>{

      return Promise.reject(error);
    })

  }
}

export class Contact {
  nome:string;
  telefone:number;
  data:Date;
  status:boolean;
}

export class ContactList{

  key:string;
  contato:Contact;
}
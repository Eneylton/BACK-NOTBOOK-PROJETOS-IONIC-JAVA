import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { EstadoServiceProvider } from '../../providers/estado-service/estado-service';
import { Estado } from '../../model/estado';


@IonicPage({})
@Component({
  selector: 'page-lista-estado',
  templateUrl: 'lista-estado.html',
})
export class ListaEstadoPage {

  items:Estado[];

  constructor(public navCtrl: NavController, 
    private service: EstadoServiceProvider) {

}


ionViewDidLoad() {
  this.service.buscarTodos().subscribe(response =>{
   
    this.items = response;

    console.log(response);

  },
  error =>{
    console.log(error);
  })
}

openEstado(){
  this.navCtrl.push('EstadoPage');
}

}
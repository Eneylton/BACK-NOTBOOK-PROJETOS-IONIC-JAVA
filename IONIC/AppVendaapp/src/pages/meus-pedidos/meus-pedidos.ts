import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {NaoFinalizadosPage} from "../nao-finalizados/nao-finalizados";
import {FinalizadosPage} from "../finalizados/finalizados";



@Component({
  selector: 'page-meus-pedidos',
  templateUrl: 'meus-pedidos.html',
})
export class MeusPedidosPage {
  tab1Root = NaoFinalizadosPage;
  tab2Root = FinalizadosPage;
  //chatRoot = ChatPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }


}

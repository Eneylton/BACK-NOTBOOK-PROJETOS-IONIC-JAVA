import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage({})
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'ListaEstadoPage';
  tab3Root = 'CategoriaPage';
  

  constructor() {

  }
}

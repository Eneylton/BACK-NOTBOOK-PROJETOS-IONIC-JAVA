import { Component } from '@angular/core';
import { ContactPage } from '../contact/contact';
import { IonicPage } from 'ionic-angular';

@IonicPage({})
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'CadastroPage';
  tab3Root = ContactPage;

  constructor() {

  }
}

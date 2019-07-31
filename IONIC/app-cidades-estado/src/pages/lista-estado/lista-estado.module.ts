import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaEstadoPage } from './lista-estado';

@NgModule({
  declarations: [
    ListaEstadoPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaEstadoPage),
  ],
})
export class ListaEstadoPageModule {}

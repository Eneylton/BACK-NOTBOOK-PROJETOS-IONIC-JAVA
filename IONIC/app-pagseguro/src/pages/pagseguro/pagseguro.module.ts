import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagseguroPage } from './pagseguro';
import { PagSeguroModule } from 'ionic-pagseguro';

@NgModule({
  declarations: [
    PagseguroPage,
  ],
  imports: [
    IonicPageModule.forChild(PagseguroPage),
    PagSeguroModule.forChild()
  ],
})
export class PagseguroPageModule {}

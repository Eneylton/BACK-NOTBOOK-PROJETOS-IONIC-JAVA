import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarPage } from './listar';

@NgModule({
  declarations: [
    ListarPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarPage),
  ],
})
export class ListarPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarGaleriaPage } from './listar-galeria';

@NgModule({
  declarations: [
    ListarGaleriaPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarGaleriaPage),
  ],
})
export class ListarGaleriaPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarGaleriaPage } from './editar-galeria';

@NgModule({
  declarations: [
    EditarGaleriaPage,
  ],
  imports: [
    IonicPageModule.forChild(EditarGaleriaPage),
  ],
})
export class EditarGaleriaPageModule {}

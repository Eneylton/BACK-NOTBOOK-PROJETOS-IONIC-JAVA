import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroGaleriaPage } from './cadastro-galeria';

@NgModule({
  declarations: [
    CadastroGaleriaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroGaleriaPage),
  ],
})
export class CadastroGaleriaPageModule {}

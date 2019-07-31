import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstadoPage } from './estado';

@NgModule({
  declarations: [
    EstadoPage,
  ],
  imports: [
    IonicPageModule.forChild(EstadoPage),
  ],
})
export class EstadoPageModule {}

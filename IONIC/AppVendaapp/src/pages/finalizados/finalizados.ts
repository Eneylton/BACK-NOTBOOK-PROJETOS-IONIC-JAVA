import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HeroServiceProvider} from "../../providers/hero-service/hero-service";


@Component({
  selector: 'page-finalizados',
  templateUrl: 'finalizados.html',
})
export class FinalizadosPage {

  public obj: any;

  constructor(public navCtrl: NavController, public heroService: HeroServiceProvider) {
    const data = JSON.parse(localStorage.getItem('userData'));
    if(data!=null) {
      this.loadPedidos(data.userData[0].user_id);
    }
  }

  loadPedidos(id: number){
    this.heroService.loadPedido(id)
      .then(data => {
        if(!data){
          this.obj = [];
        }else{
          this.obj = data;
        }
        console.log(this.obj.userData);
        //this.heroes = this.obj.data;
      });
  }

}

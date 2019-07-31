import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Galeria } from '../../model/galeria.model';
import { GaleriaServiceProvider } from '../../providers/galeria-service/galeria-service';

@IonicPage({})
@Component({
  selector: 'page-listar-galeria',
  templateUrl: 'listar-galeria.html',
})
export class ListarGaleriaPage {
  
  items: Galeria[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private service: GaleriaServiceProvider) {
  }

  ionViewDidLoad() {

    this.onLoand();
   
  }

  onLoand(){

    this.service.buscarTodos().subscribe(response => {

      this.items = response;
      console.log(this.items);

    },
      error => {
        console.log(error);
      })

  }

  openCadastro() {
    this.navCtrl.push('CadastroGaleriaPage');
  }

  openEditar(item: any) {
    this.navCtrl.push('EditarGaleriaPage', { "item": item });
  }

  openImagem(item: any) {
    this.navCtrl.push('ImagemPage', { "item": item });
  }

  openExcluir(item: any){
    console.log(item.id);
    this.service.delete(item.id).subscribe(response =>{
      
      console.log(response);
      this.navCtrl.setRoot('ListarGaleriaPage');
    });

}

doRefresh(refresher) {

this.onLoand();
  setTimeout(() => {
  
    refresher.complete();
  }, 2000);
}

}
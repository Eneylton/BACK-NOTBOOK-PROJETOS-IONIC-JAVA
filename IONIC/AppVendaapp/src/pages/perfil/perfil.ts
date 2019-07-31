import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {HeroServiceProvider} from "../../providers/hero-service/hero-service";
import {PerfilEditPage} from "../perfil-edit/perfil-edit";
import {Storage} from "@ionic/storage";
import {InicialLoginPage} from "../inicial-login/inicial-login";

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  obj : any;
  public cep : number;
  public endereco : string;
  public numero : number;
  public complemento : string;
  public bairro : string;
  public cidade : string;
  public estado : string;
  public id: number;
  userData = {"cep": "","endereco": "", "numero": "","complemento": "","bairro":"","cidade":"","estado":"", "id":""};
  constructor(public navCtrl: NavController,
              public authService: AuthServiceProvider,
              private heroService: HeroServiceProvider,
              private storage: Storage) {
    this.storage.get('userData').then((data)=>{
      if(data==null){
        this.navCtrl.setRoot(InicialLoginPage,{},{animate: true, animation: "transition"});
      }
    });
    this.storage.get('userData').then((data2)=>{
      if(data2!=null){
        this.id = data2.userData[0].user_id;
      }
      this.heroService.loadPerfil(this.id).then(data => {
        this.cep = data[0].cep;
        this.endereco = data[0].endereco;
        this.numero = data[0].numero;
        this.complemento = data[0].complemento;
        this.bairro = data[0].bairro;
        this.cidade = data[0].cidade;
        this.estado = data[0].estado;
      });
    });



  }

  editarPeril(){
    this.navCtrl.push(PerfilEditPage,{},{animate: true, animation: "transition"});
  }

}

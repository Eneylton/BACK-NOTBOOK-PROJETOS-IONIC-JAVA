import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {HeroServiceProvider} from "../../providers/hero-service/hero-service";
import {Storage} from "@ionic/storage";

@Component({
  selector: 'page-perfil-edit',
  templateUrl: 'perfil-edit.html',
})
export class PerfilEditPage {
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
              private alertCtrl: AlertController,
              private storage: Storage) {


    this.storage.get('userData').then((data2)=>{
      if(data2!=null){
        this.id = data2.userData[0].user_id.toString();
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
  inserirEndereco(){
    this.authService.postData(this.userData,'postPerfil/'+this.id).then((result) => {
      this.obj = result;
      if(this.obj.userData){
        this.storage.set("userData", this.obj);
        let alert = this.alertCtrl.create({
          title: 'Sucesso',
          subTitle: 'Alterado com sucesso',
          buttons: ['OK']
        });
        alert.present();
        console.log(this.obj);
      } else{
        console.log("User already exists");
      }
    }, (err) => {
      // Error log
    });

  }


}

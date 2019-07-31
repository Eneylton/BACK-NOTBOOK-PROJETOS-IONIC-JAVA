import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Galeria } from '../../model/galeria.model';
import { GaleriaServiceProvider } from '../../providers/galeria-service/galeria-service';
import { HttpClient } from '@angular/common/http';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagemUtilProvider } from '../../providers/imagem-util/imagem-util';

@IonicPage({})
@Component({
  selector: 'page-cadastro-galeria',
  templateUrl: 'cadastro-galeria.html',
})
export class CadastroGaleriaPage {

  formGroup: FormGroup;
  fotoConvert:any;
  items: Galeria[];
  base64Img:string;
  foto:string;


  constructor(public navCtrl: NavController,
    public formBuilder: FormBuilder,
    private camera: Camera,
    public navParams: NavParams,
    private converter:ImagemUtilProvider,
    private servidor: GaleriaServiceProvider,
    public alertCtrl: AlertController, private http: HttpClient
  ) {

    this.formGroup = this.formBuilder.group({
      nome: [null, [Validators.required]],
      img:  [null, [Validators.required]]
    })
  }

  openGaleria(){

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
    this.camera.getPicture(options).then((imageData) => {
    
      this.foto = 'data:image/jpeg;base64,' + imageData;

      this.base64Img = imageData.substr(100,6).replace('/','eneylton').replace('+','enexs');

      this.fotoConvert = this.converter.dataUriToBlob(this.foto);
     
    }, (err) => {
      console.log(err);
     });
  }

  openCamera(){

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {

      this.foto = 'data:image/jpeg;base64,' + imageData;

      this.base64Img = imageData.substr(100,6).replace('/','eneylton').replace('+','enexs');

      this.fotoConvert = this.converter.dataUriToBlob(this.foto);

     }, (err) => {
      // Handle error
     });
     

  }

  adicionar() {
   
    let formData :  FormData = new FormData();

    formData.append('foto', this.fotoConvert,`${this.base64Img}.jpeg`);

    this.http.post('http://localhost:8080/fotos', formData)
    .subscribe(reposta=> console.log('Upload ok.'));

    this.servidor.insert(this.formGroup.value)
      .subscribe(response => {
        this.showInsertOk();
      },
        error => { });

  }

  showInsertOk() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      message: 'Cadastro efetuado com sucesso',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.setRoot('ListarGaleriaPage')
          }
        }
      ]
    });
    alert.present();
  }

}

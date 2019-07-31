import { Component } from '@angular/core';
import { NavController, ToastController, normalizeURL } from 'ionic-angular';

import { ImagePicker } from '@ionic-native/image-picker';
import { Crop } from '@ionic-native/crop';

import { FirbaseProvider } from '../../providers/firbase/firbase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  imagem : any;

  constructor(public navCtrl: NavController,
    public imagePicker: ImagePicker,
    public cropService: Crop,
    public toastCtrl: ToastController,
    public firebaseService: FirbaseProvider) {

  }

  openImagePickerCrop(){
    this.imagePicker.hasReadPermission().then(
      (result) => {
        if(result == false){
          // no callbacks required as this opens a popup which returns async
          this.imagePicker.requestReadPermission();
        }
        else if(result == true){
          this.imagePicker.getPictures({
            maximumImagesCount: 1
          }).then(
            (results) => {
              for (var i = 0; i < results.length; i++) {
                this.cropService.crop(results[i], {quality: 75}).then(
                  newImage => {
                    this.uploadImageToFirebase(newImage);
                  },
                  error => console.error("Error cropping image", error)
                );
              }
            }, (err) => console.log(err)
          );
        }
      }, (err) => {
        console.log(err);
      });
  }

  openImagePicker(){
    this.imagePicker.hasReadPermission().then(
      (result) => {
        if(result == false){
          // no callbacks required as this opens a popup which returns async
          this.imagePicker.requestReadPermission();
        }
        else if(result == true){
          this.imagePicker.getPictures({
            maximumImagesCount: 1
          }).then(
            (results) => {
              console.log(results);
              for (var i = 0; i < results.length; i++) {
                this.uploadImageToFirebase(results[i]);
              }
            }, (err) => console.log(err)
          );
        }
      }, (err) => {
        console.log(err);
      });
  }

  uploadImageToFirebase(image){
    image = normalizeURL(image);

    //uploads img to firebase storage
    this.firebaseService.uploadImage(image)
    .then(photoURL => {
      console.log(photoURL);  
      let toast = this.toastCtrl.create({
        message: 'Upload Realizado com sucesso !!!',
        duration: 3000
      });
      toast.present();
      })
  }

}
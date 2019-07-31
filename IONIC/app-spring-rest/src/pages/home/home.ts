import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage({})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  categorias: any = [];

  constructor(public navCtrl: NavController, private http: Http) {
    this.listarCategoria();
  }

  listarCategoria() {

    this.http.get(`http://localhost:8080/categorias`)
      .map(res => res.json())
      .subscribe(data => {

        this.categorias = data;


      })

    }

}

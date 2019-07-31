import {Http, Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import {UrlProvider} from "../url/url";
import 'rxjs/add/operator/map';
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export class AuthServiceProvider {

  constructor(public http : Http, public url: UrlProvider) {

  }
  postData(credentials, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(this.url.url+"/json/" + type, JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

}

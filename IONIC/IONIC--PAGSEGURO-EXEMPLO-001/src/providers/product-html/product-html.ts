import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductHtmlProvider {

  constructor(public http: Http) {}

  query(): Observable<Array<any>> {
    return this.http.get('http://localhost:3000/products')
        .map(response => response.json());

      }
       
      get(id: number): Observable<Object> {
        return this.http.get(`http://localhost:3000/products/${id}`)
        .map(response => response.json()) ;
        
      }

      
      
    }

  

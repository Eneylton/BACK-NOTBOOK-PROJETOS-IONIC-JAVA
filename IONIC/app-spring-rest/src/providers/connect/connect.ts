import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CategoriaDTO } from "../../model/categoriaDTO";



@Injectable()
export class ConnectProvider {

  constructor(public http: HttpClient) {
  }

  insert(obj : CategoriaDTO) {
    return this.http.post(
        `http://localhost:8080/categorias`, 
        obj,
        { 
            observe: 'response', 
            responseType: 'text'
        }
    ); 
 
}
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../../config/api.config';
import { Categoria } from '../../model/categoria';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class ServiceProvider {

  constructor(public http: HttpClient) {
    
  }

  buscarTodos() : Observable < Categoria[] >{
   return this.http.get<Categoria[]>(`${API_CONFIG.baseUrl}/categorias`)   
  }

}

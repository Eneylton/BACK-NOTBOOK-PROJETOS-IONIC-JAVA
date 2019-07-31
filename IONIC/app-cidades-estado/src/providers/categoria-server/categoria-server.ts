import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Categoria } from '../../model/categoria';
import { API_CONFIG } from '../../config/api.config';


@Injectable()
export class CategoriaServerProvider {

  constructor(public http: HttpClient) {
    
  }

  buscarTodos() : Observable < Categoria[] >{
    return this.http.get<Categoria[]>(`${API_CONFIG.baseUrl}/categorias`)   
   }

   insert(obj : Categoria) {
    return this.http.post(`${API_CONFIG.baseUrl}/categorias`, 
        obj,
        { 
            observe: 'response', 
            responseType: 'text'
        }
    ); 
}

update(obj : Categoria,id :any) {
    return this.http.put(`${API_CONFIG.baseUrl}/categorias/${id}`, 
        obj,
        { 
            observe: 'response', 
            responseType: 'text'
        }
    ); 
}

delete(id :any) {
    return this.http.delete(`${API_CONFIG.baseUrl}/categorias/${id}`
    ); 
}

}
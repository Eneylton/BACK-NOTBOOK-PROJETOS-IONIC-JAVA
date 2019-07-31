import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estado } from '../../model/estado';
import { API_CONFIG } from '../../config/api.config';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class EstadoServiceProvider {

  constructor(public http: HttpClient) {

  }

  buscarTodos() : Observable < Estado[] >{
    return this.http.get<Estado[]>(`${API_CONFIG.baseUrl}/estados`)   
   }

   insert(obj : Estado) {
    return this.http.post(`${API_CONFIG.baseUrl}/estados`, 
        obj,
        { 
            observe: 'response', 
            responseType: 'text'
        }
    ); 

}

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../../config/api.config';
import { Observable } from 'rxjs/Rx';
import { Galeria } from '../../model/galeria.model';
import { Imagem } from '../../model/imagem.model';

@Injectable()
export class GaleriaServiceProvider {

  constructor(public http: HttpClient) {
  }

  buscarPorID(galeria_id : string) {
    return this.http.get<Galeria>(`${API_CONFIG.baseUrl}/galerias/${galeria_id}`);
  }

  buscarTodos(): Observable<Galeria[]> {
    return this.http.get<Galeria[]>(`${API_CONFIG.baseUrl}/galerias`);
  }

  insert(obj: Galeria) {
    return this.http.post(`${API_CONFIG.baseUrl}/galerias`,
      obj,
      {
        observe: 'response',
        responseType: 'text'
      }
    );


  }

  insertImg(obj: Imagem) {
    return this.http.post(`${API_CONFIG.baseUrl}/imagens`,
      obj,
      {
        observe: 'response',
        responseType: 'text'
      }
    );

  }
  update(obj: Galeria, id: any) {
    return this.http.put(`${API_CONFIG.baseUrl}/galerias/${id}`,
      obj,
      {
        observe: 'response',
        responseType: 'text'
      }
    );
  }

  delete(id: any) {
    return this.http.delete(`${API_CONFIG.baseUrl}/galerias/${id}`
    );
  }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class CepSeviceProvider {

  constructor(public http: HttpClient) {
  }

  buscarCEP(cep:String):any {
    return this.http.get(`http://viacep.com.br/ws/` + cep + `/json/`)
  }

}

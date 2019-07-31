import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {UrlProvider} from "../url/url";
import 'rxjs/add/operator/map';


/*
  Generated class for the HeroServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export class HeroServiceProvider {
  data: any;

  constructor(public http: HttpClient,public url: UrlProvider) {
    //console.log('Hello HeroServiceProvider Provider');
    //console.log(this.url.url);
  }

  load(page: number) {
      if (this.data) {
        return Promise.resolve(this.data);
      }
      return new Promise(resolve => {
        this.http.get(this.url.url+'/json/JsonProdutos/'+page)
          .subscribe(data => {
          resolve(data);
          }, err => {
            console.log('err');
        });
      });
  }
  loadFrete(cep: number) {
    //console.log(cep);
    return new Promise(resolve => {
      this.http.get('http://correios-server.herokuapp.com/frete?nCdServico=40215,41106&sCepOrigem=22041030&sCepDestino='+cep+'&nVlPeso=1&nCdFormato=1&nVlComprimento=20&nVlAltura=4&nVlLargura=11&nVlDiametro=20&nVlValorDeclarado=500')
        .subscribe(data =>  {
          resolve(data);
          //console.log(data);
        }, err => {
          console.log('err');
        });
    });
  }
  getProdutoCategoria(id: number){
    return new Promise(resolve => {
      this.http.get(this.url.url+'/json/JsonProdutosCat/'+id)
        .subscribe(data =>  {
          resolve(data);
          //console.log(data);
        }, err => {
          console.log('err');
        });
    });
  }
  loadCategoria() {
    return new Promise(resolve => {
      this.http.get(this.url.url+'/json/JsonCategoria')
        .subscribe(data => {
          resolve(data);
          console.log(data);
        }, err => {
          console.log('err');
        });
    });
  }
  loadPerfil(id: number) {
    return new Promise(resolve => {
      this.http.get(this.url.url+'/json/JsonPerfil/'+id)
        .subscribe(data => {
          resolve(data);
          //console.log(data);
        }, err => {
          console.log('err');
        });
    });
  }
  loadPedidoNaoFinalizados(id: number) {
    return new Promise(resolve => {
      this.http.get(this.url.url+'/json/JsonPedidosFinalizados/'+id)
        .subscribe(data => {
          resolve(data);
          console.log(data);
        }, err => {
          console.log('err');
        });
    });
  }
  loadPedido(id: number) {
    return new Promise(resolve => {
      this.http.get(this.url.url+'/json/JsonPedidos/'+id)
        .subscribe(data => {
          resolve(data);
          console.log(data);
        }, err => {
          console.log('err');
        });
    });
  }
  loadCarrinho(id: number){
    return new Promise(resolve => {
      this.http.get(this.url.url+'/json/JsonCart/'+id)
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log('err');
        });
    });
  }
  loadTamanho(id: number){
    return new Promise(resolve => {
      this.http.get(this.url.url+'/json/JsonTamanho/'+id)
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log('err');
        });
    });
  }
  loadCores(id: number){
    return new Promise(resolve => {
      this.http.get(this.url.url+'/json/JsonCor/'+id)
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log('err');
        });
    });
  }
  loadProdutoDestaque(id: number){
    return new Promise(resolve => {
      this.http.get(this.url.url+'/json/JsonDestques/'+id)
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log('err');
        });
    });
  }
  loadBanners(){
    return new Promise(resolve => {
      this.http.get(this.url.url+'/json/JsonBanner')
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log('err');
        });
    });
  }
  loadPaypal(){
    return new Promise(resolve => {
      this.http.get(this.url.url+'/json/JsonPaypal')
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log('err');
        });
    });
  }

}

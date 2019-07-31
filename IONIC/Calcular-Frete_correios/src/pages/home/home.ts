import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { CurrencyPipe } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  valorRetornoFrete:string;
  totalFrete:any;
  prazo:string;
  valorFrete:any;
  total:any;
  contatoForm: FormGroup;

  constructor(private currencyPipe: CurrencyPipe, public navCtrl: NavController,public formbuilder: FormBuilder, public http: Http) {
    this.contatoForm = this.formbuilder.group({
      cep: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      valor: [null, [Validators.required]],
      check: [null, [Validators.required]]
     })

  }

  getBuscaFrete() {
  
    const cep = this.contatoForm.controls['cep'].value;
    const valor = this.contatoForm.controls['valor'].value;
    const check = this.contatoForm.controls['check'].value;
   
    this.http.get(`http://correios-server.herokuapp.com/frete/prazo?nCdServico=${check}&sCepOrigem=65054530&sCepDestino=${cep}&nVlPeso=1&nCdFormato=1&nVlComprimento=20&nVlAltura=6&nVlLargura=20&nVlDiametro=20&nVlValorDeclarado=${valor}`)
    .map(res => res.json())
    .subscribe(data => {

      this.getExibirValores(data);
      
      this.valorFrete = data.response[0].Valor

      this.total = this.getSomarValores(parseFloat(valor),parseFloat(this.valorFrete.replace(',','.')));

      this.totalFrete = this.getCurrency(this.total);
         

    })
  }

  getExibirValores(dados){

    this.valorRetornoFrete = dados.response[0].Valor
    this.prazo = dados.response[0].PrazoEntrega;

  }

getSomarValores(valorInformado:any,valorFrete:any){
return (valorInformado + valorFrete);
}

getCurrency(amount: number) {
  return this.currencyPipe.transform(amount, 'BRL', true, '1.2-2');
}
}

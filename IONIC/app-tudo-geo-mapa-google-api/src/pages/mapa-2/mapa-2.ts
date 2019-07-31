import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({})
@Component({
  selector: 'page-mapa-2',
  templateUrl: 'mapa-2.html',
})
export class Mapa_2Page {

  imoveis: Array<Imovel>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.getImoveis();
  }

  getImoveis() {
    this.imoveis = [
      new Imovel('Apartamento com 2 Quartos para Venda ou Aluguel, 80 m²', 295.000, 'Rua Eduardo Viviani', '400', 'Boa Vista', 'Juiz de Fora', 'MG'),
      new Imovel('Parque Jardim dos Bandeirantes, 80 m²', 152.074, 'Avenida Garcia Rodrigues Paes', '0', 'Jóckey Club', 'Juiz de Fora', 'MG'),
      new Imovel('Apartamento com 2 Quartos à Venda, 72 m²', 138.000, 'Rua Aurora Tôrres', '10', 'Santa Luzia', 'Juiz de Fora', 'MG')];
  }
  }

  export class Imovel {
    nome: string;
    valor: number;
    logradouro: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string
    mapa: string;
  
    constructor(nome: string, valor: number, logradouro: string, numero: string, bairro: string, cidade: string, estado: string) {
      this.nome = nome;
      this.valor = valor;
      this.logradouro = logradouro;
      this.numero = numero;
      this.bairro = bairro;
      this.cidade = cidade;
      this.estado = estado;
      this.mapa = this.getMapa();
    }
  
    private getEndereco() {
      return this.logradouro + ', ' + this.numero + ' - ' + this.bairro + ', ' + this.cidade + ' - ' + this.estado;
    }
  
    private getMapa() {
      return 'https://maps.googleapis.com/maps/api/staticmap?zoom=15&size=400x400&markers=color:red|' + this.getEndereco() + '&key=AIzaSyBhqoM5_qhLoQaKuZhHS9IKMPugLOXa5tA'
    }

  }
  

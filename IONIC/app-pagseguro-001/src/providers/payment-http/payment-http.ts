import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";


@Injectable()
export class PaymentHttpProvider {

  constructor(public http: Http) {}

  getSession(): Observable<Object> {
    return this.http.get('https://lojistapureza.com.br/wp-admin/PagSeguro/servidor/session.php')
        .map(response => response.json());
}

doPayment(data): Observable<Object> {
    return this.http.post('https://lojistapureza.com.br/wp-admin/PagSeguro/servidor/payment.php', data)
        .map(response => response.json());
}

}


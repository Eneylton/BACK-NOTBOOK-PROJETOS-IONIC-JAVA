import { Injectable } from '@angular/core';
import * as WC from 'woocommerce-api';

@Injectable()
export class WoocommerceProvider {
  
  Woocommerce: any;
  constructor() {

    this.Woocommerce = WC({
      url: "https://purezaweb.com",
      consumerKey: "ck_ed57920b299140fbed550ec077234d756f2abf73",
      consumerSecret: "cs_ca01f30a42824b505ca053dad5de1d392236d2a9",
      queryStringAuth: true,
      wpAPI: true,
      version: "wcmp/v1"
    });

   

}

}
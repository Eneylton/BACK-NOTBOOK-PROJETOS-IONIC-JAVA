import { Injectable } from '@angular/core';


@Injectable()
export class CartProvider {
  items: Array<any> = [];
  total = 0;

  addItem(item) {
      this.items.push(item);
      this.calculateTotal();
  }

  removeItem(index) {
      this.items.splice(index, 1);
      this.calculateTotal();
  }

  calculateTotal() {
      let total = 0;
      this.items.forEach(item => {
          total += Number(item.price);
      });
      this.total = total;
  }
}

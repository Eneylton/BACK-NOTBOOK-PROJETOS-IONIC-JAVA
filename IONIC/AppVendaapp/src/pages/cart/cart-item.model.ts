import {MenuItem} from "../about/menu-item";

export class CartItemModel{
  constructor(public menuItem: MenuItem,public quantidade: number = 1){

  }

  value(): number{
    return this.menuItem.valor * this.quantidade;
  }
}

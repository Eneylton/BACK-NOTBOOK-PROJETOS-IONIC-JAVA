import {CartItemModel} from "./cart-item.model";
import {MenuItem} from "../about/menu-item";


export class CartService{
  items: CartItemModel[] = []

  public totalfrete: number;
  public totalFinal: number;

  clear(){
    this.items = []
  }

  addItem(item:MenuItem){
    let foundItem = this.items.find((mItem)=>mItem.menuItem.id === item.id)
    if(foundItem){
      //foundItem.quatidade = foundItem.quatidade + 1;
    }else{
      this.items.push(new CartItemModel(item))
    }
  }
  removeItem(item:CartItemModel){
      this.items.splice(this.items.indexOf(item), 1)
  }

  public total():number{
    return this.items
      .map(item => item.value())
      .reduce((prev, value)=> prev+value, 0)
  }




}

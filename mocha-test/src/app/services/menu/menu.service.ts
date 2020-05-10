import { Injectable } from '@angular/core';
import { Food } from 'src/app/entities/food/food';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menu: Food[];

  constructor() {
    this.menu = new Array<Food>();
    this.menu.push(new Food("Cheeseburger", 200));
    this.menu.push(new Food("French fries", 150));
    this.menu.push(new Food("Fried ice cream", 120));
  }

  getMenu(): Food[] {
    return this.menu;
  }

  addFood(food: Food){
    this.menu.push(food)
  }
}

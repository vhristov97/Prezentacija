import { Component, OnInit } from '@angular/core';
import { Food } from '../enitities/food/food';
import { MenuService } from '../services/menu/menu.service';

@Component({
  selector: 'app-menu-display',
  templateUrl: './menu-display.component.html',
  styleUrls: ['./menu-display.component.css']
})
export class MenuDisplayComponent implements OnInit {
  menu: Food[];
  status: string;

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.status = "Up to date";
    this.menu = this.menuService.getMenu();
  }

  raisePrice(food: Food){
    food.raisePrice();
  }

  lowerPrice(food: Food){
    food.lowerPrice();
  }

  changeStatus(){
    setTimeout(() => {
      if(this.status === "Up to date")
        this.status = "Needs to be updated";
      else
        this.status = "Up to date";
    }, 1000)
  }
}

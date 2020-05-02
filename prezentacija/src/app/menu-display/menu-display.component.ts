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

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menu = this.menuService.getMenu();
  }
}

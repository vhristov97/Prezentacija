import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Food } from '../enitities/food/food';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {

  @Input() food: Food;
  @Output() selected = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {

  }

  onClick(){
    this.selected.emit(this.food.price);
  }

}

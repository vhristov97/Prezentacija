import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodItemComponent } from './food-item.component';
import { Component } from '@angular/core';
import { Food } from '../enitities/food/food';

@Component({
  template: `
    <app-food-item
      [food]="selectedFood" (selected)="onSelected($event)">
    </app-food-item>`
})
class TestHostComponent {
  selectedFood: Food = new Food("hrana", 10);
  selectedPrice: number;

  onSelected(price: number){
    this.selectedPrice = price;
  }
}

describe('FoodItemComponent', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodItemComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(testHost).toBeTruthy();
  });

  it('should have <h1> with "hrana"', () => {
    const h1 = fixture.nativeElement.querySelector("h1");

    expect(h1.textContent).toBe("hrana");
  });

  it('should return 10 as output', () => {
    fixture.nativeElement.querySelector("button").click();

    expect(testHost.selectedPrice).toBe(testHost.selectedFood.price);//
  });
});

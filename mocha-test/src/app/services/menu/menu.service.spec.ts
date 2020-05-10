import { TestBed } from '@angular/core/testing';

import { MenuService } from './menu.service';
import { Food } from 'src/app/entities/food/food';

describe('MenuService', () => {
  let service: MenuService;
  const assert = require('chai').assert;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuService);
  });

  it('should be created', () => {
    //expect(service).toBeTruthy();
    assert.exists(service);
  });

  it('should have 3 items on menu', () => {
    //expect(service.menu.length).toBe(3);
    assert.strictEqual(service.menu.length, 3);
  })

  it('should add pizza to the menu', () => {
    const pizza = new Food("Pizza", 250);
    service.addFood(pizza);
    
    //expect(service.menu).toContain(pizza);
    //expect(service.menu.length).toBe(4);
    assert.include(service.menu, pizza);
    assert.strictEqual(service.menu.length, 4);
  })//
});

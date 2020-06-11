import { Food } from './food';

describe('Food', () => {
  const assert = require('chai').assert;
  let food : Food;
  
  beforeEach(() =>{
    food = new Food("foodItem", 0);
  })

  it('should create an instance', () => {
    //expect(food).toBeTruthy();
    assert.isOk(food);
  });
  
  it('should have foodItem as name and 0 as price', () => {
    //expect(food.name).toBe("foodItem");
    //expect(food.price).toBe(0);
    assert.strictEqual(food.name, "foodItem");
    assert.strictEqual(food.price, 0);//
  })

  it('should have a raised price', () => {
    food.raisePrice();

    //expect(food.price).toBeGreaterThan(0);
    assert.isAbove(food.price, 0)
  })

  it('should have a lowered price', () => {
    food.lowerPrice();

    //expect(food.price).toBeLessThan(0);
    assert.isBelow(food.price, 0);//
  })
});

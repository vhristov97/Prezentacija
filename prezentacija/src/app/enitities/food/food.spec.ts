import { Food } from './food';

xdescribe('Food', () => {
  let food : Food;
  
  beforeEach(() =>{
    food = new Food("foodItem", 0);
  })

  it('should create an instance', () => {
    expect(food).toBeTruthy();
  });
  
  it('should have foodItem as name and 0 as price', () => {
    expect(food.name).toBe("foodItem");
    expect(food.price).toBe(0);
  })

  it('should have a raised price', () => {
    food.raisePrice();

    expect(food.price).toBeGreaterThan(0);
    //expect(food.price).not.toBe(0);
  })

  it('should have a lowered price', () => {
    food.lowerPrice();

    expect(food.price).toBeLessThan(0);
    //expect(food.price).not.toBe(0);
  })
});

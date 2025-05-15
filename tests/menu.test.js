import Menu from '../src/models/Menu.js';
import Dish from '../src/models/Dish.js';

describe('Menu', () => {
  test('додає страву до меню', () => {
    const menu = new Menu();
    const dish = new Dish("Піца", 150);
    menu.addDish(dish);
    expect(menu.containsDish(dish)).toBe(true);
  });

  test('повертає всі страви', () => {
    const menu = new Menu();
    const dish1 = new Dish("Бургер", 100);
    const dish2 = new Dish("Салат", 80);
    menu.addDish(dish1);
    menu.addDish(dish2);
    expect(menu.getAllDishes()).toEqual([dish1, dish2]);
  });
});

const Menu = require('../src/models/Menu');
const Dish = require('../src/models/Dish');

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
  const allDishes = menu.getAllDishes();
  expect(allDishes).toContain(dish1);
  expect(allDishes).toContain(dish2);
});

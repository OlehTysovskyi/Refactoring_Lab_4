import Order from '../src/models/Order.js';
import Client from '../src/models/Client.js';
import Dish from '../src/models/Dish.js';

describe('Order', () => {
  test('Додавання страви до замовлення', () => {
    const client = new Client("Іван");
    const order = new Order(client);
    const dish = new Dish('Піца', 150);

    order.addDish(dish);

    expect(order.dishes).toContain(dish);
  });

  test('Підрахунок загальної вартості замовлення', () => {
    const client = new Client("Марія");
    const order = new Order(client);

    order.addDish(new Dish('Піца', 150));
    order.addDish(new Dish('Салат', 50));

    expect(order.getTotalPrice()).toBe(200);
  });
});
